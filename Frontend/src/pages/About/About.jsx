import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { getWebPageSchema, getOrganizationSchema } from '../../utils/seoSchemas';
import { 
  BoltIcon, 
  PenIcon, 
  CheckIcon, 
  CrossIcon,
  ShieldIcon, 
  LockIcon, 
  ToolIcon, 
  ArrowRightIcon,
  TerminalIcon,
  SpeedPillarIcon,
  PackageIcon
} from '../../components/Icons/Icons';
import { PROJECTS_DATA } from '../../data/projectsData';
import styles from './About.module.css';

const terminalSnippets = {
  'whoami.sh': `#!/usr/bin/env bash
# Shyoran Systems Lead Engineer Dossier
NAME="Pardeep Shyoran"
ROLE="Founder & Lead Full-Stack Engineer @ Shyoran Systems"
LOCATION="Sirsa, Haryana 125103, India · Remote Worldwide"
FOCUS="Full-Stack MERN (React 19, Node.js, Express, MongoDB) · Real-Time Web · AI/LLM Integration"

# Operating Model: Single senior engineer accountability, zero agency overhead
MODEL="Solo Senior Practice (Direct 1-on-1 collaboration)"
AVAILABILITY="Selective product builds and technical architecture"
PHILOSOPHY="Working software over slide decks. Clean schemas from commit #1."

# [Biographical Note Placeholder: Add university degree, certifications, or past engineering roles here]`,

  'stack.json': `{
  "studio": "Shyoran Systems",
  "specialization": "MERN Stack, Real-Time Architecture & AI Integration",
  "services": [
    "Custom full-stack web applications (React 19, Node.js, Express, MongoDB)",
    "AI/LLM integrations (Retrieval-Augmented Generation, vector search, streaming APIs)",
    "Real-time event systems (WebSockets, Socket.io, Redis Pub/Sub)",
    "Transactional platforms with Stripe/Razorpay and idempotent webhooks",
    "Cloud infrastructure on AWS, Docker containerization, and CI/CD pipelines"
  ],
  "technical_standards": {
    "contracts": "Strict schema validation and typed interfaces",
    "deployments": "Automated staging environments for client testing",
    "ownership": "100% client intellectual property ownership"
  }
}`,

  'principles.md': `# Engineering & Collaboration Principles

1. **Direct Engineer-to-Client Access**
   No account managers or non-technical intermediaries. Technical requirements are discussed directly with the person writing your code.

2. **Architecture First, Zero Disposable MVPs**
   We design robust database models, typed contracts, and security boundaries before building UI, preventing costly rewrites later.

3. **Observable Progress & Transparent Trade-offs**
   Working software is deployed to private staging environments every few days. When scope needs adjust, trade-offs are discussed openly before writing code.`
};

const techInventory = [
  { 
    name: 'React 19', 
    category: 'frontend', 
    tag: 'Core UI', 
    desc: 'Component architecture with fast client rendering, optimistic state updates, and accessible forms.' 
  },
  { 
    name: 'Node.js & Express', 
    category: 'backend', 
    tag: 'MERN Core', 
    desc: 'Structured REST APIs with input validation, token authentication, and resilient error boundaries.' 
  },
  { 
    name: 'MongoDB Atlas', 
    category: 'backend', 
    tag: 'Database', 
    desc: 'Flexible document modeling, compound indexes for quick lookups, and multi-document ACID transactions.' 
  },
  { 
    name: 'Socket.io & WebSockets', 
    category: 'realtime', 
    tag: 'Live Sync', 
    desc: 'Low-latency live collaboration, active member presence, and instant state synchronization without polling.' 
  },
  { 
    name: 'LangChain & Vector RAG', 
    category: 'ai', 
    tag: 'Document AI', 
    desc: 'Citation-backed document retrieval using MongoDB Atlas Vector Search and streaming token outputs.' 
  },
  { 
    name: 'OpenAI & Claude SDKs', 
    category: 'ai', 
    tag: 'LLM Pipelines', 
    desc: 'Structured JSON data extraction, background tool calling, and automated summarization.' 
  },
  { 
    name: 'Redis In-Memory Cache', 
    category: 'backend', 
    tag: 'Cache / PubSub', 
    desc: 'Sub-10ms query caching, distributed room clustering, and rate-limiting idempotency locks.' 
  },
  { 
    name: 'Docker Containers', 
    category: 'devops', 
    tag: 'Environments', 
    desc: 'Isolated, reproducible container images ensuring identical behavior across local dev and production.' 
  },
  { 
    name: 'AWS Cloud (ECS, S3, CloudFront)', 
    category: 'devops', 
    tag: 'Cloud Hosting', 
    desc: 'Containerized hosting, distributed assets, and edge CDN routing with automated SSL certificates.' 
  },
  { 
    name: 'GitHub CI/CD Actions', 
    category: 'devops', 
    tag: 'Automated CI', 
    desc: 'Automated linting, test suites, and staging deployments so new features are verified before release.' 
  },
  { 
    name: 'TypeScript', 
    category: 'frontend', 
    tag: 'Type Safety', 
    desc: 'Explicit interface contracts between frontend and backend to prevent runtime type bugs.' 
  },
  { 
    name: 'Stripe & Payment Gateways', 
    category: 'backend', 
    tag: 'Payments', 
    desc: 'Idempotent webhook handling, secure checkout flows, and automated customer invoice generation.' 
  }
];

