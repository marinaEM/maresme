import { cv } from "@/data/cv";
import { motion } from "framer-motion";

export function Research() {
  return (
    <section id="research" className="py-24 bg-secondary/30">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            Research Interests & Projects
          </h2>

          <div className="mb-16">
            <div className="flex flex-wrap gap-3">
              {cv.interests.map((interest, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-background border border-border text-sm text-foreground/80 font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cv.projects.map((project, idx) => (
              <div 
                key={idx}
                className="group p-6 bg-background border border-border hover:border-primary/30 transition-colors h-full flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.code && (
                    <span className="text-xs font-mono text-muted-foreground mt-1 block">
                      {project.code}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
