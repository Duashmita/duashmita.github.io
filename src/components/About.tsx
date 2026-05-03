const About = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-serif italic">
            i'm a computer science student at uc santa cruz who lives somewhere
            between game design, ai/ml research, and creative tech. i like
            building things that <span className="text-primary not-italic font-semibold">feel</span> alive —
            llm-powered worlds, npcs with actual personalities, level generators
            that argue back, and small interactive experiments that blur the line
            between systems and stories.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            most of my work sits at the intersection of <span className="text-accent-foreground bg-accent/30 px-1.5 rounded">play</span>,
            <span className="text-accent-foreground bg-accent/30 px-1.5 rounded ml-1">cognition</span>, and
            <span className="text-accent-foreground bg-accent/30 px-1.5 rounded ml-1">machine reasoning</span> —
            currently researching procedural level generation, episodic memory for
            agents, and personality-parameterized npcs. when i'm not debugging a
            prompt at 2am, i'm probably sketching levels, writing about education,
            or making something tiny and weird.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
