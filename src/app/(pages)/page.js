import FaqPage from "../_components/FaqPage";
import HeroSection from "../_components/HeroSection";
import RecentProjects from "../_components/RecentProject";
import ServicesSection from "../_components/ServiceCards";
import TechStack from "../_components/TechStack";
import Testimonial from "../_components/Testimonial";
import { WhyChooseUs } from "../_components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TechStack />
      <RecentProjects />
      <Testimonial />
      <FaqPage maxItems={4} />
    </>
  );
}
