import { Link } from 'react-router-dom';
import styles from './MonolithCta.module.css';

const MonolithCta = () => {
  return (
    <section className={styles.monolithCtaSection}>
      <div className="wrap">
        <div className={`${styles.monolithBox} reveal`}>
          <div className={styles.monolithBadge}>
            <span>⚡</span>
            <span>ACCEPTING BUILDS FOR THIS QUARTER</span>
          </div>

          <h2 className={`${styles.monolithTitle} display-title`}>
            READY TO STOP TALKING<br />
            <span className="highlight-yellow">AND START SHIPPING?</span>
          </h2>

          <p className={styles.monolithDesc}>
            Whether you need a rapid MVP to pitch investors or an AI-powered system to streamline your operations, let's map out what your product actually needs.
          </p>

          <div className={styles.monolithActions}>
            <Link 
              to="/contact"
              className="btn-brutal btn-brutal-yellow" 
              style={{ fontSize: '17px', padding: '16px 36px' }} 
            >
              START A CONVERSATION ⚡
            </Link>
          </div>

          <div className={styles.monolithMeta}>
            <span>✉️ hello@pardeep-shyoran.me</span>
            <span>📍 Sirsa, Haryana, India</span>
            <span>🟢 Current Status: Online &amp; Scoping Builds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonolithCta;
