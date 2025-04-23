
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X, Check, CircleCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  isFeatured?: boolean;
  isNew?: boolean;
  category: string;
}

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Handmade Soap Set",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&w=500&h=500",
    isFeatured: true,
    category: "gifts-for-her"
  },
  {
    id: "2",
    name: "Ceramic Flower Vase",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1619451683672-0ab7b0dae703?auto=format&fit=crop&w=500&h=700",
    category: "home"
  },
  {
    id: "3",
    name: "Premium Shave Kit",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1621200022157-31450a689d51?auto=format&fit=crop&w=500&h=500",
    isNew: true,
    category: "gifts-for-him"
  },
  {
    id: "4",
    name: "Self-Care Gift Box",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1607344645866-f193132badb3?auto=format&fit=crop&w=500&h=400",
    category: "gift-boxes"
  },
  {
    id: "5",
    name: "Handcrafted Journal",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=500&h=600",
    category: "stationery"
  },
  {
    id: "6",
    name: "Monstera Plant in Ceramic Pot",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&h=500",
    category: "home"
  },
  {
    id: "7",
    name: "Hand-Poured Soy Candle",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=500&h=500",
    isFeatured: true,
    category: "gifts-for-her"
  },
  {
    id: "8",
    name: "Leather Notebook Cover",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=500&h=300",
    category: "gifts-for-him"
  },
  {
    id: "9",
    name: "Birthday Celebration Box",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1577374243176-acbe9e30e3b7?auto=format&fit=crop&w=500&h=500",
    isNew: true,
    category: "gift-boxes"
  }
];

const categoryTitles: Record<string, string> = {
  "gifts-for-her": "Gifts for Her",
  "gifts-for-him": "Gifts for Him",
  "gift-boxes": "Gift Boxes",
  "home": "Home & Living",
  "stationery": "Stationery & Journals",
  "self-care": "Self-Care Essentials",
  "seasonal": "Seasonal Favorites",
  "all": "All Gifts"
};

const CategoryPage = () => {
  const { categoryId = "all" } = useParams<{ categoryId: string }>();
  const isMobile = useIsMobile();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter products based on category ID
  const filteredProducts = categoryId === "all" 
    ? products 
    : products.filter(product => product.category === categoryId);
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-display font-bold">{categoryTitles[categoryId] || "Products"}</h1>
            <Button 
              variant="outline" 
              onClick={toggleFilter}
              className="md:hidden flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-medium text-lg mb-4">Filters</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="price1" className="mr-2" />
                        <label htmlFor="price1" className="text-sm">Under $25</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price2" className="mr-2" />
                        <label htmlFor="price2" className="text-sm">$25 - $50</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price3" className="mr-2" />
                        <label htmlFor="price3" className="text-sm">$50 - $100</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price4" className="mr-2" />
                        <label htmlFor="price4" className="text-sm">Over $100</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Categories</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="cat1" className="mr-2" />
                        <label htmlFor="cat1" className="text-sm">Self-Care</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="cat2" className="mr-2" />
                        <label htmlFor="cat2" className="text-sm">Home & Living</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="cat3" className="mr-2" />
                        <label htmlFor="cat3" className="text-sm">Stationery</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="cat4" className="mr-2" />
                        <label htmlFor="cat4" className="text-sm">Gift Sets</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Featured</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="feat1" className="mr-2" />
                        <label htmlFor="feat1" className="text-sm">New Arrivals</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="feat2" className="mr-2" />
                        <label htmlFor="feat2" className="text-sm">Best Sellers</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="feat3" className="mr-2" />
                        <label htmlFor="feat3" className="text-sm">On Sale</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6">Apply Filters</Button>
              </div>
            </div>
            
            {/* Filters - Mobile */}
            {isMobile && isFilterOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
                <div className="bg-white w-full rounded-t-xl p-6 animate-slide-in">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-lg">Filters</h3>
                    <Button variant="ghost" size="icon" onClick={toggleFilter}>
                      <X />
                    </Button>
                  </div>
                  
                  <div className="space-y-6 max-h-[70vh] overflow-y-auto">
                    <div>
                      <h4 className="font-medium mb-2">Price Range</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input type="checkbox" id="m-price1" className="mr-2" />
                          <label htmlFor="m-price1">Under $25</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="m-price2" className="mr-2" />
                          <label htmlFor="m-price2">$25 - $50</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="m-price3" className="mr-2" />
                          <label htmlFor="m-price3">$50 - $100</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="m-price4" className="mr-2" />
                          <label htmlFor="m-price4">Over $100</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Categories</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input type="checkbox" id="m-cat1" className="mr-2" />
                          <label htmlFor="m-cat1">Self-Care</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="m-cat2" className="mr-2" />
                          <label htmlFor="m-cat2">Home & Living</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="m-cat3" className="mr-2" />
                          <label htmlFor="m-cat3">Stationery</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="m-cat4" className="mr-2" />
                          <label htmlFor="m-cat4">Gift Sets</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Featured</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input type="checkbox" id="m-feat1" className="mr-2" />
                          <label htmlFor="m-feat1">New Arrivals</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="m-feat2" className="mr-2" />
                          <label htmlFor="m-feat2">Best Sellers</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="m-feat3" className="mr-2" />
                          <label htmlFor="m-feat3">On Sale</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={toggleFilter}
                    >
                      Cancel
                    </Button>
                    <Button className="flex-1">Apply Filters</Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Product grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or browse our other categories.</p>
                </div>
              ) : (
                <div className="masonry-grid">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="mb-6 card-pop">
                      <a href={`/product/${product.id}`} className="block">
                        <div className="rounded-lg overflow-hidden mb-3 relative">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-auto object-cover transition-transform hover:scale-105"
                          />
                          {product.isFeatured && (
                            <span className="absolute top-3 left-3 bg-bloom-peach text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                          {product.isNew && (
                            <span className="absolute top-3 left-3 bg-bloom-mint text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <h3 className="font-medium mb-1">{product.name}</h3>
                        <p className="font-medium text-primary-foreground">{product.price}</p>
                      </a>
                      <Button 
                        variant="outline" 
                        className="w-full mt-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
