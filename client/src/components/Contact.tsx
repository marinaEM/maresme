import { cv } from "@/data/cv";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, FileText, GraduationCap, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-primary-foreground/80 mb-12 text-lg font-light leading-relaxed">
              I am always open to discussing new collaborations, research opportunities, or questions about my work in translational oncology and probabilistic machine learning.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span className="opacity-90">
                  {cv.basics.email}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="opacity-90">
                  {cv.basics.affiliation}<br/>
                  {cv.basics.location}
                </span>
              </div>

              <div className="flex gap-4 mt-8">
                <a href={cv.basics.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                  <Github size={20} />
                </a>
                <a href={cv.basics.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={cv.basics.social.scholar} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                  <GraduationCap size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="container px-6 md:px-12 mt-24 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
        <p>© {new Date().getFullYear()} Marina Esteban Medina. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Based on minimal design principles</p>
      </footer>
    </section>
  );
}
