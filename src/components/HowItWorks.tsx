const steps = [
  {
    number: "01",
    title: "Take the Survey",
    description: "Answer a few quick questions about your shopping preferences. Takes just a few minutes.",
  },
  {
    number: "02",
    title: "Complete Tasks",
    description: "Finish the required promotional tasks. This may take several hours over a few days.",
  },
  {
    number: "03",
    title: "Receive Your Card",
    description: "Once verified, your $750 Skims gift card will be delivered to you.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center font-light mb-16">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="font-display text-6xl text-skims-nude block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-2xl mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
