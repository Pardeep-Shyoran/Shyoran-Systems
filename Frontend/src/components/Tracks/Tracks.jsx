import styles from './Tracks.module.css';

const trackData = [
  {
    num: '01',
    badge: 'RAPID LAUNCH',
    title: 'MVP Speedrun',
    badgeBg: '#000000',
    badgeColor: '#FFFFFF',
    desc: 'Go from raw concept to a fully functional, revenue-ready web product deployed to production in 14-21 business days.',
    features: [
      'Full authentication (OAuth, JWT, magic links)',
      'Responsive React frontend & custom styling',
      'RESTful API with MongoDB / PostgreSQL',
      'Stripe/Razorpay payment processing',
      'Production cloud deployment on AWS'
    ],
    inquirySubject: 'Inquiry: Track 01 MVP Speedrun'
  },
  {
    num: '02',
    badge: 'AI NATIVE',
    title: 'AI & LLM Workflows',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    desc: 'Inject modern intelligence directly into your app with private vector databases, autonomous tool agents, and conversational streaming.',
    features: [
      'Custom RAG pipeline over your documentation',
      'Vector embeddings (Pinecone, Atlas Vector)',
      'Real-time streaming response UI',
      'Automated background workflows & agents',
      'Token usage monitoring & rate protection'
    ],
    inquirySubject: 'Inquiry: Track 02 AI Workflows'
  },
  {
    num: '03',
    badge: 'ENTERPRISE',
    title: 'Custom SaaS Platforms',
    badgeBg: '#000000',
    badgeColor: '#FFFFFF',
    desc: 'Scalable multi-tenant web applications engineered for heavy recurring usage, permissions, and complex data models.',
    features: [
      'Multi-tenant architecture & team workspaces',
      'Role-based access control (RBAC)',
      'Interactive data analytics & charts',
      'Real-time WebSocket notifications',
      'Automated transactional email sequences'
    ],
    inquirySubject: 'Inquiry: Track 03 Custom SaaS'
  },
  {
    num: '04',
    badge: 'OPTIMIZATION',
    title: 'Cloud & Performance Modernization',
    badgeBg: '#000000',
    badgeColor: '#FFFFFF',
    desc: 'Transform slow, brittle legacy applications into sub-second, containerized microservices ready for enterprise traffic.',
    features: [
      'Database indexing & query optimization',
      'Docker containerization & CI/CD pipeline',
      'Redis caching & high-volume rate limiting',
      'Zero-downtime AWS deployment setup',
      'Comprehensive code audit & security fixes'
    ],
    inquirySubject: 'Inquiry: Track 04 Cloud Modernization'
  }
];

const Tracks = () => {
  return (
    <section id="tracks" className={styles.tracksSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className="badge-pill" style={{ background: '#FFFFFF' }}>
            <span>// BUILD TRACKS</span>
          </div>
          <h2 className="display-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginTop: '14px' }}>
            CHOOSE YOUR SYSTEM TRACK
          </h2>
          <p className={styles.sectionSubtitle}>
            Fixed-scope engineering tracks engineered for founders with zero time to waste.
          </p>
        </div>

        <div className={`${styles.tracksGrid} reveal`}>
          {trackData.map((track) => (
            <div key={track.num} className={styles.trackCard}>
              <div className={styles.trackHeader}>
                <span className={styles.trackNum}>{track.num}</span>
                <span 
                  className={styles.trackBadge} 
                  style={{ background: track.badgeBg, color: track.badgeColor }}
                >
                  {track.badge}
                </span>
              </div>
              <h3 className={styles.trackTitle}>{track.title}</h3>
              <p className={styles.trackDesc}>{track.desc}</p>
              <div className={styles.trackFeatures}>
                {track.features.map((feat, fIdx) => (
                  <div key={fIdx} className={styles.featItem}>
                    ✓ {feat}
                  </div>
                ))}
              </div>
              <a 
                className="btn-brutal btn-brutal-primary" 
                href={`mailto:hello@pardeep-shyoran.me?subject=${encodeURIComponent(track.inquirySubject)}`}
              >
                SCOPE TRACK {track.num} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
