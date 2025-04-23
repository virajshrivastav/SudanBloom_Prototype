
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, Truck, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample product data
const product = {
  id: "1",
  name: "Handmade Soap Set",
  price: "$24.99",
  description: "This beautiful handcrafted soap set features three natural soaps made with essential oils and dried flowers. Each soap bar is gentle on the skin and provides a delightful aromatherapy experience.",
  features: [
    "100% natural ingredients",
    "Handmade in small batches",
    "Essential oil fragrances",
    "No artificial colors or preservatives",
    "Biodegradable and eco-friendly"
  ],
  variants: ["Lavender & Rose", "Citrus Blend", "Eucalyptus Mint"],
  images: [
    "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&w=800&h=800",
    "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&h=800",
    "https://images.unsplash.com/photo-1631031214040-e6b7a12a45c3?auto=format&fit=crop&w=800&h=800",
    "https://images.unsplash.com/photo-1637255869575-37e31c5f2ffc?auto=format&fit=crop&w=800&h=800"
  ],
  rating: 4.8,
  reviewCount: 124
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    toast({
      title: "You've got great taste!",
      description: `${product.name} (${selectedVariant}) has been added to your cart.`,
    });
    // Here you would add the item to cart in a real application
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product images */}
            <div className="lg:w-1/2">
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product details */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-display font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-muted-foreground">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
              
              <p className="text-2xl font-medium text-primary-foreground mb-4">{product.price}</p>
              
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              {/* Variants */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Scent:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <Button
                      key={variant}
                      type="button"
                      variant={selectedVariant === variant ? "default" : "outline"}
                      onClick={() => setSelectedVariant(variant)}
                      className="rounded-full"
                    >
                      {variant}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Quantity:</h3>
                <div className="flex items-center border rounded-md w-fit">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="px-4">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              {/* Add to cart */}
              <Button 
                className="w-full md:w-auto rounded-full py-6 text-lg mb-6 animate-pulse-once"
                size="lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              
              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted rounded-xl mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-bloom-peach rounded-full p-2">
                    <Truck className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-bloom-mint rounded-full p-2">
                    <Package className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Gift Wrapping</p>
                    <p className="text-xs text-muted-foreground">Available at checkout</p>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h3 className="font-medium mb-2">Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
