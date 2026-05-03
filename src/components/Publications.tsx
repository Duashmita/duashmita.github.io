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
    <section id="publications" className="relative py-24 px-4 overflow-hidden">
      {/* Van Gogh: Starry Night swirl backdrop */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, hsl(45 95% 55% / 0.18) 0%, transparent 45%), radial-gradient(ellipse at 80% 70%, hsl(220 90% 45% / 0.35) 0%, transparent 50%), linear-gradient(180deg, hsl(220 50% 10%) 0%, hsl(225 45% 14%) 100%)",
          }}
        />
        {/* Painterly swirl SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.22] mix-blend-screen"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(48 100% 75%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(48 100% 75%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="swirl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(220 90% 60%)" />
              <stop offset="100%" stopColor="hsl(48 95% 60%)" />
            </linearGradient>
          </defs>

          {/* Big swirl */}
          <g fill="none" stroke="url(#swirl)" strokeWidth="2" strokeLinecap="round">
            {Array.from({ length: 14 }).map((_, i) => {
              const r = 40 + i * 22;
              return (
                <circle
                  key={`s1-${i}`}
                  cx="260"
                  cy="220"
                  r={r}
                  strokeOpacity={0.35 - i * 0.02}
                  strokeDasharray={`${20 + i * 6} ${10 + i * 4}`}
                />
              );
            })}
            {Array.from({ length: 12 }).map((_, i) => {
              const r = 30 + i * 26;
              return (
                <circle
                  key={`s2-${i}`}
                  cx="940"
                  cy="560"
                  r={r}
                  strokeOpacity={0.32 - i * 0.02}
                  strokeDasharray={`${14 + i * 5} ${8 + i * 3}`}
                />
              );
            })}
          </g>

          {/* Stars */}
          {[
            [120, 110, 60],
            [420, 80, 45],
            [700, 180, 70],
            [1080, 120, 50],
            [180, 520, 55],
            [560, 640, 65],
            [1020, 700, 48],
          ].map(([cx, cy, r], i) => (
            <circle key={`star-${i}`} cx={cx} cy={cy} r={r} fill="url(#starGlow)" />
          ))}

          {/* Brushstroke field */}
          <g stroke="hsl(220 70% 70%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
            {Array.from({ length: 60 }).map((_, i) => {
              const x = (i * 53) % 1200;
              const y = 720 - ((i * 31) % 80);
              return <path key={`b-${i}`} d={`M ${x} ${y} q 12 -10 24 0`} fill="none" />;
            })}
          </g>
        </svg>

        {/* Subtle film grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(hsl(0 0% 100%) 0.5px, transparent 0.5px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-amber-300/80 mb-4">
            Research · Writing
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold tracking-tight"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              background:
                "linear-gradient(135deg, hsl(48 100% 80%) 0%, hsl(40 95% 65%) 50%, hsl(220 80% 75%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Publications
          </h2>
          <div className="mt-4 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="group relative rounded-2xl p-7 md:p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, hsl(220 40% 18% / 0.55) 0%, hsl(225 35% 12% / 0.65) 100%)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid hsl(48 80% 70% / 0.15)",
                boxShadow:
                  "0 10px 40px hsl(220 60% 5% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
              }}
            >
              {/* Corner star */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle, hsl(48 100% 75%) 0%, hsl(40 90% 55% / 0.4) 50%, transparent 70%)",
                  filter: "blur(2px)",
                }}
              />

              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="h-5 w-5 text-amber-300/90 mt-1 shrink-0" />
                <span className="font-mono text-[11px] tracking-widest uppercase text-amber-200/80">
                  {pub.venue}
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl font-semibold text-amber-50 mb-3 leading-snug"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {pub.title}
              </h3>

              <p className="text-sm text-blue-200/80 italic mb-4">{pub.lab}</p>

              <p className="text-[15px] text-slate-200/85 leading-relaxed mb-5">
                {pub.abstract}
              </p>

              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono tracking-wide text-amber-300 hover:text-amber-200 transition-colors"
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
