import { Bed, Bath, Users, Maximize, Waves } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const specs = [
  { icon: Bed, label: "Bedrooms", value: "2" },
  { icon: Bath, label: "Bathrooms", value: "2" },
  { icon: Users, label: "Sleeps", value: "6" },
  { icon: Maximize, label: "Sq Ft", value: "1,200" },
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
            Welcome to Indian Rocks Retreat — a beautifully updated beachfront condo perched on the shores of Indian Rocks Beach, one of Florida's best-kept secrets. Wake up to stunning Gulf sunsets from your private balcony, stroll to the beach in under a minute, and enjoy the comfort of a fully equipped home with resort-style amenities.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            Whether you're planning a romantic getaway, a family vacation, or a quiet escape from the everyday, this is your place to unwind, recharge, and soak in the Florida sunshine. Every detail has been thoughtfully curated for comfort and convenience.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PropertyOverview;
