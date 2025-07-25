import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Youtube, Video, Award, Users, Globe, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpg";
import equipmentPhoto from "@/assets/equipment.jpg";

const About = () => {
  const services = [
    {
      icon: Film,
      title: "Movie Production",
      description: "Creating compelling narratives that showcase the depth and richness of Nigerian storytelling on the big screen."
    },
    {
      icon: Youtube,
      title: "YouTube Long-form",
      description: "Educational and entertainment content that engages audiences with authentic Nigerian perspectives and culture."
    },
    {
      icon: Video,
      title: "YouTube Shorts",
      description: "Quick, engaging content that captures the essence of Nigerian life and contemporary culture for modern audiences."
    },
    {
      icon: Award,
      title: "Quality Production",
      description: "Professional-grade content creation with attention to detail, ensuring every project meets international standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">MrDGN Entertainment</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a Nigerian entertainment company dedicated to creating world-class content 
              that celebrates our culture while appealing to global audiences. As a subsidiary 
              of MrDGN Group, we leverage extensive resources and expertise to deliver exceptional entertainment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="card-hover scroll-reveal border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Story with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-reveal">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={teamPhoto} 
                  alt="MrDGN Entertainment Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="scroll-reveal">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded as a subsidiary of MrDGN Group, we bring together Nigeria's most talented 
                storytellers, directors, and creatives to produce content that resonates globally 
                while staying true to our roots.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our journey began with a simple belief: Nigerian stories deserve the world stage. 
                From our state-of-the-art studios in Lagos to partnerships with international 
                distributors, we've built a production powerhouse.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">2018</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50M+</div>
                  <div className="text-sm text-muted-foreground">Global Views</div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment & Production */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 scroll-reveal">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">World-Class Production</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our investment in cutting-edge technology and industry-leading equipment ensures 
                every frame meets international cinema standards. From 8K cameras to advanced 
                post-production suites, we spare no expense in quality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-medium">RED 8K Cinema Cameras</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-medium">Dolby Atmos Sound Design</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-medium">Color Grading Suites</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-medium">Advanced VFX Capabilities</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-reveal">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={equipmentPhoto} 
                  alt="Professional Production Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl p-8 md:p-12 scroll-reveal">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission & Values</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dedicated to showcasing Nigerian excellence while setting new standards in entertainment production.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Authentic Storytelling</h4>
                <p className="text-sm text-muted-foreground">Celebrating Nigerian culture with authenticity and pride</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Global Standards</h4>
                <p className="text-sm text-muted-foreground">International quality production values</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Cultural Impact</h4>
                <p className="text-sm text-muted-foreground">Creating positive representation and social change</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Pursuing perfection in every project</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 scroll-reveal">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Work Together?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary that showcases the best of Nigerian storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" className="hero-glow">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;