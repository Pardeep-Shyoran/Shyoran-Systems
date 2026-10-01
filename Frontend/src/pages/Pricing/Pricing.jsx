import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
  CheckIcon,
  LockIcon,
  SpeedPillarIcon,
  MernPillarIcon,
  AiPillarIcon,
  ShieldIcon
} from '../../components/Icons/Icons';
import styles from './Pricing.module.css';

const PRICING_TRACKS = [
  {
    id: 'launchpad',
    badge: 'FLAGSHIP MVP',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    title: 'Track 01: MERN Launchpad',
    price: '$3,800',
    period: 'one-time flat investment',
    duration: '14 - 21 Business Days',
    idealFor: 'Pre-seed founders needing a revenue-ready production MVP',
    features: [
      'Full-Stack React 19 single-page app with sub-second renders',
      'Node.js & Express REST API with rigorous input validation',
      'MongoDB Atlas cluster setup with compound indexed schemas',
      'Encrypted JWT authentication + OAuth2 social sign-in',
      'Multi-stage Docker containerization ready for AWS ECS deployment',
      'Weekly staging demo releases with live URLs',
      '100% intellectual property & repository transfer'
    ],
    scopeValue: 'Full-Stack MERN App',
    budgetValue: '$2,500 - $5,000'
  },
  {
    id: 'ai-workflows',
    badge: 'AI NATIVE',
    badgeBg: '#0038FF',
    badgeColor: '#FFFFFF',
    title: 'Track 02: AI / LLM Integration',
    price: '$2,900',
    period: 'one-time flat investment',
    duration: '10 - 18 Business Days',
    idealFor: 'Startups injecting modern intelligence into their platform',
    features: [
      'Retrieval-Augmented Generation (RAG) over private data',
      'MongoDB Atlas Vector Search or Pinecone embeddings indexing',
      'Streaming low-latency chat interface with markdown parsing',
      'Autonomous tool-calling agents & structured JSON outputs',
      'Token consumption monitoring and cost threshold guardrails',
      'Interactive prompt evaluation testbench & hallucination safeguards',
      'Full prompt engineering dossiers & evaluation test suite'
    ],
    scopeValue: 'AI / LLM Integration & Chatbots',
    budgetValue: '$2,500 - $5,000'
  },
  {
    id: 'enterprise-scale',
    badge: 'SCALE READY',
    badgeBg: '#059669',
    badgeColor: '#FFFFFF',
    title: 'Track 03: Scale Platform & Commerce',
    price: '$7,200',
    period: 'one-time flat investment',
    duration: '3 - 5 Weeks',
    idealFor: 'Scaling businesses requiring payments, sockets & auto-scaling',
    features: [
      'High-concurrency MERN architecture with Redis caching',
      'Stripe & Razorpay payment integration with idempotent webhooks',
      'Real-time WebSocket multiplayer sync or messaging engine',
      'Role-based access control (RBAC) & founder analytics dashboard',
      'Terraform / Docker AWS ECS cloud infrastructure with auto-scaling',
      'Full CI/CD GitHub Actions pipeline with automated smoke tests',
      '60-day post-launch warranty and priority architecture support'
    ],
    scopeValue: 'E-Commerce & Payment Systems',
    budgetValue: '$5,000 - $10,000'
  }
];

const ESTIMATOR_MODULES = [
  { id: 'auth', name: 'Secure Auth & RBAC (JWT, OAuth2, Session Security)', cost: 600, days: 3, default: true },
  { id: 'database', name: 'Indexed MongoDB Atlas & Document Schemas', cost: 700, days: 3, default: true },
  { id: 'react_ui', name: 'React 19 Responsive Neo-Brutalist Client UI', cost: 1200, days: 5, default: true },
  { id: 'ai_rag', name: 'Vector Embeddings & Private Knowledge RAG', cost: 1400, days: 6, default: false },
  { id: 'ai_agent', name: 'Autonomous Tool Calling & LLM Agent Pipeline', cost: 1100, days: 5, default: false },
  { id: 'realtime', name: 'Socket.io Real-Time Synchronization & Events', cost: 950, days: 4, default: false },
  { id: 'stripe', name: 'Stripe Billing, Subscriptions & Webhook Ledger', cost: 900, days: 4, default: false },
  { id: 'devops', name: 'Production Docker + AWS Cloud ECS Deployment', cost: 850, days: 3, default: true }
];

