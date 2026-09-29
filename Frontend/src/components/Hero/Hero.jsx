import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const heroTabContents = {
  architecture: `// shyoran.systems/blueprint.json
{
  "project_name": "Next-Gen SaaS MVP",
  "founder_lead": "Pardeep Shyoran",
  "timeline_target": "14 business days",
  "direct_communication": "Shared Slack / WhatsApp channel",
  "stack": {
    "frontend": "React 19 / Vite / Tailwind / Motion",
    "backend": "Node.js / Express / Bun runtime",
    "database": "MongoDB Atlas / PostgreSQL + Prisma",
    "ai_layer": "OpenAI / Claude / LangChain / Vector DB",
    "cloud": "AWS ECS / Docker / Cloudflare Edge"
  },
  "guarantee": "Clean code, 100% IP ownership, zero agency fluff"
}`,
  pipeline: `// api/routes/ai-workflow.ts
import { Router } from "express";
import { generateWorkflowStream } from "../services/ai";

const router = Router();

router.post("/execute", async (req, res) => {
  const { prompt, userId, context } = req.body;
  // High-performance streaming with 0 handoff lag
  const stream = await generateWorkflowStream({ prompt, context });
  
  res.setHeader("Content-Type", "text/event-stream");
  stream.pipe(res);
});

export default router;`,
  deploy: `[00:01:04] 🚀 Initializing Shyoran Systems Automated Deploy...
[00:01:06] 📦 Bundling React 19 Frontend + Vite production assets
[00:01:09] 🛡️ Validating API schema & JWT security policies
[00:01:12] ⚡ Deploying microservices container to AWS ECS cluster
[00:01:15] 🌐 Cloudflare Edge routing updated. DNS resolved.
[00:01:17] ✨ HEALTH CHECK PASSED: 100% nominal. Latency: 22ms.
[00:01:18] 🟢 Status: LIVE & READY FOR CLIENT TRAFFIC.`
};

const Hero = () => {
  const [activeHeroTab, setActiveHeroTab] = useState('architecture');
  const [copiedHero, setCopiedHero] = useState(false);

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedHero(true);
    setTimeout(() => setCopiedHero(false), 2000);
  };

  return (
    <section className={styles.heroSection}>
      <div className="wrap">
        <div className={styles.heroBadgeRow}>
          <div className="badge-pill" style={{ background: '#FFE600' }}>
            <span>⚡</span>
            <span>ACCEPTING BUILDS · Q1/Q2 2026</span>
          </div>
          <div className={`${styles.stickerHand} hand`}>
            100% Founder-Engineered · 0 Middle Management!
          </div>
        </div>

        <h1 className={`${styles.heroHeadline} display-title`}>
          DON'T HIRE AN OVERPRICED 10-PERSON AGENCY.<br />
          <span className="highlight-yellow">SHIP IN 14 DAYS.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Shyoran Systems is an elite software engineering studio. We build production-ready{' '}
          <strong>MERN-stack applications</strong> and <strong>AI-integrated software</strong> for founders who value speed, craftsmanship, and real software over endless slide decks.
        </p>

        <div className={styles.heroCtaGroup}>
          <Link to="/contact" className="btn-brutal btn-brutal-primary">
            START YOUR BUILD ⚡
          </Link>
          <a className="btn-brutal btn-brutal-outline" href="#comparison">
            SEE THE DIFFERENCE ↓
          </a>
          <span className={styles.heroTrustMeta}>
            <span>🔒 Fixed Scope</span> · <span>⚡ Staging Deploys</span> · <span>📦 100% IP Transfer</span>
          </span>
        </div>

        {/* INTERACTIVE HERO CODE / ARCHITECTURE DASHBOARD */}
        <div className={`${styles.dashboardContainer} reveal`}>
          <div className={styles.dashboardHeader}>
            <div className={styles.windowDots}>
              <span className={styles.dotRed}></span>
              <span className={styles.dotYellow}></span>
              <span className={styles.dotGreen}></span>
            </div>
            <div className={styles.dashboardTabs}>
              <button 
                className={`${styles.dashTab} ${activeHeroTab === 'architecture' ? styles.dashTabActive : ''}`}
                onClick={() => setActiveHeroTab('architecture')}
              >
                blueprint.json
              </button>
              <button 
                className={`${styles.dashTab} ${activeHeroTab === 'pipeline' ? styles.dashTabActive : ''}`}
                onClick={() => setActiveHeroTab('pipeline')}
              >
                ai-workflow.ts
              </button>
              <button 
                className={`${styles.dashTab} ${activeHeroTab === 'deploy' ? styles.dashTabActive : ''}`}
                onClick={() => setActiveHeroTab('deploy')}
              >
                deploy.log
              </button>
            </div>
            <button 
              className={styles.copyButton}
              onClick={() => handleCopyCode(heroTabContents[activeHeroTab])}
              title="Copy Code"
            >
              {copiedHero ? '✓ COPIED' : 'COPY'}
            </button>
          </div>

          <div className={styles.dashboardBody}>
            <pre><code>{heroTabContents[activeHeroTab]}</code></pre>
          </div>

          <div className={styles.dashboardFooter}>
            <div className={styles.liveMetricsPill}>
              <span className={styles.beaconDot}></span>
              <span>SYSTEM ONLINE · 24ms API LATENCY · DOCKERIZED</span>
            </div>
            <span className={styles.engineLabel}>ENGINE: SHYORAN-V2-ACCEL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
