import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border p-3 shadow-coastal-lg">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">From $175/night</p>
          <p className="text-xs text-muted-foreground">No service fees</p>
        </div>
        <Button variant="cta" size="default" asChild>
          <a href="#availability">Book Now</a>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
