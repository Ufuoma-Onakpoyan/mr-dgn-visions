import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MovingLogos from "@/components/MovingLogos";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Blog />
      <MovingLogos />
      <Footer />
    </div>
  );
};

export default Index;
