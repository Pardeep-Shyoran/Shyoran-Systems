import { Link } from 'react-router-dom'
import { BrandLogoIcon } from '../Icons/Icons'
import styles from './Logo.module.css'

const Logo = ({ inverted = false }) => {
  return (
    <Link to="/" className={`${styles.logo} ${inverted ? styles.inverted : ''}`}>
      <span className={styles.badgeIcon}>
        <BrandLogoIcon size={16} />
      </span>
      <span className={styles.brandName}>
        SHYORAN<span className={styles.highlight}>SYSTEMS</span>
      </span>
      <span className={styles.statusPill}>PRO</span>
    </Link>
  )
}

export default Logo