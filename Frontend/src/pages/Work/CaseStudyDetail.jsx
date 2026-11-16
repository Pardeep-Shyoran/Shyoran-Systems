import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { getCaseStudySchema } from '../../utils/seoSchemas';
import {
  BoltIcon,
  CheckIcon,
  TerminalIcon,
  ToolIcon,
  LockIcon,
  ShieldIcon,
  ArrowRightIcon
} from '../../components/Icons/Icons';
import { getProjectById, PROJECTS_DATA } from '../../data/projectsData';
import styles from './CaseStudyDetail.module.css';

const CaseStudyDetail = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  const [copiedSpec, setCopiedSpec] = useState(false);

  if (!project) {
    return (
      <div className={styles.notFoundMain}>
        <SEO
          title="Case Study Not Found — Shyoran Systems"
          description="The requested architecture specification does not exist in the verified project registry."
          noindex={true}
        />
        <div className="wrap">
          <div className={styles.notFoundBox}>
            <span className={styles.notFoundTag}>// 404 SPEC NOT FOUND</span>
            <h1 className="display-title">Case Study Not Found</h1>
            <p className={styles.notFoundDesc}>
              The requested architecture specification &quot;{projectId}&quot; does not exist in the verified project registry.
            </p>
            <Link to="/work" className="btn-brutal btn-brutal-primary btn-md">
              <span>← RETURN TO PORTFOLIO</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleCopySpec = () => {
    if (project.architecture?.specSnippet) {
      navigator.clipboard.writeText(project.architecture.specSnippet);
      setCopiedSpec(true);
      setTimeout(() => setCopiedSpec(false), 2000);
    }
  };

  // Find next project for seamless navigation
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const caseStudySchema = getCaseStudySchema(project);

  return (
    <>
      <SEO
        title={`${project.title} — Architecture Case Study`}
        description={`${project.title}: ${project.summary} Engineered by Shyoran Systems.`}
        canonicalUrl={`https://shyoran.systems/work/${project.id}`}
        ogType="article"
        ogImage={project.image}
        ogImageAlt={project.imageAlt}
        schema={caseStudySchema}
      />

      <div className={styles.detailMain}>
        {/* BREADCRUMB HEADER */}
        <nav className={styles.breadcrumbBar} aria-label="Breadcrumb">
          <div className="wrap">
            <div className={styles.breadcrumbRow}>
              <Link to="/work" className={styles.backLink}>
                <span>← All Case Studies</span>
              </Link>
              <span className={styles.crumbDivider}>/</span>
              <span className={styles.crumbActive} aria-current="page">{project.title}</span>
              <span className={styles.showcaseBadge}>{project.projectType}</span>
            </div>
          </div>
        </nav>

        {/* HERO TITLE BLOCK */}
        <section className={styles.heroSection}>
          <div className="wrap">
            <div className={styles.badgeRow}>
              <span
                className={styles.categoryBadge}
                style={{ background: project.badgeBg, color: project.badgeColor }}
              >
                {project.badge}
              </span>
              <span className={styles.clientTag}>// {project.categoryLabel}</span>
            </div>

            <h1 className={`${styles.projectTitle} display-title`}>
              {project.title}
            </h1>
            <p className={styles.projectSubtitle}>{project.subtitle}</p>

            <p className={styles.projectSummary}>{project.summary}</p>

            {/* ACTION BUTTONS & LINKS */}
            <div className={styles.headerActions}>
              <Link
                to={`/contact?scope=${encodeURIComponent(project.scopeSlug)}`}
                className="btn-brutal btn-brutal-primary btn-md"
              >
                <span>REQUEST SIMILAR BUILD</span>
                <BoltIcon size={14} />
              </Link>

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-brutal-outline btn-md"
                >
                  LIVE APPLICATION ↗
                </a>
              ) : (
                <span className={styles.statusPill}>
                  <span className={styles.statusDot}></span>
                  <span>ARCHITECTURE SHOWCASE (CONFIDENTIAL / PROPRIETARY SPEC)</span>
                </span>
              )}
            </div>
          </div>
        </section>

        {/* LARGE VISUAL PREVIEW */}
        <section className={styles.mediaSection}>
          <div className="wrap">
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots} aria-hidden="true">
                  <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                  <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                  <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                </div>
                <div className={styles.browserUrl}>
                  https://shyoran.systems/work/{project.id}
                </div>
                <div className={styles.browserTag}>LIVE INTERFACE CAPTURE</div>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className={styles.fullPreviewImg}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED BENCHMARKS STRIP */}
        <section className={styles.benchmarksSection}>
          <div className="wrap">
            <div className={styles.benchmarksHeader}>
              <span className={styles.benchmarksTag}>// VERIFIED ARCHITECTURAL BENCHMARKS</span>
              <span className={styles.benchmarksNotice}>Evidence-based technical metrics</span>
            </div>
            <div className={styles.benchmarksGrid}>
              {project.verifiedBenchmarks.map((bench, idx) => (
                <div key={idx} className={styles.benchmarkCard}>
                  <span className={styles.benchmarkVal}>{bench.value}</span>
                  <span className={styles.benchmarkLabel}>{bench.label}</span>
                  <span className={styles.benchmarkNote}>{bench.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY CORE CONTENT */}
        <section className={styles.contentSection}>
          <div className="wrap">
            <div className={styles.contentGrid}>
              
              {/* LEFT / MAIN COLUMN: CONTEXT, SOLUTION, ROLE, CHALLENGES */}
              <div className={styles.mainArticle}>
                
                {/* 1. Context & Business Problem */}
                <article className={styles.articleCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIndex}>01</span>
                    <h2 className={styles.cardTitle}>Context &amp; Business Problem</h2>
                  </div>
                  <p className={styles.bodyText}>{project.context.problem}</p>

                  <h3 className={styles.subHeading}>Target Users &amp; Project Requirements</h3>
                  <p className={styles.bodyText}>{project.context.targetUsers}</p>
                  
                  <ul className={styles.checklist}>
                    {project.context.requirements.map((req, rIdx) => (
                      <li key={rIdx} className={styles.checkItem}>
                        <span className={styles.checkIcon}><CheckIcon size={13} /></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* 2. Solution & Key Features */}
                <article className={styles.articleCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIndex}>02</span>
                    <h2 className={styles.cardTitle}>Solution &amp; Production Architecture</h2>
                  </div>
                  <p className={styles.bodyText}>{project.solution.overview}</p>

                  <h3 className={styles.subHeading}>Key Implemented Capabilities</h3>
                  <ul className={styles.checklist}>
                    {project.solution.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className={styles.checkItem}>
                        <span className={styles.checkIcon}><CheckIcon size={13} /></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* 3. Studio Role & Engineering Execution */}
                <article className={styles.articleCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIndex}>03</span>
                    <h2 className={styles.cardTitle}>Studio Role &amp; Engineering Execution</h2>
                  </div>
                  <div className={styles.roleBadge}>
                    <span>RESPONSIBILITY:</span>
                    <strong>{project.roleAndContributions.role}</strong>
                  </div>
                  <ul className={styles.checklist} style={{ marginTop: '16px' }}>
                    {project.roleAndContributions.contributions.map((con, cIdx) => (
                      <li key={cIdx} className={styles.checkItem}>
                        <span className={styles.checkIcon}><CheckIcon size={13} /></span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* 4. Challenges & Engineering Trade-Offs */}
                <article className={styles.articleCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIndex}>04</span>
                    <h2 className={styles.cardTitle}>Challenges &amp; Engineering Trade-Offs</h2>
                  </div>
                  <div className={styles.challengesList}>
                    {project.challengesAndTradeoffs.map((item, idx) => (
                      <div key={idx} className={styles.challengeItem}>
                        <h3 className={styles.challengeTitle}>
                          <span className={styles.challengeTag}>CHALLENGE:</span> {item.challenge}
                        </h3>
                        <p className={styles.resolutionText}>
                          <span className={styles.resolutionTag}>DECISION / RESOLUTION:</span> {item.resolution}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>

              </div>

              {/* RIGHT / SIDEBAR COLUMN: ARCHITECTURE SPEC & TECH DETAILS */}
              <aside className={styles.sidebar}>
                {/* Tech Stack Blueprint Card */}
                <div className={styles.sidebarCard}>
                  <div className={styles.sidebarCardHeader}>
                    <ToolIcon size={14} />
                    <span>SYSTEM ARCHITECTURE CONTRACT</span>
                  </div>
                  <div className={styles.techStackRows}>
                    <div className={styles.specRow}>
                      <span className={styles.specKey}>Client Frontend:</span>
                      <span className={styles.specVal}>{project.architecture.client}</span>
                    </div>
                    <div className={styles.specRow}>
                      <span className={styles.specKey}>API Gateway:</span>
                      <span className={styles.specVal}>{project.architecture.api}</span>
                    </div>
                    <div className={styles.specRow}>
                      <span className={styles.specKey}>Database Engine:</span>
                      <span className={styles.specVal}>{project.architecture.database}</span>
                    </div>
                    {project.architecture.cache && (
                      <div className={styles.specRow}>
                        <span className={styles.specKey}>Caching Layer:</span>
                        <span className={styles.specVal}>{project.architecture.cache}</span>
                      </div>
                    )}
                    {project.architecture.payments && (
                      <div className={styles.specRow}>
                        <span className={styles.specKey}>Payments Layer:</span>
                        <span className={styles.specVal}>{project.architecture.payments}</span>
                      </div>
                    )}
                    {project.architecture.encryption && (
                      <div className={styles.specRow}>
                        <span className={styles.specKey}>Encryption:</span>
                        <span className={styles.specVal}>{project.architecture.encryption}</span>
                      </div>
                    )}
                    {project.architecture.models && (
                      <div className={styles.specRow}>
                        <span className={styles.specKey}>AI Models:</span>
                        <span className={styles.specVal}>{project.architecture.models}</span>
                      </div>
                    )}
                    <div className={styles.specRow}>
                      <span className={styles.specKey}>Deployment:</span>
                      <span className={styles.specVal}>{project.architecture.cloud}</span>
                    </div>
                  </div>
                </div>

                {/* Architecture Code Spec Drawer */}
                <div className={styles.codeSpecCard}>
                  <div className={styles.codeSpecBar}>
                    <div className={styles.codeDots} aria-hidden="true">
                      <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                      <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                      <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                      <span className={styles.codeSpecTitle}>{project.id}.spec</span>
                    </div>
                    <button
                      type="button"
                      className={styles.copySpecBtn}
                      onClick={handleCopySpec}
                      aria-live="polite"
                    >
                      {copiedSpec ? '✓ COPIED' : 'COPY SPEC'}
                    </button>
                  </div>
                  <pre className={styles.codePre}>
                    <code>{project.architecture.specSnippet}</code>
                  </pre>
                </div>

                {/* Direct Action Box */}
                <div className={styles.discussBox}>
                  <h3 className={styles.discussTitle}>Need a Similar Architecture?</h3>
                  <p className={styles.discussDesc}>
                    Every engagement is scoped with fixed milestones, 100% IP transfer, and direct engineer communication.
                  </p>
                  <Link
                    to={`/contact?scope=${encodeURIComponent(project.scopeSlug)}`}
                    className="btn-brutal btn-brutal-primary btn-full"
                    style={{ marginBottom: '10px' }}
                  >
                    <span>DISCUSS THIS SPEC</span>
                    <BoltIcon size={14} />
                  </Link>
                  <a
                    href={`mailto:hello@pardeep-shyoran.me?subject=${encodeURIComponent(`Case Study Inquiry: ${project.title}`)}`}
                    className="btn-brutal btn-brutal-outline btn-full"
                    style={{ background: '#FFFFFF' }}
                  >
                    DIRECT EMAIL ↗
                  </a>
                </div>

                {/* Next Project Teaser */}
                <div className={styles.nextProjectCard}>
                  <span className={styles.nextTag}>NEXT CASE STUDY →</span>
                  <Link to={`/work/${nextProject.id}`} className={styles.nextLink}>
                    <h4 className={styles.nextTitle}>{nextProject.title}</h4>
                    <p className={styles.nextSubtitle}>{nextProject.subtitle}</p>
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* BOTTOM FINAL CTA */}
        <section className={styles.bottomCtaSection}>
          <div className="wrap">
            <div className={styles.bottomCtaBox}>
              <div className={styles.bottomCtaContent}>
                <h2 className="display-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                  HAVE A COMPLEX SYSTEM TO SHIP?
                </h2>
                <p>
                  Reach out directly to systems architect Pardeep Shyoran to review requirements, data schemas, and deployment roadmaps.
                </p>
              </div>
              <div className={styles.bottomCtaActions}>
                <Link to="/contact" className="btn-brutal btn-brutal-primary btn-lg">
                  <span>DISCUSS YOUR PROJECT</span>
                  <BoltIcon size={14} />
                </Link>
                <Link to="/work" className="btn-brutal btn-brutal-outline btn-lg" style={{ background: '#FFFFFF', color: '#000000' }}>
                  <span>VIEW ALL CASE STUDIES</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyDetail;
