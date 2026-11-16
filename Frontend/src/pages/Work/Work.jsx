import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { getWebPageSchema } from '../../utils/seoSchemas';
import {
  BoltIcon,
  CheckIcon,
  TerminalIcon,
  ArrowRightIcon,
  ToolIcon
} from '../../components/Icons/Icons';
import { PROJECTS_DATA } from '../../data/projectsData';
import styles from './Work.module.css';

const FILTER_TABS = [
  { id: 'all', label: 'All Projects (4)' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'realtime', label: 'Real-Time & Multiplayer' },
  { id: 'fullstack', label: 'Full-Stack Architecture' }
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSpecId, setActiveSpecId] = useState(null);
  const [copiedSpecId, setCopiedSpecId] = useState(null);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const toggleSpec = (id) => {
    setActiveSpecId(activeSpecId === id ? null : id);
  };

  const handleCopySpec = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedSpecId(id);
    setTimeout(() => setCopiedSpecId(null), 2000);
  };

  const workPageSchema = getWebPageSchema(
    'https://shyoran.systems/work',
    'Engineering Portfolio & Architecture Case Studies — Shyoran Systems',
    'Explore production-grade software architectures, AI retrieval systems, real-time engines, and transactional platforms engineered by Shyoran Systems.'
  );

  return (
    <>
      <SEO
        title="Engineering Portfolio & Architecture Case Studies — Shyoran Systems"
        description="Explore production-grade software architectures, AI retrieval systems, real-time engines, and transactional platforms engineered by Shyoran Systems."
        canonicalUrl="https://shyoran.systems/work"
        schema={workPageSchema}
      />

      <div className={styles.workPage}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.heroBadgeRow}>
              <div className="badge-pill badge-yellow">
                <BoltIcon size={12} />
                <span>ENGINEERING PORTFOLIO // TECHNICAL CASE STUDIES</span>
              </div>
              <span className="sticker-hand">
                Architecture Showcases &amp; Production Specs
              </span>
            </div>

            <h1 className={`${styles.heroTitle} display-title`}>
              SOFTWARE SHIPPED WITH <br />
              <span className="highlight-yellow">ARCHITECTURAL RIGOR.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Explore technical case studies and studio showcases engineered by Shyoran Systems. 
              Inspect real interface captures, system architecture specifications, and verified performance benchmarks.
            </p>

            {/* CATEGORY FILTER BUTTONS */}
            <div className={styles.filterRow} role="tablist" aria-label="Portfolio Filters">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === tab.id}
                  className={`${styles.filterBtn} ${activeFilter === tab.id ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SHOWCASE LIST */}
        <section className={styles.gridSection}>
          <div className="wrap">
            <div className={styles.projectsList}>
              {filteredProjects.map((project, idx) => (
                <article key={project.id} id={project.id} className={styles.projectCard}>
                  {/* Card Header Bar */}
                  <div className={styles.cardHeader}>
                    <div className={styles.headerLeft}>
                      <span
                        className={styles.categoryBadge}
                        style={{ background: project.badgeBg, color: project.badgeColor }}
                      >
                        {project.badge}
                      </span>
                      <span className={styles.clientTag}>// {project.categoryLabel}</span>
                    </div>
                    <div className={styles.typeBadge}>
                      <span>{project.projectType.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Main Grid: Visual Frame on Left/Top, Details on Right/Bottom */}
                  <div className={styles.cardMainGrid}>
                    
                    {/* Visual Interface Preview */}
                    <div className={styles.visualCol}>
                      <div className={styles.browserFrame}>
                        <div className={styles.browserBar} aria-hidden="true">
                          <div className={styles.browserDots}>
                            <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                            <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                            <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                          </div>
                          <span className={styles.browserUrl}>
                            shyoran.systems/work/{project.id}
                          </span>
                          <span className={styles.browserTag}>PREVIEW ↗</span>
                        </div>
                        <Link to={`/work/${project.id}`} className={styles.previewLink} aria-label={`View ${project.title} case study`}>
                          <div className={styles.imageRatioBox}>
                            <img
                              src={project.image}
                              alt={project.imageAlt}
                              className={styles.projectImg}
                              loading={idx < 2 ? 'eager' : 'lazy'}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Details and Technical Summary */}
                    <div className={styles.detailsCol}>
                      <div className={styles.titleArea}>
                        <h2 className={styles.projectTitle}>
                          <Link to={`/work/${project.id}`} className={styles.titleLink}>
                            {project.title}
                          </Link>
                        </h2>
                        <p className={styles.projectSubtitle}>{project.subtitle}</p>
                      </div>

                      <p className={styles.projectSummary}>{project.summary}</p>

                      {/* Verified Technical Benchmarks */}
                      <div className={styles.benchmarksRow}>
                        {project.verifiedBenchmarks.slice(0, 3).map((bench, bIdx) => (
                          <div key={bIdx} className={styles.benchmarkItem}>
                            <span className={styles.benchmarkVal}>{bench.value}</span>
                            <span className={styles.benchmarkLabel}>{bench.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Production Capabilities */}
                      <div className={styles.deliverablesArea}>
                        <span className={styles.deliverablesTitle}>CORE ARCHITECTURE DELIVERABLES:</span>
                        <ul className={styles.deliverablesList}>
                          {project.solution.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <li key={fIdx} className={styles.deliverableItem}>
                              <span className={styles.checkIcon}><CheckIcon size={12} /></span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Links */}
                      <div className={styles.cardActions}>
                        <Link
                          to={`/work/${project.id}`}
                          className="btn-brutal btn-brutal-primary btn-md"
                          aria-label={`Read full case study for ${project.title}`}
                        >
                          <span>READ FULL CASE STUDY</span>
                          <ArrowRightIcon size={14} />
                        </Link>

                        <button
                          type="button"
                          className={styles.specToggleBtn}
                          onClick={() => toggleSpec(project.id)}
                          aria-expanded={activeSpecId === project.id}
                          aria-controls={`spec-drawer-${project.id}`}
                        >
                          <TerminalIcon size={13} />
                          <span>{activeSpecId === project.id ? 'Hide Blueprint' : 'Inspect Blueprint'}</span>
                        </button>

                        <Link
                          to={`/contact?scope=${encodeURIComponent(project.scopeSlug)}`}
                          className="btn-brutal btn-brutal-outline btn-md"
                          style={{ background: '#FFFFFF' }}
                        >
                          <span>DISCUSS SIMILAR BUILD</span>
                          <BoltIcon size={12} />
                        </Link>
                      </div>

                    </div>
                  </div>

                  {/* Expandable Architecture Blueprint Drawer */}
                  {activeSpecId === project.id && (
                    <div id={`spec-drawer-${project.id}`} className={styles.specDrawer}>
                      <div className={styles.specDrawerBar}>
                        <div className={styles.dots} aria-hidden="true">
                          <span className={styles.dotRed}></span>
                          <span className={styles.dotYellow}></span>
                          <span className={styles.dotGreen}></span>
                          <span className={styles.specFileName}>{project.id}.architecture.spec</span>
                        </div>
                        <button
                          type="button"
                          className={styles.specCopyBtn}
                          onClick={() => handleCopySpec(project.id, project.architecture.specSnippet)}
                          aria-live="polite"
                        >
                          {copiedSpecId === project.id ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <CheckIcon size={12} /> COPIED!
                            </span>
                          ) : 'COPY SPEC'}
                        </button>
                      </div>
                      <pre className={styles.specCodePre}>
                        <code>{project.architecture.specSnippet}</code>
                      </pre>
                    </div>
                  )}

                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM ARCHITECTURE CTA */}
        <section className={styles.ctaBanner}>
          <div className="wrap">
            <div className={styles.ctaBox}>
              <h2 className="display-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                HAVE A SYSTEM TO BUILD?<br />
                <span className="highlight-yellow">LET&apos;S MAP THE SPECIFICATION.</span>
              </h2>
              <p className={styles.ctaText}>
                No junior handoffs or sales scripts. Talk directly to lead systems architect Pardeep Shyoran and receive an honest architectural feasibility assessment and milestone proposal.
              </p>
              <div className={styles.ctaActionRow}>
                <Link
                  to="/contact"
                  className="btn-brutal btn-brutal-primary btn-lg"
                >
                  <span>DISCUSS YOUR PROJECT</span>
                  <BoltIcon size={16} />
                </Link>
                <a
                  href="mailto:hello@pardeep-shyoran.me?subject=Architecture%20Consultation%20Inquiry"
                  className="btn-brutal btn-brutal-outline btn-lg"
                  style={{ background: '#FFFFFF', color: '#000000' }}
                >
                  DIRECT EMAIL ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
