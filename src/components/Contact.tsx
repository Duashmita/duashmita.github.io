import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's work together!
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
            <CardDescription>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Email:</span>
                  <a href="mailto:duashmita@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    duashmita@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Location:</span>
                  <span className="text-foreground">Santa Cruz, California</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Phone:</span>
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
                <Input placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="your.email@example.com" required />
              </div>
              <div className="space-y-2">
                <Textarea 
                  placeholder="Your message..." 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
