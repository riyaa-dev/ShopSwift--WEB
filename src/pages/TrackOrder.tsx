import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import BackButton from '../components/ui/BackButton';

const TrackOrder: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock order data
  const mockOrders: Record<string, any> = {
    'ORD-12345': {
      id: 'ORD-12345',
      status: 'shipped',
      estimatedDelivery: '2024-01-15',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 199.99 },
        { name: 'Phone Case', quantity: 2, price: 29.99 }
      ],
      tracking: [
        { status: 'Order Placed', date: '2024-01-10', completed: true },
        { status: 'Processing', date: '2024-01-11', completed: true },
        { status: 'Shipped', date: '2024-01-12', completed: true },
        { status: 'Out for Delivery', date: '2024-01-15', completed: false },
        { status: 'Delivered', date: '2024-01-15', completed: false }
      ]
    },
    'ORD-67890': {
      id: 'ORD-67890',
      status: 'delivered',
      estimatedDelivery: '2024-01-08',
      items: [
        { name: 'Smart Watch', quantity: 1, price: 299.99 }
      ],
      tracking: [
        { status: 'Order Placed', date: '2024-01-05', completed: true },
        { status: 'Processing', date: '2024-01-06', completed: true },
        { status: 'Shipped', date: '2024-01-07', completed: true },
        { status: 'Out for Delivery', date: '2024-01-08', completed: true },
        { status: 'Delivered', date: '2024-01-08', completed: true }
      ]
    }
  };

  const handleSearch = async () => {
    if (!orderId.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const order = mockOrders[orderId.toUpperCase()];
      setOrderData(order || null);
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    
    switch (status) {
      case 'Order Placed':
        return <Package className="w-5 h-5 text-blue-500" />;
      case 'Processing':
        return <Package className="w-5 h-5 text-orange-500" />;
      case 'Shipped':
        return <Truck className="w-5 h-5 text-purple-500" />;
      case 'Out for Delivery':
        return <Truck className="w-5 h-5 text-green-500" />;
      case 'Delivered':
        return <MapPin className="w-5 h-5 text-green-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton to="/" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Package className="w-8 h-8 text-primary" />
            Track Your Order
          </h1>
          <p className="text-muted-foreground">
            Enter your order ID to track your package
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter Order ID (e.g., ORD-12345)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch} disabled={isLoading}>
                <Search className="w-4 h-4 mr-2" />
                {isLoading ? 'Searching...' : 'Track Order'}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Try: ORD-12345 or ORD-67890
            </p>
          </CardContent>
        </Card>

        {/* Order Results */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order ID</p>
                    <p className="font-semibold">{orderData.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-semibold capitalize">{orderData.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-semibold">{orderData.estimatedDelivery}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {orderData.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">${item.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Tracking Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.tracking.map((track: any, index: number) => (
                    <div key={index} className="flex items-center space-x-4">
                      {getStatusIcon(track.status, track.completed)}
                      <div className="flex-1">
                        <p className={`font-medium ${track.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {track.status}
                        </p>
                        <p className="text-sm text-muted-foreground">{track.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {orderData === null && orderId && !isLoading && (
          <Card>
            <CardContent className="text-center py-8">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Order Not Found</h3>
              <p className="text-muted-foreground">
                Please check your order ID and try again.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;