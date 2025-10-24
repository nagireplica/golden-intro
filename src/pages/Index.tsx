import { Leaf, Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <Leaf className="w-12 h-12 text-primary mb-6 mx-auto opacity-70" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
            Wellness & Balance
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            Exploring the intersection of ancient wisdom and modern wellness through yoga, meditation, and mindful living.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto h-px bg-border opacity-50"></div>
      </div>

      {/* Focus Areas */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <Leaf className="w-8 h-8 text-primary mx-auto opacity-60" strokeWidth={1.5} />
            <h3 className="text-lg font-light text-foreground">Yoga</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Movement as meditation, connecting body and breath in harmony.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <Heart className="w-8 h-8 text-primary mx-auto opacity-60" strokeWidth={1.5} />
            <h3 className="text-lg font-light text-foreground">Meditation</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Cultivating presence and inner peace through mindful awareness.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <Sparkles className="w-8 h-8 text-primary mx-auto opacity-60" strokeWidth={1.5} />
            <h3 className="text-lg font-light text-foreground">Health Products</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Developing thoughtful tools to support wellness journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto h-px bg-border opacity-50"></div>
      </div>

      {/* Current Work Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground">
            Current Work
          </h2>
          
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
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto h-px bg-border opacity-50"></div>
      </div>

      {/* Philosophy Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground">
            A Simple Philosophy
          </h2>
          
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p className="text-center">
              True wellness emerges from simplicity. In the quiet space between breaths, 
              we find clarity. Through mindful movement, we discover strength. 
              In stillness, we connect with ourselves.
            </p>
            
            <p className="text-center">
              My work is dedicated to creating tools and practices that honor this simplicity—
              helping others find their own path to balance, presence, and peace.
            </p>
          </div>
        </div>
      </section>

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

export default Index;
