import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name, email, message },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "message sent!",
        description: "thank you for reaching out. i'll get back to you soon.",
      });

      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "error",
        description: "failed to send message. please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">get in touch</h2>
          <p className="text-muted-foreground text-lg">
            have a project in mind? let's work together!
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>send me a message</CardTitle>
            <CardDescription>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">email:</span>
                  <a href="mailto:duashmita@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    duashmita@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">location:</span>
                  <span className="text-foreground">santa cruz, california</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">phone:</span>
                  <a href="tel:+14085987970" className="text-foreground hover:text-primary transition-colors">
                    +1 (408) 598-7970
                  </a>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input 
                  placeholder="your name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Textarea 
                  placeholder="your message..." 
                  className="min-h-[150px]" 
                  required 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "sending..." : "send message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
