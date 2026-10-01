import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './AppLayout.module.css';

const AppLayout = () => {
  useScrollReveal();

  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
