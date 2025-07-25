import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";

const MapPlaceholder = () => (
  <Card className="h-64 md:h-80 scroll-reveal border-0 shadow-lg overflow-hidden">
    <CardContent className="p-0 h-full">
      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/20"></div>
        <div className="text-center z-10">
          <div className="text-6xl mb-4">🗺️</div>
          <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Lagos, Nigeria - Heart of Nollywood and Nigerian Entertainment
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ContactPage = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Ready to bring your vision to life? Let's start a conversation about your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Us in <span className="gradient-text">Lagos</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Located in the heart of Nigeria's entertainment capital, we're at the center of Nollywood's creative energy.
              </p>
            </div>
            <MapPlaceholder />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default ContactPage;