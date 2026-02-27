import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Shield, CalendarDays } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  guests: z.string().min(1, "Number of guests required"),
  message: z.string().max(1000).optional(),
});

const AvailabilityCalendar = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [form, setForm] = useState({ name: "", email: "", phone: "", guests: "2", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }
    setErrors({});
    toast.success("Booking inquiry sent! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", guests: "2", message: "" });
    setCheckIn(undefined);
    setCheckOut(undefined);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="availability" className="py-20 md:py-28 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Availability</span>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">Check Availability & Book</h2>
          <p className="text-muted-foreground mt-4 text-lg">From <span className="font-heading text-foreground text-2xl">$175</span>/night · No service fees</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Calendar */}
          <AnimatedSection>
            <div className="bg-card rounded-xl p-6 shadow-coastal border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg text-foreground">Select Your Dates</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1 rounded-lg bg-muted p-3 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Check-in</p>
                  <p className="font-medium text-foreground mt-1">{checkIn ? format(checkIn, "MMM d, yyyy") : "Select date"}</p>
                </div>
                <div className="flex-1 rounded-lg bg-muted p-3 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Check-out</p>
                  <p className="font-medium text-foreground mt-1">{checkOut ? format(checkOut, "MMM d, yyyy") : "Select date"}</p>
                </div>
              </div>
              <Calendar
                mode="range"
                selected={checkIn && checkOut ? { from: checkIn, to: checkOut } : checkIn ? { from: checkIn, to: undefined } : undefined}
                onSelect={(range) => {
                  setCheckIn(range?.from);
                  setCheckOut(range?.to);
                }}
                disabled={(date) => date < new Date()}
                numberOfMonths={1}
                className={cn("p-3 pointer-events-auto w-full")}
              />
              <p className="text-xs text-muted-foreground mt-4 text-center flex items-center justify-center gap-1">
                <span className="inline-block w-3 h-3 bg-primary/20 rounded-sm" /> Popular dates book fast
              </p>
            </div>
          </AnimatedSection>

          {/* Inquiry Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-coastal border border-border/50 space-y-5">
              <h3 className="font-heading text-lg text-foreground">Request to Book</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Smith" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@email.com" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 123-4567" />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="guests">Guests</Label>
                  <Input id="guests" type="number" min="1" max="6" value={form.guests} onChange={(e) => update("guests", e.target.value)} />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Any questions or special requests?" rows={3} />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Request to Book
              </Button>

              <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
                <Shield className="h-4 w-4" />
                <span>No payment required · We'll respond within 24 hours</span>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityCalendar;
