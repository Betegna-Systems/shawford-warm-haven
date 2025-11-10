import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Margaret Thompson",
      relation: "Daughter of Resident",
      rating: 5,
      text: "Moving my mother to Shawford Healthcare was the best decision we could have made. The staff treat her with such warmth and dignity. She's happier here than she was at home, and I have complete peace of mind knowing she's in such caring hands.",
      date: "March 2024",
    },
    {
      name: "David Harrison",
      relation: "Son of Resident",
      rating: 5,
      text: "My father has been a resident for two years now, and I'm constantly impressed by the quality of care. The nurses know him by name, understand his needs, and always go the extra mile. It truly feels like a family environment.",
      date: "February 2024",
    },
    {
      name: "Sarah Mitchell",
      relation: "Care Assistant, Shawford Healthcare",
      rating: 5,
      text: "Working here for five years has been incredibly rewarding. The management genuinely cares about both residents and staff. We're given the time and resources to provide person-centered care, which makes all the difference.",
      date: "January 2024",
    },
    {
      name: "Robert & Anne Johnson",
      relation: "Family of Resident",
      rating: 5,
      text: "The activities program is wonderful - Mum is always engaged in something interesting, from arts and crafts to music therapy. The gardens are beautiful, and we love spending time there during our visits.",
      date: "December 2023",
    },
  ];

  const videoTestimonials = [
    {
      title: "A Family's Experience",
      description: "The Davies family shares their journey with Shawford Healthcare",
      thumbnail: "video-thumb-1",
    },
    {
      title: "Staff Perspectives",
      description: "Our nursing team talks about what makes Shawford special",
      thumbnail: "video-thumb-2",
    },
    {
      title: "Resident Stories",
      description: "Residents share what they love about life at Shawford",
      thumbnail: "video-thumb-3",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Merriweather']">
            What Families Say About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real experiences from the residents, families, and staff who call Shawford home
          </p>
        </div>

        {/* Written Testimonials Carousel */}
        <div className="mb-20">
          <Card className="card-elevated border-0 max-w-4xl mx-auto relative">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="font-semibold text-lg text-foreground">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].relation}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonials[currentTestimonial].date}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="icon"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonial ? "bg-primary w-6" : "bg-border"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="icon"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Testimonials */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-10 text-foreground">
            Video Testimonials
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="card-elevated border-0 overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-video bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/60" />
                  <Play className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-foreground">{video.title}</h4>
                  <p className="text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            Video testimonials coming soon - click to request a virtual tour
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
