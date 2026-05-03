import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { useSeo } from "@/hooks/use-seo";

const Blog = () => {
  useSeo({
    title: "Blog | Ashmita Dua",
    description: "Read Ashmita Dua's blog post on React, TypeScript, and web development.",
    canonicalPath: "/blog",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <header className="mb-16 text-center">
            <h1 className="mb-4">blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              thoughts on development, design, and everything in between
            </p>
          </header>

          <section className="space-y-6 max-w-4xl mx-auto" aria-label="Blog posts">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="glass group hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="group/btn shrink-0 hover-scale">
                      <Link to={`/blog/${post.slug}`} aria-label={`Read more: ${post.title}`}>
                        read more
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
