
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-foreground animate-bounce-gentle">Sudan Bloom</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/category/gifts-for-her" className="hover:text-primary transition-colors duration-200">Gifts for Her</Link>
            <Link to="/category/gifts-for-him" className="hover:text-primary transition-colors duration-200">Gifts for Him</Link>
            <Link to="/category/gift-boxes" className="hover:text-primary transition-colors duration-200">Gift Boxes</Link>
            <Link to="/category/all" className="hover:text-primary transition-colors duration-200">All Gifts</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCart}
              aria-label="Cart"
              className="relative"
            >
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 bg-primary text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/category/gifts-for-her" className="hover:text-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-muted">
                Gifts for Her
              </Link>
              <Link to="/category/gifts-for-him" className="hover:text-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-muted">
                Gifts for Him
              </Link>
              <Link to="/category/gift-boxes" className="hover:text-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-muted">
                Gift Boxes
              </Link>
              <Link to="/category/all" className="hover:text-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-muted">
                All Gifts
              </Link>
            </nav>
          </div>
        )}
      </div>
      
      {/* Cart drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
    </header>
  );
};

export default Navbar;
