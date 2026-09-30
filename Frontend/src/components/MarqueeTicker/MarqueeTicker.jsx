import { BoltIcon, StarIcon } from '../Icons/Icons';
import styles from './MarqueeTicker.module.css';

const marqueeItems = [
  { icon: 'bolt', text: 'SPECIALIZED MERN STACK (MONGODB, EXPRESS, REACT, NODE)' },
  { icon: 'star', text: 'AI / LLM INTEGRATION & CHATBOTS' },
  { icon: 'bolt', text: 'E-COMMERCE & SECURE PAYMENT GATEWAYS' },
  { icon: 'star', text: 'REAL-TIME WEBSOCKETS & LIVE COLLABORATION' },
  { icon: 'bolt', text: 'AWS CLOUD & DOCKER DEPLOYMENTS' },
  { icon: 'star', text: '100% DIRECT FOUNDER ENGINEER' },
  { icon: 'bolt', text: 'SHIPPED IN WEEKS NOT MONTHS' },
];

const MarqueeTicker = () => {
  return (
    <section className={styles.marqueeSection}>
      <div className="animate-marquee">
        {marqueeItems.map((item, index) => (
          <span key={`m1-${index}`} className={styles.marqueeItem}>
            {item.icon === 'bolt' ? <BoltIcon size={16} /> : <StarIcon size={16} />}
            <span>{item.text}</span>
          </span>
        ))}
        {/* Duplicate items for continuous infinite scroll */}
        {marqueeItems.map((item, index) => (
          <span key={`m2-${index}`} className={styles.marqueeItem}>
            {item.icon === 'bolt' ? <BoltIcon size={16} /> : <StarIcon size={16} />}
            <span>{item.text}</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeTicker;
