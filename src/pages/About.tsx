import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Building2, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">About CommunityPlace</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over two decades, we've been creating exceptional communities where families thrive, 
            friendships flourish, and memories are made to last a lifetime.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2002, CommunityPlace began with a simple vision: to create residential 
                  communities that go beyond just housing – places where people could truly live, 
                  connect, and grow together.
                </p>
                <p>
                  What started as a single development has grown into a trusted name in community 
                  planning and real estate development. We've helped thousands of families find 
                  their perfect home while building lasting relationships and vibrant neighborhoods.
                </p>
                <p>
                  Every community we develop is thoughtfully planned with sustainability, accessibility, 
                  and quality of life at the forefront. We believe that great communities are built 
                  on strong foundations of trust, quality, and shared values.
                </p>
              </div>
            </div>
            <div className="bg-subtle-gradient rounded-2xl p-8 shadow-medium">
              <div className="bg-hero-gradient rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Building2 className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">20+ Years</h3>
                  <p className="text-lg">of Community Building</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from initial planning to community management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We prioritize creating spaces where neighbors become friends and communities flourish.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Quality Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every home and amenity is built to the highest standards with attention to detail.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We embrace new technologies and sustainable practices to enhance living experiences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Honest communication and transparent practices in all our business relationships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated professionals behind CommunityPlace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Mitchell", role: "CEO & Founder", experience: "25+ years in real estate development" },
              { name: "Michael Chen", role: "Head of Design", experience: "15+ years in community planning" },
              { name: "Jennifer Rodriguez", role: "Community Relations", experience: "20+ years in resident services" }
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 bg-card shadow-soft">
                <CardHeader>
                  <div className="w-24 h-24 bg-hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-primary-foreground/90">
              Numbers that showcase our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Communities Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-primary-foreground/80">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-foreground/80">Awards Won</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}