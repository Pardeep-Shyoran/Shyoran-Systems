import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './AppLayout.module.css';

const AppLayout = () => {
  useScrollReveal();

  return (
    <div className={styles.layoutContainer}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex="-1" className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
