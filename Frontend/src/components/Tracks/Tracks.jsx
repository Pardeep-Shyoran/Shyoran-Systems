import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, ClockIcon, TargetIcon, LockIcon, StarIcon } from '../Icons/Icons';
import styles from './Tracks.module.css';

const TRACKS_CATALOG = [
  {
    num: '01',
    badge: 'MERN CORE',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    isFlagship: true,
    title: 'Full-Stack MERN Launchpad',
    tagline: 'React 19 + Node.js + MongoDB Atlas + AWS',
    desc: 'Go from raw concept to a fully functional, revenue-ready web product. Specialized MERN architecture engineered for founders who need to reach market in weeks without tech debt.',
    turnaround: '14 - 21 Business Days',
    targetAudience: 'Pre-Seed & Seed Stage Founders',
    ipOwnership: '100% Code & Schema Transfer',
    cadence: 'Weekly Staging Deploys',
    features: [
      'React 19 single-page application with optimistic UI & Vite tooling',
      'High-throughput RESTful & GraphQL Node.js/Express API gateway',
      'Indexed MongoDB Atlas document modeling & aggregation pipelines',
      'Encrypted JWT authentication, OAuth2 providers & RBAC roles',
      'Multi-stage Docker containerization ready for AWS production deployment'
    ],
    techStack: ['React 19', 'Node.js', 'Express', 'MongoDB Atlas', 'Vite', 'TypeScript', 'Tailwind', 'AWS'],
    serviceAnchor: 'fullstack',
    specFileName: 'mern-launchpad.spec.ts',
    specCode: `// Track 01 Architecture Specification: MERN Launchpad
export const MernLaunchpadSpec = {
  stack: {
    frontend: "React 19 + Vite (Zero Bundle Bloat)",
    backend: "Node.js (LTS) + Express REST/GraphQL",
    database: "MongoDB Atlas M10+ (Geo-Distributed)",
    caching: "Redis Layer (Sub-15ms Reads)",
    container: "Multi-stage Docker Alpine"
  },
  delivery: {
    sprint_duration: "14-21 business days",
    cadence: "Weekly staging demos with live URL",
    code_handoff: "Full GitHub repository + IP assignment"
  },
  monitoring: "Datadog / CloudWatch + Sentry Error Tracking"
};`,
    throughput: '< 22ms API Latency'
  },
  {
    num: '02',
    badge: 'AI NATIVE',
    badgeBg: '#0038FF',
    badgeColor: '#FFFFFF',
    isFlagship: false,
    title: 'AI & LLM Workflows',
    tagline: 'RAG Context Engines · Autonomous Agents · Chatbots',
    desc: 'Inject modern artificial intelligence into your existing application or build an AI-first product. Includes private vector embeddings, low-latency streaming, and autonomous tool calling.',
    turnaround: '10 - 18 Business Days',
    targetAudience: 'AI Startups & Domain SaaS Tools',
    ipOwnership: '100% Prompts & Weights Ownership',
    cadence: 'Interactive Prompt Evaluation',
    features: [
      'Custom RAG pipeline indexing enterprise docs with vector databases',
      'Sub-second streaming chat interfaces via Server-Sent Events (SSE)',
      'Autonomous tool-calling agents wired to your database & external APIs',
      'Structured JSON schema output validation for Claude 3.5 & GPT-4o',
      'Token consumption monitoring, fallback providers & rate protection'
    ],
    techStack: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'LangChain', 'Atlas Vector', 'Pinecone', 'Python/FastAPI', 'SSE'],
    serviceAnchor: 'ai-llm',
    specFileName: 'ai-orchestrator.spec.ts',
    specCode: `// Track 02 Architecture Specification: AI & LLM Engine
import { AnthropicStream, VectorSearch } from "@shyoran/ai";

export async function executeAgentPipeline(request: UserRequest) {
  // 1. Semantic query embedding over proprietary vector space
  const context = await VectorSearch.hybrid({
    query: request.prompt,
    index: "atlas-vector-v2",
    topK: 6
  });

  // 2. Synthesize low-latency streaming response with tool calls
  return AnthropicStream.execute({
    model: "claude-3-5-sonnet-20241022",
    system: "Autonomous enterprise agent with database execution tools.",
    messages: [{ role: "user", content: request.prompt }],
    contextDocs: context
  });
}`,
    throughput: 'Sub-second First Token'
  },
  {
    num: '03',
    badge: 'COMMERCE',
    badgeBg: '#FFE600',
    badgeColor: '#000000',
    isFlagship: false,
    title: 'E-Commerce & Payments',
    tagline: 'Stripe · Razorpay · Subscription Engines · Admin Dashboards',
    desc: 'High-converting monetization platforms built for volume. Custom digital storefronts, recurring subscription tiers, idempotent payment webhooks, and complete administrative portals.',
    turnaround: '14 - 24 Business Days',
    targetAudience: 'D2C Brands, Digital Creators & SaaS Subscriptions',
    ipOwnership: '100% Commercial Rights',
    cadence: 'Sandbox Test Transaction Demos',
    features: [
      'Multi-currency checkout sessions (Stripe, Razorpay, Lemon Squeezy)',
      'Idempotent webhook reconciliation to prevent duplicate charges',
      'Dynamic product catalogs, stock management & discount rule engines',
      'Administrative analytics dashboard for revenue, refunds & customer LTV',
      'Automated PDF invoice generation and transactional email dispatches'
    ],
    techStack: ['Stripe API', 'Razorpay', 'MongoDB', 'Node.js', 'React 19', 'Webhooks', 'Resend'],
    serviceAnchor: 'ecommerce',
    specFileName: 'payment-gateway.spec.ts',
    specCode: `// Track 03 Architecture Specification: E-Commerce Engine
export const CommerceEngineSpec = {
  payment_gateways: ["Stripe Elements", "Razorpay Standard"],
  security: "PCI-DSS Compliant via Hosted Tokenization",
  webhooks: {
    signature_verification: "HMAC-SHA256",
    idempotency_keys: "Redis atomic key lock",
    retry_policy: "Exponential backoff up to 5 attempts"
  },
  order_fulfillment: "Atomic MongoDB transaction + Email alert"
};`,
    throughput: '99.99% Transaction SLA'
  },
  {
    num: '04',
    badge: 'REAL-TIME',
    badgeBg: '#000000',
    badgeColor: '#FFFFFF',
    isFlagship: false,
    title: 'Real-Time & Collaboration',
    tagline: 'WebSockets · Live Rooms · Team Chat · Presence Sync',
    desc: 'Low-latency systems for team collaboration, live audio/document rooms, instantaneous chat, and push notifications powered by distributed Redis backplanes.',
    turnaround: '12 - 20 Business Days',
    targetAudience: 'Multiplayer Tools, Social Platforms & Ops Desks',
    ipOwnership: '100% Code & Protocol Rights',
    cadence: 'Bi-Weekly Live Multi-User Demos',
    features: [
      'Bidirectional WebSockets / Socket.io with instant automatic reconnection',
      'Multi-user live workspaces with live cursor sync & presence detection',
      'Threaded group chat with rich media uploads and read receipts',
      'Redis Pub/Sub cluster backplane supporting high concurrent sockets',
      'Optimistic client UI mutations with conflict resolution logic'
    ],
    techStack: ['Socket.io', 'WebSockets', 'Redis Pub/Sub', 'Node.js', 'React 19', 'MongoDB Streams'],
    serviceAnchor: 'realtime',
    specFileName: 'realtime-cluster.spec.ts',
    specCode: `// Track 04 Architecture Specification: Real-Time Cluster
import { Server } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";

export function mountRealTimeBackplane(httpServer) {
  const io = new Server(httpServer, {
    transports: ["websocket", "polling"],
    pingTimeout: 10000,
    pingInterval: 5000
  });

  // Horizontal scalability across multi-core container nodes
  io.adapter(createAdapter(redisPub, redisSub));

  io.on("connection", (socket) => {
    socket.on("join-room", (room) => socket.join(room));
    socket.on("state-sync", (data) => socket.to(data.room).emit("sync", data));
  });
}`,
    throughput: '< 10ms Sync Latency'
  },
  {
    num: '05',
    badge: 'INFRASTRUCTURE',
    badgeBg: '#000000',
    badgeColor: '#FFFFFF',
    isFlagship: false,
    title: 'Cloud & API Architecture',
    tagline: 'AWS ECS Fargate · Docker · CloudFront · REST & GraphQL',
    desc: 'Production cloud infrastructure built to survive product launch traffic. Containerized microservices, automated CI/CD pipelines, SSL reverse proxies, and documented APIs.',
    turnaround: '7 - 14 Business Days',
    targetAudience: 'Growing Teams Modernizing Brittle Infrastructure',
    ipOwnership: '100% Terraform / CloudFormation Code',
    cadence: 'Zero-Downtime Migration Staging',
    features: [
      'AWS ECS Fargate serverless containers with automated horizontal auto-scaling',
      'CloudFront CDN edge asset caching and Route53 DNS setup',
      'Clean OpenAPI/Swagger documented endpoints with contract testing',
      'Multi-stage Docker builds reducing image sizes to under 80MB',
      'GitHub Actions CI/CD pipelines with automated linting and zero-downtime rolls'
    ],
    techStack: ['AWS ECS Fargate', 'AWS S3', 'CloudFront', 'Docker', 'GitHub Actions', 'Nginx', 'Postman'],
    serviceAnchor: 'cloud-api',
    specFileName: 'aws-infrastructure.spec.yml',
    specCode: `# Track 05 Architecture Specification: AWS ECS Fargate
AWSTemplateFormatVersion: '2010-09-09'
Description: Shyoran Systems Production Container Rig
Resources:
  ECSCluster:
    Type: AWS::ECS::Cluster
    Properties:
      ClusterName: shyoran-prod-cluster
      CapacityProviders: [FARGATE, FARGATE_SPOT]
  AppService:
    Type: AWS::ECS::Service
    Properties:
      DesiredCount: 2
      LaunchType: FARGATE
      DeploymentConfiguration:
        MaximumPercent: 200
        MinimumHealthyPercent: 100`,
    throughput: 'Zero-Downtime Deploys'
  }
];

