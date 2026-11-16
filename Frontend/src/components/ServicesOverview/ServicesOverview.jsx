import { Link } from 'react-router-dom';
import { BoltIcon, CheckIcon, SpeedPillarIcon, MernPillarIcon, AiPillarIcon, PackageIcon } from '../Icons/Icons';
import styles from './ServicesOverview.module.css';

const services = [
  {
    id: 'web-apps',
    title: 'Web Applications',
    tag: 'MERN FULL-STACK',
    tagBadge: 'badge-blue',
    icon: <MernPillarIcon size={32} />,
    desc: 'Custom, scalable web platforms built with React 19, Node.js, and MongoDB / PostgreSQL. Engineered for responsive speed, data integrity, and intuitive user workflows.',
    features: [
      'Interactive React 19 single-page applications',
      'Robust Node.js & Express REST/SSE APIs',
      'Compound indexing & ACID database transactions',
      'Role-based permissions & secure JWT sessions'
    ],
    scopeQuery: 'Custom Web Applications',
    anchor: 'web-apps'
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    tag: 'RECURRING PLATFORMS',
    tagBadge: 'badge-yellow',
    icon: <SpeedPillarIcon size={32} />,
    desc: 'End-to-end software-as-a-service development. We build the complete infrastructure needed to launch, bill, and scale your subscription business.',
    features: [
      'Stripe subscription billing & webhook pipelines',
      'Multi-tenant data isolation & founder telemetry',
      'Real-time notifications & collaborative state',
      'Automated tenant onboarding & usage metering'
    ],
    scopeQuery: 'SaaS Product Development',
    anchor: 'saas-products'
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    tag: 'LLM & VECTOR ENGINES',
    tagBadge: 'badge-green',
    icon: <AiPillarIcon size={32} />,
    desc: 'Embed intelligent capabilities into new or existing software products. Practical, cost-controlled generative AI systems built for production use.',
    features: [
      'Retrieval-Augmented Generation (RAG) knowledge bases',
      'Sub-50ms vector search with Atlas & semantic caching',
      'Streaming conversational endpoints & tool calling',
      'Token budget guardrails & prompt regression testing'
    ],
    scopeQuery: 'AI Integration & Automation',
    anchor: 'ai-automation'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps & Responsive SPAs',
    tag: 'PROGRESSIVE WEB APPS',
    tagBadge: 'badge-white',
    icon: <PackageIcon size={32} />,
    desc: 'Cross-platform progressive web apps and mobile-first interfaces that deliver native-like responsiveness, offline readiness, and fluid touch interactions.',
    features: [
      'Mobile-first responsive neo-brutalist UI architecture',
      'Offline caching & optimistic data reconciliation',
      'Installable PWA manifests & touch gesture support',
      'Fast CDN edge delivery for global mobile traffic'
    ],
    scopeQuery: 'Mobile & Responsive PWAs',
    anchor: 'web-apps'
  }
];

const ServicesOverview = () => {
  return (
    <section id="services-overview" className={styles.servicesSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className={styles.eyebrowRow}>
            <span className="badge-pill badge-white">
              <BoltIcon size={12} />
              <span>CORE OFFERINGS</span>
            </span>
            <span className="sticker-hand">
              Focused Capabilities · Zero Fluff
            </span>
          </div>

          <h2 className={`${styles.sectionTitle} display-title`}>
            WHAT WE BUILD FOR <span className="highlight-yellow">CLIENTS.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Specialized engineering services tailored for startups and founders who value technical craftsmanship, direct communication, and real software.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} className={`${styles.serviceCard} reveal`}>
              <div className={styles.cardTop}>
                <div className={styles.iconTagRow}>
                  <div className={styles.iconBox}>{service.icon}</div>
                  <span className={`badge-pill ${service.tagBadge}`}>{service.tag}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>

              <div className={styles.featuresList}>
                <span className={styles.featuresHeading}>KEY DELIVERABLES:</span>
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className={styles.featureItem}>
                    <span className={styles.checkIcon}>
                      <CheckIcon size={12} />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cardActions}>
                <Link
                  to={`/contact?scope=${encodeURIComponent(service.scopeQuery)}`}
                  className="btn-brutal btn-brutal-primary btn-sm btn-full"
                >
                  <span>Inquire About {service.title}</span>
                  <BoltIcon size={12} />
                </Link>
                <Link
                  to={`/services#${service.anchor}`}
                  className={styles.specDetailsLink}
                  aria-label={`View ${service.title} Architecture Specifications`}
                >
                  View {service.title} Specs →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
