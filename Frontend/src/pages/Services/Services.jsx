import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
  BoltIcon,
  StarIcon,
  PinIcon,
  ToolIcon,
  SpeedPillarIcon,
  MernPillarIcon,
  AiPillarIcon
} from '../../components/Icons/Icons';
import styles from './Services.module.css';

const SERVICES_DATA = [
  {
    id: 'fullstack',
    index: '01',
    badge: 'MERN CORE',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    title: 'Full-Stack Web App Development',
    category: 'MERN Architecture · High Velocity',
    description:
      'End-to-end web engineering specialized in the MERN stack (MongoDB, Express, React 19, Node.js). We build responsive, robust, and clean architectures crafted for real users and rapid scaling.',
    deliverables: [
      'Modern React 19 single-page apps with optimistic UI state and sub-second renders',
      'RESTful & GraphQL APIs with Express and Node.js with strict validation',
      'Scalable MongoDB Atlas document modeling with compound indexing',
      'JWT/OAuth2 secure authentication and role-based access control (RBAC)',
      '100% production Dockerization with automated CI/CD deployment pipelines'
    ],
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB Atlas', 'Vite', 'TypeScript', 'Tailwind/CSS Modules'],
    scopeQuery: 'Full-Stack MERN App',
    specCode: `// Architecture Spec: MERN Core Web Platform
{
  "runtime": "Node.js (LTS) / Express Gateway",
  "client": "React 19 + Vite (Zero Bloat)",
  "database": "MongoDB Atlas Multi-Region Cluster",
  "auth": "Stateless JWT + HttpOnly Cookies + OAuth2",
  "caching": "Redis Cache Layer for Query Speeds < 15ms",
  "testing": "End-to-End Vitest + Playwright Integration",
  "deploy": "Docker Container on AWS ECS with Auto-Scale"
}`,
    timeline: '2 - 4 Weeks',
    throughput: 'Sub-30ms API Latency'
  },
  {
    id: 'ai-llm',
    index: '02',
    badge: 'AI NATIVE',
    badgeBg: '#0038FF',
    badgeColor: '#FFFFFF',
    title: 'AI & LLM Integration',
    category: 'Generative AI · Autonomous Agents',
    description:
      'We inject modern intelligence into your applications. From production RAG pipelines over proprietary enterprise knowledge to autonomous agent workflows and contextual customer chatbots.',
    deliverables: [
      'Context-augmented RAG systems using vector databases (Pinecone, Atlas Vector)',
      'Streaming conversational chatbots with low-latency Server-Sent Events (SSE)',
      'Autonomous tool-calling agents that interact with APIs, databases, and cron tasks',
      'Structured schema generation with OpenAI, Anthropic Claude, and Gemini SDKs',
      'Token governance, prompt evaluation benchmarks, and rate-limiting protections'
    ],
    tech: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'Atlas Vector', 'Pinecone', 'Python/FastAPI', 'SSE'],
    scopeQuery: 'AI / LLM Integration & Chatbots',
    specCode: `// AI Pipeline: Contextual RAG & Agentic Execution
import { Claude35Sonnet, OpenAIEmbeddings } from "@shyoran/ai";
import { vectorSearch } from "./atlas-vector";

export async function processUserQuery({ query, userContext }) {
  // 1. Generate query embedding vector
  const embedding = await OpenAIEmbeddings.embed(query);
  
  // 2. Hybrid search over customer data
  const contextDocs = await vectorSearch(embedding, { limit: 5 });
  
  // 3. Synthesize streaming response with tool capabilities
  return Claude35Sonnet.stream({
    systemPrompt: "You are an autonomous Shyoran Systems enterprise assistant.",
    context: contextDocs,
    tools: [triggerWebhook, updateDatabaseRecord]
  });
}`,
    timeline: '1 - 3 Weeks',
    throughput: 'Real-time Streaming'
  },
  {
    id: 'ecommerce',
    index: '03',
    badge: 'MONETIZATION',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    title: 'E-Commerce Platforms & Payments',
    category: 'Stripe · Razorpay · Secure Checkout',
    description:
      'Custom transactional platforms engineered for conversion and rock-solid financial integrity. We build complete storefronts, subscription engines, customer checkout, and comprehensive admin portals.',
    deliverables: [
      'Multi-currency payment gateway integrations (Stripe, Razorpay, Lemon Squeezy)',
      'Idempotent webhook reconciliation to prevent duplicate charges or missed orders',
      'Dynamic product catalogs, inventory tracking, and discount rule engines',
      'Comprehensive admin dashboards for sales metrics, refunds, and shipping status',
      'Encrypted customer accounts, order history tracking, and automated invoice delivery'
    ],
    tech: ['Stripe API', 'Razorpay', 'MongoDB', 'Express', 'React 19', 'Webhooks', 'Tailwind'],
    scopeQuery: 'E-Commerce & Payment Systems',
    specCode: `// E-Commerce Payment Orchestration
import Stripe from "stripe";
import { OrderModel } from "../models/Order";

export async function handleStripeWebhook(event) {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      
      // Atomic order fulfillment & invoice generation
      await OrderModel.findByIdAndUpdate(session.client_reference_id, {
        status: "PAID",
        paymentIntentId: session.payment_intent,
        paidAt: new Date()
      });
      
      // Dispatch background confirmation email & webhook
      await queueNotification({ orderId: session.client_reference_id });
      break;
    }
  }
}`,
    timeline: '3 - 5 Weeks',
    throughput: '99.99% Transaction SLA'
  },
  {
    id: 'realtime',
    index: '04',
    badge: 'REAL-TIME',
    badgeBg: '#000000',
    badgeColor: '#FFFFFF',
    title: 'Real-Time Systems & Collaboration',
    category: 'WebSockets · State Sync · Live Rooms',
    description:
      'High-concurrency systems built for real-time collaboration, team messaging, collaborative workspaces, and live notifications. Zero lag, optimistic client updates, and persistent state.',
    deliverables: [
      'Bidirectional WebSocket and Socket.io architecture with automatic reconnection',
      'Multi-user collaborative rooms, live cursor tracking, and presence awareness',
      'Instant team chat, threaded messaging, and rich media attachments',
      'Real-time event broadcasting powered by Redis Pub/Sub backplanes',
      'Optimistic client-side caching with conflict resolution and state sync'
    ],
    tech: ['Socket.io', 'WebSockets', 'Redis Pub/Sub', 'Node.js', 'React 19', 'MongoDB Streams'],
    scopeQuery: 'Real-Time Collaboration & Messaging',
    specCode: `// Real-Time Socket.io & Redis Cluster Backplane
import { Server } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { pubClient, subClient } from "../config/redis";

export function initializeRealTimeServer(httpServer) {
  const io = new Server(httpServer, {
    cors: { origin: process.env.CLIENT_ORIGIN, credentials: true }
  });
  
  // Distributed Redis Adapter for infinite horizontal scaling
  io.adapter(createAdapter(pubClient, subClient));
  
  io.on("connection", (socket) => {
    socket.on("join-room", (roomId) => socket.join(roomId));
    socket.on("document-mutation", (payload) => {
      socket.to(payload.roomId).emit("document-updated", payload);
    });
  });
}`,
    timeline: '2 - 3 Weeks',
    throughput: '< 10ms Sync Latency'
  },
  {
    id: 'cloud-api',
    index: '05',
    badge: 'INFRASTRUCTURE',
    badgeBg: '#000000',
    badgeColor: '#FFFFFF',
    title: 'API Design, Cloud Deployment & Integrations',
    category: 'AWS Cloud · Docker · Microservices',
    description:
      'Production-grade cloud architecture and API design engineered to survive product launch traffic. We deploy containerized microservices to AWS, configure CDNs, and bridge third-party SaaS ecosystems.',
    deliverables: [
      'Clean, documented REST & GraphQL APIs with Swagger/OpenAPI documentation',
      'AWS Cloud hosting configured with ECS Fargate, S3 buckets, and CloudFront CDN',
      'Docker containerization with multi-stage builds for minimal image footprints',
      'Third-party integrations: CRMs, analytics, transactional email (Resend/SendGrid)',
      'Automated GitHub Actions CI/CD pipelines with zero-downtime rolling deploys'
    ],
    tech: ['AWS ECS', 'AWS S3', 'CloudFront', 'Docker', 'GitHub Actions', 'Nginx', 'Postman'],
    scopeQuery: 'API Design & Cloud Deployment (AWS)',
    specCode: `# AWS ECS Fargate Container Specification
version: "3.8"
services:
  shyoran-api:
    image: 123456789.dkr.ecr.ap-south-1.amazonaws.com/shyoran-api:latest
    ports:
      - "5000:5000"
    environment:
      NODE_ENV: production
      PORT: 5000
      AWS_REGION: ap-south-1
    deploy:
      replicas: 2
      update_config:
        order: start-first
      resources:
        limits:
          cpus: "1.0"
          memory: 2048M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/api/health"]
      interval: 15s
      timeout: 5s
      retries: 3`,
    timeline: '1 - 2 Weeks',
    throughput: 'Zero-Downtime Deploys'
  }
];

