import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { useSeo } from "@/hooks/use-seo";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useSeo({
    title: post ? `${post.title} | Blog` : "Blog post not found | Blog",
    description: post?.excerpt,
    canonicalPath: post ? `/blog/${post.slug}` : "/blog",
  });

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-16">
          <section className="container mx-auto max-w-3xl px-4">
            <Card className="glass">
              <CardHeader>
                <CardTitle>Post not found</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">That blog post doesn’t exist (or was removed).</p>
                <Button asChild>
                  <Link to="/blog">Back to Blog</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Ashmita Dua",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <article className="container mx-auto max-w-3xl px-4">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

          <div className="mb-8">
            <Button asChild variant="ghost" className="hover-scale">
              <Link to="/blog" className="inline-flex items-center gap-2" aria-label="Back to Blog">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
            </Button>
          </div>

          <header className="mb-10 space-y-4">
            <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
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

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <section className="prose prose-invert max-w-none space-y-6">
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
