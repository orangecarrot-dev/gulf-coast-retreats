import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const rules = [
  { title: "Check-in & Check-out", content: "Check-in is at 4:00 PM, check-out is at 10:00 AM. Early check-in and late check-out may be available upon request." },
  { title: "Maximum Occupancy", content: "The condo accommodates up to 6 guests. All guests must be listed at the time of booking." },
  { title: "Pet Policy", content: "We love pets! Small to medium-sized dogs are welcome with a $75 pet fee. Please notify us in advance." },
  { title: "Noise Policy", content: "Quiet hours are from 10:00 PM to 8:00 AM. Please be respectful of neighboring units." },
  { title: "Smoking Policy", content: "This is a non-smoking property. Smoking is not permitted inside the condo or on the balcony." },
  { title: "Cancellation Policy", content: "Full refund if cancelled 30+ days before check-in. 50% refund if cancelled 14–30 days before. No refund within 14 days of check-in." },
  { title: "Parking", content: "One complimentary covered parking space is included. Additional street parking is available." },
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
