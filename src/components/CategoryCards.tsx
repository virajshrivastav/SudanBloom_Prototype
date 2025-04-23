
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  title: string;
  image: string;
  color: string;
  link: string;
}

const categories: Category[] = [
  {
    id: "her",
    title: "Gifts for Her",
    image: "https://images.unsplash.com/photo-1613843441252-4303e06e1843?auto=format&fit=crop&w=300&h=300",
    color: "bg-bloom-pink",
    link: "/category/gifts-for-her"
  },
  {
    id: "him",
    title: "Gifts for Him",
    image: "https://images.unsplash.com/photo-1621200022157-31450a689d51?auto=format&fit=crop&w=300&h=300",
    color: "bg-bloom-blue",
    link: "/category/gifts-for-him"
  },
  {
    id: "box",
    title: "Gift Boxes",
    image: "https://images.unsplash.com/photo-1607344645866-f193132badb3?auto=format&fit=crop&w=300&h=300",
    color: "bg-bloom-mint",
    link: "/category/gift-boxes"
  }
];

const CategoryCards = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Find the Perfect Gift</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={category.link}
              className="block text-foreground hover:no-underline"
            >
              <div className={`category-card ${category.color}`}>
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-60 object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-display font-medium text-center">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
