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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-wider uppercase text-muted-foreground">
            Academic Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6 leading-tight">
            {cv.basics.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-foreground/80 mb-2 font-serif italic">
            {cv.basics.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {cv.basics.affiliation} • {cv.basics.location}
          </p>
          
          <div className="h-px w-24 bg-primary/20 mb-8" />
          
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 max-w-2xl font-light">
            {cv.basics.summary}
          </p>

          <div className="mt-12 flex gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-none hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#publications" 
              className="px-6 py-3 border border-border bg-background text-foreground text-sm font-medium rounded-none hover:bg-secondary transition-colors"
            >
              View Publications
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
