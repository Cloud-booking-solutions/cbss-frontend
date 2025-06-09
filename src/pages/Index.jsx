import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GetToKnowUsSection from '@/components/home/GetToKnowUsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import WhoWeServeSection from '@/components/home/WhoWeServeSection';
import CollaborativePartnersSection from '@/components/home/CollaborativePartnersSection';
import OurInnovativeSection from '@/components/home/OurInnovativeSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ExpertTeamSection from '@/components/home/ExpertTeamSection';
import InternsSection from '@/components/home/InternsSection';
import CustomerCommunitySection from '@/components/home/CustomerCommunitySection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
  
      <GetToKnowUsSection />
      <FeaturesSection />
      <TechnologiesSection />
      <WhyChooseUsSection />
      <WhoWeServeSection />
      <CollaborativePartnersSection />
      <OurInnovativeSection />
      <ServicesSection />
      <TestimonialsSection />
      <ExpertTeamSection />
      <InternsSection />
      <CustomerCommunitySection />
    </Layout>
  );
};

export default Index;
