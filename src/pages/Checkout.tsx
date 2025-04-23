
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, MapPin, CreditCard, Check, ChevronRight } from "lucide-react";

const steps = [
  { id: "cart", label: "Cart", icon: ShoppingCart },
  { id: "shipping", label: "Shipping", icon: MapPin },
  { id: "payment", label: "Payment", icon: CreditCard },
  { id: "confirmation", label: "Confirmation", icon: Check },
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState("shipping");
  const { toast } = useToast();
  
  const goToStep = (step: string) => {
    setCurrentStep(step);
  };
  
  const handleSubmitShipping = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Shipping information saved!",
      description: "Proceed to payment to complete your order.",
    });
    goToStep("payment");
  };
  
  const handleSubmitPayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Order placed successfully!",
      description: "Your order has been confirmed. Thank you for shopping with us!",
    });
    goToStep("confirmation");
    
    // Create confetti effect
    createConfetti();
  };
  
  const createConfetti = () => {
    const confettiContainer = document.getElementById('confetti-container');
    if (!confettiContainer) return;
    
    const colors = ['#FDE1D3', '#E5DEFF', '#FFDEE2', '#D3E4FD', '#F2FCE2'];
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      confettiContainer.appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div id="confetti-container" className="fixed inset-0 pointer-events-none z-50"></div>
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              {steps.map((step, index) => {
                const isActive = step.id === currentStep;
                const isPast = steps.findIndex(s => s.id === currentStep) > index;
                
                return (
                  <div key={step.id} className="flex-1 relative">
                    <div className="flex flex-col items-center">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isActive || isPast ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <step.icon className="h-5 w-5" />
                      </div>
                      <span className={`text-xs mt-2 ${isActive ? "font-medium" : "text-muted-foreground"}`}>
                        {step.label}
                      </span>
                    </div>
                    
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div 
                        className={`absolute top-5 left-1/2 w-full h-0.5 ${
                          isPast ? "bg-primary" : "bg-muted"
                        }`}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Step content */}
          {currentStep === "cart" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-display font-bold mb-6">Your Cart</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-4 pb-4 border-b">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
                
                <div className="flex gap-4 pb-4 border-b">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
              
              <div className="bg-muted rounded-xl p-4 space-y-3 mb-6">
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
              
              <Button 
                className="w-full rounded-full btn-bounce" 
                size="lg"
                onClick={() => goToStep("shipping")}
              >
                Proceed to Shipping <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
          
          {currentStep === "shipping" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-display font-bold mb-6">Shipping Information</h2>
              
              <form onSubmit={handleSubmitShipping}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-1 text-sm">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1 text-sm">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-1 text-sm">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block mb-1 text-sm">Address</label>
                    <input 
                      type="text" 
                      id="address" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block mb-1 text-sm">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block mb-1 text-sm">State/Province</label>
                    <input 
                      type="text" 
                      id="state" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block mb-1 text-sm">ZIP/Postal Code</label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block mb-1 text-sm">Country</label>
                    <select 
                      id="country" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <input type="checkbox" id="giftWrap" className="rounded" />
                  <label htmlFor="giftWrap">Add gift wrapping (+$5.00)</label>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 rounded-full" 
                    onClick={() => goToStep("cart")}
                  >
                    Back to Cart
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 rounded-full btn-bounce"
                  >
                    Continue to Payment <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {currentStep === "payment" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-display font-bold mb-6">Payment Method</h2>
              
              <form onSubmit={handleSubmitPayment}>
                <div className="space-y-6 mb-6">
                  <div>
                    <label htmlFor="cardName" className="block mb-1 text-sm">Name on Card</label>
                    <input 
                      type="text" 
                      id="cardName" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="block mb-1 text-sm">Card Number</label>
                    <input 
                      type="text" 
                      id="cardNumber" 
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block mb-1 text-sm">Expiry Date</label>
                      <input 
                        type="text" 
                        id="expiry" 
                        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block mb-1 text-sm">CVC</label>
                      <input 
                        type="text" 
                        id="cvc" 
                        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-xl p-4 space-y-3 mb-6">
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
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 rounded-full" 
                    onClick={() => goToStep("shipping")}
                  >
                    Back to Shipping
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 rounded-full btn-bounce"
                  >
                    Place Order <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {currentStep === "confirmation" && (
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-500" />
              </div>
              
              <h2 className="text-2xl font-display font-bold mb-2">Thank You for Your Order!</h2>
              <p className="text-muted-foreground mb-6">
                Order #SB12345 has been placed successfully and is now being processed.
              </p>
              
              <div className="bg-muted rounded-xl p-6 mb-6 text-left">
                <h3 className="font-medium mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-bloom-pink rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&w=100&h=100" 
                          alt="Handmade Soap Set" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Handmade Soap Set</p>
                        <p className="text-xs text-muted-foreground">Lavender & Rose</p>
                      </div>
                    </div>
                    <p>$24.99</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-bloom-blue rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1619451683672-0ab7b0dae703?auto=format&fit=crop&w=100&h=100" 
                          alt="Ceramic Flower Vase" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Ceramic Flower Vase</p>
                        <p className="text-xs text-muted-foreground">Small, Mint</p>
                      </div>
                    </div>
                    <p>$34.99</p>
                  </div>
                  
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span className="font-medium">$59.98</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                A confirmation email has been sent to your email address. We'll send you another email when your order ships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline" 
                  className="rounded-full"
                  asChild
                >
                  <Link to="/order-tracking">
                    Track Order
                  </Link>
                </Button>
                <Button 
                  className="rounded-full btn-bounce"
                  asChild
                >
                  <Link to="/">
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