const problemsSolved = [
  {
    number: '01',
    title: 'The Agency Middleman Problem',
    agencyTrap: 'Layers of account managers and sales reps who do not write code interpret requirements, creating communication delays and misunderstood specs.',
    shyoranSolve: 'Direct 1-on-1 engineer collaboration. You discuss technical constraints, business logic, and UI flows directly with the person writing your endpoints.'
  },
  {
    number: '02',
    title: 'The Fragile "Disposable MVP" Trap',
    agencyTrap: 'Prototypes built hastily with untyped schemas and messy dependencies that inevitably collapse and need a complete rewrite when real users arrive.',
    shyoranSolve: 'Scalable foundations from day one. Modular components, strict data validation, and clean database indices so your MVP is a foundation you keep.'
  },
  {
    number: '03',
    title: 'Superficial "AI Wrapper" Pitfalls',
    agencyTrap: 'Generic LLM integrations tacked onto fragile backends that suffer from hallucinations, high latency, and zero data privacy controls.',
    shyoranSolve: 'Grounded Retrieval-Augmented Generation (RAG) with vector search, semantic caching, source citations, and private data boundaries.'
  },
  {
    number: '04',
    title: 'Scope Creep & Silent Roadmaps',
    agencyTrap: 'Weeks of radio silence followed by surprise delays, unvetted feature changes, and unexpected invoices right before launch.',
    shyoranSolve: 'Observable progress on private staging URLs updated regularly, paired with transparent, upfront trade-off discussions when requirements evolve.'
  }
];

const qualityPillars = [
  {
    icon: <SpeedPillarIcon size={22} />,
    title: 'Architecture-First Planning',
    desc: 'Before writing UI code, we map database schemas, API contracts, and security boundaries. Doing this upfront prevents painful mid-flight refactors.'
  },
  {
    icon: <ShieldIcon size={22} />,
    title: 'Strict Data Contracts',
    desc: 'Every API endpoint validates incoming requests with strict schemas (e.g. Zod), ensuring invalid payloads are rejected at the edge before touching your database.'
  },
  {
    icon: <ToolIcon size={22} />,
    title: 'Observable Staging Deploys',
    desc: 'You don\'t have to wait for an end-of-project reveal. Features are deployed to a private staging URL as they are built so you can test them live.'
  },
  {
    icon: <LockIcon size={22} />,
    title: '100% Client IP Ownership',
    desc: 'From day one, all Git repositories, cloud accounts, database collections, and documentation belong completely to your organization with zero vendor lock-in.'
  }
];

