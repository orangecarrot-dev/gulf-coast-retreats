import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "How far is the beach?", a: "Steps away! The beach is directly in front of the building — less than a 1-minute walk from your door to the sand." },
  { q: "Is parking included?", a: "Yes! A reserved double parking spot is included at no extra charge." },
  { q: "How do I check in?", a: "Self check-in using a smart keypad. A personalized code will be sent to you before arrival — no key exchange needed. Check-in is after 4:00 PM." },
  { q: "Are there stairs?", a: "Yes, the condo is on the first floor above the parking level. There is one flight of stairs. There is no elevator." },
  { q: "Is the pool heated?", a: "Yes! The beachfront pool is heated from November through April and offers beautiful ocean views." },
  { q: "Is it family-friendly?", a: "Absolutely! We provide a pack 'n play / travel crib and high chair. Beach chairs, beach toys, and beach towels are included. The pool is shaded until about noon, which is great for kids." },
  { q: "What's nearby?", a: "Local favorites like Guppy's, Aqua Prime, and Slyce Pizza are within walking distance. There's a water park at the nearby Holiday Inn, bike and board rentals, and a sunset painting class on the beach just a 5-minute walk away. Clearwater Beach and John's Pass Boardwalk are a short drive." },
  { q: "Why should I book direct instead of Airbnb?", a: "You'll save 15-20% in service fees, get flexible cancellation, direct communication with Stuart, and the best price guaranteed. Same property, better experience, lower price." },
  { q: "What's the minimum stay?", a: "There is a 4-night minimum stay requirement." },
];

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28 bg-gradient-sand">
    <div className="container mx-auto px-4 max-w-3xl">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm tracking-widest uppercase">FAQ</span>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">Common Questions</h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="multiple" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6 shadow-coastal">
              <AccordionTrigger className="text-foreground font-heading text-lg hover:no-underline text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQ;
