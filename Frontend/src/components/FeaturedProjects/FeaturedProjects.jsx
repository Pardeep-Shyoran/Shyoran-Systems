import { Link } from 'react-router-dom';
import { BoltIcon, LockIcon, TerminalIcon, CheckIcon } from '../Icons/Icons';
import styles from './FeaturedProjects.module.css';

const featuredProjects = [
  {
    id: 'omniflow-ai',
    title: 'OmniFlow AI — Autonomous Vector Retrieval & Document Intelligence',
    category: 'AI / LLM SHOWCASE',
    categoryBadge: 'badge-blue',
    screenshot: '/images/omniflow_dashboard.jpg',
    summary:
      'An enterprise generative AI retrieval system querying dense private technical documentation with sub-50ms vector search latency and streaming responses.',
    metrics: [
      { label: 'Query Latency', value: '42ms' },
      { label: 'Time to First Token', value: '< 65ms' },
      { label: 'Semantic Cache Hit', value: '< 8ms' }
    ],
    techStack: ['React 19', 'Node.js', 'Atlas Vector', 'LangChain', 'OpenAI', 'AWS'],
    scopeQuery: 'AI Integration & Automation'
  },
  {
    id: 'syncpulse',
    title: 'SyncPulse — Low-Latency Real-Time Collaboration Hub',
    category: 'REAL-TIME SHOWCASE',
    categoryBadge: 'badge-yellow',
    screenshot: '/images/syncpulse_dashboard.jpg',
    summary:
      'A multiplayer operational dashboard featuring live cursor tracking, conflict-free state synchronization, and sub-15ms WebSocket event delivery.',
    metrics: [
      { label: 'Socket Latency', value: '14ms' },
      { label: 'Compression', value: '62% MsgPack' },
      { label: 'Reconnect Recovery', value: '< 120ms' }
    ],
    techStack: ['React 19', 'Node.js', 'Socket.io', 'Redis Pub/Sub', 'MongoDB Atlas', 'Docker'],
    scopeQuery: 'API & Backend Architecture'
  },
  {
    id: 'nexus-commerce',
    title: 'NexusCommerce — High-Velocity Global B2B Platform',
    category: 'MERN FULL-STACK',
    categoryBadge: 'badge-green',
    screenshot: '/images/nexus_dashboard.jpg',
    summary:
      'A transactional B2B checkout engine engineered for international recurring subscription billing, idempotent webhook handling, and real-time inventory.',
    metrics: [
      { label: 'Checkout TTFB', value: '< 95ms' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Idempotency SLA', value: '100.0%' }
    ],
    techStack: ['React 19', 'Express REST', 'MongoDB Atlas', 'Stripe API', 'AWS CloudFront'],
    scopeQuery: 'SaaS Product Development'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className={styles.projectsSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className={styles.eyebrowRow}>
            <span className="badge-pill badge-white">
              <BoltIcon size={12} />
              <span>SELECTED CLIENT BUILDS</span>
            </span>
            <span className="sticker-hand">
              Real Architectures · Verifiable Code
            </span>
          </div>

          <h2 className={`${styles.sectionTitle} display-title`}>
            RECENT SOFTWARE <span className="highlight-yellow">WE HAVE SHIPPED.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Explore actual software systems engineered by Shyoran Systems. We design clean data models, 
            resilient APIs, and responsive interfaces that solve real operational bottlenecks.
          </p>
        </div>

        <div className={styles.projectsList}>
          {featuredProjects.map((project, index) => (
            <article key={project.id} className={`${styles.projectCard} reveal`}>
              <div className={styles.cardVisualCol}>
                <div className={styles.browserFrame}>
                  <div className={styles.frameHeader}>
                    <div className={styles.frameDots}>
                      <span className={styles.dotRed}></span>
                      <span className={styles.dotYellow}></span>
                      <span className={styles.dotGreen}></span>
                    </div>
                    <span className={styles.frameUrl}>
                      app.shyoran.systems/{project.id}
                    </span>
                  </div>
                  <img
                    src={project.screenshot}
                    alt={`${project.title} — production software interface engineered by Shyoran Systems`}
                    className={styles.projectImage}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>

              <div className={styles.cardContentCol}>
                <div className={styles.contentTop}>
                  <span className={`badge-pill ${project.categoryBadge}`}>
                    {project.category}
                  </span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSummary}>{project.summary}</p>
                </div>

                <div className={styles.metricsRow}>
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className={styles.metricItem}>
                      <span className={styles.metricLabel}>{metric.label}</span>
                      <span className={styles.metricVal}>{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.techStackRow}>
                  <span className={styles.techStackLabel}>Stack:</span>
                  <div className={styles.techPills}>
                    {project.techStack.map(tech => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.actionsRow}>
                  <Link
                    to={`/contact?scope=${encodeURIComponent(project.scopeQuery)}`}
                    className="btn-brutal btn-brutal-primary btn-sm"
                  >
                    <span>Discuss Similar Build</span>
                    <BoltIcon size={12} />
                  </Link>
                  <Link
                    to={`/work/${project.id}`}
                    className="btn-brutal btn-brutal-outline btn-sm"
                    aria-label={`View ${project.title} Case Study & Architecture Spec`}
                  >
                    <span>View Case Study &amp; Spec →</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.viewAllFooter} reveal`}>
          <div className={styles.viewAllBox}>
            <div>
              <h4 className={styles.viewAllTitle}>Want to inspect more architectural specifications?</h4>
              <p className={styles.viewAllText}>
                Our full portfolio includes deep dives into database schemas, latency benchmarks, and live code manifests.
              </p>
            </div>
            <Link to="/work" className="btn-brutal btn-brutal-outline btn-md">
              <span>Explore All Case Studies &amp; Blueprints →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
