
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Find the Perfect Gift
              <span className="text-primary"> for Everyone</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-lg">
              Discover unique handcrafted treasures that bring joy to those special moments and make every day a little brighter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="rounded-full btn-bounce"
                asChild
              >
                <Link to="/category/all">
                  Shop All Gifts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full btn-bounce"
                asChild
              >
                <Link to="/category/gift-boxes">
                  Gift Collections
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[300px] md:h-[400px]">
              {/* Fun sun and flower illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-bloom-peach rounded-full flex items-center justify-center relative animate-bounce-gentle">
                  {/* Sun face */}
                  <div className="w-40 h-40 md:w-52 md:h-52 bg-yellow-100 rounded-full flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Eyes */}
                      <div className="absolute top-1/3 left-1/4 w-4 h-6 md:w-6 md:h-8 bg-foreground rounded-full"></div>
                      <div className="absolute top-1/3 right-1/4 w-4 h-6 md:w-6 md:h-8 bg-foreground rounded-full"></div>
                      {/* Smile */}
                      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-20 h-8 md:w-24 md:h-10 border-b-4 border-foreground rounded-b-full"></div>
                      {/* Blush */}
                      <div className="absolute bottom-1/3 left-1/5 w-4 h-4 md:w-6 md:h-6 bg-pink-200 rounded-full opacity-60"></div>
                      <div className="absolute bottom-1/3 right-1/5 w-4 h-4 md:w-6 md:h-6 bg-pink-200 rounded-full opacity-60"></div>
                    </div>
                  </div>
                  {/* Flower petals */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-bloom-lavender rounded-full"></div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-bloom-pink rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-bloom-mint rounded-full"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-bloom-blue rounded-full"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-bloom-lavender opacity-50 rounded-full"></div>
              <div className="absolute bottom-10 right-20 w-20 h-20 bg-bloom-mint opacity-50 rounded-full"></div>
              <div className="absolute top-20 right-10 w-12 h-12 bg-bloom-pink opacity-50 rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-16 h-16 bg-bloom-blue opacity-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
