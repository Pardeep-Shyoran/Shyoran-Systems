import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { getServicesSchema, getWebPageSchema } from '../../utils/seoSchemas';
import {
  BoltIcon,
  CheckIcon,
  TerminalIcon,
  SpeedPillarIcon,
  LockIcon,
  ShieldIcon,
  ToolIcon
} from '../../components/Icons/Icons';
import styles from './Services.module.css';

const SERVICES_DATA = [
  {
    id: 'web-apps',
    number: '01',
    badge: 'CORE PRACTICE',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    title: 'Custom Web Application Development',
    category: 'Full-Stack Web Engineering · High Velocity',
    scopeSlug: 'Custom Web Applications',
    problem:
      'Off-the-shelf software and generic website templates cannot handle proprietary operations, bespoke workflows, or unique customer-facing interactions. Rigid platforms slow down your team and lock your business into ongoing subscription bloat.',
    whoItsFor:
      'Seed-stage founders needing a customer-ready web MVP, and growing businesses replacing clunky legacy software or spreadsheets with a unified, high-performance web platform.',
    deliverables: [
      'Modern React 19 single-page application with responsive neo-brutalist UI and sub-second renders',
      'High-throughput RESTful or GraphQL API built with Node.js and Express with strict validation',
      'Normalized database architecture in PostgreSQL or MongoDB Atlas with compound indexing',
      'Stateless JWT/OAuth2 authentication and role-based access control (RBAC)',
      '100% production Dockerization with automated CI/CD staging deployment pipelines'
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'PostgreSQL', 'Vite', 'Docker'],
    example: {
      name: 'ApexHealth Diagnostics & OmniFlow Admin',
      metric: 'Sub-40ms response · AES-256 FLE',
      image: '/images/apexhealth_dashboard.jpg',
      caseStudyId: 'apexhealth',
      description: 'Production clinical dashboard and enterprise knowledge portal with strict RBAC and encrypted data handling.'
    },
    specCode: `// Architecture Spec: Custom Web Application
{
  "client": "React 19 + TypeScript + Scoped CSS Modules",
  "api": "Node.js (LTS) / Express Gateway with Zod validation",
  "database": "PostgreSQL / MongoDB Atlas Multi-Region Cluster",
  "auth": "Stateless JWT + HttpOnly Cookies + OAuth2 Social",
  "caching": "Redis Cache Layer for query speeds < 15ms",
  "testing": "Vitest unit tests + Playwright E2E smoke tests",
  "deploy": "Docker containerized on AWS ECS with auto-scaling"
}`
  },
  {
    id: 'saas-products',
    number: '02',
    badge: 'FLAGSHIP MVP',
    badgeBg: '#0038FF',
    badgeColor: '#FFFFFF',
    title: 'SaaS Product Development (MVP to Scale)',
    category: 'Subscription Architecture · Multi-Tenant Infrastructure',
    scopeSlug: 'SaaS Product Development',
    problem:
      'Building a SaaS product requires coordinating multi-tenant data isolation, recurring billing, seat management, authentication, and background worker queues. An unmaintainable MVP will break when initial customer traction arrives.',
    whoItsFor:
      'Bootstrapped software founders, venture-backed startups, and companies launching a commercial subscription product seeking to validate demand and generate revenue in weeks, not months.',
    deliverables: [
      'Multi-tenant workspace architecture with organization-level data isolation',
      'Stripe Billing & subscription tiers with idempotent webhook reconciliation to prevent billing discrepancies',
      'Self-serve customer onboarding, team invitations, and granular role permissions',
      'Transactional email delivery (Resend / SendGrid) and customer event audit logs',
      'Founder analytics portal with real-time MRR, churn indicators, and usage analytics'
    ],
    tech: ['React 19', 'Node.js', 'PostgreSQL', 'MongoDB', 'Stripe Billing', 'Redis', 'Docker', 'AWS ECS'],
    example: {
      name: 'NexusCommerce Global B2B Platform',
      metric: '< 95ms TTFB · 100% Idempotent',
      image: '/images/nexus_dashboard.jpg',
      caseStudyId: 'nexus-commerce',
      description: 'Multi-currency subscription checkout engine with automated invoice generation and customer account portals.'
    },
    specCode: `// Architecture Spec: SaaS Subscription Engine
{
  "tenancy": "Logical multi-tenancy with strict tenant_id isolation",
  "billing": "Stripe Custom Connect + Idempotent Webhook Workers",
  "concurrency": "Safe ACID multi-document transactions in MongoDB / Postgres",
  "idempotency": "Redis TTL hash locks preventing duplicate charges",
  "onboarding": "Automated email invitations + Magic link verification",
  "telemetry": "Audit trail logging for all subscription lifecycle events"
}`
  },
  {
    id: 'ai-automation',
    number: '03',
    badge: 'AI NATIVE',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    title: 'AI Integration & Workflow Automation',
    category: 'Enterprise RAG Pipelines · Autonomous Agent Workflows',
    scopeSlug: 'AI Integration & Automation',
    problem:
      'Companies possess valuable proprietary knowledge scattered across documents, tickets, and codebases. Generic off-the-shelf chatbots hallucinate, lack private business context, and risk leaking sensitive enterprise IP to public model trainers.',
    whoItsFor:
      'B2B software companies, customer support teams with high ticket volume, and operations teams seeking to automate repetitive data analysis without sacrificing accuracy or privacy.',
    deliverables: [
      'Hybrid Retrieval-Augmented Generation (RAG) using dense vector embeddings and keyword BM25 search',
      'Low-latency streaming conversational interfaces with Server-Sent Events (SSE)',
      'Autonomous tool-calling agents that safely query databases, trigger webhooks, and summarize records',
      'Token consumption governance, rate-limiting thresholds, and prompt cost guardrails',
      '100% private data isolation ensuring enterprise documents are never used for public model training'
    ],
    tech: ['OpenAI API', 'Claude 3.5 Sonnet', 'Atlas Vector Search', 'Pinecone', 'LangChain', 'Python / Node.js', 'SSE'],
    example: {
      name: 'OmniFlow AI Enterprise RAG Engine',
      metric: '42ms Vector Latency · < 65ms TTFT',
      image: '/images/omniflow_dashboard.jpg',
      caseStudyId: 'omniflow-ai',
      description: 'Generative AI search across 100k+ technical documentation pages with streaming responses and citation verification.'
    },
    specCode: `// Architecture Spec: Contextual Vector RAG Pipeline
import { Claude35Sonnet, OpenAIEmbeddings } from "@shyoran/ai";
import { vectorSearch } from "./atlas-vector";

export async function processUserQuery({ query, userContext }) {
  // 1. Generate query embedding vector (1536 dims)
  const embedding = await OpenAIEmbeddings.embed(query);
  
  // 2. Hybrid search over verified knowledge docs
  const contextDocs = await vectorSearch(embedding, { limit: 5 });
  
  // 3. Synthesize streaming response with tool capabilities
  return Claude35Sonnet.stream({
    systemPrompt: "You are an autonomous Shyoran Systems enterprise assistant.",
    context: contextDocs,
    tools: [triggerWebhook, updateDatabaseRecord]
  });
}`
  },
  {
    id: 'api-backend',
    number: '04',
    badge: 'HIGH CONCURRENCY',
    badgeBg: '#047857',
    badgeColor: '#FFFFFF',
    title: 'API & Backend Architecture',
    category: 'High-Throughput Services · Cloud Deployment & Microservices',
    scopeSlug: 'API & Backend Architecture',
    problem:
      'Frontends and mobile apps stall, crash, or experience high latency when the underlying backend lacks connection pooling, database indexing, caching, or reliable third-party webhook handling.',
    whoItsFor:
      'Teams with an existing client frontend or mobile app that needs a scalable backend, products hitting performance bottlenecks under load, or platforms requiring complex third-party SaaS integrations.',
    deliverables: [
      'High-throughput RESTful or GraphQL APIs with OpenAPI / Swagger documentation',
      'Database indexing, compound queries, and connection pool optimization',
      'Redis caching layers and Pub/Sub backplanes for sub-15ms data access',
      'Resilient webhook orchestration with deduplication, retry queues, and idempotency keys',
      'Hardened AWS cloud infrastructure (ECS Fargate, S3, CloudFront CDN, SSL/Nginx)'
    ],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS ECS', 'Nginx', 'GitHub Actions'],
    example: {
      name: 'SyncPulse Distributed WebSocket Engine',
      metric: '14ms Sync Latency · 62% MsgPack',
      image: '/images/syncpulse_dashboard.jpg',
      caseStudyId: 'syncpulse',
      description: 'Distributed Redis pub/sub backplane with conflict-free state synchronization and optimistic client updates.'
    },
    specCode: `// Architecture Spec: High-Concurrency Backend
{
  "runtime": "Node.js (LTS) Cluster with async event loops",
  "caching": "Redis Cluster (Pub/Sub backplane + Sub-10ms cache)",
  "db_pooling": "PostgreSQL connection pooling (pgBouncer) / Mongo Atlas",
  "idempotency": "Distributed Redis lock keys preventing duplicate execution",
  "security": "Rate limiting, CORS guards, helmet headers & input sanitization",
  "cloud": "Docker on AWS ECS Fargate with zero-downtime rolling deploys"
}`
  },
  {
    id: 'maintenance-audits',
    number: '05',
    badge: 'LONG-TERM RELIABILITY',
    badgeBg: '#000000',
    badgeColor: '#FFFFFF',
    title: 'Maintenance, Security Audits & Code Retainers',
    category: 'Codebase Stewardship · Performance Profiling & Priority Support',
    scopeSlug: 'Maintenance & Code Audits',
    problem:
      'Software decays if neglected. Dependencies accumulate critical CVE vulnerabilities, cloud hosting bills silently creep up, and unexpected production bugs erode customer trust when no technical lead is on call.',
    whoItsFor:
      'Post-launch software products, founders with an existing codebase needing modernization, and teams without an in-house senior technical lead who need guaranteed engineering availability.',
    deliverables: [
      'Dependency vulnerability audits and automated security patch updates',
      'Full-stack performance profiling, memory leak detection, and query optimization',
      'Automated database backup verification and disaster recovery protocols',
      'Cloud cost optimization (rightsizing AWS containers, DB instances, and CDN routing)',
      'Guaranteed monthly engineering hours for bug fixing, feature enhancements, and emergency SLA'
    ],
    tech: ['GitHub Actions', 'AWS CloudWatch', 'Sentry', 'Docker', 'Linux', 'Vitest', 'Nginx'],
    example: {
      name: '30-Day Launch Warranty & Retainers',
      metric: 'Zero High CVEs · Verified SLA',
      image: '/images/omniflow_dashboard.jpg',
      caseStudyId: 'omniflow-ai',
      description: 'Comprehensive environment monitoring, automated staging builds, and direct architect Slack/email support.'
    },
    specCode: `// Maintenance & Engineering Retainer SLA
{
  "code_audits": "Weekly automated dependency security and CVE scanning",
  "uptime_monitoring": "Sentry real-time exception tracking + CloudWatch metrics",
  "sla_guarantee": "< 4 hour response time for critical production incidents",
  "backups": "Automated daily database snapshots with verified test restores",
  "ownership": "Continuous documentation updates and clean Git commit history"
}`
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'All Services (5)' },
  { id: 'web-apps', label: 'Web Applications' },
  { id: 'saas-products', label: 'SaaS Platforms' },
  { id: 'ai-automation', label: 'AI & Automation' },
  { id: 'api-backend', label: 'Backend & APIs' },
  { id: 'maintenance-audits', label: 'Maintenance & Audits' }
];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSpecId, setActiveSpecId] = useState(null);
  const [copiedSpecId, setCopiedSpecId] = useState(null);

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === activeFilter);

  const toggleSpec = (id) => {
    setActiveSpecId(activeSpecId === id ? null : id);
  };

  const handleCopySpec = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedSpecId(id);
    setTimeout(() => setCopiedSpecId(null), 2000);
  };

  const servicesSchemas = [
    getWebPageSchema(
      'https://shyoran.systems/services',
      'Software Engineering Services — Shyoran Systems',
      'Explore verified software engineering services by Shyoran Systems: custom web applications, SaaS platforms, AI/LLM integration, backend APIs, and maintenance retainers.'
    ),
    getServicesSchema()
  ];

  return (
    <>
      <SEO
        title="Software Engineering Services — Shyoran Systems | Web, SaaS, AI & Cloud"
        description="Explore verified software engineering services by Shyoran Systems: custom web applications, SaaS platforms, AI/LLM integration, backend APIs, and maintenance retainers. Direct senior engineer practice."
        canonicalUrl="https://shyoran.systems/services"
        schema={servicesSchemas}
      />

      <div className={styles.servicesMain}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.heroBadgeRow}>
              <div className="badge-pill badge-yellow">
                <span><BoltIcon size={12} /></span>
                <span>ENGINEERING CAPABILITIES // CLIENT SERVICES CATALOG</span>
              </div>
              <span className="sticker-hand">
                100% Direct Senior Engineer Practice
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              SOFTWARE SERVICES BUILT FOR <br />
              <span className="highlight-yellow">REAL PRODUCT OUTCOMES.</span>
            </h1>

            <p className={styles.heroLead}>
              We partner with founders and business teams to build custom web applications, multi-tenant SaaS products, 
              and AI-augmented systems. Every engagement is led directly by systems architect Pardeep Shyoran—delivering 
              maintainable, production-ready code in transparent milestone sprints.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/contact" className="btn-brutal btn-brutal-primary btn-lg">
                <span>DISCUSS YOUR PROJECT</span>
                <BoltIcon size={14} />
              </Link>
              <a href="#services-catalog" className="btn-brutal btn-brutal-outline btn-lg">
                EXPLORE CATALOG ↓
              </a>
            </div>

            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.metaDot}></span>
                <span>Direct Engineer Line (No Account Managers)</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span>100% Intellectual Property Transfer</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span>Fixed-Scope Milestone Pricing</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span>30-Day Post-Launch Warranty</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE SERVICE FILTER TABS */}
        <div id="services-catalog" className={styles.serviceNavSection}>
          <div className="wrap">
            <div className={styles.serviceNavRow} role="tablist" aria-label="Filter Services">
              <span className={styles.navLabel} id="filter-service-label">
                FILTER SERVICE:
              </span>
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === tab.id}
                  className={`${styles.serviceNavBtn} ${activeFilter === tab.id ? styles.serviceNavBtnActive : ''}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* DETAILED SERVICES CATALOG */}
        <section className={styles.servicesSection}>
          <div className="wrap">
            <div className={styles.servicesGrid}>
              {filteredServices.map((srv) => (
                <article key={srv.id} id={srv.id} className={styles.serviceCard}>
                  {/* Service Header */}
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIdentity}>
                      <span className={styles.serviceNumber}>{srv.number}</span>
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

                  {/* Service Main Content */}
                  <div className={styles.serviceBody}>
                    <div className={styles.serviceDetailsCol}>
                      {/* Business Problem */}
                      <div className={styles.sectionBlock}>
                        <h3 className={styles.blockHeading}>The Business Problem</h3>
                        <p className={styles.blockText}>{srv.problem}</p>
                      </div>

                      {/* Who It Suits */}
                      <div className={styles.sectionBlock}>
                        <h3 className={styles.blockHeading}>Who This Service Suits</h3>
                        <p className={styles.blockText}>{srv.whoItsFor}</p>
                      </div>

                      {/* What's Included */}
                      <div className={styles.deliverablesBox}>
                        <div className={styles.boxTitle}>
                          <BoltIcon size={13} />
                          <span>WHAT IS INCLUDED (KEY DELIVERABLES)</span>
                        </div>
                        <ul className={styles.deliverablesList}>
                          {srv.deliverables.map((item, idx) => (
                            <li key={idx} className={styles.deliverableItem}>
                              <span className={styles.checkIcon}>
                                <CheckIcon size={12} />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className={styles.techStackRow}>
                        <div className={styles.boxTitle}>
                          <ToolIcon size={13} />
                          <span>TECHNOLOGY APPLIED</span>
                        </div>
                        <div className={styles.techPillsGroup}>
                          {srv.tech.map((t, tIdx) => (
                            <span key={tIdx} className={styles.techPill}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className={styles.serviceCtaRow}>
                        <Link
                          to={`/contact?scope=${encodeURIComponent(srv.scopeSlug)}`}
                          className="btn-brutal btn-brutal-primary btn-md"
                        >
                          <span>DISCUSS THIS SERVICE</span>
                          <BoltIcon size={13} />
                        </Link>
                        <button
                          type="button"
                          className={styles.specToggleBtn}
                          onClick={() => toggleSpec(srv.id)}
                          aria-expanded={activeSpecId === srv.id}
                          aria-controls={`spec-drawer-${srv.id}`}
                        >
                          <TerminalIcon size={14} />
                          <span>{activeSpecId === srv.id ? 'Hide Technical Spec' : 'Inspect Technical Spec'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Verified Reference & Visual Proof */}
                    <div className={styles.serviceVisualCol}>
                      <div className={styles.proofCard}>
                        <div className={styles.proofHeader}>
                          <span className={styles.proofTag}>VERIFIED REFERENCE</span>
                          <span className={styles.proofMetric}>{srv.example.metric}</span>
                        </div>

                        {/* Real Project Visual Preview */}
                        <div className={styles.previewFrame}>
                          <img
                            src={srv.example.image}
                            alt={`${srv.example.name} dashboard interface preview`}
                            className={styles.previewImg}
                            loading="lazy"
                          />
                        </div>

                        <div className={styles.proofFooter}>
                          <h4 className={styles.proofTitle}>{srv.example.name}</h4>
                          <p className={styles.proofDesc}>{srv.example.description}</p>
                          <Link
                            to={`/work/${srv.example.caseStudyId || 'omniflow-ai'}`}
                            className={styles.viewStudyLink}
                            aria-label={`View ${srv.example.name} Architecture Case Study`}
                          >
                            <span>View Architecture Case Study →</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Architecture Blueprint Drawer */}
                  {activeSpecId === srv.id && (
                    <div id={`spec-drawer-${srv.id}`} className={styles.specDrawer}>
                      <div className={styles.specDrawerBar}>
                        <div className={styles.specDots} aria-hidden="true">
                          <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                          <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                          <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                          <span className={styles.specTitle}>{srv.id}.blueprint.spec</span>
                        </div>
                        <button
                          type="button"
                          className={styles.copySpecBtn}
                          onClick={() => handleCopySpec(srv.id, srv.specCode)}
                          aria-live="polite"
                        >
                          {copiedSpecId === srv.id ? '✓ COPIED!' : 'COPY SPEC'}
                        </button>
                      </div>
                      <div className={styles.specBody}>
                        <pre className={styles.specPre}>
                          <code>{srv.specCode}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HONEST GUIDANCE NOTE: MOBILE & CROSS-PLATFORM STRATEGY */}
        <section className={styles.advisorySection}>
          <div className="wrap">
            <div className={styles.advisoryCard}>
              <div className={styles.advisoryHeader}>
                <div className="badge-pill badge-yellow">
                  <span>// HONEST TECHNICAL GUIDANCE</span>
                </div>
                <h2 className="display-title" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}>
                  MOBILE STRATEGY: RESPONSIVE PWAs VS. NATIVE APPS
                </h2>
              </div>
              <div className={styles.advisoryContent}>
                <p>
                  <strong>Why We Don't Build Traditional App-Store-Only Native Apps:</strong> Shyoran Systems specializes in 
                  Mobile-First Responsive Web Applications and Progressive Web Apps (PWAs). For the majority of startups and SaaS businesses, 
                  a responsive web application delivers identical user experience, instant deployment without waiting for App Store approval 
                  reviews, zero 30% platform tax, and a single maintainable codebase for desktop, tablet, iOS, and Android.
                </p>
                <p>
                  <strong>When You Genuine Need Native:</strong> If your project strictly relies on low-level device hardware (such as 
                  Bluetooth LE peripheral pairing, continuous background GPS tracking, or Apple HealthKit APIs), a native iOS/Android build 
                  is required. We will honestly evaluate your requirements during discovery—and if your product genuinely requires native 
                  Swift or Kotlin, we will advise you upfront rather than selling you an unsuitable solution.
                </p>
                <div className={styles.advisoryAction}>
                  <Link to="/contact?scope=Mobile+%26+Responsive+PWAs" className="btn-brutal btn-brutal-primary btn-sm">
                    <span>DISCUSS MOBILE &amp; PWA STRATEGY</span>
                    <BoltIcon size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENGAGEMENT PRINCIPLES */}
        <section className={styles.principlesSection}>
          <div className="wrap">
            <div className={styles.sectionHeader}>
              <div className="badge-pill badge-white" style={{ marginBottom: '12px' }}>
                <span>// ENGAGEMENT STANDARDS</span>
              </div>
              <h2 className="display-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                HOW EVERY BUILD IS <span className="highlight-yellow">DELIVERED</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Clear standards designed to eliminate agency bureaucracy and protect client investment.
              </p>
            </div>

            <div className={styles.principlesGrid}>
              <div className={styles.principleCard}>
                <div className={styles.principleIcon}>
                  <BoltIcon size={24} />
                </div>
                <h3>Direct Engineer Line</h3>
                <p>
                  You communicate directly with the engineer writing your schemas, implementing your endpoints, and 
                  structuring your UI. Zero sales runaround or account manager latency.
                </p>
              </div>

              <div className={styles.principleCard}>
                <div className={styles.principleIcon}>
                  <LockIcon size={24} />
                </div>
                <h3>100% IP &amp; Code Ownership</h3>
                <p>
                  All GitHub repositories, cloud infrastructure scripts, and intellectual property belong strictly 
                  to your company from the first commit. No proprietary lock-in.
                </p>
              </div>

              <div className={styles.principleCard}>
                <div className={styles.principleIcon}>
                  <SpeedPillarIcon size={24} />
                </div>
                <h3>Fixed-Scope Milestones</h3>
                <p>
                  Every engagement is scoped with explicit deliverables and guaranteed milestone pricing. You never face 
                  unpredictable hourly overages or bloated time-and-materials invoices.
                </p>
              </div>

              <div className={styles.principleCard}>
                <div className={styles.principleIcon}>
                  <ShieldIcon size={24} />
                </div>
                <h3>30-Day Post-Launch Warranty</h3>
                <p>
                  We stand behind what we ship. Every production deployment includes 30 days of active environment 
                  monitoring and bug fixes at zero additional cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM FINAL CTA */}
        <section className={styles.ctaSection}>
          <div className="wrap">
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <h2 className="display-title">
                  NOT SURE WHICH SERVICE YOU NEED?
                </h2>
                <p>
                  Reach out to discuss your product architecture and timeline. We'll provide an honest feasibility review 
                  and recommend the most cost-effective path to launch.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link to="/contact" className="btn-brutal btn-brutal-primary btn-lg">
                  <span>DISCUSS YOUR PROJECT</span>
                  <BoltIcon size={14} />
                </Link>
                <a href="mailto:hello@pardeep-shyoran.me?subject=Project%20Architecture%20Inquiry" className="btn-brutal btn-brutal-outline btn-lg">
                  DIRECT EMAIL ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
