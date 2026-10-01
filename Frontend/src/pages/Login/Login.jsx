import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
  LockIcon,
  CheckIcon,
  TerminalIcon,
  SpeedPillarIcon
} from '../../components/Icons/Icons';
import styles from './Login.module.css';

const MOCK_SPRINT = {
  client: 'OmniFlow Ventures Ltd.',
  projectName: 'OmniFlow AI — Autonomous RAG & Vector Engine',
  track: 'Track 01: MERN Launchpad + AI Integration',
  sprint: 'Sprint 02 of 03',
  progressPercent: 78,
  status: 'TESTING & STAGING DEPLOY',
  stagingUrl: 'https://staging-sprint02.shyoran.systems',
  leadArchitect: 'Pardeep Shyoran (Direct Line Active)',
  recentMilestones: [
    { title: 'MongoDB Atlas Vector Search HNSW Indexing Configured', status: 'COMPLETE' },
    { title: 'Server-Sent Events (SSE) Streaming Gateway Deployed', status: 'COMPLETE' },
    { title: 'Zod Input Schema Validation & JWT Security Audit', status: 'COMPLETE' },
    { title: 'End-to-End Stress Test (< 50ms P99 Latency)', status: 'IN PROGRESS' }
  ]
};

const Login = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!accessCode.trim()) {
      setAuthError('Please enter your project access PIN or client email.');
      return;
    }
    // Simple demo validation: any valid key or "demo" logs into the sprint console
    setAuthError('');
    setAuthenticated(true);
  };

  const handleLaunchDemo = () => {
    setIsDemoMode(true);
    setAuthenticated(true);
  };

  return (
    <>
      <Helmet>
        <title>Founder Portal &amp; Client Staging — Shyoran Systems</title>
        <meta
          name="description"
          content="Access your dedicated project sprint dashboard, preview live staging builds, inspect database schemas, and communicate directly with lead architect Pardeep Shyoran."
        />
      </Helmet>

      <div className={styles.portalPage}>
        <div className="wrap">
          {!authenticated ? (
            <div className={styles.authContainer}>
              <div className={`${styles.authBox} reveal`}>
                <div className={styles.authBadgeRow}>
                  <div className="badge-pill" style={{ background: '#000000', color: '#FFFFFF' }}>
                    <LockIcon size={12} />
                    <span>PRIVATE FOUNDER STAGING</span>
                  </div>
                  <span className={`${styles.handTag} hand`}>Client Access Only</span>
                </div>

                <h1 className={`${styles.authTitle} display-title`}>
                  FOUNDER PORTAL &amp;<br />
                  <span className="highlight-yellow">SPRINT MONITOR.</span>
                </h1>

                <p className={styles.authSubtitle}>
                  Enter your organization access key or client email to inspect live staging builds, git branch previews, and milestone deliveries.
                </p>

                <form onSubmit={handleLogin} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="accessCode" className={styles.label}>
                      PROJECT ACCESS PIN / CLIENT KEY
                    </label>
                    <input
                      id="accessCode"
                      type="text"
                      className={styles.input}
                      placeholder="e.g. SHY-8492-ENTERPRISE or founder@domain.com"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                    />
                    {authError && <span className={styles.errorText}>{authError}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn-brutal btn-brutal-primary"
                    style={{ width: '100%', fontSize: '15px', padding: '14px' }}
                  >
                    <span>AUTHENTICATE &amp; VIEW SPRINT</span>
                    <BoltIcon size={14} />
                  </button>
                </form>

                <div className={styles.demoDivider}>
                  <span>OR EXPLORE AN ACTIVE BUILD</span>
                </div>

                <button
                  type="button"
                  className={styles.demoSprintBtn}
                  onClick={handleLaunchDemo}
                >
                  <TerminalIcon size={14} />
                  <span>Launch Live Interactive Demo Sprint (OmniFlow AI)</span>
                </button>

                <div className={styles.authFooter}>
                  <span>Don't have an active sprint?</span>
                  <Link to="/contact" className={styles.scopeLink}>
                    Scope your project with our architect →
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* AUTHENTICATED FOUNDER SPRINT CONSOLE */
            <div className={styles.consoleContainer}>
              <div className={`${styles.sprintCard} reveal`}>
                <div className={styles.sprintHead}>
                  <div>
                    <div className="badge-pill" style={{ background: '#059669', color: '#FFFFFF', marginBottom: '8px' }}>
                      <span className={styles.pulseDot}></span>
                      <span>STAGING ACTIVE · {isDemoMode ? 'SIMULATED DEMO' : 'LIVE BUILD'}</span>
                    </div>
                    <h1 className={styles.sprintProjectName}>{MOCK_SPRINT.projectName}</h1>
                    <span className={styles.clientSubtitle}>Client: {MOCK_SPRINT.client} · {MOCK_SPRINT.track}</span>
                  </div>

                  <button
                    type="button"
                    className={styles.logoutBtn}
                    onClick={() => {
                      setAuthenticated(false);
                      setIsDemoMode(false);
                    }}
                  >
                    Lock Portal
                  </button>
                </div>

                {/* PROGRESS BAR */}
                <div className={styles.progressSection}>
                  <div className={styles.progressLabelRow}>
                    <span>{MOCK_SPRINT.sprint} Completion</span>
                    <span className={styles.percentText}>{MOCK_SPRINT.progressPercent}%</span>
                  </div>
                  <div className={styles.progressBarTrack}>
                    <div
                      className={styles.progressBarFill}
                      style={{ width: `${MOCK_SPRINT.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* SPRINT METRICS */}
                <div className={styles.sprintMetrics}>
                  <div className={styles.sprintMetricBox}>
                    <span className={styles.metricTitle}>Current Status</span>
                    <span className={styles.metricVal}>{MOCK_SPRINT.status}</span>
                  </div>
                  <div className={styles.sprintMetricBox}>
                    <span className={styles.metricTitle}>Staging Preview URL</span>
                    <a
                      href={MOCK_SPRINT.stagingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.stagingLink}
                    >
                      {MOCK_SPRINT.stagingUrl} ↗
                    </a>
                  </div>
                  <div className={styles.sprintMetricBox}>
                    <span className={styles.metricTitle}>Lead Architect</span>
                    <span className={styles.metricVal}>{MOCK_SPRINT.leadArchitect}</span>
                  </div>
                </div>

                {/* MILESTONE TICKER */}
                <div className={styles.milestonesSection}>
                  <h2 className={styles.milestonesTitle}>Sprint Milestones &amp; Audit Log:</h2>
                  <div className={styles.milestonesList}>
                    {MOCK_SPRINT.recentMilestones.map((m, idx) => (
                      <div key={idx} className={styles.milestoneItem}>
                        <span
                          className={m.status === 'COMPLETE' ? styles.statusTagComplete : styles.statusTagProgress}
                        >
                          {m.status === 'COMPLETE' ? <CheckIcon size={12} /> : <SpeedPillarIcon size={12} />}
                          <span>{m.status}</span>
                        </span>
                        <span className={styles.milestoneText}>{m.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIRECT ACTION BAR */}
                <div className={styles.portalActionRow}>
                  <Link
                    to="/contact"
                    className="btn-brutal btn-brutal-primary"
                    style={{ padding: '10px 22px', fontSize: '13px' }}
                  >
                    <span>Message Architect Pardeep</span>
                    <BoltIcon size={12} />
                  </Link>
                  <span className={styles.encryptedTag}>
                    <LockIcon size={12} /> 256-Bit Encrypted Staging Tunnel
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;