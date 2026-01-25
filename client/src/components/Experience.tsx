import { cv } from "@/data/cv";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            Experience
          </h2>

          <div className="relative space-y-12 pl-2 md:pl-0">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-[8.5rem] top-2 bottom-0 w-px bg-border"></div>

            {cv.experience.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-16">
                {/* Time & Dot */}
                <div className="md:w-32 flex-shrink-0 md:text-right relative">
                  <span className="text-sm font-mono text-muted-foreground block md:mt-1">{exp.period}</span>
                  <div className="hidden md:block absolute -right-[2.3rem] top-2 w-[9px] h-[9px] rounded-full bg-primary border-2 border-background z-10"></div>
                </div>

                {/* Content */}
                <div className="flex-grow max-w-2xl pl-6 border-l md:border-l-0 border-border md:pl-0">
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <h4 className="text-lg text-primary/80 mb-3">{exp.institution}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
