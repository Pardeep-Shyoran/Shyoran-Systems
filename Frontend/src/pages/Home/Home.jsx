import SEO from '../../components/SEO/SEO';
import { getOrganizationSchema, getWebSiteSchema } from '../../utils/seoSchemas';
import Hero from '../../components/Hero/Hero';
import ProofSection from '../../components/ProofSection/ProofSection';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import MarqueeTicker from '../../components/MarqueeTicker/MarqueeTicker';
import ServicesOverview from '../../components/ServicesOverview/ServicesOverview';
import ProcessTimeline from '../../components/ProcessTimeline/ProcessTimeline';
import Differentiators from '../../components/Differentiators/Differentiators';
import Faq from '../../components/Faq/Faq';
import MonolithCta from '../../components/MonolithCta/MonolithCta';

const Home = () => {
  const homeSchemas = [getOrganizationSchema(), getWebSiteSchema()];

  return (
    <>
      <SEO
        title="Shyoran Systems — We Build Web Apps, SaaS Products & AI Solutions"
        description="Custom software built around your business goals, from the first idea to a production-ready product. Specialized in MERN-stack web applications, SaaS platforms, and AI vector integrations."
        canonicalUrl="https://shyoran.systems/"
        schema={homeSchemas}
      />


      <div id="top">
        <Hero />
        <ProofSection />
        <FeaturedProjects />
        <MarqueeTicker />
        <ServicesOverview />
        <ProcessTimeline />
        <Differentiators />
        <Faq />
        <MonolithCta />
      </div>
    </>
  );
};

export default Home;
