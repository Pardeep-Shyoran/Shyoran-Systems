import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BoltIcon, PenIcon, CheckIcon } from '../../components/Icons/Icons';
import styles from './About.module.css';

const terminalSnippets = {
  'whoami.sh': `#!/usr/bin/env bash
# Lead Systems Architect Dossier
NAME="Pardeep Shyoran"
TITLE="Lead Architect & Founder @ Shyoran Systems"
LOCATION="Sirsa, Haryana 125103, India · Remote Worldwide"
CORE_FOCUS="Full-Stack MERN (React, Node, Express, MongoDB) · AI/LLM Integration · Real-Time Web"

STATUS="Available for selective high-impact builds (Q1/Q2 2026)"
UPTIME="6+ Years continuous production engineering"
PHILOSOPHY="Ship working software in days, not slide decks in months."`,

  'stack.json': `{
  "studio": "Shyoran Systems",
  "specialization": "MERN Stack (MongoDB, Express, React, Node.js)",
  "what_we_do": [
    "Full-stack web app development (React, Node.js, MongoDB, Express)",
    "AI/LLM integration — chatbots, automation, and generative AI features",
    "E-commerce platforms with secure auth, payments, and admin dashboards",
    "Real-time systems — messaging, live collaboration, and notifications",
    "API design, cloud deployment (AWS), and third-party integrations"
  ],
  "core_stack": {
    "mern": ["React 19", "Node.js (LTS)", "Express", "MongoDB Atlas"],
    "realtime_and_commerce": ["Socket.io", "WebSockets", "Stripe API", "Razorpay", "Redis"],
    "ai_layer": ["OpenAI API", "Anthropic Claude", "LangChain", "Atlas Vector Search", "RAG"],
    "cloud": ["AWS (ECS, S3, CloudFront)", "Docker", "GitHub Actions CI/CD"]
  },
  "value_prop": "Lean workflows & fast turnaround — for founders who need real software."
}`,

  'principles.md': `# Engineering Operating Principles

1. **Direct Line to the Architect**
   No account managers or account executives. Communication is pure engineer-to-founder.

2. **AI-Augmented Throughput**
   We utilize cutting-edge AI orchestration to write, test, and ship code at 10x traditional agency speeds.

3. **Zero Technical Debt Shortcuts**
   MVPs shouldn't be disposable. We construct clean schemas, explicit types, and automated deployment pipelines from commit #1.`
};

