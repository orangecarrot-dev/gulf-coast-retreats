import { Clock } from "lucide-react";
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
        {/* Real Google Map */}
        <AnimatedSection>
          <div className="rounded-xl overflow-hidden aspect-[4/3] border border-border shadow-coastal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.5!2d-82.8458!3d27.8836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e3d7c0d7a9e7%3A0x0!2s1904+Gulf+Blvd%2C+Indian+Rocks+Beach%2C+FL+33785!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indian Rocks Retreat location on Google Maps"
            />
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
