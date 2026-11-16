import { useState } from 'react';
import { BoltIcon } from '../Icons/Icons';
import styles from './Faq.module.css';

const faqs = [
  {
    q: "How do project scoping and pricing work?",
    a: "We structure projects with transparent, fixed-scope milestones agreed upon before writing a single line of code. You receive a concrete deliverable breakdown, data model roadmap, and flat-rate investment timeline with zero hidden fees or billable hourly padding."
  },
  {
    q: "What are typical development timelines?",
    a: "Focused MVP builds and standalone web applications typically ship within 2 to 4 weeks. Larger multi-tenant SaaS platforms or complex AI retrieval architectures generally range from 4 to 8 weeks depending on custom integrations and compliance requirements."
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You retain 100% full ownership of all code, git repositories, database schemas, cloud infrastructure accounts, and configurations. We do not use proprietary agency frameworks that lock you in, ensuring your team can maintain or scale the product independently."
  },
  {
    q: "How do we communicate throughout the development process?",
    a: "You communicate directly with lead architect Pardeep Shyoran in a dedicated shared Slack or WhatsApp channel. We provide weekly live staging preview links, async video walkthroughs for completed milestones, and rapid answers to technical questions."
  },
  {
    q: "What maintenance and post-launch support is included?",
    a: "Every production delivery includes a 30-day post-launch warranty covering bug fixes, performance monitoring, environment tuning, and seamless technical handover. We also offer extended architecture support agreements for growing products."
  },
  {
    q: "How do we get started on a project?",
    a: "You can submit your project outline via our contact form or schedule a direct 15-minute technical discovery call. We will review your requirements, confirm feasibility, and provide a clear scope recommendation within 24 to 48 hours."
  }
];

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="wrap">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className={styles.eyebrowRow}>
            <span className="badge-pill badge-white">
              <BoltIcon size={12} />
              <span>TRANSPARENCY FIRST</span>
            </span>
            <span className="sticker-hand">
              Answers to Common Questions
            </span>
          </div>

          <h2 className={`${styles.sectionTitle} display-title`}>
            FREQUENTLY ASKED <span className="highlight-yellow">QUESTIONS.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Clear, honest answers about project scoping, development timelines, code ownership, and working with Shyoran Systems.
          </p>
        </div>

        <div className={`${styles.faqList} reveal`}>
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <h3 className={styles.faqHeading}>
                  <button 
                    type="button"
                    id={`faq-btn-${index}`}
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className={styles.faqQText}>{faq.q}</span>
                    <span className={styles.faqToggleIcon} aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`} 
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className={styles.faqAnswer}
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
