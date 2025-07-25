import { Button } from "@/components/ui/button";
import { Mail, Phone, Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Movie Production", href: "#" },
    { name: "YouTube Content", href: "#" },
    { name: "Short Form Video", href: "#" },
    { name: "Content Strategy", href: "#" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/cf3edfd4-e0c9-4921-8081-0e42ea195b0b.png" 
                alt="MrDGN Entertainment" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-md">
              Creating compelling entertainment content that showcases Nigerian culture 
              and stories to the world. A subsidiary of MrDGN Group.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:entertainment@mrdgngroup.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  entertainment@mrdgngroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+2348135324467"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +234 813 532 4467
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-secondary-foreground/80 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>

            {/* MrDGN Group Badge */}
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/60">
              <span>Part of</span>
              <img 
                src="/lovable-uploads/8ab32aff-fbbf-4303-8bf1-acd410bb7261.png" 
                alt="MrDGN Group" 
                className="h-4 w-auto brightness-0 invert opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} MrDGN Entertainment. All rights reserved. | A subsidiary of MrDGN Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;