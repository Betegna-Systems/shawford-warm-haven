import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import roomImage from "@/assets/room-1.jpg";
import gardenImage from "@/assets/garden.jpg";
import diningImage from "@/assets/dining.jpg";

const Accommodation = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: roomImage,
      alt: "Comfortable, well-appointed resident room with personal touches",
      title: "Resident Rooms",
      description: "Spacious, comfortable rooms designed with accessibility and comfort in mind",
    },
    {
      src: gardenImage,
      alt: "Beautiful landscaped gardens with accessible pathways",
      title: "Gardens & Outdoor Spaces",
      description: "Peaceful gardens perfect for relaxation and outdoor activities",
    },
    {
      src: diningImage,
      alt: "Bright, welcoming dining room with communal seating",
      title: "Dining Room",
      description: "Enjoy nutritious, home-cooked meals in a friendly, social setting",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const facilities = [
    "En-suite bathrooms with accessible features",
    "Adjustable beds and comfortable furnishings",
    "Call bell systems in every room",
    "Personal storage and wardrobe space",
    "Television and telephone points",
    "Beautiful communal lounges",
    "Fully equipped activities room",
    "Hair salon and therapy rooms",
    "Landscaped gardens with seating areas",
    "Secure parking for visitors",
    "WiFi throughout the building",
    "24-hour emergency response",
  ];

  return (
    <section id="accommodation" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Merriweather']">
            Accommodation & Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comfortable, accessible spaces designed to feel like home
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <Card className="card-elevated border-0 overflow-hidden">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <img
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {images[currentImage].title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/90">
                    {images[currentImage].description}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                onClick={prevImage}
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                onClick={nextImage}
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Facilities List */}
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground font-['Merriweather']">
            Our Facilities Include
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facilities.map((facility, index) => (
              <Card key={index} className="card-elevated border-0">
                <CardContent className="p-6 flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-lg text-foreground leading-relaxed">{facility}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
