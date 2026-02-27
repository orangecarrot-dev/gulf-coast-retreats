import { Bed, Bath, Users, Maximize, Waves, BedDouble } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const specs = [
  { icon: Users, label: "Guests", value: "6" },
  { icon: Bed, label: "Bedrooms", value: "2" },
  { icon: BedDouble, label: "Beds", value: "4" },
  { icon: Bath, label: "Bathrooms", value: "2" },
  { icon: Waves, label: "Beach", value: "Steps Away" },
];

const PropertyOverview = () => (
  <section id="property" className="py-20 md:py-28 bg-gradient-sand">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary font-medium text-sm tracking-widest uppercase">The Property</span>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">Your Home on the Gulf</h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {specs.map((s) => (
            <div key={s.label} className="bg-card rounded-xl p-6 text-center shadow-coastal border border-border/50">
              <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-heading text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to Indian Rocks Retreat at Sea Isles Condo, steps from the ocean in the quaint beach-side community of Indian Rocks Beach. This adorable 2 bedroom condo sleeps up to 6, features a peek-a-boo view of the Gulf of Mexico from the balcony, a fully equipped kitchen, beach chairs, beach toys, beach towels, and a reserved double parking spot. Enjoy the beachfront heated pool with ocean views.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            Sea Isles offers a quiet experience away from the crowds, but is just a short drive from Clearwater Beach and John's Pass Boardwalk. Walk to local favorites like Guppy's, Aqua Prime, and Slyce Pizza. Rent bikes and boards nearby, or take a sunset painting class on the beach just 5 minutes away. The master bedroom has a king bed, and the second bedroom features a queen bed plus bunk beds, perfect for families.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PropertyOverview;
