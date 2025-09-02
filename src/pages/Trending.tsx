import React from 'react';
import { TrendingUp, Star, Flame } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ProductCard from '../components/ui/ProductCard';
import { trendingProducts, products } from '../data/products';

const Trending: React.FC = () => {
  const topRated = products
    .filter(p => p.rating && p.rating >= 4.5)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 6);

  const bestSellers = products
    .filter(p => p.reviews && p.reviews > 200)
    .sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Trending Now</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what's hot and popular right now. These products are flying off our shelves!
          </p>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Most Popular</CardTitle>
              <Flame className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 Products</div>
              <p className="text-xs text-muted-foreground">
                Products with high demand
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Rated</CardTitle>
              <Star className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{topRated.length} Products</div>
              <p className="text-xs text-muted-foreground">
                4.5+ star ratings
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Sellers</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bestSellers.length} Products</div>
              <p className="text-xs text-muted-foreground">
                200+ reviews each
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hot Picks */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Flame className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold">Hot Picks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Top Rated */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-6 h-6 text-warning" />
            <h2 className="text-2xl font-bold">Top Rated Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topRated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-success" />
            <h2 className="text-2xl font-bold">Best Sellers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trending;