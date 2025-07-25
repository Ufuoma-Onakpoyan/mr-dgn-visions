import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Youtube, Zap, ArrowRight, Camera, Edit, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import studioScene from "@/assets/studio-scene.jpg";
import moviePoster from "@/assets/movie-poster-1.jpg";
import youtubeThumb from "@/assets/youtube-thumb-1.jpg";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Movie Production",
      description: "Full-scale movie production showcasing Nigerian storytelling excellence with international standards.",
      features: ["Script Development", "Cinematography", "Post-Production", "Distribution"],
      image: moviePoster,
      detailedDescription: "From concept to cinema, we handle every aspect of film production with meticulous attention to detail.",
      projects: "15+ Feature Films"
    },
    {
      icon: Youtube,
      title: "YouTube Long-Form",
      description: "Educational and entertaining content that builds lasting connections with global audiences.",
      features: ["Documentary Style", "Cultural Showcases", "Behind-the-Scenes", "Series Production"],
      image: youtubeThumb,
      detailedDescription: "Creating compelling narratives that educate, entertain, and celebrate Nigerian culture.",
      projects: "200+ Episodes"
    },
    {
      icon: Zap,
      title: "Short-Form Content",
      description: "Engaging social media content optimized for modern digital consumption and viral potential.",
      features: ["Social Media Clips", "Viral Content", "Brand Stories", "TikTok Specials"],
      image: studioScene,
      detailedDescription: "Quick, impactful content that captures attention and drives engagement across all platforms.",
      projects: "500+ Shorts"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="card-hover scroll-reveal border-0 shadow-xl relative overflow-hidden group">
                {/* Service Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {service.projects}
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {service.detailedDescription}
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

          {/* Additional Services Section */}
          <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl p-8 md:p-12 mb-16 scroll-reveal">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Production Excellence</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every project benefits from our comprehensive production capabilities and commitment to quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Professional Equipment</h4>
                <p className="text-sm text-muted-foreground">State-of-the-art cameras and production gear</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Edit className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Post-Production</h4>
                <p className="text-sm text-muted-foreground">Advanced editing and color grading suites</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Expert Team</h4>
                <p className="text-sm text-muted-foreground">Seasoned professionals and creative talent</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Global Distribution</h4>
                <p className="text-sm text-muted-foreground">Worldwide reach and platform partnerships</p>
              </div>
            </div>
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