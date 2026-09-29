import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import MarqueeTicker from '../../components/MarqueeTicker/MarqueeTicker';
import Comparison from '../../components/Comparison/Comparison';
import BentoGrid from '../../components/BentoGrid/BentoGrid';
import Tracks from '../../components/Tracks/Tracks';
import ProcessTimeline from '../../components/ProcessTimeline/ProcessTimeline';
import Faq from '../../components/Faq/Faq';
import MonolithCta from '../../components/MonolithCta/MonolithCta';

const Home = () => {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Shyoran Systems — Ship Full-Stack &amp; AI Products Fast</title>
        <meta 
          name="description" 
          content="Stop waiting months for traditional agencies. Shyoran Systems builds high-performance MERN-stack and AI-integrated products shipped in weeks by 1 senior founder engineer." 
        />
      </Helmet>

      <Header />

      <main id="top">
        <Hero />
        <MarqueeTicker />
        <Comparison />
        <BentoGrid />
        <Tracks />
        <ProcessTimeline />
        <Faq />
        <MonolithCta />
      </main>

      <Footer />
    </>
  );
};

export default Home;
