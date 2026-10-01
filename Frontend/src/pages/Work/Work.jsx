import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
  StarIcon,
  PinIcon,
  CheckIcon,
  LockIcon,
  TerminalIcon
} from '../../components/Icons/Icons';
import styles from './Work.module.css';

const CASE_STUDIES = [
  {
    id: 'omniflow-ai',
    title: 'OmniFlow AI — Autonomous RAG & Customer Intelligence',
    clientType: 'B2B Enterprise SaaS',
    timeline: '16 Business Days',
    category: 'ai',
    categoryLabel: 'AI / LLM NATIVE',
    categoryBg: '#0038FF',
    categoryColor: '#FFFFFF',
    summary:
      'Engineered an enterprise generative AI retrieval system querying 100k+ private technical documentation pages with sub-60ms vector search latency and streaming responses.',
    metrics: [
      { label: 'Query Latency', value: '42ms' },
      { label: 'Intent Accuracy', value: '99.4%' },
      { label: 'Delivery Time', value: '16 Days' }
    ],
    architecture: {
      client: 'React 19 + Server-Sent Events (SSE) Streaming',
      api: 'Node.js LTS / Express Gateway + LangChain Core',
      database: 'MongoDB Atlas Vector Search + Redis Semantic Cache',
      models: 'OpenAI GPT-4o / Claude 3.5 Sonnet / text-embedding-3-small',
      cloud: 'AWS ECS Fargate + Cloudflare Edge CDN'
    },
    deliverables: [
      'Multi-tenant vector indexing with automated document ingestion',
      'Real-time low-latency response streaming with citation anchoring',
      'Token consumption dashboard and cost guardrail thresholds',
      '100% test coverage for prompt edge cases and hallucination traps'
    ],
    techStack: ['React 19', 'Node.js', 'Express', 'MongoDB Atlas', 'LangChain', 'OpenAI', 'Redis', 'AWS'],
    specSnippet: `// omniflow.architecture.spec.json
{
  "project": "OmniFlow AI Retrieval Engine",
  "vector_dimensions": 1536,
  "search_algorithm": "Hierarchical Navigable Small World (HNSW)",
  "hybrid_search": {
    "dense_weight": 0.75,
    "keyword_bm25_weight": 0.25
  },
  "caching_strategy": "Redis Vector Semantic Cache with 0.88 cosine cutoff",
  "streaming_protocol": "HTTP Server-Sent Events (SSE) sub-50ms TTFT"
}`
  },
  {
    id: 'syncpulse',
    title: 'SyncPulse — Low-Latency Real-Time Collaboration Hub',
    clientType: 'Productivity Tech Startup',
    timeline: '14 Business Days',
    category: 'realtime',
    categoryLabel: 'REAL-TIME MERN',
    categoryBg: '#FFE600',
    categoryColor: '#000000',
    summary:
      'Built a multiplayer operational dashboard featuring live cursor tracking, conflict-free state synchronization, and sub-15ms WebSocket event delivery.',
    metrics: [
      { label: 'Socket Latency', value: '14ms' },
      { label: 'Concurrent Users', value: '25,000+' },
      { label: 'Crash Rate', value: '0.00%' }
    ],
    architecture: {
      client: 'React 19 + Optimistic Local State Transitions',
      api: 'Node.js Cluster + Socket.io with Binary MessagePack',
      database: 'MongoDB Atlas Replica Set + Redis Pub/Sub Adapter',
      cloud: 'Docker Containers on AWS Application Load Balancer'
    },
    deliverables: [
      'Multi-room presence detection and live typing status',
      'Delta synchronization algorithm resolving concurrent edit conflicts',
      'Offline queue and optimistic reconnect state reconciliation',
      'Role-based granular room permissions with signed access tokens'
    ],
    techStack: ['React 19', 'Node.js', 'Socket.io', 'Redis Pub/Sub', 'MongoDB', 'AWS ECS', 'Vite'],
    specSnippet: `// syncpulse.engine.spec.ts
export const SyncPulseConfig = {
  socketProtocol: "WebSockets + binary MessagePack compression",
  redisPubSubAdapter: "Redis Cluster with horizontal node auto-scaling",
  heartbeatIntervalMs: 5000,
  maxHandoffLatencyMs: 25,
  stateStorage: "In-memory Redis with persistent MongoDB write-behind batches"
};`
  },
  {
    id: 'nexus-commerce',
    title: 'NexusCommerce — High-Velocity Global B2B Platform',
    clientType: 'Digital Retail Scaleup',
    timeline: '21 Business Days',
    category: 'fullstack',
    categoryLabel: 'MERN FULL-STACK',
    categoryBg: '#059669',
    categoryColor: '#FFFFFF',
    summary:
      'Constructed a modern e-commerce platform processing complex recurring subscription billing, international payment currencies, and real-time inventory management.',
    metrics: [
      { label: 'Processed GMV', value: '$1.4M+' },
      { label: 'Page Speed', value: '99/100' },
      { label: 'Checkout Drop', value: '< 2.1%' }
    ],
    architecture: {
      client: 'React 19 Single Page App + Responsive Neo-Brutalist UI',
      api: 'Express REST Gateway with Zod Schema Validation',
      database: 'MongoDB Atlas with Compound Transactional ACID Indexes',
      payments: 'Stripe Billing & Webhooks with Idempotency Guards',
      cloud: 'AWS CloudFront + S3 + ECS'
    },
    deliverables: [
      'Frictionless checkout flow with international currency conversion',
      'Idempotent webhook handler ensuring zero double-charge anomalies',
      'Comprehensive founder admin dashboard with real-time analytics',
      'Automated invoice generation and digital license fulfillment'
    ],
    techStack: ['React 19', 'Express', 'MongoDB Atlas', 'Stripe API', 'Docker', 'AWS', 'Zod'],
    specSnippet: `// nexus-commerce.gateway.json
{
  "gateway": "Stripe Custom Connect + Express Webhook Worker",
  "concurrency": "Safe ACID multi-document transactions in MongoDB Atlas",
  "idempotency_keys": "Redis TTL hash lock preventing double billing",
  "audit_trail": "Immutable ledger collection for all invoice events",
  "uptime": "99.98% production SLA"
}`
  },
  {
    id: 'apexhealth',
    title: 'ApexHealth — Secure Clinical Diagnostics Portal',
    clientType: 'Digital HealthTech Venture',
    timeline: '19 Business Days',
    category: 'fullstack',
    categoryLabel: 'SECURE ARCHITECTURE',
    categoryBg: '#EF4444',
    categoryColor: '#FFFFFF',
    summary:
      'Engineered an encrypted patient diagnostics and reporting dashboard strictly adhering to healthcare security guidelines, signed authorization keys, and audit logging.',
    metrics: [
      { label: 'Security Audit', value: '100% Pass' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Uptime', value: '100.0%' }
    ],
    architecture: {
      client: 'React 19 + Strict Client-Side Input Sanitization',
      api: 'Node.js Express with Helmet & Rate-Limiting Defenses',
      database: 'MongoDB Atlas with Field-Level Encryption (FLE)',
      cloud: 'VPC-Isolated AWS ECS Cluster with CloudWatch Audit Trails'
    },
    deliverables: [
      'Client-side envelope encryption for sensitive patient health data',
      'Strict multi-factor authentication (MFA) & short-lived session tokens',
      'Tamper-evident audit logging recording all database read operations',
      'Automated backup snapshots and disaster recovery failover'
    ],
    techStack: ['React 19', 'Node.js', 'MongoDB FLE', 'AWS VPC', 'Docker', 'JWT', 'TypeScript'],
    specSnippet: `// apexhealth.security.spec.ts
export const SecurityManifest = {
  encryptionStandard: "AES-256-GCM envelope encryption",
  sessionManagement: "Stateless JWT in HttpOnly Strict Cookies (15 min lifespan)",
  dataAtRest: "AWS KMS managed master customer encryption key",
  auditCollection: "MongoDB Atlas append-only immutable access logs"
};`
  }
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSpecId, setActiveSpecId] = useState(null);
  const [copiedSpecId, setCopiedSpecId] = useState(null);

  const filteredStudies =
    activeFilter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeFilter);

  const handleCopySpec = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedSpecId(id);
    setTimeout(() => setCopiedSpecId(null), 2000);
  };

  const toggleSpec = (id) => {
    setActiveSpecId(activeSpecId === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Selected Work &amp; Case Studies — Shyoran Systems</title>
        <meta
          name="description"
          content="Explore real production systems engineered by Shyoran Systems: AI retrieval pipelines, real-time collaboration engines, and enterprise MERN platforms shipped in weeks."
        />
      </Helmet>

      <div className={styles.workPage}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.heroBadgeRow}>
              <div className="badge-pill" style={{ background: 'var(--accent-yellow)', color: 'var(--text-main)' }}>
                <span><BoltIcon size={12} /></span>
                <span>ENGINEERING PORTFOLIO // VERIFIED SHIPPED BUILDS</span>
              </div>
              <span className={`${styles.handSticker} hand`}>
                Real production code, zero placeholder mockups
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              SOFTWARE SHIPPED AT<br />
              <span className="highlight-yellow">EXTREME VELOCITY.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              From generative AI context engines to high-concurrency multiplayer web platforms. Inspect real architectural blueprints, technical decisions, and verifiable delivery benchmarks.
            </p>

            {/* CATEGORY FILTER PILLS */}
            <div className={styles.filterRow}>
              <button
                type="button"
                className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Builds ({CASE_STUDIES.length})
              </button>
              <button
                type="button"
                className={`${styles.filterBtn} ${activeFilter === 'fullstack' ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter('fullstack')}
              >
                MERN Full-Stack
              </button>
              <button
                type="button"
                className={`${styles.filterBtn} ${activeFilter === 'ai' ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter('ai')}
              >
                AI &amp; LLM Systems
              </button>
              <button
                type="button"
                className={`${styles.filterBtn} ${activeFilter === 'realtime' ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter('realtime')}
              >
                Real-Time &amp; Sockets
              </button>
            </div>
          </div>
        </section>

        {/* CASE STUDIES GRID */}
        <section className={styles.gridSection}>
          <div className="wrap">
            <div className={styles.caseStudiesList}>
              {filteredStudies.map((study) => (
                <article key={study.id} className={`${styles.studyCard} reveal`}>
                  <div className={styles.cardHeader}>
                    <div className={styles.headerLeft}>
                      <span
                        className={styles.categoryBadge}
                        style={{ background: study.categoryBg, color: study.categoryColor }}
                      >
                        {study.categoryLabel}
                      </span>
                      <span className={styles.clientTag}>// {study.clientType}</span>
                    </div>
                    <div className={styles.timelineBadge}>
                      <span>SHIPPED IN {study.timeline.toUpperCase()}</span>
                    </div>
                  </div>

                  <h2 className={styles.studyTitle}>{study.title}</h2>
                  <p className={styles.studySummary}>{study.summary}</p>

                  {/* METRICS ROW */}
                  <div className={styles.metricsGrid}>
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className={styles.metricItem}>
                        <span className={styles.metricValue}>{metric.value}</span>
                        <span className={styles.metricLabel}>{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* DELIVERABLES & ARCHITECTURE */}
                  <div className={styles.detailsRow}>
                    <div className={styles.deliverablesCol}>
                      <h3 className={styles.colHeading}>Key Production Deliverables</h3>
                      <ul className={styles.deliverablesList}>
                        {study.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className={styles.deliverableItem}>
                            <span className={styles.checkIcon}>
                              <CheckIcon size={12} />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.archCol}>
                      <h3 className={styles.colHeading}>System Architecture Stack</h3>
                      <div className={styles.archSpecs}>
                        <div className={styles.specRow}>
                          <span className={styles.specKey}>Client:</span>
                          <span className={styles.specVal}>{study.architecture.client}</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specKey}>Backend API:</span>
                          <span className={styles.specVal}>{study.architecture.api}</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specKey}>Database:</span>
                          <span className={styles.specVal}>{study.architecture.database}</span>
                        </div>
                        {study.architecture.models && (
                          <div className={styles.specRow}>
                            <span className={styles.specKey}>AI Models:</span>
                            <span className={styles.specVal}>{study.architecture.models}</span>
                          </div>
                        )}
                        <div className={styles.specRow}>
                          <span className={styles.specKey}>Cloud Infra:</span>
                          <span className={styles.specVal}>{study.architecture.cloud}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TECH PILLS */}
                  <div className={styles.techRow}>
                    <div className={styles.techPillsGroup}>
                      {study.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className={styles.techPill}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={styles.actionButtons}>
                      <button
                        type="button"
                        className={styles.specToggleBtn}
                        onClick={() => toggleSpec(study.id)}
                      >
                        <TerminalIcon size={14} />
                        <span>{activeSpecId === study.id ? 'Hide Blueprint Spec' : 'Inspect Blueprint Spec'}</span>
                      </button>

                      <Link
                        to={`/contact?scope=${encodeURIComponent(study.categoryLabel)}`}
                        className="btn-brutal btn-brutal-primary"
                        style={{ padding: '8px 18px', fontSize: '13px' }}
                      >
                        <span>Request Similar Build</span>
                        <BoltIcon size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* EXPANDABLE SPEC DRAWER */}
                  {activeSpecId === study.id && (
                    <div className={styles.specDrawer}>
                      <div className={styles.specDrawerBar}>
                        <div className={styles.dots}>
                          <span className={styles.dotRed}></span>
                          <span className={styles.dotYellow}></span>
                          <span className={styles.dotGreen}></span>
                          <span className={styles.specFileName}>{study.id}.architecture.spec</span>
                        </div>
                        <button
                          type="button"
                          className={styles.specCopyBtn}
                          onClick={() => handleCopySpec(study.id, study.specSnippet)}
                        >
                          {copiedSpecId === study.id ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <CheckIcon size={12} /> COPIED!
                            </span>
                          ) : 'COPY SPEC'}
                        </button>
                      </div>
                      <pre className={styles.specCodePre}>
                        <code>{study.specSnippet}</code>
                      </pre>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className={styles.ctaBanner}>
          <div className="wrap">
            <div className={styles.ctaBox}>
              <h2 className="display-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
                HAVE A SYSTEM TO BUILD?<br />
                <span className="highlight-yellow">LET'S MAP THE ARCHITECTURE.</span>
              </h2>
              <p className={styles.ctaText}>
                No endless meetings. Talk directly to lead architect Pardeep Shyoran and receive a concrete scope and deployment roadmap within 24 hours.
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link
                  to="/contact"
                  className="btn-brutal btn-brutal-yellow"
                  style={{ padding: '14px 32px', fontSize: '16px' }}
                >
                  <span>SCHEDULE ARCHITECTURE CALL</span>
                  <BoltIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
