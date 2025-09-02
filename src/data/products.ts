import { Product } from '../context/CartContext';
import headphonesImg from '../assets/headphones-product.jpg';
import smartwatchImg from '../assets/smartwatch-product.jpg';
import laptopImg from '../assets/laptop-gaming.jpg';
import phoneImg from '../assets/phone.png';
import dressImg from '../assets/dress.png';
import shoesImg from '../assets/shoes.png';
import denimImg from '../assets/denim.png';
import jacketImg from '../assets/jacket.jpg';
import coffeeImg from '/coffee.png';
import smarthomehubImg from '../assets/smarthome.png';
import chairImg from '../assets/chair.png';
import beddingImg from '../assets/bedding set.png';



export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    price: 299.99,
    image: headphonesImg,
    category: 'Electronics',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.',
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    price: 399.99,
    image: smartwatchImg,
    category: 'Electronics',
    description: 'Advanced smartwatch with health monitoring and GPS tracking.',
    rating: 4.6,
    reviews: 189
  },
  {
    id: '3',
    name: 'Laptop Gaming Beast',
    price: 1299.99,
    image: laptopImg,
    category: 'Electronics',
    description: 'High-performance gaming laptop with RTX graphics and fast SSD.',
    rating: 4.9,
    reviews: 456
  },
  {
    id: '4',
    name: 'Smartphone Pro Max',
    price: 999.99,
    image:phoneImg,
    category: 'Electronics',
    description: 'Latest flagship smartphone with advanced camera system.',
    rating: 4.7,
    reviews: 892
  },
  
  // Fashion
  {
    id: '5',
    name: 'Designer Leather Jacket',
    price: 249.99,
    image: jacketImg,
    category: 'Fashion',
    description: 'Premium leather jacket with modern design and perfect fit.',
    rating: 4.5,
    reviews: 127
  },
  {
    id: '6',
    name: 'Classic Denim Jeans',
    price: 89.99,
    image: denimImg,
    category: 'Fashion',
    description: 'Comfortable and stylish denim jeans for everyday wear.',
    rating: 4.3,
    reviews: 203
  },
  {
    id: '7',
    name: 'Luxury Sneakers',
    price: 179.99,
    image: shoesImg,
    category: 'Fashion',
    description: 'Premium sneakers with innovative comfort technology.',
    rating: 4.6,
    reviews: 341
  },
  {
    id: '8',
    name: 'Elegant Evening Dress',
    price: 199.99,
    image: dressImg,
    category: 'Fashion',
    description: 'Sophisticated evening dress perfect for special occasions.',
    rating: 4.8,
    reviews: 89
  },
  
  // Home & Garden
  {
    id: '9',
    name: 'Smart Home Hub',
    price: 149.99,
    image: smarthomehubImg,
    category: 'Home',
    description: 'Central hub for all your smart home devices and automation.',
    rating: 4.4,
    reviews: 267
  },
  {
    id: '10',
    name: 'Ergonomic Office Chair',
    price: 349.99,
    image: chairImg,
    category: 'Home',
    description: 'Professional office chair with lumbar support and adjustable features.',
    rating: 4.7,
    reviews: 178
  },
  {
    id: '11',
    name: 'Premium Coffee Maker',
    price: 299.99,
    image: coffeeImg,
    category: 'Home',
    description: 'Professional-grade coffee maker for the perfect brew every time.',
    rating: 4.6,
    reviews: 412
  },
  {
    id: '12',
    name: 'Luxury Bedding Set',
    price: 159.99,
    image: beddingImg,
    category: 'Home',
    description: 'Ultra-soft bedding set made from premium organic cotton.',
    rating: 4.9,
    reviews: 234
  }
];

export const categories = [
  { name: 'Electronics', count: 4, image: '/api/placeholder/300/200' },
  { name: 'Fashion', count: 4, image: '/api/placeholder/300/200' },
  { name: 'Home', count: 4, image: '/api/placeholder/300/200' },
  { name: 'Sports', count: 0, image: '/api/placeholder/300/200' },
  { name: 'Books', count: 0, image: '/api/placeholder/300/200' },
  { name: 'Beauty', count: 0, image: '/api/placeholder/300/200' }
];

export const trendingProducts = products.filter(product => 
  ['1', '3', '5', '7', '9', '11'].includes(product.id)
);