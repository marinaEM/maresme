import { useState, useMemo } from "react";
import { cv } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export function Publications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedYears, setCollapsedYears] = useState<Record<number, boolean>>({});

  const filteredPubs = useMemo(() => {
    return cv.publications.filter(pub => {
      const content = `${pub.title} ${pub.authors} ${pub.journal}`.toLowerCase();
      return content.includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  const pubsByYear = useMemo(() => {
    const grouped = filteredPubs.reduce((acc, pub) => {
      const year = pub.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(pub);
      return acc;
    }, {} as Record<number, typeof cv.publications>);

    return Object.entries(grouped)
      .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA));
  }, [filteredPubs]);

  const toggleYear = (year: number) => {
    setCollapsedYears(prev => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <span className="w-8 h-px bg-primary/20"></span>
              Publications
            </h2>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border focus:outline-none focus:border-primary transition-all rounded-none"
              />
            </div>
          </div>

          <div className="space-y-12">
            {pubsByYear.length > 0 ? (
              pubsByYear.map(([yearStr, yearPubs]) => {
                const year = parseInt(yearStr);
                const isCollapsed = collapsedYears[year];

                return (
                  <div key={year} className="space-y-6">
                    <button 
                      onClick={() => toggleYear(year)}
                      className="flex items-center gap-4 w-full group"
                    >
                      <h3 className="text-xl font-mono text-primary/40 group-hover:text-primary transition-colors">
                        {year}
                      </h3>
                      <div className="flex-grow h-px bg-border group-hover:bg-primary/20 transition-colors" />
                      {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                    </button>

                    <AnimatePresence initial={false}>
                      {!isCollapsed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="space-y-6 overflow-hidden"
                        >
                          {yearPubs.map((pub, idx) => (
                            <div
                              key={idx}
                              className="group flex flex-col md:flex-row gap-4 p-6 border border-border hover:border-primary/30 hover:bg-secondary/10 transition-all"
                            >
                              <div className="flex-grow">
                                <h4 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                                  {pub.title}
                                </h4>
                                <p className="text-sm text-foreground/70 mb-2">
                                  {pub.authors}
                                </p>
                                <p className="text-sm text-muted-foreground font-serif italic mb-3">
                                  {pub.journal}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                  {pub.link && (
                                    <a 
                                      href={pub.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary hover:underline"
                                    >
                                      Scholar View <ExternalLink size={10} />
                                    </a>
                                  )}
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
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
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
