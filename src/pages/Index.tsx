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

      {/* Background Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground">
            Where Tech Meets Heart
          </h2>
          
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p className="text-center">
              As a UX researcher, I've worked on products ranging from Digital Earth databases 
              to B2B Webex calling tools to Roku Sports streaming interfaces. Through it all, 
              one thing has remained constant: <span className="text-foreground">authentic connection</span>.
            </p>
            
            <p className="text-center">
              I believe technology should bring people together, not separate them. 
              It should create value and positive impact—not manipulate users with algorithms 
              or foster addiction. My work is guided by a simple question:
            </p>
            
            <p className="text-center text-lg text-foreground italic">
              "Does this connect people, or does it divide them?"
            </p>
          </div>
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
            Current Journey
          </h2>
          
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
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 bg-secondary/30">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground">
            Vision & Aspirations
          </h2>
          
          <div className="grid gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Global Explorer
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Traveling to 100 countries, documenting human stories through photography and writing, 
                learning cultures with the curiosity of an anthropologist and the heart of a storyteller.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Legacy Builder
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Building a free elementary school in Asia, creating access to education where it matters most. 
                Giving back is not a side project—it is woven into the fabric of my life's work.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Freedom Seeker
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Living without geographical limitations, supporting family abundantly, and achieving 
                financial independence—not to retire, but to choose how I show up in the world.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Intuitive Leader
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Following synchronicity over strategy, trusting guidance over control. 
                Beginning each day with meditation and gratitude, ending with reflection and stillness.
              </p>
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
            My Philosophy
          </h2>
          
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p className="text-center text-lg">
              Everyone is a creator.
            </p>
            
            <p className="text-center">
              When you align with yourself and tap into your intuition, something profound happens. 
              You become grounded. You become rooted. From this place of authentic connection, 
              you naturally create and provide value to the world.
            </p>
            
            <p className="text-center">
              My work is about helping others find this alignment—creating the space and tools 
              for people to discover their own inner wisdom, so they can share their unique gifts 
              with the world.
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
