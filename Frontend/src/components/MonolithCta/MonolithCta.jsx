import { Link } from 'react-router-dom';
import { BoltIcon, MailIcon, PinIcon } from '../Icons/Icons';
import styles from './MonolithCta.module.css';

const MonolithCta = () => {
  return (
    <section className={styles.monolithCtaSection}>
      <div className="wrap">
        <div className={`${styles.monolithBox} reveal`}>
          <div className={styles.monolithBadge}>
            <BoltIcon size={13} />
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
              style={{ fontSize: '17px', padding: '16px 36px', display: 'inline-flex', alignItems: 'center', gap: '8px' }} 
            >
              <span>START A CONVERSATION</span>
              <BoltIcon size={16} />
            </Link>
          </div>

          <div className={styles.monolithMeta}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MailIcon size={14} /> hello@pardeep-shyoran.me
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <PinIcon size={14} /> Sirsa, Haryana, India
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span className={styles.liveDot}></span> Current Status: Online &amp; Scoping Builds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonolithCta;
