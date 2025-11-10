import { Heart, Users, Award, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every resident receives personalized attention with dignity and respect at the core of our approach.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our dedicated staff are highly trained professionals who treat residents like family members.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of care, consistently exceeding regulatory requirements.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "A secure, comfortable setting with 24/7 support ensures peace of mind for families.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Merriweather']">
            About Shawford Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 25 years, we've been providing exceptional residential care in the beautiful Winchester countryside.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <Card className="card-elevated border-0 p-8 md:p-12">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                At Shawford Healthcare, we believe that quality care goes beyond meeting physical needs. 
                We're committed to creating a warm, nurturing environment where each resident feels valued, 
                respected, and truly at home.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our approach is centered on maintaining independence, promoting well-being, and ensuring 
                that every day is filled with purpose, connection, and joy.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="card-elevated border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Care Team Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-['Merriweather']">
            Our Dedicated Care Team
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Our team consists of qualified nurses, care assistants, activity coordinators, and support staff 
            who work together to provide comprehensive, person-centered care.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every team member undergoes rigorous training and regular professional development to ensure 
            they deliver the highest standard of care with compassion and expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
