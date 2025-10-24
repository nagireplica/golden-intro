import { Leaf, Heart, Sparkles } from "lucide-react";
import turtlesBeach from "@/assets/turtles-beach.jpg";
import palmsSunset from "@/assets/palms-sunset.jpg";
import yogaBeach from "@/assets/yoga-beach.jpg";
import yogaBeHereNow from "@/assets/yoga-be-here-now.jpg";

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

      {/* About Me Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground">
            🌸 About Me
          </h2>
          
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p className="text-center">
              Hi, I'm Dingyu — a certified yoga teacher, creative entrepreneur, and lifelong explorer 
              of consciousness and human potential. My work sits at the intersection of science and 
              spirituality — blending ancient wisdom with modern research to help people feel more 
              connected, balanced, and alive.
            </p>
            
            <p className="text-center">
              I currently host yoga and mindfulness events, create content that inspires self-awareness, 
              and collaborate with visionaries — including a Stanford medical professor on stem cell and 
              functional medicine projects — to bring healing innovations to the world.
            </p>
            
            <p className="text-center">
              At my core, I value authenticity, curiosity, compassion, and inner growth. Whether through 
              yoga, writing, or conscious entrepreneurship, my purpose is to help others remember their 
              wholeness and live in alignment with their highest truth.
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
            <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
              <img 
                src={yogaBeHereNow} 
                alt="Yoga practice - Be Here Now - mindful movement and presence" 
                className="w-full h-full object-cover"
              />
            </div>
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

      {/* Natural Healing Background Section */}
      <section className="relative w-full py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={palmsSunset} 
            alt="Palm trees silhouetted against peaceful sunset sky" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-white drop-shadow-lg">
              Natural Healing
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed drop-shadow-md">
              Finding peace in nature's rhythm, where the earth meets the sea and ancient wisdom flows through every moment.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Healing Gallery */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-lg aspect-[4/5]">
              <img 
                src={turtlesBeach} 
                alt="Sea turtles resting on coastal rocks - natural tranquility" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-[4/5]">
              <img 
                src={yogaBeach} 
                alt="Yoga practice on the beach at sunset - mindful movement" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
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

      {/* Core Values Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 bg-secondary/30">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground">
            ✨ Core Values
          </h2>
          
          <div className="grid gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Authenticity
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Living and expressing from a place of truth.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Presence
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Meeting each moment with awareness and compassion.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Connection
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Nurturing genuine bonds between self, others, and the universe.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Growth
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Embracing life as a spiritual and creative unfolding.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Simplicity
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Finding beauty in stillness and balance in everyday life.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                <span className="text-primary">∞</span> Service
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-6">
                Offering my work as a way to uplift and bring more light into the world.
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
