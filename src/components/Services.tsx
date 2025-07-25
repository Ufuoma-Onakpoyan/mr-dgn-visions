import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Youtube, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Movie Production",
      description: "Full-scale movie production showcasing Nigerian storytelling excellence.",
      features: ["Script Development", "Cinematography", "Post-Production"]
    },
    {
      icon: Youtube,
      title: "YouTube Content",
      description: "Educational and entertaining long-form content that builds lasting connections.",
      features: ["Documentary Style", "Cultural Showcases", "Behind-the-Scenes"]
    },
    {
      icon: Zap,
      title: "Short-Form Content",
      description: "Engaging social media content optimized for the digital age.",
      features: ["Social Media Clips", "Viral Content", "Brand Stories"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From Nollywood blockbusters to viral social media content, we bring Nigerian stories to life across all platforms.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="card-hover scroll-reveal border-0 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl"></div>
                <CardHeader className="pb-6">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center scroll-reveal">
            <Link to="/services">
              <Button size="lg" className="hero-glow">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;