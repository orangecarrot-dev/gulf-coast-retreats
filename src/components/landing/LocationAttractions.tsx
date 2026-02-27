import { MapPin, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const attractions = [
  { name: "Indian Rocks Beach", distance: "Steps away", desc: "White sand, gentle waves, stunning Gulf Coast sunsets" },
  { name: "Guppy's on the Beach", distance: "Walking", desc: "Local favorite seafood restaurant" },
  { name: "Aqua Prime", distance: "Walking", desc: "Upscale waterfront dining" },
  { name: "Slyce Pizza", distance: "Walking", desc: "Great pizza and casual dining" },
  { name: "Sunset Painting Class", distance: "5 min walk", desc: "Paint on the beach at sunset" },
  { name: "Holiday Inn Water Park", distance: "Nearby", desc: "Fun for the whole family" },
  { name: "Bike & Board Rentals", distance: "Nearby", desc: "Explore the coast on two wheels" },
  { name: "Clearwater Beach", distance: "Short drive", desc: "#1 Beach in America — Pier 60 sunsets" },
  { name: "John's Pass Boardwalk", distance: "Short drive", desc: "Shopping, dining, dolphin tours" },
  { name: "Tampa & St. Pete", distance: "30–45 min", desc: "Busch Gardens, museums, world-class dining" },
];

const LocationAttractions = () => (
  <section id="location" className="py-20 md:py-28 bg-gradient-sand">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary font-medium text-sm tracking-widest uppercase">Location</span>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">Perfectly Positioned</h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Map placeholder */}
        <AnimatedSection>
          <div className="bg-muted rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-border">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-heading text-foreground">1904 Gulf Blvd, Indian Rocks Beach, FL</p>
              <p className="text-muted-foreground mt-2">Google Map will be embedded here</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Attractions */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-4">
            {attractions.map((a) => (
              <div key={a.name} className="bg-card rounded-xl p-5 border border-border/50 hover:shadow-coastal transition-shadow duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-heading text-lg text-foreground">{a.name}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{a.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary text-sm font-medium whitespace-nowrap">
                    <Clock className="h-4 w-4" />
                    {a.distance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default LocationAttractions;
