import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { BoltIcon } from '../Icons/Icons'
import styles from './Header.module.css'

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.nav} wrap`}>
        <Logo />
        
        <nav className={styles.links}>
          <Link 
            to="/services" 
            className={location.pathname === '/services' ? styles.activeLink : ''}
          >
            Services
          </Link>
          <a href={isHome ? '#tracks' : '/#tracks'}>Tracks</a>
          <a href={isHome ? '#bento' : '/#bento'}>Engineering</a>
          <a href={isHome ? '#comparison' : '/#comparison'}>Compare</a>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? styles.activeLink : ''}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? styles.activeLink : ''}
          >
            Contact
          </Link>
        </nav>

        <div className={styles.headerRight}>
          <Link 
            to="/contact" 
            className="btn-brutal btn-brutal-primary" 
            style={{ padding: '8px 18px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Book Call</span>
            <BoltIcon size={12} />
          </Link>

          <button 
            className={styles.mobileToggle} 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
          >
            <span className={mobileMenuOpen ? styles.toggleOpen : ''}></span>
          </button>
        </div>
      </div>

      {/* Responsive mobile menu drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <Link to="/services" onClick={closeMobileMenu} className={location.pathname === '/services' ? styles.activeMobileLink : ''}>Services</Link>
          <a href={isHome ? '#tracks' : '/#tracks'} onClick={closeMobileMenu}>Tracks</a>
          <a href={isHome ? '#bento' : '/#bento'} onClick={closeMobileMenu}>Engineering</a>
          <a href={isHome ? '#comparison' : '/#comparison'} onClick={closeMobileMenu}>Compare</a>
          <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? styles.activeMobileLink : ''}>About</Link>
          <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? styles.activeMobileLink : ''}>Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Header