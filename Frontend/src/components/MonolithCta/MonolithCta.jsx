import { Link } from 'react-router-dom';
import { BoltIcon, MailIcon, PinIcon, CheckIcon } from '../Icons/Icons';
import styles from './MonolithCta.module.css';

const MonolithCta = () => {
  return (
    <section className={styles.monolithCtaSection}>
      <div className="wrap">
        <div className={`${styles.monolithBox} reveal`}>
          <div className={styles.monolithBadge}>
            <BoltIcon size={13} />
            <span>ACCEPTING CLIENT INQUIRIES &amp; NEW BUILDS</span>
          </div>

          <h2 className={`${styles.monolithTitle} display-title`}>
            READY TO BUILD YOUR NEXT PRODUCT?<br />
            <span className="highlight-yellow">LET'S MAP THE ARCHITECTURE.</span>
          </h2>

          <p className={styles.monolithDesc}>
            Speak directly with founder and lead systems architect Pardeep Shyoran. 
            We will evaluate your product vision, confirm technical feasibility, and structure a transparent milestone roadmap with zero sales runaround.
          </p>

          <div className={styles.monolithActions}>
            <Link 
              to="/contact"
              className="btn-brutal btn-brutal-primary btn-lg" 
            >
              <span>Discuss Your Project</span>
              <BoltIcon size={16} />
            </Link>
            <a 
              href="mailto:hello@pardeep-shyoran.me?subject=Discovery%20Call%20Inquiry%20-%20Shyoran%20Systems"
              className="btn-brutal btn-brutal-outline btn-lg"
            >
              <span>Schedule Discovery Call ↗</span>
            </a>
          </div>

          <div className={styles.monolithMeta}>
            <span className={styles.metaItem}>
              <MailIcon size={14} /> hello@pardeep-shyoran.me
            </span>
            <span className={styles.metaItem}>
              <PinIcon size={14} /> Sirsa, Haryana, India
            </span>
            <span className={styles.metaItem}>
              <CheckIcon size={14} /> Average technical response within 4 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonolithCta;
