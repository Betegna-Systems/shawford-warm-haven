import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  HeartPulse, 
  UtensilsCrossed, 
  Activity, 
  Pill,
  Users,
  Sparkles,
  Calendar,
  Stethoscope 
} from "lucide-react";

const Services = () => {
  const careTypes = [
    {
      icon: HeartPulse,
      title: "24-Hour Nursing Care",
      description: "Round-the-clock professional nursing support for residents requiring continuous medical attention and monitoring.",
    },
    {
      icon: Users,
      title: "Personal Care",
      description: "Compassionate assistance with daily activities including bathing, dressing, mobility, and personal hygiene.",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Safe and accurate administration of medications by qualified staff, with regular reviews by healthcare professionals.",
    },
    {
      icon: Stethoscope,
      title: "Specialized Care",
      description: "Expert care for residents with dementia, Parkinson's, and other complex health conditions.",
    },
  ];

  const dailyServices = [
    {
      icon: UtensilsCrossed,
      title: "Nutritious Meals",
      description: "Freshly prepared, home-cooked meals tailored to dietary needs and preferences, served in our welcoming dining room.",
      features: ["Three daily meals plus snacks", "Special dietary accommodations", "Choice of menu options"],
    },
    {
      icon: Activity,
      title: "Activities & Entertainment",
      description: "A varied program of social activities, exercise classes, and entertainment to keep residents engaged and active.",
      features: ["Arts and crafts workshops", "Music therapy sessions", "Garden activities", "Regular outings"],
    },
    {
      icon: Sparkles,
      title: "Personal Services",
      description: "On-site amenities to help residents look and feel their best while maintaining independence.",
      features: ["Hair salon services", "Chiropody visits", "Physiotherapy", "Therapeutic activities"],
    },
    {
      icon: Calendar,
      title: "Family Involvement",
      description: "We encourage family participation and maintain open communication about your loved one's care.",
      features: ["Flexible visiting hours", "Regular care reviews", "Family events", "Open-door policy"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Merriweather']">
            Our Care Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive, personalized care designed around the unique needs of each resident
          </p>
        </div>

        {/* Care Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-10 text-foreground">
            Types of Care We Provide
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careTypes.map((care, index) => {
              const Icon = care.icon;
              return (
                <Card key={index} className="card-elevated border-0 hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/20">
                      <Icon className="h-7 w-7 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{care.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{care.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Daily Services */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-10 text-foreground">
            Daily Life at Shawford
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {dailyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elevated border-0">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                          <span className="text-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
