import { useState } from "react";
import { cv } from "@/data/cv";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-primary-foreground/80 mb-12 text-lg font-light leading-relaxed">
                I am always open to discussing new collaborations, research opportunities, or questions about my work in translational oncology and probabilistic machine learning.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <a href={`mailto:${cv.basics.email}`} className="hover:underline opacity-90 hover:opacity-100">
                    {cv.basics.email}
                  </a>
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
                  <a href="https://www.linkedin.com/in/marina-esteban-medina-655046290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://scholar.google.com/citations?user=shSxsNIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                    <FileText size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background/5 p-8 backdrop-blur-sm border border-primary-foreground/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-90">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-primary-foreground/30 py-2 focus:outline-none focus:border-primary-foreground transition-colors placeholder:text-primary-foreground/30"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-90">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-primary-foreground/30 py-2 focus:outline-none focus:border-primary-foreground transition-colors placeholder:text-primary-foreground/30"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-90">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-primary-foreground/30 py-2 focus:outline-none focus:border-primary-foreground transition-colors placeholder:text-primary-foreground/30 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary-foreground text-primary font-medium hover:bg-white transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
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
