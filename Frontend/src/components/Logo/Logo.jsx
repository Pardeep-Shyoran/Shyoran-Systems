import { Link, useLocation } from 'react-router-dom'
import { BrandLogoIcon } from '../Icons/Icons'
import styles from './Logo.module.css'

const Logo = ({ inverted = false }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Link 
      to="/" 
      className={`${styles.logo} ${inverted ? styles.inverted : ''}`}
      aria-current={isHome ? 'page' : undefined}
    >
      <span className={styles.badgeIcon} aria-hidden="true">
        <BrandLogoIcon size={16} />
      </span>
      <span className={styles.brandName}>
        SHYORAN <span className={styles.highlight}>SYSTEMS</span>
      </span>
      <span className={styles.statusPill} aria-hidden="true">PRO</span>
    </Link>
  )
}

export default Logo