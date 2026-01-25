import { cv } from "@/data/cv";
import { motion } from "framer-motion";

export function About() {
  const paragraphs = cv.basics.about.split('\n\n');

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            About & Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg font-medium mb-6 uppercase tracking-wider text-muted-foreground text-xs">Bio</h3>
              <div className="space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6 uppercase tracking-wider text-muted-foreground text-xs">Education</h3>
              <div className="space-y-8">
                {cv.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-border">
                    <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-border"></span>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs font-mono text-muted-foreground">{edu.year}</span>
                      {edu.details && <span className="text-xs text-primary/70 italic">{edu.details}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
