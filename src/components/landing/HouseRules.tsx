import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const rules = [
  { title: "Check-in & Check-out", content: "Check-in is after 4:00 PM. Check-out is before 10:00 AM. Self check-in using the keypad — a personalized code will be sent before your arrival." },
  { title: "Maximum Occupancy", content: "The condo accommodates up to 6 guests. All guests must be listed at the time of booking." },
  { title: "Minimum Stay", content: "There is a 4-night minimum stay requirement." },
  { title: "Stairs / Accessibility", content: "The condo is located on the first floor above the parking level. There is one flight of stairs to reach the unit. There is no elevator." },
  { title: "Noise Policy", content: "Quiet hours are from 10:00 PM to 8:00 AM. Please be respectful of neighboring units in the building." },
  { title: "Smoking Policy", content: "This is a non-smoking property. Smoking is not permitted inside the condo or on the balcony." },
  { title: "Parking", content: "A reserved double parking spot is included at no extra charge." },
  { title: "Safety", content: "The condo is equipped with smoke alarms, a carbon monoxide alarm, and a fire extinguisher." },
];

const HouseRules = () => (
  <section id="house-rules" className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-3xl">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm tracking-widest uppercase">Policies</span>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">House Rules & Policies</h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="multiple" className="space-y-3">
          {rules.map((r, i) => (
            <AccordionItem key={i} value={`rule-${i}`} className="bg-card rounded-xl border border-border/50 px-6 shadow-coastal">
              <AccordionTrigger className="text-foreground font-heading text-lg hover:no-underline">
                {r.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {r.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default HouseRules;
