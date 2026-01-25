import { useState } from "react";
import { cv } from "@/data/cv";
import { motion } from "framer-motion";
import { Search, ExternalLink, Filter } from "lucide-react";

export function Publications() {
  const [filterYear, setFilterYear] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const years = Array.from(new Set(cv.publications.map(p => p.year))).sort((a, b) => b - a);

  const filteredPubs = cv.publications.filter(pub => {
    const matchesYear = filterYear === "all" || pub.year.toString() === filterYear;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            Publications
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilterYear("all")}
                className={`px-3 py-1 text-sm border ${filterYear === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-transparent border-border hover:border-primary/50"}`}
              >
                All
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setFilterYear(year.toString())}
                  className={`px-3 py-1 text-sm border ${filterYear === year.toString() ? "bg-primary text-primary-foreground border-primary" : "bg-transparent border-border hover:border-primary/50"}`}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="space-y-6">
            {filteredPubs.length > 0 ? (
              filteredPubs.map((pub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex flex-col md:flex-row gap-4 p-6 border border-border hover:bg-secondary/20 transition-colors"
                >
                  <div className="md:w-24 flex-shrink-0">
                    <span className="text-sm font-mono text-muted-foreground">{pub.year}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-serif italic mb-3">
                      {pub.journal}
                    </p>
                    {pub.doi && (
                      <a 
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary hover:underline"
                      >
                        DOI: {pub.doi} <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No publications found matching your criteria.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
