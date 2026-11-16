import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { BoltIcon, ShieldIcon } from '../Icons/Icons';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerTop}>
          {/* BRAND COLUMN */}
          <div className={styles.brandCol}>
            <Logo inverted />
            <p className={styles.footerBio}>
              Shyoran Systems is a premier software engineering studio operated by senior engineer
              Pardeep Shyoran. Specializing in high-velocity MERN, distributed cloud architectures, and
              production AI pipelines.
            </p>
            <div className={styles.privacyNoteBox}>
              <ShieldIcon size={14} />
              <span>
                <strong>Confidential by Design:</strong> Zero trackers, no data sales. Project briefs
                are protected by strict confidentiality and mutual NDAs.
              </span>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className={styles.footerNav}>
            {/* 1. STUDIO NAVIGATION */}
            <div className={styles.navCol}>
              <span className={styles.colTitle}>// STUDIO</span>
              <Link to="/">Home</Link>
              <Link to="/services">Services (5 Pillars)</Link>
              <Link to="/work">Work &amp; Case Studies</Link>
              <Link to="/pricing">Pricing &amp; Tracks</Link>
              <Link to="/about">About the Practice</Link>
            </div>

            {/* 2. ENGAGEMENTS & CLIENTS */}
            <div className={styles.navCol}>
              <span className={styles.colTitle}>// CLIENTS &amp; LEGAL</span>
              <Link to="/contact">Project Enquiry</Link>
              <Link to="/portal">Founder Portal</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>

            {/* 3. DIRECT CONNECT */}
            <div className={styles.navCol}>
              <span className={styles.colTitle}>// CONNECT</span>
              <a 
                href="mailto:hello@pardeep-shyoran.me" 
                aria-label="hello@pardeep-shyoran.me - Email founder Pardeep Shyoran"
              >
                hello@pardeep-shyoran.me ↗
              </a>
              <a 
                href="https://www.linkedin.com/company/shyoran-systems" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn - Shyoran Systems (opens in new tab)"
              >
                LinkedIn ↗
              </a>
              <a 
                href="https://github.com/Pardeep-Shyoran" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub - Pardeep Shyoran (opens in new tab)"
              >
                GitHub ↗
              </a>
              <span className={styles.locationTag}>
                Sirsa, Haryana, India · IST (UTC+5:30)
              </span>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className={styles.footerBottom}>
          <div className={styles.copyrightGroup}>
            <span>© {currentYear} Shyoran Systems. All rights reserved.</span>
            <span className={styles.dividerDot} aria-hidden="true">·</span>
            <Link to="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.dividerDot} aria-hidden="true">·</span>
            <Link to="/contact" className={styles.legalLink}>Scope Project</Link>
          </div>

          <div className={styles.statusIndicator}>
            <span className={styles.pulseDot} aria-hidden="true"></span>
            <span>SYSTEMS NOMINAL · ACCEPTING BUILDS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
