
import { Truck, Package, CreditCard, MapPin, CircleCheck } from 'lucide-react';

const TrustBanner = () => {
  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-bloom-peach rounded-full p-3 mb-3">
              <Truck className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium">Free Shipping</h3>
            <p className="text-sm text-muted-foreground">On orders over $50</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-bloom-mint rounded-full p-3 mb-3">
              <Package className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium">Gift Wrapping</h3>
            <p className="text-sm text-muted-foreground">Available on all items</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-bloom-lavender rounded-full p-3 mb-3">
              <CircleCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium">Easy Returns</h3>
            <p className="text-sm text-muted-foreground">30-day return policy</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-bloom-pink rounded-full p-3 mb-3">
              <CreditCard className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium">Secure Checkout</h3>
            <p className="text-sm text-muted-foreground">Safe & encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
