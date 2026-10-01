import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BoltIcon, LockIcon, SpeedPillarIcon } from '../../components/Icons/Icons';
import styles from './Register.module.css';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Initiate Sprint Registration — Shyoran Systems</title>
        <meta
          name="description"
          content="Initiate a new production build sprint with Shyoran Systems. Lock in dedicated founder engineering bandwidth and production timeline."
        />
      </Helmet>

      <div className={styles.registerPage}>
        <div className="wrap">
          <div className={styles.container}>
            <div className={`${styles.card} reveal`}>
              <div className="badge-pill" style={{ background: 'var(--accent-yellow)', color: 'var(--text-main)', marginBottom: '16px' }}>
                <BoltIcon size={12} />
                <span>NEW SPRINT REGISTRATION // DIRECT ARCHITECT LINE</span>
              </div>

              <h1 className={`${styles.title} display-title`}>
                RESERVE YOUR BUILD SPRINT.<br />
                <span className="highlight-yellow">START SHIPPING IN 48 HOURS.</span>
              </h1>

              <p className={styles.subtitle}>
                We accept only 2 concurrent project sprints per month to ensure 100% focus and zero translation lag. Initiate your build scope directly with founder architect Pardeep Shyoran.
              </p>

              <div className={styles.perksList}>
                <div className={styles.perk}>
                  <SpeedPillarIcon size={18} />
                  <div>
                    <strong>14 - 21 Business Days Delivery</strong>
                    <p>Production deployment with CI/CD, database schemas, and clean code.</p>
                  </div>
                </div>
                <div className={styles.perk}>
                  <LockIcon size={18} />
                  <div>
                    <strong>100% IP Transfer &amp; Warranty</strong>
                    <p>All repositories, cloud infrastructure, and 30-day bug warranty included.</p>
                  </div>
                </div>
              </div>

              <div className={styles.actions}>
                <Link
                  to="/contact"
                  className="btn-brutal btn-brutal-primary"
                  style={{ fontSize: '16px', padding: '14px 32px' }}
                >
                  <span>PROCEED TO PROJECT SCOPING</span>
                  <BoltIcon size={14} />
                </Link>

                <Link
                  to="/login"
                  className={styles.existingClientLink}
                >
                  Already have an active sprint? Enter Founder Portal →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;