const Services = () => {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Engineering Services — Shyoran Systems | MERN Stack & AI Solutions</title>
        <meta
          name="description"
          content="Explore Shyoran Systems engineering services: MERN stack web applications, AI/LLM integrations, e-commerce platforms, real-time collaboration systems, and AWS cloud deployment."
        />
      </Helmet>

      <Header />

      <main className={styles.servicesMain}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.heroBadgeRow}>
              <div className="badge-pill" style={{ background: 'var(--accent-yellow)', color: 'var(--text-main)' }}>
                <span><BoltIcon size={12} /></span>
                <span>ENGINEERING CAPABILITIES // OFFICIAL CATALOG</span>
              </div>
              <span className={`${styles.handSticker} hand`}>
                MERN Architecture + Modern LLM Engineering
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              FULL-STACK SOFTWARE &amp; <br />
              <span className="highlight-yellow">AI-INTEGRATED WEB SOLUTIONS.</span>
            </h1>

            <p className={styles.heroLead}>
              Shyoran Systems is a software development studio building full-stack web applications and 
              AI-integrated products for startups, small businesses, and independent founders. 
              <strong> We specialize in the MERN stack</strong> — building everything from real-time 
              collaboration tools and e-commerce platforms to custom internal tools and AI-powered features.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/contact" className="btn-brutal btn-brutal-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>START YOUR BUILD</span>
                <BoltIcon size={14} />
              </Link>
              <a href="#services-list" className="btn-brutal btn-brutal-outline">
                EXPLORE 5 PILLARS ↓
              </a>
            </div>

            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.metaDot}></span>
                <span>100% Direct Senior Engineer</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <StarIcon size={12} /> Specialized MERN &amp; LLM Stack
                </span>
              </div>
              <div className={styles.heroMetaItem}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <BoltIcon size={12} /> 2-4 Week Typical MVP Delivery
                </span>
              </div>
              <div className={styles.heroMetaItem}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <PinIcon size={12} /> Sirsa, Haryana, India · Global Remote
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK STICKY ANCHOR NAV */}
        <div className={styles.serviceNavSection}>
          <div className="wrap">
            <div className={styles.serviceNavRow}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginRight: '6px' }}>
                JUMP TO:
              </span>
              <a href="#fullstack" className={styles.serviceNavBtn}>
                01. Full-Stack MERN
              </a>
              <a href="#ai-llm" className={styles.serviceNavBtn}>
                02. AI &amp; LLMs
              </a>
              <a href="#ecommerce" className={styles.serviceNavBtn}>
                03. E-Commerce
              </a>
              <a href="#realtime" className={styles.serviceNavBtn}>
                04. Real-Time Systems
              </a>
              <a href="#cloud-api" className={styles.serviceNavBtn}>
                05. Cloud &amp; AWS
              </a>
            </div>
          </div>
        </div>

        {/* DETAILED SERVICES CATALOG */}
        <section id="services-list" className={styles.servicesSection}>
          <div className="wrap">
            {SERVICES_DATA.map((srv) => (
              <div key={srv.id} id={srv.id} className={`${styles.serviceCard} reveal`}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIdentity}>
                    <span className={styles.serviceIndex}>{srv.index}</span>
                    <div className={styles.serviceTitleGroup}>
                      <h2>{srv.title}</h2>
                      <span className={styles.serviceCategoryBadge}>// {srv.category}</span>
                    </div>
                  </div>
                  <span
                    className={styles.serviceBadgePill}
                    style={{ background: srv.badgeBg, color: srv.badgeColor }}
                  >
                    {srv.badge}
                  </span>
                </div>

                <div className={styles.serviceBody}>
                  {/* Left Column: Overview, Deliverables, Tech */}
                  <div className={styles.serviceOverview}>
                    <div>
                      <p className={styles.serviceDescription}>{srv.description}</p>

                      <div className={styles.deliverablesBox}>
                        <div className={styles.boxTitle}>
                          <span><BoltIcon size={13} /></span>
                          <span>PRODUCTION DELIVERABLES</span>
                        </div>
                        <ul className={styles.deliverablesList}>
                          {srv.deliverables.map((item, idx) => (
                            <li key={idx} className={styles.deliverableItem}>
                              <span className={styles.checkIcon}>✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.boxTitle} style={{ marginTop: '20px' }}>
                        <span><ToolIcon size={13} /></span>
                        <span>PRIMARY TECH STACK</span>
                      </div>
                      <div className={styles.techPillsGroup}>
                        {srv.tech.map((t, tIdx) => (
                          <span key={tIdx} className={styles.techPill}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.serviceCtaRow}>
                      <Link
                        to={`/contact?scope=${encodeURIComponent(srv.scopeQuery)}`}
                        className="btn-brutal btn-brutal-primary"
                        style={{ padding: '10px 22px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      >
                        <span>SCOPE {srv.title.toUpperCase()}</span>
                        <BoltIcon size={13} />
                      </Link>
                      <a
                        href={`mailto:hello@pardeep-shyoran.me?subject=${encodeURIComponent(
                          `Inquiry regarding ${srv.title}`
                        )}`}
                        className="btn-brutal btn-brutal-outline"
                        style={{ padding: '10px 20px', fontSize: '14px' }}
                      >
                        DIRECT EMAIL ↗
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Code Blueprint Spec */}
                  <div className={styles.serviceSpecCol}>
                    <div className={styles.specBar}>
                      <div className={styles.specDots}>
                        <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                        <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                        <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                      </div>
                      <span className={styles.specTitle}>{srv.id}.blueprint.spec</span>
                    </div>

                    <div className={styles.specBody}>
                      <pre className={styles.specPre}>
                        <code>{srv.specCode}</code>
                      </pre>
                    </div>

                    <div className={styles.specMetrics}>
                      <span>
                        TIMELINE: <strong>{srv.timeline}</strong>
                      </span>
                      <span>
                        BENCHMARK: <strong>{srv.throughput}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY DIRECT SENIOR PRACTICE */}
        <section className={styles.whySection}>
          <div className="wrap">
            <div className={`${styles.sectionHeader} reveal`}>
              <div className="badge-pill" style={{ background: '#FFFFFF', color: 'var(--text-main)', marginBottom: '14px' }}>
                <span>// OPERATING ADVANTAGE</span>
              </div>
              <h2 className="display-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)' }}>
                WHY FOUNDERS CHOOSE <span className="highlight-yellow">SHYORAN SYSTEMS</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                We work lean and ship fast — ideal for founders who need a working product, not a six-month agency timeline.
              </p>
            </div>

            <div className={styles.pillarsGrid}>
              <div className={`${styles.pillarCard} reveal`}>
                <span className={styles.pillarIcon}>
                  <SpeedPillarIcon size={44} />
                </span>
                <h3>Speed Over Slide Decks</h3>
                <p>
                  We don't bill you for endless kickoff meetings or middle-manager updates. From Day 1, we write 
                  production code with continuous staging environments.
                </p>
              </div>

              <div className={`${styles.pillarCard} reveal`}>
                <span className={styles.pillarIcon}>
                  <MernPillarIcon size={44} />
                </span>
                <h3>Specialized MERN Mastery</h3>
                <p>
                  No generic generalists. We have spent years mastering MongoDB, Express, React, and Node.js to deliver 
                  performant, clean, and easily maintainable architectures.
                </p>
              </div>

              <div className={`${styles.pillarCard} reveal`}>
                <span className={styles.pillarIcon}>
                  <AiPillarIcon size={44} />
                </span>
                <h3>AI-Augmented Velocity</h3>
                <p>
                  We combine deep architectural rigor with the latest LLM workflows to produce 3x the output of a 
                  traditional 5-person agency team without the communication overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className={styles.ctaSection}>
          <div className="wrap">
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <h2 className="display-title">LET'S BUILD YOUR PRODUCT</h2>
                <p>
                  Reach out to discuss your project — we'd love to hear what you're building. Average feasibility reply within 4 hours.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link to="/contact" className="btn-brutal btn-brutal-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>START PROJECT SCOPE</span>
                  <BoltIcon size={14} />
                </Link>
                <a href="mailto:hello@pardeep-shyoran.me" className="btn-brutal btn-brutal-outline">
                  EMAIL ARCHITECT ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
