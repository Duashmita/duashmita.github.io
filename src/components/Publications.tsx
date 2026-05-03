import { ExternalLink, BookOpen } from "lucide-react";

const publications = [
  {
    title: "Pewter: A Mixed-Initiative System for Natural Language Tilemap Design",
    venue: "Under review · UIST '26",
    lab: "Augmented Design Lab — w. Prof. Jim Whitehead",
    abstract:
      "A mixed-initiative system enabling natural language-driven tilemap level design, combining LLM agents with hierarchical wave function collapse to reduce validation loop errors by 42% across 30+ test scenarios.",
  },
  {
    title: "Engram: Personality-Parameterized Schema Memory for NPC Cognitive Diversity",
    venue: "Under review · FDG '26",
    lab: "Co-authored w. Devesh Kriplani",
    abstract:
      "Parameterizes OCEAN (Big Five) personality traits with Prolog-based memory encoding rules, enabling NPCs to form structurally different memories from identical experiences — producing trait-consistent cognitive diversity without scripting.",
    link: "https://bit.ly/engramPersonalityNPC",
    linkLabel: "Demo",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Publications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="glass-card rounded-2xl p-6 md:p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3 text-primary">
                <BookOpen className="h-4 w-4" />
                <span className="font-mono text-xs tracking-wider uppercase">{pub.venue}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 leading-snug">
                {pub.title}
              </h3>
              <p className="text-sm text-primary/90 italic mb-3">{pub.lab}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{pub.abstract}</p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {pub.linkLabel}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
