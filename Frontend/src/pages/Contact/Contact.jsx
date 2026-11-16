import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SEO from '../../components/SEO/SEO';
import { 
  BoltIcon, 
  CheckIcon, 
  CrossIcon, 
  PenIcon, 
  LockIcon, 
  ShieldIcon,
  ArrowRightIcon 
} from '../../components/Icons/Icons';
import { submitContactEnquiry } from '../../api/contactApi';
import styles from './Contact.module.css';

const SCOPE_OPTIONS = [
  'Custom Web Applications',
  'SaaS Product Development',
  'AI Integration & Automation',
  'API & Backend Architecture',
  'Mobile & Responsive PWAs',
  'Maintenance & Code Audits'
];

const BUDGET_OPTIONS = [
  '< $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
  'Flexible / Undecided'
];

const TIMELINE_OPTIONS = [
  'Flexible / Exploring',
  '< 1 Month (Fast Track)',
  '1 - 2 Months',
  '2 - 3 Months'
];

// Helper to normalize scope queries from URL (supports legacy and new slugs)
const normalizeScope = (query) => {
  if (!query) return 'Custom Web Applications';
  const qLower = query.toLowerCase();
  if (qLower.includes('full-stack') || qLower.includes('mern') || qLower.includes('web app') || qLower.includes('custom web')) {
    return 'Custom Web Applications';
  }
  if (qLower.includes('saas')) {
    return 'SaaS Product Development';
  }
  if (qLower.includes('ai') || qLower.includes('llm') || qLower.includes('vector') || qLower.includes('automation')) {
    return 'AI Integration & Automation';
  }
  if (qLower.includes('api') || qLower.includes('backend') || qLower.includes('cloud') || qLower.includes('real-time') || qLower.includes('socket')) {
    return 'API & Backend Architecture';
  }
  if (qLower.includes('mobile') || qLower.includes('pwa')) {
    return 'Mobile & Responsive PWAs';
  }
  if (qLower.includes('audit') || qLower.includes('maintenance') || qLower.includes('code review')) {
    return 'Maintenance & Code Audits';
  }
  return SCOPE_OPTIONS.find(opt => opt.toLowerCase() === qLower) || 'Custom Web Applications';
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const urlScope = searchParams.get('scope');
  const urlBudget = searchParams.get('budget');

  const [selectedScope, setSelectedScope] = useState(() => {
    return urlScope ? normalizeScope(urlScope) : 'Custom Web Applications';
  });

  const [selectedBudget, setSelectedBudget] = useState(() => {
    if (urlBudget) {
      const match = BUDGET_OPTIONS.find(b => b.includes(urlBudget.replace('$', '')));
      if (match) return match;
    }
    return '$5,000 - $10,000';
  });

  const [selectedTimeline, setSelectedTimeline] = useState('Flexible / Exploring');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [serverFieldErrors, setServerFieldErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      description: '',
      _hp_company: ''
    }
  });

  const descriptionValue = watch('description', '');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@pardeep-shyoran.me');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setSubmitError('');
    setServerFieldErrors({});

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      projectType: selectedScope,
      budget: selectedBudget,
      timeline: selectedTimeline,
      description: formData.description.trim(),
      _hp_company: formData._hp_company || ''
    };

    const response = await submitContactEnquiry(payload);
    setIsSubmitting(false);

    if (response.success) {
      setSubmittedData(payload);
      setIsSuccess(true);
    } else {
      setSubmitError(response.error || 'Failed to submit enquiry. Please try again.');
      if (response.fieldErrors) {
        setServerFieldErrors(response.fieldErrors);
      }
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    setSubmitError('');
    setServerFieldErrors({});
    reset();
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Tell Me About Your Project — Shyoran Systems',
    description:
      'Discuss your upcoming web application, SaaS product, or AI system directly with lead engineer Pardeep Shyoran. Clear scoping, honest feasibility, and zero agency middlemen.',
    url: 'https://shyoran.systems/contact',
    isPartOf: {
      '@id': 'https://shyoran.systems/#website'
    }
  };

  return (
    <>
      <SEO
        title="Tell Me About Your Project — Shyoran Systems"
        description="Discuss your upcoming web application, SaaS product, or AI system directly with lead engineer Pardeep Shyoran. Clear scoping, honest feasibility, and zero agency middlemen."
        canonicalUrl="https://shyoran.systems/contact"
        schema={contactSchema}
      />

      <div className={styles.contactMain}>
        {/* ==================================================================
            1. HERO SECTION
            ================================================================== */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.heroBadgeRow}>
              <div className="badge-pill badge-yellow">
                <BoltIcon size={12} />
                <span>DIRECT ENGINEER LINE // PROJECT INQUIRY</span>
              </div>
              <span className="sticker-hand">
                <span>Personal review by Pardeep Shyoran</span>
                <PenIcon size={12} />
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              TELL ME ABOUT <span className="highlight-yellow">YOUR PROJECT.</span>
            </h1>

            <p className={styles.heroLead}>
              Whether you need an MVP built from scratch, a high-throughput MERN application, or an AI vector 
              integration, you will collaborate directly with me. <strong>No sales reps, no junior handoffs, 
              and zero bureaucratic runaround.</strong>
            </p>
          </div>
        </section>

        {/* ==================================================================
            2. SPLIT LAYOUT: GUIDANCE & DIRECT CONTACT + PROJECT FORM
            ================================================================== */}
        <section className={styles.splitSection}>
          <div className="wrap">
            <div className={styles.splitGrid}>

              {/* LEFT COLUMN: WHAT TO SHARE & DIRECT EMAIL */}
              <div className={styles.infoCol}>

                {/* Card 1: What information is useful */}
                <div className={styles.infoCard}>
                  <span className={styles.cardTag}>// PREPARING YOUR SCOPE</span>
                  <h2 className={styles.cardTitle}>What Information Is Helpful?</h2>
                  <p className={styles.cardDesc}>
                    You don't need a formal 30-page requirements document. To help me provide a concrete 
                    technical evaluation, sharing any of the following is helpful:
                  </p>

                  <ul className={styles.checkList}>
                    <li className={styles.checkListItem}>
                      <span className={styles.checkIconWrapper}><CheckIcon size={13} /></span>
                      <span><strong>Product Goal:</strong> What core problem does your product solve and who will use it?</span>
                    </li>
                    <li className={styles.checkListItem}>
                      <span className={styles.checkIconWrapper}><CheckIcon size={13} /></span>
                      <span><strong>Technical Context:</strong> Any preferred tech stack, existing databases, or third-party APIs (Stripe, OpenAI, etc.)?</span>
                    </li>
                    <li className={styles.checkListItem}>
                      <span className={styles.checkIconWrapper}><CheckIcon size={13} /></span>
                      <span><strong>Design State:</strong> Do you have existing Figma wireframes, or will we architect the UI from scratch?</span>
                    </li>
                    <li className={styles.checkListItem}>
                      <span className={styles.checkIconWrapper}><CheckIcon size={13} /></span>
                      <span><strong>Target Timeline:</strong> Do you have a hard launch date or an upcoming milestone?</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2: Direct Email Fallback */}
                <div className={styles.infoCard}>
                  <span className={styles.cardTag}>// DIRECT FOUNDER INBOX</span>
                  <h2 className={styles.cardTitle}>Prefer Direct Email?</h2>
                  <p className={styles.cardDesc}>
                    If you have existing architectural specifications, RFPs, or design files, you can email me directly:
                  </p>

                  <div className={styles.emailActionRow}>
                    <div className={styles.emailDisplay} title="Founder Email Address">
                      hello@pardeep-shyoran.me
                    </div>
                    <button 
                      type="button"
                      className={styles.copyEmailBtn} 
                      onClick={handleCopyEmail}
                      aria-live="polite"
                    >
                      {copiedEmail ? '✓ COPIED!' : 'COPY EMAIL'}
                    </button>
                  </div>

                  <div className={styles.timezoneNote}>
                    Studio in Sirsa, Haryana 125103, India · Base Timezone: IST (UTC+5:30) · Remote Worldwide
                  </div>
                </div>

                {/* Card 3: What happens next (Realistic expectation) */}
                <div className={styles.infoCard}>
                  <span className={styles.cardTag}>// WHAT HAPPENS NEXT</span>
                  <h2 className={styles.cardTitle}>What To Expect</h2>
                  <ul className={styles.checkList}>
                    <li className={styles.checkListItem}>
                      <span className={styles.checkIconWrapper}><CheckIcon size={13} /></span>
                      <span><strong>Personal Review:</strong> I personally review your project requirements and technical constraints.</span>
                    </li>
                    <li className={styles.checkListItem}>
                      <span className={styles.checkIconWrapper}><CheckIcon size={13} /></span>
                      <span><strong>Honest Assessment:</strong> I reply with clarifying questions or a preliminary feasibility breakdown.</span>
                    </li>
                    <li className={styles.checkListItem}>
                      <span className={styles.checkIconWrapper}><CheckIcon size={13} /></span>
                      <span><strong>Discovery Call:</strong> If there is a mutual fit, we schedule a focused 20-minute call to align on scope and delivery dates.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* RIGHT COLUMN: PROJECT ENQUIRY FORM */}
              <div className={styles.formCard}>

                {isSuccess && submittedData ? (
                  /* SUCCESS STATE */
                  <div className={styles.successCard} role="status" aria-live="polite">
                    <div className={styles.successHeader}>
                      <div className={styles.successBadge}>
                        <CheckIcon size={20} />
                      </div>
                      <div>
                        <h2 className={styles.successTitle}>Enquiry Received</h2>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#059669', fontWeight: 700 }}>
                          CONFIRMED BY SERVER
                        </span>
                      </div>
                    </div>

                    <p className={styles.successLead}>
                      Thank you, <strong>{submittedData.name}</strong>. Your project details have been recorded. 
                      I will review your requirements and reply directly to <strong>{submittedData.email}</strong>.
                    </p>

                    <div className={styles.summaryBox}>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>Client:</span>
                        <span className={styles.summaryVal}>{submittedData.name}</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>Email:</span>
                        <span className={styles.summaryVal}>{submittedData.email}</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>Project Type:</span>
                        <span className={styles.summaryVal}>{submittedData.projectType}</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>Budget Bracket:</span>
                        <span className={styles.summaryVal}>{submittedData.budget}</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>Target Timeline:</span>
                        <span className={styles.summaryVal}>{submittedData.timeline}</span>
                      </div>
                    </div>

                    <div className={styles.nextStepsBox}>
                      <div className={styles.nextStepsTitle}>Next Steps:</div>
                      <ol className={styles.nextStepsList}>
                        <li>I will examine your requirements, technical feasibility, and architectural needs.</li>
                        <li>You will receive a direct reply with questions or initial technical recommendations.</li>
                        <li>If aligned, we will schedule a brief technical alignment call.</li>
                      </ol>
                    </div>

                    <button 
                      type="button" 
                      onClick={handleReset}
                      className={`btn-brutal btn-brutal-outline ${styles.resetBtn}`}
                    >
                      <span>SUBMIT ANOTHER ENQUIRY</span>
                    </button>
                  </div>
                ) : (
                  /* THE ENQUIRY FORM */
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className={styles.formHeader}>
                      <div className="badge-pill badge-white" style={{ marginBottom: '8px' }}>
                        <span>// PROJECT INQUIRY FORM</span>
                      </div>
                      <h2 className={styles.formTitle}>Project Details</h2>
                      <p className={styles.formSubtitle}>
                        Fill in the details below. All technical and business information is kept strictly confidential.
                      </p>
                    </div>

                    {/* General Error Banner */}
                    {submitError && (
                      <div className={styles.alertError} role="alert" aria-live="assertive">
                        <CrossIcon size={16} />
                        <div>
                          <strong>Submission Error</strong>
                          <span>{submitError}</span>
                        </div>
                      </div>
                    )}

                    {/* Honeypot field for anti-spam (invisible to users & screen readers) */}
                    <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                      <label htmlFor="_hp_company">Leave this field blank</label>
                      <input
                        id="_hp_company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register('_hp_company')}
                      />
                    </div>

                    {/* 1. Name & 2. Email Fields */}
                    <div className={styles.inputGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">
                          Your Name <span className={styles.labelRequired}>*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          aria-required="true"
                          aria-invalid={Boolean(errors.name || serverFieldErrors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={`${styles.inputField} ${errors.name || serverFieldErrors.name ? styles.inputError : ''}`}
                          placeholder="e.g. Alex Vance"
                          disabled={isSubmitting}
                          {...register('name', { 
                            required: 'Please enter your name',
                            minLength: { value: 2, message: 'Name must be at least 2 characters' }
                          })}
                        />
                        {(errors.name || serverFieldErrors.name) && (
                          <span id="name-error" className={styles.errorText} role="alert">
                            {errors.name?.message || serverFieldErrors.name}
                          </span>
                        )}
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">
                          Work Email <span className={styles.labelRequired}>*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          aria-required="true"
                          aria-invalid={Boolean(errors.email || serverFieldErrors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`${styles.inputField} ${errors.email || serverFieldErrors.email ? styles.inputError : ''}`}
                          placeholder="alex@company.com"
                          disabled={isSubmitting}
                          {...register('email', { 
                            required: 'Please enter your email address',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email address'
                            }
                          })}
                        />
                        {(errors.email || serverFieldErrors.email) && (
                          <span id="email-error" className={styles.errorText} role="alert">
                            {errors.email?.message || serverFieldErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 3. Project Type (Selectable Pill Group) */}
                    <div className={styles.formSection}>
                      <label className={styles.label} id="scope-label">
                        Project Type <span className={styles.labelOptional}>(optional)</span>
                      </label>
                      <div className={styles.pillGroup} role="radiogroup" aria-labelledby="scope-label">
                        {SCOPE_OPTIONS.map(scope => {
                          const isSelected = selectedScope === scope;
                          return (
                            <button
                              key={scope}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              className={`${styles.pillOption} ${isSelected ? styles.pillOptionSelected : ''}`}
                              onClick={() => setSelectedScope(scope)}
                              disabled={isSubmitting}
                            >
                              {isSelected ? '✓ ' : '+ '}
                              {scope}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 4. Target Budget Bracket (Selectable Pill Group) */}
                    <div className={styles.formSection}>
                      <label className={styles.label} id="budget-label">
                        Budget Range <span className={styles.labelOptional}>(optional)</span>
                      </label>
                      <div className={styles.pillGroup} role="radiogroup" aria-labelledby="budget-label">
                        {BUDGET_OPTIONS.map(budget => {
                          const isSelected = selectedBudget === budget;
                          return (
                            <button
                              key={budget}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              className={`${styles.pillOption} ${isSelected ? styles.pillOptionSelected : ''}`}
                              onClick={() => setSelectedBudget(budget)}
                              disabled={isSubmitting}
                            >
                              {isSelected ? '● ' : '○ '}
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 5. Target Timeline */}
                    <div className={styles.formSection}>
                      <label className={styles.label} id="timeline-label">
                        Target Timeline <span className={styles.labelOptional}>(optional)</span>
                      </label>
                      <div className={styles.pillGroup} role="radiogroup" aria-labelledby="timeline-label">
                        {TIMELINE_OPTIONS.map(time => {
                          const isSelected = selectedTimeline === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              className={`${styles.pillOption} ${isSelected ? styles.pillOptionSelected : ''}`}
                              onClick={() => setSelectedTimeline(time)}
                              disabled={isSubmitting}
                            >
                              {isSelected ? '● ' : '○ '}
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 6. Project Description (Required, min 20 chars) */}
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="description">
                        Project Description &amp; Requirements <span className={styles.labelRequired}>*</span>
                      </label>
                      <textarea
                        id="description"
                        aria-required="true"
                        aria-invalid={Boolean(errors.description || serverFieldErrors.description)}
                        aria-describedby={errors.description ? 'desc-error' : 'desc-help'}
                        className={`${styles.textareaField} ${errors.description || serverFieldErrors.description ? styles.inputError : ''}`}
                        placeholder="What are you building? Please describe the product's main goal, key features, target audience, and any technical constraints or preferred integrations."
                        disabled={isSubmitting}
                        {...register('description', { 
                          required: 'Please provide a project description',
                          minLength: { value: 20, message: 'Please provide at least 20 characters so I can understand your requirements' }
                        })}
                      />
                      <div className={styles.fieldFooter}>
                        {(errors.description || serverFieldErrors.description) ? (
                          <span id="desc-error" className={styles.errorText} role="alert">
                            {errors.description?.message || serverFieldErrors.description}
                          </span>
                        ) : (
                          <span id="desc-help" style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>
                            Minimum 20 characters
                          </span>
                        )}
                        <span className={styles.charCount}>
                          {descriptionValue.length} characters
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-brutal btn-brutal-primary ${styles.submitBtn}`}
                    >
                      {isSubmitting ? (
                        <span>SENDING ENQUIRY...</span>
                      ) : (
                        <>
                          <span>SUBMIT PROJECT ENQUIRY</span>
                          <BoltIcon size={14} />
                        </>
                      )}
                    </button>

                    <div className={styles.submitNote}>
                      🔒 Your contact information and project specs are kept strictly confidential under our{' '}
                      <Link to="/privacy" style={{ color: 'var(--accent-blue)', textDecoration: 'underline', fontWeight: 600 }}>
                        Privacy Policy
                      </Link>
                      . Zero sales pressure.
                    </div>
                  </form>
                )}

              </div>

            </div>
          </div>
        </section>

        {/* ==================================================================
            3. MINI TRANSPARENCY FAQ
            ================================================================== */}
        <section className={styles.faqSection} style={{ padding: '60px 0', background: '#FFFFFF', borderBottom: '2px solid var(--border-main)' }}>
          <div className="wrap">
            <div style={{ marginBottom: '32px' }}>
              <div className="badge-pill badge-yellow" style={{ marginBottom: '10px' }}>
                <span>// TRANSPARENCY FAQ</span>
              </div>
              <h2 className="display-title" style={{ fontSize: 'clamp(28px, 3.6vw, 48px)' }}>
                FREQUENTLY ASKED <span className="highlight-yellow">QUESTIONS</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--bg-canvas)', border: '2px solid var(--border-main)', borderRadius: '12px', padding: '22px', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '8px' }}>Do you sign mutual NDAs?</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Yes. Before diving into proprietary blueprints or confidential IP, we can execute a standard mutual non-disclosure agreement.
                </p>
              </div>

              <div style={{ background: 'var(--bg-canvas)', border: '2px solid var(--border-main)', borderRadius: '12px', padding: '22px', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '8px' }}>What if I don't have detailed specs yet?</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  That is completely normal. Part of my engineering process is helping founders define user stories, data models, and API boundaries during technical scoping.
                </p>
              </div>

              <div style={{ background: 'var(--bg-canvas)', border: '2px solid var(--border-main)', borderRadius: '12px', padding: '22px', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '8px' }}>How are project milestones billed?</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Projects are scoped on fixed-price milestones tied to verifiable deliverables, so you never face unexpected billing surprises or open-ended hourly fees.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