const techInventory = [
  { name: 'React 19', category: 'frontend', tag: 'Core UI', desc: 'Modern component architectures, hooks, and optimistic UI rendering.' },
  { name: 'TypeScript', category: 'frontend', tag: 'Type Safety', desc: 'Strict interface typing across clients and shared data contracts.' },
  { name: 'Vite & Next.js', category: 'frontend', tag: 'Bundler/SSR', desc: 'Lightning-fast HMR and production server-rendered workflows.' },
  { name: 'CSS Modules', category: 'frontend', tag: 'Styling', desc: 'Scoped, maintainable neo-brutalist styling without bundle bloat.' },

  { name: 'Node.js & Express', category: 'backend', tag: 'MERN Core', desc: 'High-throughput asynchronous REST & GraphQL APIs with input validation.' },
  { name: 'MongoDB Atlas & Mongoose', category: 'backend', tag: 'MERN Database', desc: 'Flexible document schemas, aggregation pipelines, and compound indexing.' },
  { name: 'Socket.io & WebSockets', category: 'backend', tag: 'Real-Time', desc: 'Live messaging, collaboration rooms, presence detection, and state sync.' },
  { name: 'PostgreSQL & Redis', category: 'backend', tag: 'SQL / Cache', desc: 'Relational data integrity paired with sub-millisecond caching and pub/sub.' },

  { name: 'OpenAI & Claude SDKs', category: 'ai', tag: 'LLM Foundations', desc: 'Chatbots, structured outputs, tool agents, and real-time streaming.' },
  { name: 'LangChain & Vector RAG', category: 'ai', tag: 'Knowledge Retrieval', desc: 'Context-augmented retrieval over proprietary databases via Atlas Vector & Pinecone.' },
  { name: 'Stripe & Razorpay', category: 'backend', tag: 'Payments', desc: 'Secure checkout sessions, customer subscriptions, and webhook reconciliation.' },
  { name: 'AI Autonomous Agents', category: 'ai', tag: 'Autonomous Ops', desc: 'Automated synthesis, background pipeline execution, and self-evaluating workflows.' },

  { name: 'Docker Containers', category: 'devops', tag: 'Containerization', desc: 'Consistent container environments from local dev to production ECS clusters.' },
  { name: 'AWS Cloud (ECS, S3, CloudFront)', category: 'devops', tag: 'Cloud Host', desc: 'Containerized hosting, distributed assets, and edge CDN routing.' },
  { name: 'GitHub CI/CD Actions', category: 'devops', tag: 'Automation', desc: 'Automated linting, testing, and zero-downtime deployment pipelines.' },
  { name: 'Linux & Nginx', category: 'devops', tag: 'Systems', desc: 'Hardened server environments with reverse-proxy SSL configurations.' }
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

  return (
    <>
      <Helmet>
        <title>About Us — Shyoran Systems | Solo Senior Engineering Practice</title>
        <meta 
          name="description" 
          content="Learn why Shyoran Systems replaces bloated agencies with a solo senior engineering practice. Direct architect access, modern MERN & AI workflows, shipped in weeks." 
        />
      </Helmet>

      <main className={styles.aboutMain}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.heroBadgeRow}>
              <div className="badge-pill" style={{ background: 'var(--accent-yellow)', color: 'var(--text-main)' }}>
                <span><BoltIcon size={12} /></span>
                <span>ORIGIN &amp; PHILOSOPHY // SOLO SENIOR PRACTICE</span>
              </div>
              <span className={`${styles.handSticker} hand`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>100% written, deployed, and architected by Pardeep Shyoran</span>
                <PenIcon size={13} />
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              NO ACCOUNT MANAGERS.<br />
              NO JUNIOR HANDOFFS.<br />
              <span className="highlight-yellow">JUST CODE THAT SHIPS.</span>
            </h1>

            <p className={styles.heroLead}>
              The traditional agency model is broken: bloated hourly rates, junior bait-and-switch, 
              and months of slide decks before seeing a single line of working code. 
              <strong> Shyoran Systems was engineered to be the antidote.</strong> A solo senior systems 
              architect leveraging high-velocity AI workflows to deliver production MERN &amp; AI web applications in weeks.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/contact" className="btn-brutal btn-brutal-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>START A PROJECT</span>
                <BoltIcon size={14} />
              </Link>
              <a href="#manifesto" className="btn-brutal btn-brutal-outline">
                READ THE MANIFESTO ↓
              </a>
            </div>
          </div>
        </section>

        {/* FOUNDER DOSSIER & TERMINAL BENTO */}
        <section className={styles.dossierSection}>
          <div className="wrap">
            <div className={`${styles.sectionHeader} reveal`}>
              <div className="badge-pill" style={{ background: '#FFFFFF', color: 'var(--text-main)', marginBottom: '14px' }}>
                <span>// 01 ARCHITECT PROFILE</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                MEET THE <span className="highlight-yellow">SYSTEMS ARCHITECT</span>
              </h2>
            </div>

            <div className={styles.dossierGrid}>
              {/* Profile Card */}
              <div className={`${styles.profileCard} reveal`}>
                <div>
                  <div className={styles.founderHeader}>
                    <div className={styles.avatarBadge}>PS</div>
                    <div className={styles.founderTitleRole}>
                      <h3 className={styles.founderName}>Pardeep Shyoran</h3>
                      <span className={styles.founderRole}>Lead Systems Architect &amp; Founder</span>
                    </div>
                  </div>

                  <p className={styles.founderBio}>
                    I have spent over 6 years engineering high-performance web systems, full-stack applications, 
                    and autonomous AI pipelines. At Shyoran Systems, you work directly with me—from architectural 
                    specifications and database design to frontend polish and cloud deployment.
                  </p>
                </div>

                <div className={styles.statsBar}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>6+</div>
                    <div className={styles.statLabel}>Years Engineering</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>100%</div>
                    <div className={styles.statLabel}>On-Time Deploys</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>0</div>
                    <div className={styles.statLabel}>Junior Handoffs</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>2-4w</div>
                    <div className={styles.statLabel}>Avg MVP Timeline</div>
                  </div>
                </div>
              </div>

              {/* Interactive Terminal Card */}
              <div className={`${styles.terminalCard} reveal`}>
                <div className={styles.terminalBar}>
                  <div className={styles.terminalControls}>
                    <span className={`${styles.terminalDot} ${styles.dotRed}`}></span>
                    <span className={`${styles.terminalDot} ${styles.dotYellow}`}></span>
                    <span className={`${styles.terminalDot} ${styles.dotGreen}`}></span>
                  </div>

                  <div className={styles.terminalTabs}>
                    {Object.keys(terminalSnippets).map(tab => (
                      <button
                        key={tab}
                        className={`${styles.terminalTab} ${activeTab === tab ? styles.terminalTabActive : ''}`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <button 
                    className={styles.copyBtn} 
                    onClick={handleCopyCode}
                    aria-label="Copy terminal content"
                  >
                    {copied ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <CheckIcon size={12} /> COPIED!
                      </span>
                    ) : 'COPY'}
                  </button>
                </div>

                <div className={styles.terminalBody}>
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

        {/* MANIFESTO SECTION */}
        <section id="manifesto" className={styles.manifestoSection}>
          <div className="wrap">
            <div className={`${styles.sectionHeader} reveal`}>
              <div className="badge-pill" style={{ background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', marginBottom: '14px' }}>
                <span>// 02 THE ANTI-AGENCY MANIFESTO</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                THREE PILLARS OF <span className="highlight-yellow">HIGH-VELOCITY CRAFT</span>
              </h2>
            </div>

            <div className={styles.pillarsGrid}>
              <div className={`${styles.pillarCard} reveal`}>
                <span className={styles.pillarNumber}>PILLAR 01</span>
                <h3 className={styles.pillarTitle}>Direct Architect Line</h3>
                <p className={styles.pillarDesc}>
                  You communicate directly with the engineer writing your schemas, implementing your endpoints, 
                  and structuring your UI. No game of telephone, no account executives misinterpreting requirements, 
                  and zero bureaucratic latency.
                </p>
              </div>

              <div className={`${styles.pillarCard} reveal`}>
                <span className={styles.pillarNumber}>PILLAR 02</span>
                <h3 className={styles.pillarTitle}>AI-Augmented Velocity</h3>
                <p className={styles.pillarDesc}>
                  We integrate modern agentic workflows, LLM orchestration, and rapid synthesis tools directly 
                  into the development lifecycle. What previously required a 5-person junior team is shipped by 
                  1 senior architect in a fraction of the time.
                </p>
              </div>

              <div className={`${styles.pillarCard} reveal`}>
                <span className={styles.pillarNumber}>PILLAR 03</span>
                <h3 className={styles.pillarTitle}>Production-Grade Rigor</h3>
                <p className={styles.pillarDesc}>
                  Speed never excuses sloppy code. Every application features typed data contracts, clean component 
                  hierarchies, modular architecture, and automated cloud deployments ready to scale from user 1 to 100,000+.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECH ARSENAL SECTION */}
        <section className={styles.arsenalSection}>
          <div className="wrap">
            <div className={`${styles.sectionHeader} reveal`}>
              <div className="badge-pill" style={{ background: '#FFFFFF', color: 'var(--text-main)', marginBottom: '14px' }}>
                <span>// 03 BATTLE-TESTED ARSENAL</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                THE MODERN <span className="highlight-yellow">ENGINEERING STACK</span>
              </h2>
            </div>

            {/* Category Filters */}
            <div className={styles.categoryFilters}>
              {['all', 'frontend', 'backend', 'ai', 'devops'].map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className={styles.techGrid}>
              {filteredTech.map(item => (
                <div key={item.name} className={`${styles.techItem} reveal`}>
                  <div className={styles.techHeader}>
                    <span className={styles.techName}>{item.name}</span>
                    <span className={styles.techTag}>{item.tag}</span>
                  </div>
                  <p className={styles.techDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONE DELIVERY PROCESS */}
        <section className={styles.milestonesSection}>
          <div className="wrap">
            <div className={`${styles.sectionHeader} reveal`}>
              <div className="badge-pill" style={{ background: 'var(--accent-yellow)', color: 'var(--text-main)', marginBottom: '14px' }}>
                <span>// 04 HOW WE SHIP</span>
              </div>
              <h2 className={`${styles.sectionTitle} display-title`}>
                FROM ZERO TO PRODUCTION <span className="highlight-yellow">IN 4 STEPS</span>
              </h2>
            </div>

            <div className={styles.timelineGrid}>
              <div className={`${styles.timelineCard} reveal`}>
                <span className={styles.timelineDays}>DAYS 1 - 2</span>
                <h3 className={styles.timelineTitle}>Architectural Blueprint</h3>
                <p className={styles.timelineBody}>
                  We dissect your product vision, define exact data models, map critical API contracts, and lock in the milestone scope.
                </p>
              </div>

              <div className={`${styles.timelineCard} reveal`}>
                <span className={styles.timelineDays}>DAYS 3 - 5</span>
                <h3 className={styles.timelineTitle}>Foundation Rig</h3>
                <p className={styles.timelineBody}>
                  Database provisioning, authentication guards, component design system setup, and CI/CD automated staging deployments.
                </p>
              </div>

              <div className={`${styles.timelineCard} reveal`}>
                <span className={styles.timelineDays}>DAYS 6 - 16</span>
                <h3 className={styles.timelineTitle}>Velocity Sprints</h3>
                <p className={styles.timelineBody}>
                  Core product features, AI agent pipelines, interactive UI state, and weekly live demo environments with zero surprise delays.
                </p>
              </div>

              <div className={`${styles.timelineCard} reveal`}>
                <span className={styles.timelineDays}>DAYS 17 - 21</span>
                <h3 className={styles.timelineTitle}>Production Cutover</h3>
                <p className={styles.timelineBody}>
                  Performance optimization, load testing, security checks, production domain DNS pointing, and comprehensive codebase handoff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MONOLITH CTA SECTION */}
        <section className={styles.aboutCtaSection}>
          <div className="wrap">
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <h2 className="display-title">
                  READY TO SKIP THE BUREAUCRACY?
                </h2>
                <p>
                  Let's discuss your project scope, technical requirements, and launch timeline directly.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link to="/contact" className="btn-brutal btn-brutal-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>GET IN TOUCH</span>
                  <BoltIcon size={14} />
                </Link>
                <a href="/#tracks" className="btn-brutal btn-brutal-outline">
                  VIEW TRACKS →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