const communicationChannels = [
  {
    tag: '// DIRECT COMMS',
    title: 'Direct Engineer Access',
    desc: 'Direct communication via your preferred channel without non-technical intermediaries.',
    points: [
      'Dedicated Slack or Discord channel for quick technical questions',
      'Async video walkthroughs (Loom) for feature demos and feedback',
      'Scheduled 20-30 min weekly video calls to align on priorities'
    ]
  },
  {
    tag: '// WRITTEN SPECS',
    title: 'Defined Milestone Scopes',
    desc: 'Every project begins with a written Scope of Work so expectations are transparent.',
    points: [
      'Explicit deliverables and acceptance criteria for each milestone',
      'Transparent milestone payment schedule tied to testable software',
      'Clear definition of what is in-scope vs. future phases'
    ]
  },
  {
    tag: '// SCOPE MANAGEMENT',
    title: 'Transparent Trade-offs',
    desc: 'Requirements evolve as founders test early builds. We handle changes collaboratively.',
    points: [
      'New ideas evaluated for impact on milestone timeline and cost',
      'Options presented: swap equivalent features or extend timeline',
      'All adjustments agreed in writing before code is written'
    ]
  }
];

const lifecycleSteps = [
  {
    step: 'PHASE 01',
    title: 'Discovery & Scoping',
    body: 'Review product vision, map user journeys, define data models, and agree on milestone deliverables.',
    deliverable: 'Deliverable: Written Architecture Scope & Roadmap'
  },
  {
    step: 'PHASE 02',
    title: 'Foundation Rig',
    body: 'Provision database, set up authentication guards, configure styling design tokens, and establish staging CI/CD.',
    deliverable: 'Deliverable: Live Staging Environment'
  },
  {
    step: 'PHASE 03',
    title: 'Feature Sprints',
    body: 'Iterative implementation of core business logic, interactive UI state, real-time feeds, and background workflows.',
    deliverable: 'Deliverable: Testable Staging Builds'
  },
  {
    step: 'PHASE 04',
    title: 'Production Cutover',
    body: 'Performance audits, security reviews, domain DNS configuration, SSL setup, and production release.',
    deliverable: 'Deliverable: Production Deployment'
  },
  {
    step: 'PHASE 05',
    title: 'Handover & Warranty',
    body: 'Full Git repository transfer, environment documentation, architecture video walkthrough, and 30 days of bug fixes.',
    deliverable: 'Deliverable: 100% Codebase Ownership & 30-Day Support'
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState('whoami.sh');
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(terminalSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredTech = activeFilter === 'all' 
    ? techInventory 
    : techInventory.filter(t => t.category === activeFilter);

  const aboutSchemas = [
    getWebPageSchema(
      'https://shyoran.systems/about',
      'About Us — Shyoran Systems | Solo Senior Engineering Practice',
      'Learn how Shyoran Systems partners with founders and teams as an independent senior engineering practice. Direct architect access, MERN & AI workflows, and zero agency middlemen.'
    ),
    getOrganizationSchema()
  ];

  return (
    <>
      <SEO
        title="About Us — Shyoran Systems | Solo Senior Engineering Practice"
        description="Learn how Shyoran Systems partners with founders and teams as an independent senior engineering practice. Direct architect access, MERN & AI workflows, and zero agency middlemen."
        canonicalUrl="https://shyoran.systems/about"
        schema={aboutSchemas}
      />

      <div className={styles.aboutMain}>
        {/* ==================================================================
            1. HERO INTRODUCTION TO SHYORAN SYSTEMS
            ================================================================== */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.heroBadgeRow}>
              <div className="badge-pill badge-yellow">
                <BoltIcon size={12} />
                <span>INDEPENDENT ENGINEERING STUDIO // SOLO SENIOR PRACTICE</span>
              </div>
              <span className="sticker-hand">
                <span>Direct engineer access · Founded by Pardeep Shyoran</span>
                <PenIcon size={13} />
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              NO ACCOUNT MANAGERS.<br />
              NO JUNIOR HANDOFFS.<br />
              <span className="highlight-yellow">JUST PRODUCTION SOFTWARE THAT SHIPS.</span>
            </h1>

            <p className={styles.heroLead}>
              Shyoran Systems is an independent software practice founded and run by <strong>Pardeep Shyoran</strong>. 
              I partner directly with founders, startups, and product teams to architect, build, and deploy 
              reliable web applications, SaaS platforms, and AI integrations—eliminating agency overhead, 
              miscommunication, and the risk of junior staff handoffs.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/contact" className="btn-brutal btn-brutal-primary btn-lg">
                <span>START A PROJECT</span>
                <BoltIcon size={14} />
              </Link>
              <a href="#dossier" className="btn-brutal btn-brutal-outline btn-lg">
                WHO IS BEHIND THE STUDIO ↓
              </a>
              <a href="#verified-work" className="btn-brutal btn-brutal-outline btn-lg">
                VERIFIED PROJECTS ↓
              </a>
            </div>

            {/* Quick in-page navigation strip */}
            <div className={styles.quickNavStrip}>
              <span className={styles.quickNavLabel}>SECTION INDEX:</span>
              <a href="#dossier" className={styles.quickNavLink}>01. Architect Dossier</a>
              <a href="#problems-solved" className={styles.quickNavLink}>02. Problems I Solve</a>
              <a href="#technical-strengths" className={styles.quickNavLink}>03. Technical Strengths</a>
              <a href="#quality-approach" className={styles.quickNavLink}>04. Approach to Quality</a>
              <a href="#communication-scope" className={styles.quickNavLink}>05. Communication &amp; Scope</a>
              <a href="#collaboration-lifecycle" className={styles.quickNavLink}>06. Collaboration Lifecycle</a>
              <a href="#verified-work" className={styles.quickNavLink}>07. Verified Work</a>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2. FOUNDER DOSSIER & OPERATING PROFILE
            ================================================================== */}
        <section id="dossier" className={styles.dossierSection}>
          <div className="wrap">
            <div className={styles.sectionHeader}>
              <div className="badge-pill badge-white" style={{ marginBottom: '14px' }}>
                <span>// 01 ARCHITECT PROFILE</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                THE ENGINEER <span className="highlight-yellow">BEHIND THE STUDIO</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                A transparent look at who is building your software, how the practice is organized, and where the work happens.
              </p>
            </div>

            <div className={styles.dossierGrid}>
              {/* Left Profile Card */}
              <div className={styles.profileCard}>
                <div>
                  <div className={styles.founderHeader}>
                    {/* Stylized monogram badge; real photo can be loaded at /images/pardeep_shyoran.jpg */}
                    <div className={styles.avatarBadge} title="Pardeep Shyoran">
                      PS
                    </div>
                    <div className={styles.founderTitleRole}>
                      <h3 className={styles.founderName}>Pardeep Shyoran</h3>
                      <span className={styles.founderRole}>Founder &amp; Lead Full-Stack Engineer</span>
                      <span className={styles.founderLocation}>Sirsa, Haryana 125103, India · Remote Worldwide</span>
                    </div>
                  </div>

                  <p className={styles.founderBio}>
                    I specialize in full-stack MERN architecture, real-time WebSocket systems, and practical AI 
                    integrations. I established Shyoran Systems around a simple conviction: founders deserve direct, 
                    unfiltered collaboration with the engineer who actually architects their database, crafts their 
                    endpoints, and deploys their user interface.
                  </p>

                  {/* Explicit Biographical Placeholder as requested */}
                  <div className={styles.bioPlaceholderNotice}>
                    <div className={styles.placeholderHeader}>
                      <PenIcon size={12} />
                      <span>BIOGRAPHICAL BACKGROUND &amp; CREDENTIALS</span>
                    </div>
                    <p className={styles.placeholderText}>
                      <em>[Placeholder for Pardeep: Add academic degree/university background, formal certifications, prior engineering roles, or personal milestones here to customize this section.]</em>
                    </p>
                  </div>
                </div>

                {/* Factual Operating Snapshot (No fake counters) */}
                <div className={styles.operatingSnapshot}>
                  <div className={styles.snapshotItem}>
                    <div className={styles.snapshotLabel}>Practice Structure</div>
                    <div className={styles.snapshotValue}>Solo Senior Practice</div>
                  </div>
                  <div className={styles.snapshotItem}>
                    <div className={styles.snapshotLabel}>Stack Focus</div>
                    <div className={styles.snapshotValue}>MERN + AI + WebSockets</div>
                  </div>
                  <div className={styles.snapshotItem}>
                    <div className={styles.snapshotLabel}>Base Timezone</div>
                    <div className={styles.snapshotValue}>IST (UTC+5:30) · Global Remote</div>
                  </div>
                  <div className={styles.snapshotItem}>
                    <div className={styles.snapshotLabel}>IP Ownership</div>
                    <div className={styles.snapshotValue}>100% Client-Owned Code</div>
                  </div>
                </div>
              </div>

              {/* Right Interactive Terminal */}
              <div className={styles.terminalCard}>
                <div className={styles.terminalBar}>
                  <div className={styles.terminalControls} aria-hidden="true">
                    <span className={`${styles.terminalDot} ${styles.dotRed}`}></span>
                    <span className={`${styles.terminalDot} ${styles.dotYellow}`}></span>
                    <span className={`${styles.terminalDot} ${styles.dotGreen}`}></span>
                  </div>

                  <div className={styles.terminalTabs} role="tablist" aria-label="Architect Terminal Files">
                    {Object.keys(terminalSnippets).map(tab => (
                      <button
                        key={tab}
                        className={`${styles.terminalTab} ${activeTab === tab ? styles.terminalTabActive : ''}`}
                        onClick={() => setActiveTab(tab)}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab}
                        aria-controls="terminal-code-display"
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <button 
                    className={styles.copyBtn} 
                    onClick={handleCopyCode}
                    aria-label="Copy terminal content"
                    aria-live="polite"
                    type="button"
                  >
                    {copied ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <CheckIcon size={12} /> COPIED!
                      </span>
                    ) : 'COPY'}
                  </button>
                </div>

                <div id="terminal-code-display" className={styles.terminalBody}>
                  <div className={styles.promptLine}>
                    <span className={styles.promptSymbol}>pardeep@shyoran-systems:~$</span> cat {activeTab}
                  </div>
                  <pre className={styles.terminalPre}>
                    {terminalSnippets[activeTab]}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            3. PROBLEMS I SOLVE
            ================================================================== */}
        <section id="problems-solved" className={styles.problemsSection}>
          <div className="wrap">
            <div className={styles.sectionHeader}>
              <div className="badge-pill badge-blue" style={{ marginBottom: '14px' }}>
                <span>// 02 THE PROBLEMS I SOLVE</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                WHY WORK WITH AN <span className="highlight-yellow">INDEPENDENT ENGINEER?</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Traditional agency engagements and disconnected offshore outsourcing often introduce communication 
                friction, bloated billable hours, and brittle code. Here is how Shyoran Systems provides a genuine alternative:
              </p>
            </div>

            <div className={styles.problemsGrid}>
              {problemsSolved.map(item => (
                <div key={item.number} className={styles.problemCard}>
                  <div>
                    <div className={styles.problemHeader}>
                      <span className={styles.problemNumber}>PROBLEM {item.number}</span>
                    </div>
                    <h3 className={styles.problemTitle}>{item.title}</h3>
                  </div>

                  <div className={styles.problemCompareBox}>
                    <div className={styles.agencyTrapRow}>
                      <div className={styles.trapLabel}>
                        <CrossIcon size={12} />
                        <span>The Agency / Outsourcing Trap</span>
                      </div>
                      <p className={styles.trapDesc}>{item.agencyTrap}</p>
                    </div>

                    <div className={styles.shyoranSolveRow}>
                      <div className={styles.solveLabel}>
                        <CheckIcon size={12} />
                        <span>How Shyoran Systems Solves It</span>
                      </div>
                      <p className={styles.solveDesc}>{item.shyoranSolve}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. TECHNICAL STRENGTHS & CLIENT BENEFITS
            ================================================================== */}
        <section id="technical-strengths" className={styles.arsenalSection}>
          <div className="wrap">
            <div className={styles.sectionHeader}>
              <div className="badge-pill badge-white" style={{ marginBottom: '14px' }}>
                <span>// 03 TECHNICAL STRENGTHS</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                CORE CAPABILITIES <span className="highlight-yellow">IN CLIENT TERMS</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                I focus on modern, verified technologies and evaluate architectural choices by their concrete impact 
                on speed, security, and long-term maintainability.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className={styles.categoryFilters} role="tablist" aria-label="Technical Capabilities">
              {[
                { id: 'all', label: 'ALL CAPABILITIES' },
                { id: 'frontend', label: 'FRONTEND UI' },
                { id: 'backend', label: 'BACKEND & APIS' },
                { id: 'realtime', label: 'REAL-TIME & WEBSOCKETS' },
                { id: 'ai', label: 'AI & VECTOR RAG' },
                { id: 'devops', label: 'CLOUD & DEVOPS' }
              ].map(cat => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeFilter === cat.id}
                  className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                  type="button"
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Tech Grid */}
            <div className={styles.techGrid}>
              {filteredTech.map(item => (
                <div key={item.name} className={styles.techItem}>
                  <div className={styles.techHeader}>
                    <span className={styles.techName}>{item.name}</span>
                    <span className={styles.techTag}>{item.tag}</span>
                  </div>
                  <p className={styles.techBenefitDesc}>{item.desc}</p>
                  <div className={styles.techBenefitRow}>
                    ✓ Client benefit: Production reliability &amp; clean maintainability
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            5. APPROACH TO PRODUCT DEVELOPMENT & QUALITY
            ================================================================== */}
        <section id="quality-approach" className={styles.qualitySection}>
          <div className="wrap">
            <div className={styles.sectionHeader}>
              <div className="badge-pill badge-yellow" style={{ marginBottom: '14px' }}>
                <span>// 04 APPROACH TO QUALITY</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                ENGINEERING STANDARDS <span className="highlight-yellow">FROM COMMIT #1</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Speed matters, but speed without rigor creates crippling technical debt. Here is how I protect 
                engineering quality throughout the development cycle:
              </p>
            </div>

            <div className={styles.qualityGrid}>
              {qualityPillars.map((pillar, idx) => (
                <div key={idx} className={styles.qualityCard}>
                  <div className={styles.qualityIconBox}>
                    {pillar.icon}
                  </div>
                  <h3 className={styles.qualityTitle}>{pillar.title}</h3>
                  <p className={styles.qualityDesc}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            6. COMMUNICATION & SCOPE MANAGEMENT
            ================================================================== */}
        <section id="communication-scope" className={styles.communicationSection}>
          <div className="wrap">
            <div className={styles.sectionHeader}>
              <div className="badge-pill badge-blue" style={{ marginBottom: '14px' }}>
                <span>// 05 COMMUNICATION &amp; SCOPE MANAGEMENT</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                HOW I COMMUNICATE &amp; <span className="highlight-yellow">MANAGE SCOPE</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Successful software delivery relies on crystal-clear expectations. You will always know what is being built, 
                where it is deployed, and how changes affect the timeline.
              </p>
            </div>

            <div className={styles.commGrid}>
              {communicationChannels.map((item, idx) => (
                <div key={idx} className={styles.commCard}>
                  <span className={styles.commTag}>{item.tag}</span>
                  <h3 className={styles.commTitle}>{item.title}</h3>
                  <p className={styles.commDesc}>{item.desc}</p>
                  <ul className={styles.commPoints}>
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <span><CheckIcon size={12} /></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            7. COLLABORATION LIFECYCLE & SUPPORT
            ================================================================== */}
        <section id="collaboration-lifecycle" className={styles.lifecycleSection}>
          <div className="wrap">
            <div className={styles.sectionHeader}>
              <div className="badge-pill badge-white" style={{ marginBottom: '14px' }}>
                <span>// 06 COLLABORATION LIFECYCLE</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                FROM SCOPING TO <span className="highlight-yellow">PRODUCTION HANDOVER</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                A realistic overview of what working together looks like across every phase of development:
              </p>
            </div>

            <div className={styles.lifecycleGrid}>
              {lifecycleSteps.map((step, sIdx) => (
                <div key={sIdx} className={styles.lifecycleCard}>
                  <span className={styles.lifecycleStepBadge}>{step.step}</span>
                  <h3 className={styles.lifecycleTitle}>{step.title}</h3>
                  <p className={styles.lifecycleBody}>{step.body}</p>
                  <div className={styles.lifecycleDeliverable}>
                    {step.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            8. VERIFIED PROJECTS SHOWCASE
            ================================================================== */}
        <section id="verified-work" className={styles.verifiedWorkSection}>
          <div className="wrap">
            <div className={styles.sectionHeader}>
              <div className="badge-pill badge-yellow" style={{ marginBottom: '14px' }}>
                <BoltIcon size={12} />
                <span>// 07 VERIFIED PROJECTS</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                STUDIO BUILDS &amp; <span className="highlight-yellow">ARCHITECTURAL DEMOS</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Working software systems engineered by Shyoran Systems. Each build features verifiable technical 
                benchmarks, complete case studies, and documented architectural specs.
              </p>
            </div>

            <div className={styles.verifiedProjectsGrid}>
              {PROJECTS_DATA.map((project) => (
                <article key={project.id} className={styles.projectCard}>
                  <div className={styles.browserFrame}>
                    <div className={styles.frameHeader}>
                      <div className={styles.frameDots} aria-hidden="true">
                        <span className={`${styles.terminalDot} ${styles.dotRed}`}></span>
                        <span className={`${styles.terminalDot} ${styles.dotYellow}`}></span>
                        <span className={`${styles.terminalDot} ${styles.dotGreen}`}></span>
                      </div>
                      <span className={styles.frameUrl}>
                        app.shyoran.systems/{project.id}
                      </span>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.imageAlt || `${project.title} dashboard interface`}
                      className={styles.projectScreenshot}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.projectCardBody}>
                    <div className={styles.projectBadgeRow}>
                      <span 
                        className="badge-pill" 
                        style={{ 
                          background: project.badgeBg || '#0038FF', 
                          color: project.badgeColor || '#FFFFFF',
                          borderColor: 'var(--border-main)'
                        }}
                      >
                        {project.badge}
                      </span>
                      <span className={styles.projectScopeTag}>{project.categoryLabel}</span>
                    </div>

                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSummary}>{project.summary}</p>

                    <div className={styles.benchmarkRow}>
                      {project.verifiedBenchmarks.slice(0, 2).map((bm, bIdx) => (
                        <div key={bIdx} className={styles.benchmarkItem}>
                          <div className={styles.benchmarkVal}>{bm.value}</div>
                          <div className={styles.benchmarkLabel}>{bm.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.projectCardFooter}>
                      <span className={styles.projectScopeTag}>{project.scopeSlug}</span>
                      <Link
                        to={`/work/${project.id}`}
                        className={styles.projectLink}
                        aria-label={`View ${project.title} technical case study`}
                      >
                        <span>VIEW TECHNICAL CASE STUDY</span>
                        <ArrowRightIcon size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            9. CLEAR CTA TO DISCUSS A PROJECT
            ================================================================== */}
        <section id="discuss" className={styles.aboutCtaSection}>
          <div className="wrap">
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <h2 className="display-title">
                  HAVE A PROJECT TO BUILD? LET'S TALK ARCHITECTURE.
                </h2>
                <p>
                  Whether you are planning an MVP, a custom full-stack web application, or an AI vector integration, 
                  reach out directly. No sales pressure, no junior handoffs—just an honest technical discussion about 
                  scope, feasibility, and timelines.
                </p>
                <div className={styles.ctaReassurance}>
                  ✓ Direct response from Pardeep within 24 hours · Studio in Sirsa, India · Serving worldwide
                </div>
              </div>

              <div className={styles.ctaActions}>
                <Link to="/contact" className="btn-brutal btn-brutal-primary btn-lg">
                  <span>DISCUSS A PROJECT</span>
                  <BoltIcon size={14} />
                </Link>
                <a 
                  href="mailto:hello@pardeep-shyoran.me?subject=Project%20Inquiry%20-%20Shyoran%20Systems" 
                  className="btn-brutal btn-brutal-outline btn-lg"
                  style={{ background: '#FFFFFF', color: '#0A0D14' }}
                >
                  <PenIcon size={13} />
                  <span>EMAIL FOUNDER DIRECTLY</span>
                </a>
                <Link 
                  to="/work" 
                  className="btn-brutal btn-brutal-outline btn-lg"
                  style={{ background: 'transparent', color: '#FFFFFF', borderColor: '#FFFFFF' }}
                >
                  <span>BROWSE ALL CASE STUDIES →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
