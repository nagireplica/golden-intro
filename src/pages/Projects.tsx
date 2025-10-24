import Navigation from "@/components/Navigation";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          <section className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-center text-foreground">
              Current Journey
            </h1>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-primary opacity-40 rounded-full"></div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-light text-foreground">
                      Stanford Medical Collaboration
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Partnering with a Stanford medical professor to develop and monetize 
                      innovative assessment services and wellness products, bridging academic 
                      research with accessible health solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-accent opacity-40 rounded-full"></div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-light text-foreground">
                      Building a Mindful Business
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Creating a wellness ecosystem that honors simplicity—curating products like 
                      crystals, incense, and mindful tools while teaching yoga and meditation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

export default Projects;
