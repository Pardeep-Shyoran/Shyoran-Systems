import styles from './ProcessTimeline.module.css';

const steps = [
  {
    badge: 'STAGE 01',
    badgeBg: 'var(--accent-blue)',
    badgeColor: '#FFFFFF',
    timeline: 'DAY 1 – DAY 2',
    title: 'Pin the Core Spec',
    desc: 'A rapid 45-minute whiteboard session to isolate the critical customer loop. We eliminate superfluous features and lock down database models and user flows.'
  },
  {
    badge: 'STAGE 02',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    timeline: 'DAY 3 – DAY 12',
    title: 'Heads-Down Build Sprint',
    desc: 'Direct development. You get a private Slack channel, weekly staging URLs, and async video walk-throughs as each feature is completed and tested.'
  },
  {
    badge: 'STAGE 03',
    badgeBg: '#00E676',
    badgeColor: '#000000',
    timeline: 'DAY 14 & BEYOND',
    title: 'Production Launch & Hand-off',
    desc: 'Deployment to your AWS/Cloud accounts, 100% intellectual property transfer, and a 30-day post-launch warranty covering any questions or adjustments.'
  }
];

const ProcessTimeline = () => {
  return (
    <section id="process" className={styles.processSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className="badge-pill" style={{ background: '#FFE600' }}>
            <span>// THE SPRINT PROTOCOL</span>
          </div>
          <h2 className="display-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginTop: '14px' }}>
            HOW WE SHIP SOFTWARE IN WEEKS
          </h2>
          <p className={styles.sectionSubtitle}>
            A clean, transparent three-stage pipeline. No committee, no bureaucracy, no fluff.
          </p>
        </div>

        <div className={`${styles.processTimeline} reveal`}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.processCard}>
              <div 
                className={styles.stepNumBadge} 
                style={{ background: step.badgeBg, color: step.badgeColor }}
              >
                {step.badge}
              </div>
              <div className={styles.stepTimeline}>{step.timeline}</div>
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
