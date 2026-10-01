import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { BoltIcon } from '../Icons/Icons'
import styles from './Header.module.css'

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Automatically close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
          <Link 
            to="/work" 
            className={location.pathname === '/work' ? styles.activeLink : ''}
          >
            Work
          </Link>
          <Link 
            to="/pricing" 
            className={location.pathname === '/pricing' ? styles.activeLink : ''}
          >
            Pricing
          </Link>
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
            to="/portal" 
            className={location.pathname === '/portal' || location.pathname === '/login' ? styles.portalActiveLink : styles.portalLink}
          >
            Client Hub
          </Link>

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

      {/* Responsive mobile menu drawer & backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className={styles.backdrop} 
            onClick={closeMobileMenu} 
            aria-hidden="true" 
          />
          <div className={styles.mobileDropdown}>
            <Link to="/services" onClick={closeMobileMenu} className={location.pathname === '/services' ? styles.activeMobileLink : ''}>Services</Link>
            <Link to="/work" onClick={closeMobileMenu} className={location.pathname === '/work' ? styles.activeMobileLink : ''}>Work &amp; Case Studies</Link>
            <Link to="/pricing" onClick={closeMobileMenu} className={location.pathname === '/pricing' ? styles.activeMobileLink : ''}>Pricing &amp; Tracks</Link>
            <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? styles.activeMobileLink : ''}>About</Link>
            <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? styles.activeMobileLink : ''}>Contact</Link>
            <Link to="/portal" onClick={closeMobileMenu} className={location.pathname === '/portal' ? styles.activeMobileLink : ''}>Founder Portal ↗</Link>
          </div>
        </>
      )}
    </header>
  )
}

export default Header