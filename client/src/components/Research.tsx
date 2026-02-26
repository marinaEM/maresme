import { cv } from "@/data/cv";
import { motion } from "framer-motion";

const featuredProjects = cv.projects.filter((p) => p.code);
const otherProjects = cv.projects.filter((p) => !p.code);

const barWidths = [92, 88, 85, 78, 82, 75, 70, 68];

export function Research() {
  return (
    <section id="research" className="py-24 bg-secondary/30">
      <div className="container px-6 md:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            Research & Interests
          </h2>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-lg font-semibold mb-8 text-foreground/70 uppercase tracking-wider text-sm">
            Research Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {cv.interests.map((interest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm font-medium text-foreground/80 w-48 flex-shrink-0">
                  {interest}
                </span>
                <div className="flex-grow h-px bg-border relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary/30 h-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${barWidths[idx % barWidths.length]}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + idx * 0.05, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects & Grants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-8 text-foreground/70 uppercase tracking-wider text-sm">
            Projects & Grants
          </h3>

          {/* Featured projects — 2-column grid with accent border */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
                className="group p-6 bg-background border border-border hover:border-primary/30 transition-colors border-l-2 border-l-primary/40"
              >
                <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <span className="text-xs font-mono text-muted-foreground mt-1 block">
                  {project.code}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Other projects — compact list */}
          <div className="space-y-3">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-border/50"
              >
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors flex-shrink-0">
                  {project.title}
                </h4>
                <span className="hidden sm:inline text-border">—</span>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
