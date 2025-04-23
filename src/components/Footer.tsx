
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Sudan Bloom</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Bringing joy through thoughtful, handcrafted gifts for every special moment in your life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/category/gifts-for-her" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gifts for Her</Link></li>
              <li><Link to="/category/gifts-for-him" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gifts for Him</Link></li>
              <li><Link to="/category/gift-boxes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gift Boxes</Link></li>
              <li><Link to="/category/self-care" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Self-Care</Link></li>
              <li><Link to="/category/home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home & Living</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Join our newsletter for exclusive offers and first access to new collections.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 rounded-l-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground rounded-r-full px-4 py-2 border border-primary hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Sudan Bloom. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.5 4.5-5.5-5.5 4.5-4.5L22 12Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v4.62a1.93 1.93 0 0 0 .97 1.68l3.65 1.89a1.93 1.93 0 0 0 1.81 0l2.73-1.42"></path><path d="M14.92 16.75a1.93 1.93 0 0 1-.97 1.68l-3.65 1.89a1.93 1.93 0 0 1-1.81 0l-3.65-1.89a1.93 1.93 0 0 1-.97-1.68v-4.62a1.93 1.93 0 0 1 .97-1.68l3.65-1.89a1.93 1.93 0 0 1 1.81 0l2.73 1.42"></path><path d="M20.91 15.16 15.45 12l5.46-3.16a1.93 1.93 0 0 1 1.93 0l1.05.61a1.93 1.93 0 0 1 .97 1.68v1.75a1.93 1.93 0 0 1-.97 1.68l-1.05.6a1.93 1.93 0 0 1-1.93 0Z"></path></svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
