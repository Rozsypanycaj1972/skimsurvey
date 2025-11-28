import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
