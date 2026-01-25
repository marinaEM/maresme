import { cv } from "@/data/cv";
import { motion } from "framer-motion";

export function Conferences() {
  const conferences = (cv as any).conferences || [];

  return (
    <section id="conferences" className="py-24 bg-background">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            Conferences & Academic Activities
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {conferences.map((conf: any, idx: number) => (
              <div 
                key={idx}
                className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-4 border border-border hover:bg-secondary/10 transition-colors"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-sm font-mono text-muted-foreground">{conf.date}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {conf.name}
                  </h3>
                </div>
                <div className="md:w-48 text-right">
                  <span className="text-sm text-muted-foreground italic">{conf.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
