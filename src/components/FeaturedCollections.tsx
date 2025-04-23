
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  link: string;
}

const collections: Collection[] = [
  {
    id: "1",
    title: "Self-Care Essentials",
    description: "Thoughtful gifts for much-deserved personal moments",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&h=350",
    color: "bg-bloom-peach",
    link: "/category/self-care"
  },
  {
    id: "2",
    title: "Home & Living",
    description: "Beautiful pieces to brighten any space",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&h=350",
    color: "bg-bloom-mint",
    link: "/category/home"
  },
  {
    id: "3",
    title: "Celebration Bundles",
    description: "Perfect packages for every special occasion",
    image: "https://images.unsplash.com/photo-1577374243176-acbe9e30e3b7?auto=format&fit=crop&w=500&h=350",
    color: "bg-bloom-lavender",
    link: "/category/celebrations"
  },
  {
    id: "4",
    title: "Stationery & Journals",
    description: "Inspirational items for the creative soul",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=500&h=350",
    color: "bg-bloom-pink",
    link: "/category/stationery"
  },
  {
    id: "5",
    title: "Seasonal Favorites",
    description: "Trending gifts perfect for the current season",
    image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?auto=format&fit=crop&w=500&h=350",
    color: "bg-bloom-blue",
    link: "/category/seasonal"
  }
];

const FeaturedCollections = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    let newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(maxScroll, scrollPosition + scrollAmount);
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
  };
  
  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-display font-bold">Featured Collections</h2>
            <p className="text-muted-foreground">Curated gift selections for every occasion</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              disabled={scrollPosition <= 0}
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6">
            {collections.map(collection => (
              <div 
                key={collection.id} 
                className="min-w-[280px] md:min-w-[350px] snap-start card-pop"
              >
                <Link to={collection.link} className="block hover:no-underline">
                  <div className={`rounded-2xl overflow-hidden h-full ${collection.color} hover-scale`}>
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={collection.image} 
                        alt={collection.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-medium mb-2">{collection.title}</h3>
                      <p className="text-muted-foreground text-sm">{collection.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollections;
