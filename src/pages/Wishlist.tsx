import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';
import BackButton from '../components/ui/BackButton';

const Wishlist: React.FC = () => {
  const { state: wishlistState, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddAllToCart = () => {
    wishlistState.items.forEach(item => {
      addToCart(item);
    });
  };

  if (wishlistState.items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton to="/" />
          
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start adding products to your wishlist to save them for later!
            </p>
            <Button asChild>
              <a href="/products">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Continue Shopping
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton to="/" />
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Heart className="w-8 h-8 text-red-500" />
              My Wishlist
            </h1>
            <p className="text-muted-foreground">
              {wishlistState.items.length} {wishlistState.items.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" onClick={clearWishlist}>
              Clear Wishlist
            </Button>
            <Button onClick={handleAddAllToCart}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add All to Cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistState.items.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;