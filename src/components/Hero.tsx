import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-care-home.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Welcoming interior of Shawford Healthcare with comfortable seating and caring staff"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Winchester, Hampshire</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Merriweather'] leading-tight">
            POMY HAILU
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-4 leading-relaxed">
            Compassionate, personalized care for your loved ones in the heart of Shawford.
          </p>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Experience a warm, home-like environment where dignity, respect, and quality of life are at the heart of everything we do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl text-lg h-14 px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book a Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-1">25+</div>
              <div className="text-sm md:text-base text-white/90">Years of Care</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-1">100+</div>
              <div className="text-sm md:text-base text-white/90">Happy Residents</div>
            </div>
            <div className="text-white col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm md:text-base text-white/90">Professional Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
