import { motion } from "framer-motion";
import { cv } from "@/data/cv";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4] mix-blend-multiply"
        style={{
          backgroundImage: "url('/hero-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative grayscale hover:grayscale-0 transition-all duration-700"
          >
            <img 
              src="/profile.jpg" 
              alt={cv.basics.name}
              className="w-full h-full object-cover shadow-2xl border-4 border-white dark:border-zinc-900"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Marina+Esteban+Medina&background=random&size=512";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-wider uppercase text-muted-foreground">
              Academic Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-4 leading-tight">
              {cv.basics.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-foreground/80 mb-2 font-serif italic">
              {cv.basics.title} · {cv.basics.affiliation}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {cv.basics.location}
            </p>
            
            <div className="h-px w-24 bg-primary/20 mb-8" />
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 max-w-2xl font-light">
              {cv.basics.summary}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-none hover:bg-primary/90 transition-all active:scale-95"
              >
                Get in Touch
              </a>
              <a 
                href="#publications" 
                className="px-6 py-3 border border-border bg-background text-foreground text-sm font-medium rounded-none hover:bg-secondary transition-all active:scale-95"
              >
                View Publications
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
