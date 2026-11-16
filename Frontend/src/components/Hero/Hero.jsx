import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, LockIcon, PackageIcon, CheckIcon, TerminalIcon } from '../Icons/Icons';
import styles from './Hero.module.css';

const blueprintSnippet = `// omniflow.architecture.spec.json
{
  "system": "OmniFlow AI Knowledge Retrieval Engine",
  "client_stack": "React 19 + SSE Streaming + Neo-Brutalist Design Tokens",
  "api_layer": "Node.js LTS / Express Gateway + LangChain RAG Orchestrator",
  "vector_store": "MongoDB Atlas Vector Search (1536 dim HNSW index)",
  "caching": "Redis Semantic Cache (0.88 cosine cutoff threshold)",
  "cloud": "AWS ECS Fargate + Cloudflare Edge CDN",
  "ownership": "100% intellectual property transfer to client"
}`;

const Hero = () => {
  const [viewMode, setViewMode] = useState('interface'); // 'interface' | 'blueprint'
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(blueprintSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.heroSection}>
      <div className="wrap">
        <div className={styles.heroBadgeRow}>
          <div className="badge-pill badge-white">
            <BoltIcon size={12} />
            <span>INDEPENDENT SOFTWARE STUDIO</span>
          </div>
          <div className="sticker-hand">
            Custom Engineering · Founder Direct
          </div>
        </div>

        <h1 className={`${styles.heroHeadline} display-title`}>
          WE BUILD WEB APPS, SAAS PRODUCTS &amp; <span className="highlight-yellow">AI SOLUTIONS.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Custom software built around your business goals, from the first idea to a production-ready product. 
          Direct collaboration with lead architect Pardeep Shyoran, transparent milestones, and maintainable code you own completely.
        </p>

        <div className={styles.heroCtaGroup}>
          <Link to="/contact" className="btn-brutal btn-brutal-primary btn-lg">
            <span>Discuss Your Project</span>
            <BoltIcon size={16} />
          </Link>
          <a className="btn-brutal btn-brutal-outline btn-lg" href="#featured-projects">
            <span>Explore Our Work ↓</span>
          </a>
          <div className={styles.heroTrustMeta}>
            <span className={styles.metaItem}>
              <LockIcon size={12} /> Direct Senior Architect
            </span>
            <span aria-hidden="true">·</span>
            <span className={styles.metaItem}>
              <BoltIcon size={12} /> Weekly Staging Previews
            </span>
            <span aria-hidden="true">·</span>
            <span className={styles.metaItem}>
              <PackageIcon size={12} /> 100% IP Transfer
            </span>
          </div>
        </div>

        {/* DEMONSTRATION VISUAL CONTAINER */}
        <div className={styles.showcaseWindow}>
          <div className={styles.windowHeader}>
            <div className={styles.windowLeft}>
              <div className={styles.windowDots} aria-hidden="true">
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <div className={styles.windowUrl}>
                <LockIcon size={11} />
                <span>demonstration.shyoran.systems/omniflow-ai</span>
              </div>
            </div>

            <div className={styles.windowRight}>
              <div 
                className={styles.viewToggleGroup}
                role="tablist"
                aria-label="Demonstration preview modes"
              >
                <button
                  type="button"
                  id="tab-interface"
                  role="tab"
                  aria-selected={viewMode === 'interface'}
                  aria-controls="panel-interface"
                  className={`${styles.toggleBtn} ${viewMode === 'interface' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setViewMode('interface')}
                >
                  Product Interface
                </button>
                <button
                  type="button"
                  id="tab-blueprint"
                  role="tab"
                  aria-selected={viewMode === 'blueprint'}
                  aria-controls="panel-blueprint"
                  className={`${styles.toggleBtn} ${viewMode === 'blueprint' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setViewMode('blueprint')}
                >
                  <TerminalIcon size={12} />
                  <span>Architecture Spec</span>
                </button>
              </div>

              {viewMode === 'blueprint' && (
                <button 
                  type="button"
                  className={styles.copyBtn}
                  onClick={handleCopyCode}
                  aria-label="Copy Spec: omniflow.architecture.spec.json"
                >
                  {copied ? (
                    <span className={styles.copiedSpan} aria-live="polite">
                      <CheckIcon size={12} /> Copied!
                    </span>
                  ) : (
                    'Copy Spec'
                  )}
                </button>
              )}
            </div>
          </div>

          <div className={styles.windowContent}>
            {viewMode === 'interface' ? (
              <div 
                id="panel-interface"
                role="tabpanel"
                aria-labelledby="tab-interface"
                tabIndex={0}
                className={styles.imageWrapper}
              >
                <img 
                  src="/images/omniflow_dashboard.jpg" 
                  alt="Demonstration: OmniFlow AI vector retrieval and knowledge base interface" 
                  className={styles.dashboardImage}
                  loading="eager"
                />
                <div className={styles.demoLabelPill}>
                  <span className={styles.demoDot} aria-hidden="true"></span>
                  <span>Simulated Interface Demonstration · Production Architecture Sample</span>
                </div>
              </div>
            ) : (
              <div 
                id="panel-blueprint"
                role="tabpanel"
                aria-labelledby="tab-blueprint"
                tabIndex={0}
                className={styles.codeWrapper}
              >
                <div className={styles.codePromptLine}>
                  <span className={styles.promptSymbol}>pardeep@shyoran-systems:~$</span> cat omniflow.architecture.spec.json
                </div>
                <pre className={styles.codePre}>
                  <code>{blueprintSnippet}</code>
                </pre>
              </div>
            )}
          </div>

          <div className={styles.windowFooter}>
            <div className={styles.footerSpecs}>
              <span className={styles.specTag}>
                <strong>Application:</strong> OmniFlow AI Retrieval
              </span>
              <span className={styles.specDivider}>|</span>
              <span className={styles.specTag}>
                <strong>Tech:</strong> React 19 · Node.js · Atlas Vector Search · LangChain
              </span>
              <span className={styles.specDivider}>|</span>
              <span className={styles.specTag}>
                <strong>Status:</strong> Production-Ready Architecture
              </span>
            </div>
            <Link
              to="/work/omniflow-ai"
              className={styles.exploreLink}
              aria-label="View OmniFlow AI Case Study & Architecture Spec"
            >
              View OmniFlow AI Case Study &amp; Spec →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
