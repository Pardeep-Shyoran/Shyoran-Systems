import { BoltIcon } from '../Icons/Icons';
import styles from './ProcessTimeline.module.css';

const workflowSteps = [
  {
    stepNum: 'STAGE 01',
    badgeBg: 'var(--accent-blue)',
    badgeColor: '#FFFFFF',
    title: 'Discovery',
    subtitle: 'Vision & Requirements',
    desc: 'An in-depth technical consultation to examine your product goals, core user journeys, and architectural constraints directly with the lead engineer.'
  },
  {
    stepNum: 'STAGE 02',
    badgeBg: 'var(--accent-yellow)',
    badgeColor: '#000000',
    title: 'Scope & Architecture',
    subtitle: 'Data Contracts & Milestones',
    desc: 'Establishing precise data models, API endpoints, feature specifications, and clear flat-rate milestones with no ambiguous estimates or billable padding.'
  },
  {
    stepNum: 'STAGE 03',
    badgeBg: 'var(--accent-blue)',
    badgeColor: '#FFFFFF',
    title: 'Iterative Build',
    subtitle: 'Weekly Live Staging',
    desc: 'Development sprints with continuous CI/CD deployments. You receive a private shared Slack channel and weekly staging URLs to test features as they are built.'
  },
  {
    stepNum: 'STAGE 04',
    badgeBg: 'var(--accent-green-bright)',
    badgeColor: '#000000',
    title: 'Launch & Support',
    subtitle: '100% IP & 30-Day Warranty',
    desc: 'Production deployment to your cloud accounts, complete codebase and DNS handover, and 30 days of post-launch warranty support covering any adjustments.'
  }
];

const ProcessTimeline = () => {
  return (
    <section id="workflow" className={styles.processSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className={styles.eyebrowRow}>
            <span className="badge-pill badge-yellow">
              <BoltIcon size={12} />
              <span>THE PROJECT WORKFLOW</span>
            </span>
            <span className="sticker-hand">
              Transparent · Predictable · 4 Simple Stages
            </span>
          </div>

          <h2 className={`${styles.sectionTitle} display-title`}>
            HOW WE TAKE YOUR PRODUCT <span className="highlight-yellow">TO PRODUCTION.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A disciplined, four-phase engineering framework designed to eliminate bureaucracy, align technical decisions with your business goals, and deliver software that works.
          </p>
        </div>

        <div className={`${styles.processTimeline} reveal`}>
          {workflowSteps.map((step, idx) => (
            <div key={idx} className={styles.processCard}>
              <div 
                className={styles.stepNumBadge} 
                style={{ background: step.badgeBg, color: step.badgeColor }}
              >
                {step.stepNum}
              </div>
              <div className={styles.stepSubtitle}>{step.subtitle}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
