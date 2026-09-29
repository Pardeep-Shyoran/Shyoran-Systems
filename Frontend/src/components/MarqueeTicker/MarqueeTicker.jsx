import styles from './MarqueeTicker.module.css';

const marqueeItems = [
  '⚡ FULL-STACK SPEEDRUN',
  '★ REACT 19 & NEXT.JS',
  '⚡ NODE.JS & EXPRESS BACKENDS',
  '★ OPENAI & CLAUDE LLM INTEGRATIONS',
  '⚡ MONGODB ATLAS & POSTGRES',
  '★ DOCKER & AWS CLOUD DEPLOYS',
  '⚡ ZERO AGENCY BUREAUCRACY',
  '★ 100% PRODUCTION WORKING CODE',
];

const MarqueeTicker = () => {
  return (
    <section className={styles.marqueeSection}>
      <div className="animate-marquee">
        {marqueeItems.map((item, index) => (
          <span key={`m1-${index}`} className={styles.marqueeItem}>
            {item}
          </span>
        ))}
        {/* Duplicate items for continuous infinite scroll */}
        {marqueeItems.map((item, index) => (
          <span key={`m2-${index}`} className={styles.marqueeItem}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeTicker;
