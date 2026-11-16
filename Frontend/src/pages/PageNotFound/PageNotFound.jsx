import { Link, useLocation } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { CrossIcon, BoltIcon, ArrowRightIcon } from '../../components/Icons/Icons';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  const location = useLocation();

  return (
    <>
      <SEO
        title="404 — Page Not Found | Shyoran Systems"
        description="404 - The page or route you requested does not exist on Shyoran Systems. Return to the homepage or contact our engineering team."
        noindex={true}
      />


      <div className={styles.mainContainer}>
        <div className="wrap">
          <div className={styles.contentBox}>
            {/* BADGE ROW */}
            <div className={styles.badgeRow}>
              <div className="badge-pill badge-red">
                <span><CrossIcon size={12} /></span>
                <span>ERROR 404 // NULL ROUTE</span>
              </div>
              <div className="sticker-hand">
                Even senior engineers hit dead ends ¯\_(ツ)_/¯
              </div>
            </div>

            {/* BIG PUNCHY DISPLAY TITLE */}
            <h1 className={`${styles.displayHeading} display-title`}>
              YOU VENTURED OUTSIDE<br />
              <span className="highlight-yellow">THE CODEBASE.</span>
            </h1>

            <p className={styles.subtitle}>
              The path <code>{location.pathname || '/unknown-route'}</code> doesn&apos;t exist or was refactored
              into oblivion. Don&apos;t worry, all core systems remain fully operational.
            </p>

            {/* INTERACTIVE DEBUG TERMINAL */}
            <div className={styles.debugTerminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.dots} aria-hidden="true">
                  <span className={styles.dotRed}></span>
                  <span className={styles.dotYellow}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <span className={styles.terminalTitle}>gateway-diagnostic.log</span>
                <span className={styles.exitCode}>STATUS: 404 NOT FOUND</span>
              </div>
              <div className={styles.terminalBody}>
                <div className={styles.logLine}>
                  <span className={styles.logTag}>[DIAGNOSTIC]</span> Requested Route: <code>{location.pathname}</code>
                </div>
                <div className={styles.logLine}>
                  <span className={styles.logTagWarn}>[STATUS]</span> 404 Not Found — Unmatched in React Router hierarchy
                </div>
                <div className={styles.logLine}>
                  <span className={styles.logTagSuccess}>[RECOVERY]</span> Routing options available below. Safe paths verified.
                </div>
              </div>
            </div>

            {/* ACTION CTAs: Clear homepage link + contact options */}
            <div className={styles.ctaGroup}>
              <Link to="/" className="btn-brutal btn-brutal-primary btn-lg">
                <span>RETURN TO HOMEPAGE</span>
                <BoltIcon size={14} />
              </Link>
              
              <Link to="/contact" className="btn-brutal btn-brutal-outline btn-lg">
                <span>CONTACT US / SCOPE PROJECT</span>
                <ArrowRightIcon size={14} />
              </Link>

              <a 
                href={`mailto:hello@pardeep-shyoran.me?subject=404 Broken Link Report: ${encodeURIComponent(location.pathname)}`} 
                className={styles.reportEmailLink}
                aria-label="Report Broken Link (hello@pardeep-shyoran.me) - Send direct email"
              >
                Report Broken Link (hello@pardeep-shyoran.me) ↗
              </a>
            </div>

            {/* HELPFUL VERIFIED ROUTES */}
            <div className={styles.quickPaths}>
              <span className={styles.quickTitle}>// VERIFIED SYSTEM DESTINATIONS</span>
              <div className={styles.pathGrid}>
                <Link to="/services" className={styles.pathCard}>
                  <span className={styles.pathNum}>01</span>
                  <div>
                    <strong>Core Services</strong>
                    <p>Full-stack MERN, AI pipelines, and cloud APIs</p>
                  </div>
                </Link>

                <Link to="/work" className={styles.pathCard}>
                  <span className={styles.pathNum}>02</span>
                  <div>
                    <strong>Work &amp; Case Studies</strong>
                    <p>Battle-tested production builds &amp; client metrics</p>
                  </div>
                </Link>

                <Link to="/pricing" className={styles.pathCard}>
                  <span className={styles.pathNum}>03</span>
                  <div>
                    <strong>Pricing &amp; Tracks</strong>
                    <p>Guaranteed 14-21 day fixed-scope deliverables</p>
                  </div>
                </Link>

                <Link to="/about" className={styles.pathCard}>
                  <span className={styles.pathNum}>04</span>
                  <div>
                    <strong>About the Practice</strong>
                    <p>Direct senior engineer line with zero agency bloat</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;