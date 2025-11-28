import { Button } from "@/components/ui/button";

const OFFER_LINK = "https://glctrk.org/aff_c?offer_id=1198&aff_id=3866&source=SCSkims";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-skims-cream">
      <div className="container text-center">
        <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
          Ready to Get Started?
        </h2>
        <p className="font-body text-muted-foreground max-w-md mx-auto mb-10">
          Your $750 Skims gift card is just a survey away. 
          Start now and treat yourself to something comfortable.
        </p>
        
        <Button variant="cta" size="xl" asChild>
          <a href={OFFER_LINK} target="_blank" rel="noopener noreferrer">
            Begin Your Survey
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
