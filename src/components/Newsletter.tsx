
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be the first to hear about our new collections and exclusive offers.",
      });
      setEmail('');
    }
  };
  
  return (
    <div className="py-14 bg-bloom-peach/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-display font-bold mb-3">Join Our Community</h3>
          <p className="text-muted-foreground mb-6">
            Sign up for our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button 
              type="submit" 
              className="rounded-full btn-bounce"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
