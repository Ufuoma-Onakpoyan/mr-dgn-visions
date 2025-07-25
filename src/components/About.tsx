import { Card, CardContent } from "@/components/ui/card";
import { Film, Youtube, Video, Award } from "lucide-react";

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

          {/* Company Values */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 scroll-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To create compelling entertainment content that showcases the beauty, 
                  talent, and stories of Nigeria while meeting international production 
                  standards and reaching global audiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of storytelling to bridge cultures, inspire 
                  communities, and create positive change through authentic representation 
                  of Nigerian experiences.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">Authentic Nigerian Storytelling</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">International Production Standards</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">Cultural Impact & Representation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">Global Audience Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;