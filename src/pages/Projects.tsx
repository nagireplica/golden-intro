import Navigation from "@/components/Navigation";
const Projects = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Previous Projects Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <h1 className="text-4xl md:text-5xl font-medium text-center text-foreground">
            Previous Projects
          </h1>

          <div className="space-y-12">
            {/* University of Maryland */}
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
              <h3 className="text-2xl font-medium text-foreground">University of Maryland Center for Environmental Science – Chesapeake Bay Program</h3>
              <p className="text-foreground/80 font-light leading-relaxed">EPA-funded Institution | October 2023 – June 2025</p>
              <p className="text-foreground/80 font-light leading-relaxed mt-4">
                Leading user research across three platforms serving 1.5 million users, improving environmental literacy and conservation behavior. Led four rounds of card sorting and tree testing to redesign ChesapeakeBay.net information architecture, achieving a 4x reduction in task completion time and 10% increase in task success rate. Design and implement education plans to support EPA staff on UX research best practices and advance inclusivity through equitable research practices.
              </p>
            </div>

            {/* Roku Sports */}
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
              <h3 className="text-2xl font-medium text-foreground">Roku, Inc – Sports Zone Launch</h3>
              <p className="text-foreground/80 font-light leading-relaxed">Full-Time & Internship | May 2021 – March 2023</p>
              <p className="text-foreground/80 font-light leading-relaxed mt-4">
                Created and led research roadmaps that directly influenced the launch of Roku's Sports Zone, now with 50M+ active users. Conducted end-to-end mixed-method studies across mobile, hardware, and sports experiences, shaping product strategies and user flows. Presented insights to stakeholders, enabling partnerships with major brands like Nike and Google. Achieved 28% increase in user satisfaction and established an agile research framework that was scaled across multiple teams.
              </p>
            </div>

            {/* Photon Infotech */}
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
              <h3 className="text-2xl font-medium text-foreground">Photon Infotech – Walgreens Customer Engagement</h3>
              <p className="text-foreground/80 font-light leading-relaxed">Contract Position | July 2023 – October 2023</p>
              <p className="text-foreground/80 font-light leading-relaxed mt-4">
                Conducted generative research to inform Walgreens' customer engagement strategy. Delivered creative, brand-aligned recommendations to support both marketing and merchant goals.
              </p>
            </div>

            {/* Cisco */}
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
              <h3 className="text-2xl font-medium text-foreground">Cisco – Webex Calling</h3>
              <p className="text-foreground/80 font-light leading-relaxed">Research Intern | May 2020 – August 2020</p>
              <p className="text-foreground/80 font-light leading-relaxed mt-4">
                Strategically planned and executed exploratory and evaluative research for B2B Webex Calling Tool. Completed the research 8 days ahead of schedule, resulting in a 35% increase in task success rate and implementation of 10 research insights by engineering team.
              </p>
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
export default Projects;