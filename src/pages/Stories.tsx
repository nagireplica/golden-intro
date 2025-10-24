import Navigation from "@/components/Navigation";

const Stories = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          <section className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-center text-foreground">
              Stories
            </h1>
            
            <p className="text-center text-muted-foreground font-light text-lg">
              Coming soon—reflections, insights, and explorations on the journey of wellness and self-discovery.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} · Crafted with intention
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Stories;