const Pricing = () => {
  const [selectedModules, setSelectedModules] = useState(
    ESTIMATOR_MODULES.filter((m) => m.default).map((m) => m.id)
  );

  const toggleModule = (id) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 2) {
        setSelectedModules(selectedModules.filter((m) => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const calculatedCost = selectedModules.reduce((sum, id) => {
    const mod = ESTIMATOR_MODULES.find((m) => m.id === id);
    return sum + (mod ? mod.cost : 0);
  }, 0);

  const calculatedDays = selectedModules.reduce((sum, id) => {
    const mod = ESTIMATOR_MODULES.find((m) => m.id === id);
    return sum + (mod ? mod.days : 0);
  }, 0);

  const effectiveBusinessDays = Math.ceil(calculatedDays * 0.75); // Account for concurrent modular engineering

  return (
    <>
      <Helmet>
        <title>Pricing &amp; Investment Tracks — Shyoran Systems</title>
        <meta
          name="description"
          content="Transparent flat-fee engineering tracks with guaranteed turnaround. Zero billable hours padding, 100% intellectual property ownership, direct architect communication."
        />
      </Helmet>

      <div className={styles.pricingPage}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.heroBadgeRow}>
              <div className="badge-pill" style={{ background: 'var(--accent-yellow)', color: 'var(--text-main)' }}>
                <span><BoltIcon size={12} /></span>
                <span>FLAT FEE TRANSPARENCY // NO BILLABLE HOURLY PADDING</span>
              </div>
              <span className={`${styles.handSticker} hand`}>
                Fixed scope, guaranteed delivery dates
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              INVEST IN WORKING SOFTWARE.<br />
              <span className="highlight-yellow">NOT IN BILLABLE HOURS.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Traditional agencies inflate invoices with middle managers, discovery committees, and slow feedback loops. We provide fixed-scope sprint tracks with guaranteed delivery milestones.
            </p>
          </div>
        </section>

        {/* 3 TIERS GRID */}
        <section className={styles.tiersSection}>
          <div className="wrap">
            <div className={styles.tiersGrid}>
              {PRICING_TRACKS.map((track) => (
                <div key={track.id} className={`${styles.tierCard} reveal`}>
                  <div className={styles.tierTop}>
                    <span
                      className={styles.tierBadge}
                      style={{ background: track.badgeBg, color: track.badgeColor }}
                    >
                      {track.badge}
                    </span>
                    <h2 className={styles.tierTitle}>{track.title}</h2>
                    <p className={styles.tierIdeal}>{track.idealFor}</p>

                    <div className={styles.priceContainer}>
                      <span className={styles.priceNum}>{track.price}</span>
                      <span className={styles.pricePeriod}>// {track.period}</span>
                    </div>

                    <div className={styles.durationPill}>
                      <SpeedPillarIcon size={14} />
                      <span>TURNAROUND: {track.duration}</span>
                    </div>
                  </div>

                  <div className={styles.featuresList}>
                    <span className={styles.featuresHeading}>WHAT YOU RECEIVE:</span>
                    {track.features.map((feat, fIdx) => (
                      <div key={fIdx} className={styles.featureItem}>
                        <span className={styles.checkIcon}>
                          <CheckIcon size={12} />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.tierAction}>
                    <Link
                      to={`/contact?scope=${encodeURIComponent(track.scopeValue)}`}
                      className="btn-brutal btn-brutal-primary"
                      style={{ width: '100%', textAlign: 'center' }}
                    >
                      <span>SELECT THIS TRACK</span>
                      <BoltIcon size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DYNAMIC ESTIMATOR SECTION */}
        <section className={styles.estimatorSection}>
          <div className="wrap">
            <div className={`${styles.estimatorBox} reveal`}>
              <div className={styles.estimatorHead}>
                <div className="badge-pill" style={{ background: '#FFFFFF' }}>
                  <span>// CUSTOM BUILD ESTIMATOR</span>
                </div>
                <h2 className="display-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginTop: '12px' }}>
                  MAP YOUR CUSTOM SPRINT
                </h2>
                <p className={styles.estimatorSubtitle}>
                  Select the components your product requires. See real-time calculated investment brackets and delivery timelines.
                </p>
              </div>

              <div className={styles.estimatorGrid}>
                {/* Module Checklist */}
                <div className={styles.modulesCol}>
                  <span className={styles.modulesHeader}>SELECT CORE MODULES:</span>
                  <div className={styles.modulesList}>
                    {ESTIMATOR_MODULES.map((mod) => {
                      const isChecked = selectedModules.includes(mod.id);
                      return (
                        <div
                          key={mod.id}
                          className={`${styles.moduleCard} ${isChecked ? styles.moduleCardActive : ''}`}
                          onClick={() => toggleModule(mod.id)}
                        >
                          <div className={styles.checkboxIndicator}>
                            {isChecked ? <CheckIcon size={12} /> : null}
                          </div>
                          <div className={styles.moduleInfo}>
                            <span className={styles.moduleName}>{mod.name}</span>
                            <span className={styles.moduleMeta}>
                              +${mod.cost} · ~{mod.days} days
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Estimate Summary Box */}
                <div className={styles.summaryCol}>
                  <div className={styles.summaryCard}>
                    <span className={styles.summaryTag}>CALCULATED ESTIMATE</span>
                    <div className={styles.summaryPriceRow}>
                      <span className={styles.summaryPrice}>${calculatedCost.toLocaleString()}</span>
                      <span className={styles.summaryLabel}>FLAT FEE</span>
                    </div>

                    <div className={styles.summaryDetails}>
                      <div className={styles.summaryItem}>
                        <span>Target Delivery:</span>
                        <strong>~{effectiveBusinessDays} Business Days</strong>
                      </div>
                      <div className={styles.summaryItem}>
                        <span>Modules Included:</span>
                        <strong>{selectedModules.length} Production Systems</strong>
                      </div>
                      <div className={styles.summaryItem}>
                        <span>IP Rights:</span>
                        <strong>100% Transferred</strong>
                      </div>
                      <div className={styles.summaryItem}>
                        <span>Warranty:</span>
                        <strong>30 Days Post-Deploy</strong>
                      </div>
                    </div>

                    <Link
                      to={`/contact?scope=Custom%20Modular%20Sprint&budget=$${calculatedCost.toLocaleString()}`}
                      className="btn-brutal btn-brutal-yellow"
                      style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}
                    >
                      <span>LOCK IN SCOPE &amp; TALK TO ARCHITECT</span>
                      <BoltIcon size={14} />
                    </Link>

                    <p className={styles.guaranteeText}>
                      Direct line to lead engineer. No sales reps. Written scope confirmation within 4 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEES BAR */}
        <section className={styles.guaranteesSection}>
          <div className="wrap">
            <div className={styles.guaranteesGrid}>
              <div className={styles.guaranteeCard}>
                <LockIcon size={24} />
                <h3>100% IP Ownership</h3>
                <p>All GitHub repos, AWS configurations, schemas, and assets belong strictly to you upon final demo.</p>
              </div>
              <div className={styles.guaranteeCard}>
                <BoltIcon size={24} />
                <h3>Direct Architect Access</h3>
                <p>No account managers or PM lag. Communication is directly founder-to-engineer in shared Slack/WhatsApp.</p>
              </div>
              <div className={styles.guaranteeCard}>
                <ShieldIcon size={24} />
                <h3>30-Day Post-Launch Warranty</h3>
                <p>We stand by our code. 30 days of comprehensive environment monitoring and bug-fixing included in every sprint.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
