import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { BoltIcon, CrossIcon } from '../Icons/Icons';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const firstNavLinkRef = useRef(null);
  const menuContainerRef = useRef(null);

  // Helper to determine if a route is currently active
  const isRouteActive = (targetPath) => {
    if (targetPath === '/') {
      return location.pathname === '/';
    }
    return location.pathname === targetPath || location.pathname.startsWith(`${targetPath}/`);
  };

  // Automatically close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu and restore focus to toggle button
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        e.preventDefault();
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Manage focus when mobile menu opens: focus first link
  useEffect(() => {
    if (mobileMenuOpen) {
      const timer = setTimeout(() => {
        firstNavLinkRef.current?.focus();
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  // Trap focus inside mobile menu dialog
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;
      if (!menuContainerRef.current) return;

      const focusableElements = menuContainerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.nav} wrap`}>
        {/* LOGO LINKS TO HOMEPAGE */}
        <Logo />

        {/* DESKTOP NAVIGATION: Home, Services, Work, About, Contact */}
        <nav className={styles.links} aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const active = isRouteActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? 'page' : undefined}
                className={active ? styles.activeLink : ''}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* HEADER RIGHT: Client Hub & Primary Project-Enquiry CTA */}
        <div className={styles.headerRight}>
          <Link
            to="/portal"
            className={
              location.pathname === '/portal' || location.pathname === '/login'
                ? styles.portalActiveLink
                : styles.portalLink
            }
          >
            Client Hub
          </Link>

          {/* PRIMARY PROJECT-ENQUIRY CTA */}
          <Link
            to="/contact"
            className={`btn-brutal btn-brutal-primary btn-sm ${styles.headerCtaBtn}`}
          >
            <span className={styles.headerCtaLabel}>Project Enquiry</span>
            <BoltIcon size={12} />
          </Link>

          {/* ACCESSIBLE MOBILE TOGGLE BUTTON */}
          <button
            ref={toggleButtonRef}
            type="button"
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className={mobileMenuOpen ? styles.toggleOpen : ''} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* RESPONSIVE MOBILE MENU DRAWER & BACKDROP */}
      {mobileMenuOpen && (
        <>
          <div
            className={styles.backdrop}
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div
            id="mobile-navigation"
            ref={menuContainerRef}
            className={styles.mobileDropdown}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className={styles.mobileMenuHeader}>
              <span className={styles.mobileMenuTag}>// NAVIGATION MENU</span>
              <button
                type="button"
                className={styles.mobileCloseBtn}
                onClick={() => {
                  closeMobileMenu();
                  toggleButtonRef.current?.focus();
                }}
                aria-label="Close navigation menu"
              >
                <CrossIcon size={14} />
                <span>CLOSE (ESC)</span>
              </button>
            </div>

            <nav className={styles.mobileNavLinks} aria-label="Mobile Navigation Links">
              {NAV_ITEMS.map((item, idx) => {
                const active = isRouteActive(item.path);
                return (
                  <Link
                    key={item.path}
                    ref={idx === 0 ? firstNavLinkRef : null}
                    to={item.path}
                    onClick={closeMobileMenu}
                    aria-current={active ? 'page' : undefined}
                    className={`${styles.mobileLink} ${active ? styles.activeMobileLink : ''}`}
                  >
                    <span className={styles.mobileLinkNum}>0{idx + 1}</span>
                    <span className={styles.mobileLinkLabel}>{item.label}</span>
                    {active && <span className={styles.activeDot} aria-hidden="true" />}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.mobileMenuFooter}>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="btn-brutal btn-brutal-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Start Project Enquiry</span>
                <BoltIcon size={14} />
              </Link>

              <div className={styles.mobileSecondaryRow}>
                <Link
                  to="/pricing"
                  onClick={closeMobileMenu}
                  className={styles.mobileSecondaryLink}
                >
                  Pricing &amp; Tracks
                </Link>
                <Link
                  to="/portal"
                  onClick={closeMobileMenu}
                  className={styles.mobileSecondaryLink}
                >
                  Founder Portal ↗
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;