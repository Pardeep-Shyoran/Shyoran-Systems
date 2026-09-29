import styles from './Comparison.module.css';

const Comparison = () => {
  return (
    <section id="comparison" className={styles.comparisonSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className="badge-pill" style={{ background: '#FFFFFF' }}>
            <span>// REALITY CHECK</span>
          </div>
          <h2 className="display-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginTop: '14px' }}>
            WHY FOUNDERS CHOOSE SHYORAN OVER THE OLD AGENCY PLAYBOOK
          </h2>
          <p className={styles.sectionSubtitle}>
            Traditional agencies are built to sell billable hours. We are built to ship working software.
          </p>
        </div>

        <div className={`${styles.compareGrid} reveal`}>
          {/* Card 1: Traditional Agency */}
          <div className={styles.compareCardBad}>
            <div className={styles.compareCardHead}>
              <span className={styles.crossIcon}>✕</span>
              <span className={styles.cardHeaderTitle}>THE TRADITIONAL AGENCY</span>
            </div>
            <div className={styles.compareList}>
              <div className={styles.compareItem}>
                <span className={styles.itemIconCross}>✕</span>
                <div>
                  <strong>6-8 weeks of kickoff discovery</strong>
                  <p>Endless Figma mockups, scope negotiations, and slide presentations before writing one line of code.</p>
                </div>
              </div>
              <div className={styles.compareItem}>
                <span className={styles.itemIconCross}>✕</span>
                <div>
                  <strong>4 layers of middle managers</strong>
                  <p>Your requests get filtered through account managers, PMs, and outsourced junior developers.</p>
                </div>
              </div>
              <div className={styles.compareItem}>
                <span className={styles.itemIconCross}>✕</span>
                <div>
                  <strong>$30k-$60k bloated retainers</strong>
                  <p>You pay for agency office rent, account reps, and corporate overhead rather than code engineering.</p>
                </div>
              </div>
              <div className={styles.compareItem}>
                <span className={styles.itemIconCross}>✕</span>
                <div>
                  <strong>Delayed milestones &amp; finger-pointing</strong>
                  <p>Sprint timelines slip repeatedly while budget overruns get billed back to you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: The Shyoran Systems Way */}
          <div className={styles.compareCardGood}>
            <div className={styles.compareCardHeadGood}>
              <span className={styles.checkIcon}>✓</span>
              <span className={styles.cardHeaderTitleGood}>THE SHYORAN SYSTEMS WAY</span>
              <span className={styles.popBadge}>VELOCITY WINNER</span>
            </div>
            <div className={styles.compareList}>
              <div className={styles.compareItem}>
                <span className={styles.itemIconCheck}>✓</span>
                <div>
                  <strong>First working build in Week 1</strong>
                  <p>Staging URLs with live auth, database schemas, and interactive UI deployed right away.</p>
                </div>
              </div>
              <div className={styles.compareItem}>
                <span className={styles.itemIconCheck}>✓</span>
                <div>
                  <strong>Direct 1-on-1 with Lead Engineer</strong>
                  <p>Direct Slack or WhatsApp channel with Pardeep. Instant answers, rapid decisions, zero bureaucracy.</p>
                </div>
              </div>
              <div className={styles.compareItem}>
                <span className={styles.itemIconCheck}>✓</span>
                <div>
                  <strong>Modern AI-Augmented Velocity</strong>
                  <p>Leveraging state-of-the-art coding workflows to build 3x faster without compromising code quality.</p>
                </div>
              </div>
              <div className={styles.compareItem}>
                <span className={styles.itemIconCheck}>✓</span>
                <div>
                  <strong>Fixed scope &amp; guaranteed delivery</strong>
                  <p>Clear milestones, predictable pricing, and 100% full intellectual property transfer on day 1.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
