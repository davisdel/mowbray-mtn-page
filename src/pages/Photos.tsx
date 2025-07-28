import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Download, Share2 } from "lucide-react";

export default function PhotosPage() {
  const photoCategories = [
    {
      title: "Home Exteriors",
      photos: [
        { id: 1, title: "Modern Farmhouse Style", description: "Beautiful front elevation with covered porch" },
        { id: 2, title: "Contemporary Design", description: "Clean lines and large windows" },
        { id: 3, title: "Traditional Colonial", description: "Classic brick and stone combination" },
        { id: 4, title: "Craftsman Style", description: "Detailed woodwork and natural materials" },
      ]
    },
    {
      title: "Interior Spaces",
      photos: [
        { id: 5, title: "Open Concept Living", description: "Spacious kitchen and living area" },
        { id: 6, title: "Master Suite", description: "Luxury bedroom with en-suite bathroom" },
        { id: 7, title: "Gourmet Kitchen", description: "Premium appliances and granite countertops" },
        { id: 8, title: "Home Office", description: "Dedicated workspace with built-ins" },
      ]
    },
    {
      title: "Community Amenities",
      photos: [
        { id: 9, title: "Community Pool", description: "Resort-style pool with cabanas" },
        { id: 10, title: "Fitness Center", description: "State-of-the-art equipment" },
        { id: 11, title: "Walking Trails", description: "Scenic paths through natural areas" },
        { id: 12, title: "Playground", description: "Safe and fun space for children" },
      ]
    },
    {
      title: "Lifestyle",
      photos: [
        { id: 13, title: "Community Events", description: "Neighbors gathering for seasonal celebrations" },
        { id: 14, title: "Family Activities", description: "Children playing in safe, supervised areas" },
        { id: 15, title: "Evening Views", description: "Beautiful sunset over the community" },
        { id: 16, title: "Green Spaces", description: "Maintained landscaping and gardens" },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our beautiful community through these carefully curated images showcasing 
            homes, amenities, and the lifestyle you'll enjoy at CommunityPlace.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-strong">
            <div className="relative">
              <div className="h-96 bg-hero-gradient flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Camera className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Featured: Community Overview</h3>
                  <p className="text-lg">Aerial view of our stunning community layout</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Photo Categories */}
        {photoCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">{category.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.photos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  <div className="relative">
                    <div className="h-48 bg-subtle-gradient flex items-center justify-center">
                      <div className="text-center text-muted-foreground group-hover:text-primary transition-colors">
                        <Camera className="h-8 w-8 mx-auto mb-2" />
                        <span className="text-sm font-medium">{photo.title}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button size="sm" className="bg-primary/90 hover:bg-primary text-primary-foreground">
                        View Full Size
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Virtual Tour CTA */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for More?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Pictures are just the beginning. Schedule a personal tour to experience 
            the quality and attention to detail that makes our community special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold shadow-strong"
            >
              Schedule a Tour
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold"
            >
              Download Brochure
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}