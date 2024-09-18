import HeroSection from "../_components/HeroSection";
import ServicesSection from "../_components/ServiceCards";
import TechStack from "../_components/TechStack";
import { WhyChooseUs } from "../_components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TechStack />
    </>
  );
}
