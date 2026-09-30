import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerTop}>
          <div>
            <Logo inverted />
            <p className={styles.footerBio}>
              Shyoran Systems is a premier software engineering studio building high-velocity MERN and AI-native web applications.
            </p>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.navCol}>
              <span className={styles.colTitle}>// NAVIGATION</span>
              <Link to="/">Home</Link>
              <Link to="/services">Services (5 Pillars)</Link>
              <Link to="/about">About Us</Link>
              <a href="/#tracks">Tracks &amp; Work</a>
              <a href="/#bento">Engineering</a>
              <Link to="/contact">Contact &amp; Scope</Link>
            </div>
            <div className={styles.navCol}>
              <span className={styles.colTitle}>// CONNECT</span>
              <a href="mailto:hello@pardeep-shyoran.me">hello@pardeep-shyoran.me</a>
              <a href="https://www.linkedin.com/company/shyoran-systems" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Shyoran Systems. All rights reserved.</span>
          <div className={styles.statusIndicator}>
            <span className={styles.pulseDot}></span>
            <span>SYSTEMS NOMINAL · ACCEPTING BUILDS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
