import { BoltIcon, CheckIcon, LockIcon, PackageIcon, SpeedPillarIcon, TerminalIcon } from '../Icons/Icons';
import styles from './ProofSection.module.css';

const capabilities = [
  {
    icon: <SpeedPillarIcon size={20} />,
    title: 'Full-Stack Web Engineering',
    desc: 'React 19, Node.js, Express, and modern responsive architectures engineered for sub-second page loads.'
  },
  {
    icon: <TerminalIcon size={20} />,
    title: 'AI & Vector Retrieval Systems',
    desc: 'LangChain, OpenAI, and MongoDB Atlas Vector Search pipelines with streaming Server-Sent Events (SSE).'
  },
  {
    icon: <PackageIcon size={20} />,
    title: 'Cloud Infrastructure & CI/CD',
    desc: 'Dockerized AWS deployments, automated staging environments, and Cloudflare edge routing.'
  },
  {
    icon: <LockIcon size={20} />,
    title: '100% Intellectual Property Ownership',
    desc: 'Every repository, cloud resource, schema, and line of code is transferred directly to your organization.'
  }
];

const ProofSection = () => {
  return (
    <section className={styles.proofSection}>
      <div className="wrap">
        <div className={styles.proofHeader}>
          <div className={styles.proofTagRow}>
            <span className="badge-pill badge-white">
              <BoltIcon size={12} />
              <span>VERIFIED CAPABILITIES</span>
            </span>
            <h2 className={styles.proofLeadText}>
              Engineering standard backed by 6+ years of production software architecture
            </h2>
          </div>
        </div>

        <div className={styles.capabilitiesGrid}>
          {capabilities.map((item, idx) => (
            <div key={idx} className={styles.capabilityCard}>
              <div className={styles.cardHeader}>
                <span className={styles.iconBox}>{item.icon}</span>
                <span className={styles.checkMark}>
                  <CheckIcon size={14} />
                </span>
              </div>
              <h3 className={styles.capabilityTitle}>{item.title}</h3>
              <p className={styles.capabilityDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
