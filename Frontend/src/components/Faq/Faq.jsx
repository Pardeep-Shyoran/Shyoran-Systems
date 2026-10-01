import { useState } from 'react';
import styles from './Faq.module.css';

const faqs = [
  {
    q: "How fast can you really ship an MVP?",
    a: "Most scoped MVPs are deployed to production in 14 to 21 business days. Because you deal directly with the senior engineer building your product, there are zero middle managers, no backlog grooming committees, and zero translation lag."
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. 100%. Upon final delivery, all GitHub repositories, database schemas, AWS/Cloud accounts, API keys, and deployment scripts are transferred directly to your organization."
  },
  {
    q: "How do we communicate throughout the build?",
    a: "We set up a private Slack or WhatsApp channel with you directly. You receive async screen recordings, interactive staging preview links, and bi-weekly milestone walk-throughs."
  },
  {
    q: "Can you build AI-powered features and custom LLM workflows?",
    a: "Yes. From intelligent conversational chatbots and semantic search over your private documentation to autonomous agents and automated document processing, modern AI integration is our core specialty."
  },
  {
    q: "What happens after the project is deployed to production?",
    a: "Every build includes a 30-day post-launch warranty covering any bug fixes, environment tuning, and smooth knowledge handoff to you or your future in-house team."
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
          <div className="badge-pill" style={{ background: '#FFFFFF' }}>
            <span>// CLARITY FIRST</span>
          </div>
          <h2 className="display-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginTop: '14px' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know before kicking off a build with Shyoran Systems.
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
                <button 
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={styles.faqQText}>{faq.q}</span>
                  <span className={styles.faqToggleIcon} aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${index}`} className={styles.faqAnswer}>
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
