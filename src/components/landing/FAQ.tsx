import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "How far is the beach?", a: "Steps away! The beach is directly in front of the building — less than a 1-minute walk from your door to the sand." },
  { q: "Is parking included?", a: "Yes, one covered parking space is included at no extra charge. Additional street parking is available nearby." },
  { q: "What's the cancellation policy?", a: "Full refund if cancelled 30+ days before check-in. 50% refund for cancellations 14–30 days out. See House Rules for details." },
  { q: "How do I check in?", a: "We use a smart lock with a personalized code sent to you before arrival. Self-check-in is easy — no key exchange needed." },
  { q: "Are pets allowed?", a: "Yes! Small to medium dogs are welcome with a $75 pet fee. Please let us know when booking." },
  { q: "What's nearby?", a: "Indian Rocks Beach Nature Preserve, Sand Key Park, Clearwater Beach (15 min), Tampa & St. Pete (30-45 min), plus amazing local restaurants and bars within walking distance." },
  { q: "Why should I book direct instead of Airbnb?", a: "You'll save 15–20% in service fees, get flexible cancellation, direct communication with us, and the best price guaranteed. Same property, better experience, lower price." },
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
