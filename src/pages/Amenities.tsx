import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Waves, 
  Dumbbell, 
  TreePine, 
  Car, 
  Shield, 
  Wifi, 
  Baby, 
  Dog, 
  Coffee, 
  Calendar,
  Users,
  Bike
} from "lucide-react";

export default function AmenitiesPage() {
  const amenityCategories = [
    {
      title: "Recreation & Fitness",
      icon: Dumbbell,
      amenities: [
        {
          name: "Resort-Style Pool",
          icon: Waves,
          description: "Olympic-size swimming pool with cabanas, hot tub, and poolside bar",
          features: ["Heated year-round", "Lap lanes", "Shallow end for kids", "Pool parties"]
        },
        {
          name: "State-of-the-Art Fitness Center",
          icon: Dumbbell,
          description: "24/7 access fitness facility with premium equipment and personal training",
          features: ["Cardio equipment", "Free weights", "Group classes", "Personal trainers"]
        },
        {
          name: "Tennis & Pickleball Courts",
          icon: Users,
          description: "Professional courts for tennis and the increasingly popular pickleball",
          features: ["Lighted courts", "Equipment rental", "Tournaments", "Lessons available"]
        }
      ]
    },
    {
      title: "Family & Community",
      icon: Baby,
      amenities: [
        {
          name: "Adventure Playground",
          icon: Baby,
          description: "Safe, modern playground designed for children of all ages",
          features: ["Age-appropriate zones", "Rubberized surface", "Shade structures", "Benches for parents"]
        },
        {
          name: "Community Center",
          icon: Users,
          description: "Spacious event hall for gatherings, celebrations, and community activities",
          features: ["Event hosting", "Kitchen facilities", "A/V equipment", "Meeting rooms"]
        },
        {
          name: "Dog Park",
          icon: Dog,
          description: "Dedicated off-leash area for pets with separate sections for large and small dogs",
          features: ["Fenced areas", "Water stations", "Agility equipment", "Waste stations"]
        }
      ]
    },
    {
      title: "Outdoor Living",
      icon: TreePine,
      amenities: [
        {
          name: "Walking & Biking Trails",
          icon: Bike,
          description: "Miles of paved trails winding through natural areas and connecting neighborhoods",
          features: ["Scenic routes", "Distance markers", "Rest areas", "Wildlife viewing"]
        },
        {
          name: "Parks & Green Spaces",
          icon: TreePine,
          description: "Beautifully landscaped common areas perfect for picnics and relaxation",
          features: ["Picnic tables", "BBQ grills", "Native plants", "Seasonal flowers"]
        },
        {
          name: "Outdoor Pavilions",
          icon: Coffee,
          description: "Covered outdoor spaces for gatherings and events in any weather",
          features: ["Weather protection", "Electrical outlets", "Tables & seating", "Event scheduling"]
        }
      ]
    },
    {
      title: "Convenience & Security",
      icon: Shield,
      amenities: [
        {
          name: "24/7 Security",
          icon: Shield,
          description: "Gated community with professional security staff and surveillance systems",
          features: ["Gated access", "Security patrols", "Emergency response", "Visitor management"]
        },
        {
          name: "Guest Parking",
          icon: Car,
          description: "Ample parking areas throughout the community for residents and visitors",
          features: ["Reserved spots", "Overflow parking", "EV charging", "Well-lit areas"]
        },
        {
          name: "High-Speed Internet",
          icon: Wifi,
          description: "Fiber-optic internet infrastructure with premium connectivity options",
          features: ["Gigabit speeds", "Multiple providers", "Common area WiFi", "Smart home ready"]
        }
      ]
    }
  ];

  const upcomingEvents = [
    { date: "Mar 15", event: "Community Pool Opening", type: "Seasonal" },
    { date: "Mar 22", event: "Family Movie Night", type: "Entertainment" },
    { date: "Apr 5", event: "Tennis Tournament", type: "Sports" },
    { date: "Apr 12", event: "Spring Garden Workshop", type: "Educational" },
    { date: "Apr 20", event: "Community BBQ", type: "Social" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Community Amenities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enjoy resort-style living with world-class amenities designed to enhance your lifestyle 
            and bring neighbors together. From fitness and recreation to relaxation and convenience.
          </p>
        </div>

        {/* Amenities by Category */}
        {amenityCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.amenities.map((amenity, amenityIndex) => (
                <Card key={amenityIndex} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <amenity.icon className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{amenity.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {amenity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground mb-3">Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {amenity.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Operating Hours */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Facility Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  Fitness Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span className="font-medium">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-5 w-5 text-primary" />
                  Pool Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Daily</span>
                    <span className="font-medium">6:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Community Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-medium">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Community Events</h2>
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Community Calendar
              </CardTitle>
              <CardDescription>
                Join your neighbors for these exciting upcoming events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-subtle-gradient rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-primary">{event.date}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{event.event}</h4>
                      </div>
                    </div>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Lifestyle</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ready to enjoy all these amazing amenities? Schedule a tour and see 
            firsthand what makes our community so special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-strong transition-all duration-200">
              Schedule Community Tour
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              View Event Calendar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}