import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// ---------------------------------------------------------------------------
// 1. SECURITY & MIDDLEWARE
// ---------------------------------------------------------------------------
app.use(helmet());

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        callback(null, true);
      } else {
        callback(new Error('Blocked by CORS policy'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Payload size limit to prevent memory exhaustion attacks
app.use(express.json({ limit: '15kb' }));

// ---------------------------------------------------------------------------
// 2. RATE LIMITING & SPAM PROTECTION
// ---------------------------------------------------------------------------
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact requests per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests. Please wait a few minutes before submitting another enquiry, or email directly.'
  }
});

// Helper to escape HTML characters in email bodies to prevent HTML injection
const escapeHtml = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Mask email for privacy-safe logging (e.g. j***e@example.com)
const maskEmail = (email) => {
  if (!email || !email.includes('@')) return 'anonymous';
  const [local, domain] = email.split('@');
  if (local.length <= 2) return `${local[0]}***@${domain}`;
  return `${local[0]}***${local[local.length - 1]}@${domain}`;
};

// ---------------------------------------------------------------------------
// 3. SCHEMA VALIDATION (Zod)
// ---------------------------------------------------------------------------
const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long'),
  projectType: z
    .string()
    .trim()
    .max(120)
    .optional()
    .default('Custom Web Application'),
  budget: z
    .string()
    .trim()
    .max(80)
    .optional()
    .default('Not specified'),
  timeline: z
    .string()
    .trim()
    .max(80)
    .optional()
    .default('Flexible'),
  description: z
    .string({ required_error: 'Project description is required' })
    .trim()
    .min(20, 'Please provide at least 20 characters so I can understand your requirements')
    .max(5000, 'Project description must be under 5000 characters'),
  // Honeypot field (must be empty; filled by spam bots)
  _hp_company: z.string().optional()
});

// ---------------------------------------------------------------------------
// 4. EMAIL DISPATCH SERVICE
// ---------------------------------------------------------------------------
const isSmtpConfigured = Boolean(
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS
);

let transporter = null;
if (isSmtpConfigured) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

const sendEnquiryEmail = async ({ name, email, projectType, budget, timeline, description }) => {
  const recipientEmail = process.env.CONTACT_TO_EMAIL || 'hello@pardeep-shyoran.me';
  const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@shyoran.systems';

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeBudget = escapeHtml(budget);
  const safeTimeline = escapeHtml(timeline);
  const safeDescription = escapeHtml(description).replace(/\n/g, '<br />');

  const subject = `[New Project Enquiry] ${name} — ${projectType}`;

  const textBody = `New Project Enquiry for Shyoran Systems
==================================================
Client Name:  ${name}
Client Email: ${email}
Project Type: ${projectType}
Budget:       ${budget}
Timeline:     ${timeline}

Project Description:
${description}
==================================================
Timestamp: ${new Date().toISOString()}`;

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #0A0D14; border-radius: 8px; background: #FAF9F5;">
      <h2 style="margin-top: 0; color: #0A0D14; border-bottom: 2px solid #0A0D14; padding-bottom: 12px;">New Project Enquiry — Shyoran Systems</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #525866;">Client Name:</td>
          <td style="padding: 8px 0; color: #0A0D14;"><strong>${safeName}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #525866;">Client Email:</td>
          <td style="padding: 8px 0; color: #0038FF;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #525866;">Project Type:</td>
          <td style="padding: 8px 0; color: #0A0D14;">${safeProjectType}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #525866;">Budget Bracket:</td>
          <td style="padding: 8px 0; color: #0A0D14;">${safeBudget}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #525866;">Target Timeline:</td>
          <td style="padding: 8px 0; color: #0A0D14;">${safeTimeline}</td>
        </tr>
      </table>

      <div style="background: #FFFFFF; border: 1.5px solid #0A0D14; border-radius: 6px; padding: 16px; margin-top: 16px;">
        <h4 style="margin: 0 0 10px 0; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; color: #525866;">Project Requirements &amp; Description:</h4>
        <div style="font-size: 14px; line-height: 1.6; color: #0A0D14;">
          ${safeDescription}
        </div>
      </div>
      
      <p style="margin-top: 24px; font-size: 11px; color: #7A8291; border-top: 1px dashed #E2DFD5; padding-top: 12px;">
        Dispatched via Shyoran Systems Contact Gateway · ${new Date().toUTCString()}
      </p>
    </div>
  `;

  if (isSmtpConfigured && transporter) {
    return await transporter.sendMail({
      from: `"${name}" <${senderEmail}>`,
      replyTo: email,
      to: recipientEmail,
      subject,
      text: textBody,
      html: htmlBody
    });
  }

  // Development / Test Simulation mode when SMTP is not yet configured in .env
  console.log(`[EMAIL DISPATCH SIMULATION] Form submitted successfully.`);
  console.log(`  To: ${recipientEmail}`);
  console.log(`  From: ${maskEmail(email)}`);
  console.log(`  Subject: ${subject}`);
  console.log(`  Note: Configure SMTP_* credentials in Backend/.env for live delivery.`);
  return { simulated: true, messageId: `sim_${Date.now()}` };
};

// ---------------------------------------------------------------------------
// 5. API ROUTES
// ---------------------------------------------------------------------------

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    emailProvider: isSmtpConfigured ? 'smtp_configured' : 'simulation_mode'
  });
});

// Contact enquiry submission endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    // 1. Honeypot spam detection
    if (req.body._hp_company && req.body._hp_company.trim().length > 0) {
      // Silently discard spam bot submission without revealing detection
      return res.status(200).json({
        success: true,
        message: 'Your enquiry has been received.'
      });
    }

    // 2. Validate input schema
    const parseResult = contactSchema.safeParse(req.body);
    if (!parseResult.success) {
      const fieldErrors = {};
      const issues = parseResult.error.issues || parseResult.error.errors || [];
      issues.forEach((err) => {
        const fieldName = err.path[0] || 'form';
        fieldErrors[fieldName] = err.message;
      });
      return res.status(400).json({
        success: false,
        error: 'Validation failed. Please check the form fields.',
        fieldErrors
      });
    }

    const validData = parseResult.data;

    // 3. Dispatch email
    const deliveryResult = await sendEnquiryEmail(validData);

    // Safe metadata logging (no sensitive content logged)
    console.log(
      `[Contact Enquiry]: Delivered successfully from ${maskEmail(validData.email)} at ${new Date().toISOString()}`
    );

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! Your project enquiry has been received.',
      deliveryStatus: deliveryResult.simulated ? 'simulation' : 'delivered'
    });
  } catch (error) {
    console.error('[Contact Error]: Submission processing failed:', error.message);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while sending your enquiry. Please try again or email directly.'
    });
  }
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('[Server Error]:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Shyoran Systems Backend running on http://localhost:${PORT}`);
  console.log(`Email mode: ${isSmtpConfigured ? 'Live SMTP' : 'Test Simulation (Configure Backend/.env for live SMTP)'}`);
});
