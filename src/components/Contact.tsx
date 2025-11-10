import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll be in touch shortly.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["01962 713390", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@shawfordhealthcare.co.uk", "enquiries@shawfordhealthcare.co.uk"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Person Lane, Shawford", "Winchester, Hampshire", "SO21 2BW"],
    },
    {
      icon: Clock,
      title: "Visiting Hours",
      details: ["Flexible visiting arrangements", "Please call ahead to arrange"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Merriweather']">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Contact us to arrange a visit or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="card-elevated border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 h-12 text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 h-12 text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 h-12 text-base"
                      placeholder="01234 567890"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-[150px] text-base"
                      placeholder="Tell us about your inquiry or care needs..."
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-primary w-full h-14 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="card-elevated border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map */}
            <Card className="card-elevated border-0 overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.7219!2d-1.3299!3d51.0299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAxJzQ3LjYiTiAxwrAxOSc0Ny42Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shawford Healthcare Location"
                  className="absolute inset-0"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Visit Us</h4>
                <p className="text-muted-foreground">
                  We welcome families to visit at any time. Please call ahead to ensure we can give you our full attention during your tour.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
