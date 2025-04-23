
import { X, ShoppingCart, Package, Truck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const isMobile = useIsMobile();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div 
        className={`fixed bg-white ${isMobile ? 'inset-0' : 'top-0 right-0 h-full w-96'} shadow-lg overflow-auto`}
        style={{ animation: `${isOpen ? 'slideIn' : 'slideOut'} 0.3s ease-out` }}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <h2 className="text-lg font-display font-medium">Your Cart (2)</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close cart">
            <X />
          </Button>
        </div>
        
        <div className="p-6 space-y-4">
          {/* Cart items */}
          <div className="space-y-4">
            <div className="flex gap-3 border-b pb-4">
              <div className="w-20 h-20 bg-bloom-pink rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&w=150&h=150" 
                  alt="Handmade Soap Set" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">Handmade Soap Set</h3>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Lavender & Rose</p>
                <div className="flex justify-between mt-2">
                  <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" className="h-6 w-6">-</Button>
                    <span className="px-2">1</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6">+</Button>
                  </div>
                  <p className="font-medium">$24.99</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 border-b pb-4">
              <div className="w-20 h-20 bg-bloom-blue rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1619451683672-0ab7b0dae703?auto=format&fit=crop&w=150&h=150" 
                  alt="Ceramic Flower Vase" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">Ceramic Flower Vase</h3>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Small, Mint</p>
                <div className="flex justify-between mt-2">
                  <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" className="h-6 w-6">-</Button>
                    <span className="px-2">1</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6">+</Button>
                  </div>
                  <p className="font-medium">$34.99</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="bg-muted rounded-xl p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$59.98</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-medium">
              <span>Total</span>
              <span>$59.98</span>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="flex justify-center space-x-4 py-2">
            <div className="flex flex-col items-center text-xs text-muted-foreground">
              <Truck className="h-4 w-4 mb-1 text-primary" />
              <span>Free Shipping</span>
            </div>
            <div className="flex flex-col items-center text-xs text-muted-foreground">
              <Package className="h-4 w-4 mb-1 text-primary" />
              <span>Gift Wrap Available</span>
            </div>
          </div>
          
          {/* Checkout button */}
          <Button 
            className="w-full rounded-full btn-bounce mt-4" 
            size="lg"
            asChild
          >
            <Link to="/checkout">
              Proceed to Checkout
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
