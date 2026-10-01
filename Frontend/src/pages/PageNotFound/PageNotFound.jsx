import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CrossIcon, BoltIcon } from '../../components/Icons/Icons';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Shyoran Systems</title>
        <meta name="description" content="404 - The page or route you are looking for does not exist on Shyoran Systems." />
      </Helmet>

      <main className={styles.mainContainer}>
        <div className="wrap">
          <div className={styles.contentBox}>
            {/* BADGE ROW */}
            <div className={styles.badgeRow}>
              <div className="badge-pill" style={{ background: '#FF4D4D', color: '#FFFFFF' }}>
                <span><CrossIcon size={12} /></span>
                <span>ERROR 404 // NULL ROUTE</span>
              </div>
              <div className={`${styles.stickerHand} hand`}>
                Even senior engineers hit dead ends ¯\_(ツ)_/¯
              </div>
            </div>

            {/* BIG PUNCHY DISPLAY TITLE */}
            <h1 className={`${styles.displayHeading} display-title`}>
              YOU VENTURED OUTSIDE<br />
              <span className="highlight-yellow">THE CODEBASE.</span>
            </h1>

            <p className={styles.subtitle}>
              The path <code>{location.pathname || '/unknown-route'}</code> doesn't exist or was refactored into oblivion. Don't worry, no production servers were harmed.
            </p>

            {/* INTERACTIVE DEBUG TERMINAL */}
            <div className={styles.debugTerminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.dots}>
                  <span className={styles.dotRed}></span>
                  <span className={styles.dotYellow}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <span className={styles.terminalTitle}>gateway-diagnostic.log</span>
                <span className={styles.exitCode}>EXIT: 404</span>
              </div>
              <div className={styles.terminalBody}>
                <div className={styles.logLine}>
                  <span className={styles.logTag}>[DIAGNOSTIC]</span> Request URL: <code>{location.pathname}</code>
                </div>
                <div className={styles.logLine}>
                  <span className={styles.logTagWarn}>[STATUS]</span> 404 Not Found — Resource unmapped in React Router
                </div>
                <div className={styles.logLine}>
                  <span className={styles.logTagSuccess}>[RECOVERY]</span> Redirecting traffic to known safe coordinates...
                </div>
              </div>
            </div>

            {/* ACTION CTAs */}
            <div className={styles.ctaGroup}>
              <Link to="/" className="btn-brutal btn-brutal-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>RETURN TO HOMEPAGE</span>
                <BoltIcon size={14} />
              </Link>
              <a 
                href={`mailto:hello@pardeep-shyoran.me?subject=404 Broken Link Report: ${location.pathname}`} 
                className="btn-brutal btn-brutal-outline"
              >
                REPORT BROKEN LINK ↗
              </a>
            </div>

            {/* HELPFUL QUICK ROADS */}
            <div className={styles.quickPaths}>
              <span className={styles.quickTitle}>// QUICK DESTINATIONS</span>
              <div className={styles.pathGrid}>
                <Link to="/#tracks" className={styles.pathCard}>
                  <span className={styles.pathNum}>01</span>
                  <div>
                    <strong>MVP Speedrun Track</strong>
                    <p>Ship your web product in 14-21 days</p>
                  </div>
                </Link>

                <Link to="/#bento" className={styles.pathCard}>
                  <span className={styles.pathNum}>02</span>
                  <div>
                    <strong>AI &amp; LLM Workflows</strong>
                    <p>Vector databases &amp; autonomous agent pipelines</p>
                  </div>
                </Link>

                <Link to="/#comparison" className={styles.pathCard}>
                  <span className={styles.pathNum}>03</span>
                  <div>
                    <strong>The Agency Reality Check</strong>
                    <p>Why founders skip the 10-person agency overhead</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;