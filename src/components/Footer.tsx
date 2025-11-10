import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Merriweather']">
              Shawford Healthcare
            </h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Where People Matter
            </p>
            <p className="text-sm text-background/70 leading-relaxed">
              Providing compassionate, person-centered care for over 25 years in the heart of Winchester.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Accommodation", "Services", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:01962713390" className="text-background/80 hover:text-background">
                    01962 713390
                  </a>
                  <p className="text-sm text-background/60">24/7 Available</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@shawfordhealthcare.co.uk"
                  className="text-background/80 hover:text-background break-all"
                >
                  info@shawfordhealthcare.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-background/80">
                  <p>Person Lane, Shawford</p>
                  <p>Winchester, Hampshire</p>
                  <p>SO21 2BW</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-background/70">
              Registered with the Care Quality Commission (CQC)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {currentYear} Shawford Healthcare. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-background/70 hover:text-background">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/70 hover:text-background">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-background/70 hover:text-background">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
