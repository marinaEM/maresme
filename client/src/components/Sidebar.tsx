import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "research", label: "Research & Interests" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "conferences", label: "Conferences" },
    { id: "contact", label: "Contact" },
  ];

  // Handle smooth scroll and active state
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  // Intersection observer to update active link on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-background border rounded-md md:hidden shadow-sm"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transform transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <div className="flex flex-col h-full p-8 justify-between">
          <div>
            <div className="mb-12">
              <h1 className="text-xl font-bold tracking-tight text-primary">M.E. Medina</h1>
              <p className="text-sm text-muted-foreground mt-1">PhD | Postdoc Fellow</p>
            </div>

            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "text-sm text-left transition-colors hover:text-primary",
                    activeSection === link.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex gap-4 text-muted-foreground">
            <a href="https://github.com/marinaEM" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/marina-esteban-medina-655046290/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://scholar.google.com/citations?user=shSxsNIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FileText size={18} />
            </a>
            <a href="mailto:marina.estebanm@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