const Tracks = () => {
  const [activeTrackIdx, setActiveTrackIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeTrack = TRACKS_CATALOG[activeTrackIdx];

  // Dynamic calculated projected launch date (today + ~21 days)
  const projectedDate = new Date();
  projectedDate.setDate(projectedDate.getDate() + 21);
  const formattedProjectedDate = projectedDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTrack.specCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tracks" className={styles.tracksSection}>
      <div className="wrap">
        {/* Section Header */}
        <div className={`${styles.sectionHeader} reveal`}>
          <div className={styles.headerTopRow}>
            <div className="badge-pill" style={{ background: '#FFFFFF' }}>
              <span>// SYSTEM BUILD TRACKS</span>
            </div>
            <div className={styles.capacityPill}>
              <span className={styles.pulseDot}></span>
              <span>● 1 BUILD SLOT REMAINING FOR Q1/Q2 2026</span>
            </div>
          </div>

          <h2 className={`${styles.sectionTitle} display-title`}>
            CHOOSE YOUR <span className="highlight-yellow">SYSTEM TRACK</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Fixed-scope engineering tracks specialized in the MERN stack &amp; AI architectures for founders who value speed, craftsmanship, and real software.
          </p>
        </div>

        {/* Track Selector Tabs */}
        <div className={`${styles.tabBar} reveal`}>
          {TRACKS_CATALOG.map((track, idx) => (
            <button
              key={track.num}
              className={`${styles.tabBtn} ${activeTrackIdx === idx ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTrackIdx(idx)}
              type="button"
            >
              <span className={styles.tabIndex}>{track.num}</span>
              <span>{track.title}</span>
            </button>
          ))}
        </div>

        {/* The Main Interactive Command Console */}
        <div className={`${styles.consoleCard} reveal`}>
          {/* Top Status Bar */}
          <div className={styles.consoleHeader}>
            <div className={styles.consoleHeaderLeft}>
              <span className={styles.consoleTrackNum}>{activeTrack.num}</span>
              <span className={styles.consoleTagline}>{activeTrack.tagline}</span>
            </div>
            <div className={styles.consoleBadges}>
              {activeTrack.isFlagship && (
                <span className={styles.flagshipBadge} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <StarIcon size={11} />
                  <span>STUDIO FLAGSHIP</span>
                </span>
              )}
              <span
                className={styles.trackPill}
                style={{ background: activeTrack.badgeBg, color: activeTrack.badgeColor }}
              >
                {activeTrack.badge}
              </span>
            </div>
          </div>

          {/* Split Body */}
          <div className={styles.consoleBody}>
            {/* Left Column: Dossier */}
            <div className={styles.dossierCol}>
              <div>
                <h3 className={styles.trackTitle}>{activeTrack.title}</h3>
                <p className={styles.trackDesc}>{activeTrack.desc}</p>

                {/* Micro Specs Grid */}
                <div className={styles.specsGrid}>
                  <div className={styles.specTile}>
                    <span className={styles.specLabel} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <ClockIcon size={12} /> Turnaround
                    </span>
                    <span className={styles.specVal}>{activeTrack.turnaround}</span>
                  </div>
                  <div className={styles.specTile}>
                    <span className={styles.specLabel} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <TargetIcon size={12} /> Target Stage
                    </span>
                    <span className={styles.specVal}>{activeTrack.targetAudience}</span>
                  </div>
                  <div className={styles.specTile}>
                    <span className={styles.specLabel} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <LockIcon size={12} /> IP Rights
                    </span>
                    <span className={styles.specVal}>{activeTrack.ipOwnership}</span>
                  </div>
                  <div className={styles.specTile}>
                    <span className={styles.specLabel} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <BoltIcon size={12} /> Delivery Cadence
                    </span>
                    <span className={styles.specVal}>{activeTrack.cadence}</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className={styles.deliverablesBox}>
                  <div className={styles.deliverablesTitle}>
                    <span><BoltIcon size={13} /></span>
                    <span>WHAT IS ENGINEERED &amp; DEPLOYED</span>
                  </div>
                  <ul className={styles.deliverablesList}>
                    {activeTrack.features.map((feat, fIdx) => (
                      <li key={fIdx} className={styles.deliverableItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className={styles.techPillsGroup}>
                  {activeTrack.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.ctaRow}>
                <Link
                  to={`/contact?scope=${encodeURIComponent(activeTrack.title)}`}
                  className="btn-brutal btn-brutal-primary"
                  style={{ padding: '12px 26px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>SCOPE TRACK {activeTrack.num}</span>
                  <BoltIcon size={14} />
                </Link>
                <Link
                  to={`/services#${activeTrack.serviceAnchor}`}
                  className="btn-brutal btn-brutal-outline"
                  style={{ padding: '12px 22px' }}
                >
                  VIEW 5-PILLAR SPEC →
                </Link>
              </div>
            </div>

            {/* Right Column: Live Terminal Rig */}
            <div className={styles.terminalCol}>
              <div className={styles.terminalBar}>
                <div className={styles.terminalDots}>
                  <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                  <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                  <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                </div>
                <span className={styles.terminalTabTitle}>{activeTrack.specFileName}</span>
                <button
                  type="button"
                  className={styles.terminalCopyBtn}
                  onClick={handleCopyCode}
                  title="Copy Blueprint"
                >
                  {copied ? 'COPIED! ✓' : 'COPY'}
                </button>
              </div>

              <div className={styles.codeArea}>
                <pre className={styles.codePre}>
                  <code>{activeTrack.specCode}</code>
                </pre>
              </div>

              <div className={styles.metricsFooter}>
                <span className={styles.metricItem}>
                  BENCHMARK: <strong>{activeTrack.throughput}</strong>
                </span>
                <span className={styles.metricItem}>
                  TARGET SHIP: <strong>~{formattedProjectedDate}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quick-Switch Ribbon */}
        <div className={`${styles.ribbonSection} reveal`}>
          <div className={styles.ribbonHeader}>
            <span className={styles.ribbonLabel}>// QUICK-SWITCH SYSTEM TRACKS:</span>
            <Link
              to="/services"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--accent-blue)',
                fontWeight: 700,
                textDecoration: 'underline'
              }}
            >
              Compare All 5 Pillars in Detail ↗
            </Link>
          </div>

          <div className={styles.ribbonGrid}>
            {TRACKS_CATALOG.map((track, idx) => (
              <button
                key={track.num}
                type="button"
                className={`${styles.ribbonCard} ${activeTrackIdx === idx ? styles.ribbonCardActive : ''}`}
                onClick={() => setActiveTrackIdx(idx)}
              >
                <div>
                  <div className={styles.ribbonTopRow}>
                    <span className={styles.ribbonNum}>{track.num}</span>
                    <span className={styles.ribbonTag}>{track.badge}</span>
                  </div>
                  <div className={styles.ribbonTitle}>{track.title}</div>
                </div>
                <div className={styles.ribbonTimeline} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <ClockIcon size={12} />
                  <span>{track.turnaround}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
