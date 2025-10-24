import { Leaf, Heart, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import palmsSunset from "@/assets/palms-sunset.jpg";
import turtlesBeach from "@/assets/turtles-beach.jpg";
import yogaBeach from "@/assets/yoga-beach.jpg";
const Home = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <Leaf className="w-12 h-12 text-primary mb-6 mx-auto opacity-70" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">Inner Compass</h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">Coming from a social science and HCI research background. I am creating tools  and community to empower grounded and auentic face to face connection.</p>
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
            <h3 className="text-lg font-light text-foreground">Outdoor Yoga Events</h3>
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
            
            <p className="text-center">When you align with yourself and tap into your intuition, something profound happens. You become grounded and aligned. From this place of authentic connection, you naturally create and provide value to the world. You act with abundance mindset, not scarcity. Play a limitless game, not a competitive game.</p>
            
            <p className="text-center">
              I am working on projects that help others find peace and alignment—creating the space 
              and tools for people to discover their own inner wisdom, so they can share their unique 
              gifts with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Healing Background Section */}
      <section className="relative w-full py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img src={palmsSunset} alt="Palm trees silhouetted against peaceful sunset sky" className="w-full h-full object-cover" />
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
              <img src={turtlesBeach} alt="Sea turtles resting on coastal rocks - natural tranquility" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-[4/5]">
              <img src={yogaBeach} alt="Yoga practice on the beach at sunset - mindful movement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
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
    </div>;
};
export default Home;