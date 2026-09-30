import { useState } from 'react';
import {
  ReactLogo,
  NodeLogo,
  MongoLogo,
  AILogo,
  SocketLogo,
  StripeLogo,
  DockerLogo,
  AwsLogo,
  BoltIcon
} from '../Icons/Icons';
import styles from './BentoGrid.module.css';

const BentoGrid = () => {
  const [simQuery, setSimQuery] = useState('AI Customer Onboarding Agent');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simOutput, setSimOutput] = useState(null);

  const handleRunSimulator = () => {
    setIsSimulating(true);
    setSimOutput(null);
    setTimeout(() => {
      setSimOutput({
        status: '200 OK',
        latency: '38ms',
        pipeline: [
          '✓ Fastify/Express Gateway Auth Verified',
          '✓ Vector Embeddings Computed (text-embedding-3-small)',
          '✓ Context Retrieval from Pinecone/MongoDB Atlas',
          '✓ LLM Streaming Response Synthesized',
          '✓ Webhook Triggered & Client DB Updated'
        ],
        estimatedDelivery: '10 business days for complete MVP'
      });
      setIsSimulating(false);
    }, 700);
  };

  return (
    <section id="bento" className={styles.bentoSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className="badge-pill" style={{ background: '#FFE600' }}>
            <span>// CAPABILITIES MATRIX</span>
          </div>
          <h2 className="display-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginTop: '14px' }}>
            THE HIGH-VELOCITY ENGINEERING ENGINE
          </h2>
          <p className={styles.sectionSubtitle}>
            State-of-the-art full stack development augmented by cutting-edge AI architecture.
          </p>
        </div>

        <div className={`${styles.bentoGrid} reveal`}>
          {/* Bento Card 1: Interactive Live API Simulator */}
          <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
            <div className={styles.bentoCardHead}>
              <div className={styles.bentoBadge}>INTERACTIVE TESTBENCH</div>
              <span className={styles.bentoTech}>Node.js · Fastify · OpenAI API</span>
            </div>
            <h3 className={styles.bentoTitle}>AI-Integrated Backend Architecture</h3>
            <p className={styles.bentoDesc}>
              We don't just wrap basic API calls. We design intelligent pipelines, RAG context engines, and streaming webhooks tailored for real customer load.
            </p>

            {/* Interactive Simulator */}
            <div className={styles.simBox}>
              <div className={styles.simInputRow}>
                <input 
                  type="text" 
                  value={simQuery} 
                  onChange={(e) => setSimQuery(e.target.value)}
                  placeholder="e.g. AI Customer Onboarding Agent"
                  className={styles.simInput}
                />
                <button 
                  onClick={handleRunSimulator}
                  disabled={isSimulating}
                  className="btn-brutal btn-brutal-yellow"
                  style={{ padding: '8px 18px', fontSize: '13px' }}
                >
                  {isSimulating ? 'SIMULATING...' : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      RUN PIPELINE <BoltIcon size={13} />
                    </span>
                  )}
                </button>
              </div>

              {simOutput && (
                <div className={styles.simResults}>
                  <div className={styles.simResultsHeader}>
                    <span>STATUS: {simOutput.status}</span>
                    <span>LATENCY: {simOutput.latency}</span>
                  </div>
                  <div className={styles.simStepList}>
                    {simOutput.pipeline.map((step, sIdx) => (
                      <div key={sIdx} className={styles.simStepItem}>{step}</div>
                    ))}
                  </div>
                  <div className={styles.simFooterNotice}>
                    Estimated Ship Timeline: <strong>{simOutput.estimatedDelivery}</strong>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bento Card 2: 100% Founder Direct */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoCardHead}>
              <div className={styles.bentoBadge} style={{ background: '#0038FF', color: '#FFF' }}>100% DIRECT</div>
            </div>
            <div className={styles.bigStatNumber}>01</div>
            <h3 className={styles.bentoTitle}>1 Senior Engineer. Zero Hand-offs.</h3>
            <p className={styles.bentoDesc}>
              The engineer you brainstorm with is the engineer who writes the code, designs the schemas, and deploys to production.
            </p>
            <div className={styles.bentoPills}>
              <span className={styles.pillMini}>Direct Slack</span>
              <span className={styles.pillMini}>Daily Updates</span>
              <span className={styles.pillMini}>Zero Fluff</span>
            </div>
          </div>

          {/* Bento Card 3: Velocity Metrics */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoCardHead}>
              <div className={styles.bentoBadge} style={{ background: '#FFE600' }}>SPEED METRIC</div>
            </div>
            <div className={styles.bigStatNumber}>3X</div>
            <h3 className={styles.bentoTitle}>Faster Delivery Than Agencies</h3>
            <p className={styles.bentoDesc}>
              By stripping away corporate meetings and utilizing autonomous developer toolchains, MVPs reach market in weeks.
            </p>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progressLabel}>
                <span>Shyoran Velocity</span>
                <span>14 Days</span>
              </div>
              <div className={styles.progressBarTrack}>
                <div className={styles.progressBarFillGood} style={{ width: '85%' }}></div>
              </div>
              <div className={styles.progressLabel} style={{ marginTop: '10px' }}>
                <span>Traditional Agency</span>
                <span>90+ Days</span>
              </div>
              <div className={styles.progressBarTrack}>
                <div className={styles.progressBarFillBad} style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Production Ready Stack */}
          <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
            <div className={styles.bentoCardHead}>
              <div className={styles.bentoBadge}>BATTLE-TESTED MERN + AI INFRASTRUCTURE</div>
              <span className={styles.bentoTech}>MongoDB · Express · React · Node · AWS</span>
            </div>
            <h3 className={styles.bentoTitle}>Enterprise-Grade MERN Architecture Out of the Box</h3>
            <p className={styles.bentoDesc}>
              We deliver scalable architectures built to survive product launch traffic: containerized MERN microservices, indexed MongoDB schemas, sub-second WebSocket sync, rate limiting, and end-to-end security.
            </p>
            <div className={styles.techPillGrid}>
              <div className={styles.techTile}>
                <ReactLogo size={20} />
                <span>React 19 Frontend</span>
              </div>
              <div className={styles.techTile}>
                <NodeLogo size={20} />
                <span>Node.js + Express API</span>
              </div>
              <div className={styles.techTile}>
                <MongoLogo size={20} />
                <span>MongoDB Atlas Clusters</span>
              </div>
              <div className={styles.techTile}>
                <AILogo size={20} />
                <span>Claude &amp; OpenAI SDKs</span>
              </div>
              <div className={styles.techTile}>
                <SocketLogo size={20} />
                <span>Socket.io &amp; WebSockets</span>
              </div>
              <div className={styles.techTile}>
                <StripeLogo size={20} />
                <span>Stripe &amp; Razorpay Payments</span>
              </div>
              <div className={styles.techTile}>
                <DockerLogo size={20} />
                <span>Docker Containerization</span>
              </div>
              <div className={styles.techTile}>
                <AwsLogo size={20} />
                <span>AWS ECS &amp; CloudFront CDN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
