import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { BoltIcon } from '../../components/Icons/Icons';
import styles from './Contact.module.css';

const SCOPE_OPTIONS = [
  'Full-Stack MERN App',
  'AI / LLM Integration & Chatbots',
  'E-Commerce & Payment Systems',
  'Real-Time Collaboration & Messaging',
  'API Design & Cloud Deployment (AWS)',
  'Architecture & Performance Audit'
];

const BUDGET_OPTIONS = [
  '< $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000+'
];

const TIMELINE_OPTIONS = [
  '< 2 Weeks (Emergency MVP)',
  '1 Month',
  '2 - 3 Months',
  'Flexible / Ongoing'
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const urlScope = searchParams.get('scope');

  const [selectedScopes, setSelectedScopes] = useState(() => {
    if (urlScope && SCOPE_OPTIONS.includes(urlScope)) {
      return [urlScope];
    }
    return ['Full-Stack MERN App'];
  });
  const [selectedBudget, setSelectedBudget] = useState('$5,000 - $10,000');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTimeIST, setCurrentTimeIST] = useState('');
  const [isWorkingHours, setIsWorkingHours] = useState(true);
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Real-time IST clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTimeIST(istString);

      // Check working hours (09:00 - 23:00 IST)
      const istHours = parseInt(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit' }), 10);
      setIsWorkingHours(istHours >= 9 && istHours < 23);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleScope = (scope) => {
    if (selectedScopes.includes(scope)) {
      if (selectedScopes.length > 1) {
        setSelectedScopes(selectedScopes.filter(s => s !== scope));
      }
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@pardeep-shyoran.me');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Package scoping payload
    const payload = {
      ...data,
      scopes: selectedScopes,
      budget: selectedBudget,
      timestamp: new Date().toISOString()
    };

    // Simulate rapid dispatch / API processing
    setTimeout(() => {
      setSubmittedData(payload);
      setIsSubmitting(false);
    }, 900);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — Shyoran Systems | Direct Architect Line &amp; Project Scoping</title>
        <meta 
          name="description" 
          content="Skip the sales reps. Talk directly to systems architect Pardeep Shyoran. Book a 15-minute discovery call or submit your project scope for a response in < 4 hours." 
        />
      </Helmet>

      <Header />

      <main className={styles.contactMain}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.beaconRow}>
              <div className={styles.beaconPill}>
                <span className={styles.pulseDot}></span>
                <span>SYSTEMS ONLINE · ACCEPTING 2 BUILDS FOR Q1/Q2 2026</span>
              </div>
              <span className={`${styles.handSticker} hand`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Average response time: &lt; 4 hours</span>
                <BoltIcon size={12} />
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              START A PROJECT.<br />
              <span className="highlight-yellow">SKIP THE SALES REPS.</span>
            </h1>

            <p className={styles.heroLead}>
              Direct communication with the engineer who will actually write the code. 
              <strong> Honest feasibility, concrete timelines, and zero sales runaround.</strong>
            </p>
          </div>
        </section>

        {/* SPLIT LAYOUT: DIRECT CHANNELS + SCOPING FORM */}
        <section className={styles.splitSection}>
          <div className="wrap">
            <div className={styles.splitGrid}>
              
              {/* LEFT COLUMN: CHANNELS & SIGNAL */}
              <div className={styles.channelsCol}>
                
                {/* Channel 1: 15-Min Discovery Call */}
                <div className={styles.channelCard}>
                  <span className={styles.channelTag}>// FAST-TRACK LANE</span>
                  <h3 className={styles.channelTitle}>15-Min Discovery Call</h3>
                  <p className={styles.channelDesc}>
                    Jump on a direct 1-on-1 video call to walk through your product architecture, 
                    technical bottlenecks, and launch roadmap.
                  </p>
                  <a 
                    href="mailto:hello@pardeep-shyoran.me?subject=Schedule%20Discovery%20Call%20-%20Shyoran%20Systems" 
                    className="btn-brutal btn-brutal-primary"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    SCHEDULE DISCOVERY CALL ↗
                  </a>
                </div>

                {/* Channel 2: Direct Email with 1-Click Copy */}
                <div className={styles.channelCard}>
                  <span className={styles.channelTag}>// DIRECT INBOX</span>
                  <h3 className={styles.channelTitle}>Direct Email</h3>
                  <p className={styles.channelDesc}>
                    Send wireframes, API docs, or specs directly to the founder inbox.
                  </p>
                  <div className={styles.emailActionRow}>
                    <div className={styles.emailDisplay}>
                      hello@pardeep-shyoran.me
                    </div>
                    <button 
                      className={styles.copyEmailBtn} 
                      onClick={handleCopyEmail}
                      type="button"
                    >
                      {copiedEmail ? 'COPIED! ✓' : 'COPY EMAIL'}
                    </button>
                  </div>
                </div>

                {/* Channel 3: Live Timezone & Status Indicator */}
                <div className={styles.timezoneCard}>
                  <div className={styles.timeHeader}>
                    <span className={styles.timeTag}>LOCATION / TIMEZONE</span>
                    <span className={styles.timeStatus}>
                      <span className={styles.pulseDot} style={{ background: isWorkingHours ? '#00E676' : '#FFBD2E' }}></span>
                      {isWorkingHours ? 'ONLINE (FAST REPLY)' : 'STANDBY (REPLIES 09:00 IST)'}
                    </span>
                  </div>
                  <div className={styles.clockDisplay}>
                    {currentTimeIST || '17:30:00'} <span style={{ fontSize: '16px', color: '#94A3B8' }}>IST (UTC+5:30)</span>
                  </div>
                  <p className={styles.timeSub}>
                    Studio in Sirsa, Haryana 125103, India · Serving founders &amp; teams across US, Europe &amp; Global remote.
                  </p>
                </div>

                {/* Channel 4: 3-Step Turnaround SLA */}
                <div className={styles.slaCard}>
                  <div className={styles.slaTitle}>
                    <span><BoltIcon size={13} /></span>
                    <span>TURNAROUND SLA GUARANTEE</span>
                  </div>
                  <div className={styles.slaSteps}>
                    <div className={styles.slaStep}>
                      <span className={styles.slaStepNumber}>01</span>
                      <span><strong>Within 4 Hours:</strong> Architectural review &amp; feasibility assessment in your inbox.</span>
                    </div>
                    <div className={styles.slaStep}>
                      <span className={styles.slaStepNumber}>02</span>
                      <span><strong>Within 24 Hours:</strong> 15-minute scope call &amp; technical stack alignment.</span>
                    </div>
                    <div className={styles.slaStep}>
                      <span className={styles.slaStepNumber}>03</span>
                      <span><strong>Within 48 Hours:</strong> Milestone proposal with fixed scope and guaranteed launch date.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: INTERACTIVE SCOPING FORM */}
              <div className={styles.formCard}>
                
                {submittedData ? (
                  /* SUBMISSION TERMINAL LOG */
                  <div className={styles.successTerminal}>
                    <div className={styles.terminalTop}>
                      <span className={`${styles.terminalDot} ${styles.dotRed}`}></span>
                      <span className={`${styles.terminalDot} ${styles.dotYellow}`}></span>
                      <span className={`${styles.terminalDot} ${styles.dotGreen}`}></span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#94A3B8', marginLeft: '8px' }}>
                        transmission-status.log
                      </span>
                    </div>
                    <div className={styles.terminalOutput}>
                      <p><span className={styles.successTag}>[200 OK]</span> Specification received successfully by Pardeep Shyoran.</p>
                      <p><strong>Client:</strong> {submittedData.name} &lt;{submittedData.email}&gt;</p>
                      <p><strong>Company / Project:</strong> {submittedData.company || 'Confidential'}</p>
                      <p><strong>Selected Scopes:</strong> {submittedData.scopes.join(', ')}</p>
                      <p><strong>Budget Bracket:</strong> {submittedData.budget}</p>
                      <p><strong>Target Timeline:</strong> {submittedData.timeline}</p>
                      <p><strong>Timestamp:</strong> {new Date().toLocaleString()}</p>
                      <p style={{ color: 'var(--accent-yellow)', marginTop: '16px' }}>
                        &gt; Notification dispatched to priority terminal. Review in progress.
                      </p>

                      <button 
                        className="btn-brutal btn-brutal-yellow resetBtn" 
                        onClick={handleResetForm}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      >
                        <span>SUBMIT ANOTHER SPECIFICATION</span>
                        <BoltIcon size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* INTERACTIVE FORM */
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formHeader}>
                      <div className="badge-pill formEyebrow" style={{ background: '#FFFFFF', color: 'var(--text-main)' }}>
                        <span>// PROJECT SCOPING MATRIX</span>
                      </div>
                      <h2 className={styles.formTitle}>Tell Me About Your Build</h2>
                      <p className={styles.formSubtitle}>
                        Select your project requirements and budget tier for a rapid technical evaluation.
                      </p>
                    </div>

                    {/* Scope Selector Pills */}
                    <div className={styles.formSection}>
                      <label className={styles.label}>
                        Project Scope &amp; Focus <span className={styles.labelOptional}>(select all that apply)</span>
                      </label>
                      <div className={styles.pillGroup}>
                        {SCOPE_OPTIONS.map(scope => {
                          const isSelected = selectedScopes.includes(scope);
                          return (
                            <button
                              key={scope}
                              type="button"
                              className={`${styles.pillOption} ${isSelected ? styles.pillOptionSelected : ''}`}
                              onClick={() => toggleScope(scope)}
                            >
                              {isSelected ? '✓ ' : '+ '}
                              {scope}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Selector Pills */}
                    <div className={styles.formSection}>
                      <label className={styles.label}>
                        Target Budget Bracket
                      </label>
                      <div className={styles.pillGroup}>
                        {BUDGET_OPTIONS.map(budget => {
                          const isSelected = selectedBudget === budget;
                          return (
                            <button
                              key={budget}
                              type="button"
                              className={`${styles.pillOption} ${isSelected ? styles.pillOptionSelected : ''}`}
                              onClick={() => setSelectedBudget(budget)}
                            >
                              {isSelected ? '● ' : '○ '}
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email Fields */}
                    <div className={styles.inputGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Your Name *</label>
                        <input
                          id="name"
                          className={styles.inputField}
                          placeholder="e.g. Alex Vance"
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Work Email *</label>
                        <input
                          id="email"
                          type="email"
                          className={styles.inputField}
                          placeholder="alex@company.com"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email address'
                            }
                          })}
                        />
                        {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
                      </div>
                    </div>

                    {/* Company & Timeline */}
                    <div className={styles.inputGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="company">Company / Product <span className={styles.labelOptional}>(optional)</span></label>
                        <input
                          id="company"
                          className={styles.inputField}
                          placeholder="Acme Labs, Inc."
                          {...register('company')}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="timeline">Desired Launch Timeline</label>
                        <select id="timeline" className={styles.selectField} {...register('timeline')}>
                          {TIMELINE_OPTIONS.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Overview */}
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="description">
                        Project Overview &amp; Requirements *
                      </label>
                      <textarea
                        id="description"
                        className={styles.textareaField}
                        placeholder="What are you building? What problem does it solve, what is the existing stack (if any), and do you have designs/specs ready?"
                        {...register('description', { 
                          required: 'Please share a brief overview of your build',
                          minLength: { value: 10, message: 'Please provide at least 10 characters' }
                        })}
                      />
                      {errors.description && <span className={styles.errorText}>{errors.description.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-brutal btn-brutal-primary ${styles.submitBtn}`}
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    >
                      {isSubmitting ? (
                        'TRANSMITTING SPECIFICATION...'
                      ) : (
                        <>
                          <span>DISPATCH SPECIFICATION</span>
                          <BoltIcon size={14} />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>

            </div>
          </div>
        </section>

        {/* MINI CONTACT FAQ */}
        <section className={styles.faqSection}>
          <div className="wrap">
            <div className={styles.faqHeader}>
              <div className="badge-pill" style={{ background: 'var(--accent-yellow)', color: 'var(--text-main)', marginBottom: '12px' }}>
                <span>// TRANSPARENCY FAQ</span>
              </div>
              <h2 className="display-title" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                FREQUENTLY ASKED <span className="highlight-yellow">QUESTIONS</span>
              </h2>
            </div>

            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>How quickly can we kick off?</h3>
                <p className={styles.faqAnswer}>
                  Since I maintain a strict cap of 2 active builds simultaneously, onboarding can begin within 
                  48-72 hours of agreement signing and milestone deposit.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Do you sign mutual NDAs?</h3>
                <p className={styles.faqAnswer}>
                  Yes. Before diving into proprietary business logic or product blueprints, we can execute 
                  a standard mutual non-disclosure agreement.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>What if I don't have detailed specs yet?</h3>
                <p className={styles.faqAnswer}>
                  No problem. During our discovery phase, we will map out user stories, API endpoints, and data 
                  architecture together. You don't need a 50-page document to begin.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>How do billing and payments work?</h3>
                <p className={styles.faqAnswer}>
                  Projects are scoped on fixed-price milestones (typically 50% kick-off, 50% production delivery) 
                  so you never face unpredictable hourly overages or bloated invoices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
