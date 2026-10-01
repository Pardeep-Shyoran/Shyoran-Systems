import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero/Hero';
import MarqueeTicker from '../../components/MarqueeTicker/MarqueeTicker';
import Comparison from '../../components/Comparison/Comparison';
import BentoGrid from '../../components/BentoGrid/BentoGrid';
import Tracks from '../../components/Tracks/Tracks';
import ProcessTimeline from '../../components/ProcessTimeline/ProcessTimeline';
import Faq from '../../components/Faq/Faq';
import MonolithCta from '../../components/MonolithCta/MonolithCta';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Shyoran Systems — Ship Full-Stack &amp; AI Products Fast</title>
        <meta 
          name="description" 
          content="Stop waiting months for traditional agencies. Shyoran Systems builds high-performance MERN-stack and AI-integrated products shipped in weeks by 1 senior founder engineer." 
        />
      </Helmet>

      <div id="top">
        <Hero />
        <MarqueeTicker />
        <Comparison />
        <BentoGrid />
        <Tracks />
        <ProcessTimeline />
        <Faq />
        <MonolithCta />
      </div>
    </>
  );
};

export default Home;
