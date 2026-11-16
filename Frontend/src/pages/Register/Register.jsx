import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { getWebPageSchema } from '../../utils/seoSchemas';
import { BoltIcon, LockIcon, SpeedPillarIcon } from '../../components/Icons/Icons';
import styles from './Register.module.css';

const Register = () => {
  const registerSchema = getWebPageSchema(
    'https://shyoran.systems/register',
    'Initiate Sprint Registration — Shyoran Systems',
    'Initiate a new production build sprint with Shyoran Systems. Lock in dedicated founder engineering bandwidth and production timeline.'
  );

  return (
    <>
      <SEO
        title="Initiate Sprint Registration — Shyoran Systems"
        description="Initiate a new production build sprint with Shyoran Systems. Lock in dedicated founder engineering bandwidth and production timeline."
        canonicalUrl="https://shyoran.systems/register"
        schema={registerSchema}
      />


      <div className={styles.registerPage}>
        <div className="wrap">
          <div className={styles.container}>
            <div className={styles.card}>
              <div className="badge-pill badge-yellow" style={{ marginBottom: '16px' }}>
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
                  className="btn-brutal btn-brutal-primary btn-lg"
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