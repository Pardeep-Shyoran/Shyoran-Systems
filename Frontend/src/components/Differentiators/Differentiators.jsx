import { BoltIcon, LockIcon, PackageIcon, CheckIcon, TerminalIcon, SpeedPillarIcon } from '../Icons/Icons';
import styles from './Differentiators.module.css';

const differentiators = [
  {
    icon: <TerminalIcon size={24} />,
    title: 'Direct Architect Communication',
    subtitle: 'No Account Managers or Middlemen',
    desc: 'You communicate directly with lead engineer Pardeep Shyoran. Questions, feedback, and architectural pivots are resolved immediately in a shared Slack channel without bureaucratic latency.'
  },
  {
    icon: <SpeedPillarIcon size={24} />,
    title: 'Maintainable, Production-Ready Code',
    subtitle: 'Clean Standards & Strict Types',
    desc: 'Speed never comes at the expense of code quality. Every application features typed data contracts, modular components, and comprehensive setup scripts that your team can easily extend or maintain.'
  },
  {
    icon: <PackageIcon size={24} />,
    title: 'Transparent Milestones & Staging',
    subtitle: 'Weekly Live Demonstrations',
    desc: 'Never wonder about your project status. You receive active staging URLs every week to test working features, verify requirements against real data, and see tangible progress at every step.'
  },
  {
    icon: <LockIcon size={24} />,
    title: '100% Intellectual Property Ownership',
    subtitle: 'Zero Proprietary Lock-In',
    desc: 'All source code, database schemas, cloud infrastructure scripts, and API keys belong completely to you. No ongoing agency retainers required to access your own product.'
  }
];

const Differentiators = () => {
  return (
    <section id="differentiators" className={styles.diffSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className={styles.eyebrowRow}>
            <span className="badge-pill badge-white">
              <BoltIcon size={12} />
              <span>WHY WORK WITH US</span>
            </span>
            <span className="sticker-hand">
              Accountability · Quality · Transparency
            </span>
          </div>

          <h2 className={`${styles.sectionTitle} display-title`}>
            ENGINEERING PRINCIPLES <span className="highlight-yellow">YOU CAN RELY ON.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            We operate as an independent studio dedicated to high craftsmanship, honest feasibility, and reliable delivery for founders who demand real software.
          </p>
        </div>

        <div className={styles.diffGrid}>
          {differentiators.map((diff, idx) => (
            <div key={idx} className={`${styles.diffCard} reveal`}>
              <div className={styles.diffCardHeader}>
                <div className={styles.iconBox}>{diff.icon}</div>
                <span className={styles.pillarTag}>PILLAR 0{idx + 1}</span>
              </div>
              <h3 className={styles.diffTitle}>{diff.title}</h3>
              <div className={styles.diffSubtitle}>{diff.subtitle}</div>
              <p className={styles.diffDesc}>{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
