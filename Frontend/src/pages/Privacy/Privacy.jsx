import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { getWebPageSchema } from '../../utils/seoSchemas';
import { BoltIcon, ShieldIcon, CheckIcon, ArrowRightIcon } from '../../components/Icons/Icons';
import styles from './Privacy.module.css';

const Privacy = () => {
  const privacySchema = getWebPageSchema(
    'https://shyoran.systems/privacy',
    'Privacy Policy & Data Protection — Shyoran Systems',
    'Privacy Policy for Shyoran Systems. Full transparency on data collection, zero third-party brokering, and confidential handling of client technical specifications.'
  );

  return (
    <>
      <SEO
        title="Privacy Policy & Data Protection — Shyoran Systems"
        description="Privacy Policy for Shyoran Systems. Full transparency on data collection, zero third-party brokering, and confidential handling of client technical specifications."
        canonicalUrl="https://shyoran.systems/privacy"
        schema={privacySchema}
      />


      <div className={styles.privacyMain}>
        <div className="wrap">
          {/* HERO */}
          <div className={styles.heroSection}>
            <div className={styles.badgeRow}>
              <div className="badge-pill badge-yellow">
                <ShieldIcon size={12} />
                <span>CONFIDENTIALITY &amp; PRIVACY NOTICE</span>
              </div>
              <span className="sticker-hand">
                Engineered for trust &amp; IP protection
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              HOW WE PROTECT <span className="highlight-yellow">YOUR DATA.</span>
            </h1>

            <p className={styles.heroLead}>
              Shyoran Systems is a solo senior engineering practice. We treat all client communications,
              project specifications, and contact submissions with the utmost confidentiality. We do not sell data,
              we do not use intrusive tracking pixels, and we respect your IP.
            </p>
          </div>

          <div className={styles.privacyContainer}>
            {/* STICKY NAV */}
            <aside className={styles.stickyNav} aria-label="Privacy Policy Sections">
              <span className={styles.navHeading}>// SECTIONS</span>
              <a href="#overview" className={styles.navLink}>01. Overview</a>
              <a href="#data-collected" className={styles.navLink}>02. Data Collected</a>
              <a href="#purpose" className={styles.navLink}>03. Purpose of Processing</a>
              <a href="#confidentiality" className={styles.navLink}>04. Confidentiality &amp; NDAs</a>
              <a href="#no-selling" className={styles.navLink}>05. Zero Data Sales</a>
              <a href="#retention" className={styles.navLink}>06. Retention &amp; Rights</a>
              <a href="#contact-info" className={styles.navLink}>07. Direct Contact</a>
            </aside>

            {/* MAIN CONTENT */}
            <div className={styles.contentBody}>
              <section id="overview" className={styles.policyCard}>
                <span className={styles.policyCardTag}>// SECTION 01</span>
                <h2 className={styles.policyCardTitle}>1. Operational Principles</h2>
                <p className={styles.policyCardText}>
                  This Privacy Notice governs how Shyoran Systems (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;),
                  operated by senior software engineer Pardeep Shyoran, collects, processes, and protects personal and
                  project information submitted through this website (shyoran.systems) and our communication channels.
                </p>
                <p className={styles.policyCardText}>
                  Our core philosophy is simple: we only collect the minimum information required to evaluate your software
                  engineering requirements, provide accurate project scoping, and collaborate on production builds.
                </p>
              </section>

              <section id="data-collected" className={styles.policyCard}>
                <span className={styles.policyCardTag}>// SECTION 02</span>
                <h2 className={styles.policyCardTitle}>2. Information We Collect</h2>
                <p className={styles.policyCardText}>
                  We collect personal and technical information when you voluntarily submit it to us:
                </p>
                <ul className={styles.policyList}>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[+]</span>
                    <span><strong>Project Enquiries:</strong> When submitting our Contact form, we collect your name, work email address, preferred project category, estimated budget bracket, target delivery timeline, and project description.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[+]</span>
                    <span><strong>Direct Email Communications:</strong> Any architectural briefs, technical constraints, wireframes, or RFP documents you transmit directly to <code>hello@pardeep-shyoran.me</code>.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[+]</span>
                    <span><strong>Client Portal Access:</strong> When using the staging client hub, access pins and authentication credentials used to view sprint milestones and private repositories.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[+]</span>
                    <span><strong>Server Logs:</strong> Standard HTTP request logs (IP address, user agent, requested endpoint, and response status) collected strictly for DDoS mitigation, rate limiting, and server diagnostic security.</span>
                  </li>
                </ul>
              </section>

              <section id="purpose" className={styles.policyCard}>
                <span className={styles.policyCardTag}>// SECTION 03</span>
                <h2 className={styles.policyCardTitle}>3. Purpose of Data Processing</h2>
                <p className={styles.policyCardText}>
                  The data collected is processed exclusively for the following technical and business purposes:
                </p>
                <ul className={styles.policyList}>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[✓]</span>
                    <span>Evaluating project feasibility, tech stack compatibility, and architectural requirements.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[✓]</span>
                    <span>Directly replying to inquiries with detailed estimates, proposals, or questions.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[✓]</span>
                    <span>Scheduling discovery calls and executing milestones for active development engagements.</span>
                  </li>
                </ul>
              </section>

              <section id="confidentiality" className={styles.policyCard}>
                <span className={styles.policyCardTag}>// SECTION 04</span>
                <h2 className={styles.policyCardTitle}>4. Confidentiality &amp; Mutual NDAs</h2>
                <p className={styles.policyCardText}>
                  We understand that your software concepts, proprietary algorithms, and database schemas are sensitive intellectual property. All project briefs shared with us remain strictly confidential.
                </p>
                <p className={styles.policyCardText}>
                  Prior to reviewing sensitive blueprints or production repositories, we are pleased to execute a standard mutual Non-Disclosure Agreement (NDA) to provide legal protection for your trade secrets.
                </p>
              </section>

              <section id="no-selling" className={styles.policyCard}>
                <span className={styles.policyCardTag}>// SECTION 05</span>
                <h2 className={styles.policyCardTitle}>5. Zero Data Sales &amp; No Third-Party Tracking</h2>
                <p className={styles.policyCardText}>
                  We maintain an uncompromising stance on digital privacy:
                </p>
                <ul className={styles.policyList}>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[✕]</span>
                    <span>We <strong>never sell, rent, or lease</strong> your contact information or project specifications to brokers, advertisers, or third parties.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[✕]</span>
                    <span>We <strong>do not employ invasive ad-retargeting pixels</strong> (such as Meta Pixel or Google Ads tracking) on our engineering platform.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[✕]</span>
                    <span>No automated spam or cold sales newsletters will be sent to your inbox.</span>
                  </li>
                </ul>
              </section>

              <section id="retention" className={styles.policyCard}>
                <span className={styles.policyCardTag}>// SECTION 06</span>
                <h2 className={styles.policyCardTitle}>6. Data Retention &amp; Your Rights</h2>
                <p className={styles.policyCardText}>
                  We retain enquiry records only for the duration necessary to conduct business communications, fulfill project obligations, or maintain required accounting records.
                </p>
                <p className={styles.policyCardText}>
                  You retain complete sovereignty over your information. At any point, you may request:
                </p>
                <ul className={styles.policyList}>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[1]</span>
                    <span>A complete export of all personal details and messages associated with your email.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[2]</span>
                    <span>Correction of any inaccuracies in your project or contact records.</span>
                  </li>
                  <li className={styles.policyListItem}>
                    <span className={styles.bullet}>[3]</span>
                    <span>Complete and permanent erasure of your contact details from our active inbox and servers.</span>
                  </li>
                </ul>
              </section>

              <section id="contact-info" className={styles.policyCard}>
                <span className={styles.policyCardTag}>// SECTION 07</span>
                <h2 className={styles.policyCardTitle}>7. Direct Engineering Contact</h2>
                <p className={styles.policyCardText}>
                  For any privacy inquiries, data deletion requests, or NDA execution requests, you can contact lead engineer Pardeep Shyoran directly:
                </p>
                <div className={styles.contactBox}>
                  <div><strong>Studio:</strong> Shyoran Systems</div>
                  <div><strong>Lead Engineer:</strong> Pardeep Shyoran</div>
                  <div>
                    <strong>Direct Email:</strong>{' '}
                    <a href="mailto:hello@pardeep-shyoran.me" className={styles.contactEmailLink}>
                      hello@pardeep-shyoran.me
                    </a>
                  </div>
                  <div><strong>Physical Base:</strong> Sirsa, Haryana 125103, India</div>
                  <div><strong>Standard Operating Timezone:</strong> IST (UTC+5:30) · Worldwide Remote Collaboration</div>
                </div>
              </section>

              {/* ACTION FOOTER */}
              <div className={styles.ctaFooter}>
                <Link to="/" className="btn-brutal btn-brutal-primary">
                  <span>RETURN TO HOMEPAGE</span>
                  <BoltIcon size={14} />
                </Link>
                <Link to="/contact" className="btn-brutal btn-brutal-outline">
                  <span>DISCUSS YOUR PROJECT</span>
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
