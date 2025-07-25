import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MovingLogos from "@/components/MovingLogos";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MovingLogos />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
