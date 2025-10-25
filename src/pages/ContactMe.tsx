import Navigation from "@/components/Navigation";
import { Mail, Heart, Calendar } from "lucide-react";

const ContactMe = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto space-y-16">
          <section className="space-y-8">
            <div className="text-center space-y-6">
              <Heart className="w-12 h-12 text-accent mx-auto" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-5xl font-medium text-foreground">
                Let's Connect
              </h1>
              <p className="text-xl text-foreground/70 font-light leading-relaxed">
                Whether you're interested in yoga sessions, wellness collaborations, or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="bg-card border-2 border-border rounded-lg p-8 md:p-12 space-y-6 hover:border-accent/30 transition-all">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:dingyuhu01@gmail.com"
                    className="text-foreground/70 hover:text-accent transition-colors font-light"
                  >
                    dingyuhu01@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8 md:p-12 space-y-6 hover:border-accent/30 transition-all">
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-foreground mb-2">Book a Time to Chat</h3>
                  <p className="text-sm text-foreground/70 font-light mb-4">
                    Schedule a call directly on my calendar
                  </p>
                  <a
                    href="https://calendly.com/dingyuhu/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-all font-medium shadow-md hover:shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4 pt-8">
              <p className="text-foreground/70 font-light leading-relaxed">
                Looking forward to connecting with kindred spirits on this journey of wellness and growth.
              </p>
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

export default ContactMe;
