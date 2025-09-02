import React from 'react';
import { Truck, Clock, Shield, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import BackButton from '../components/ui/BackButton';

const Shipping: React.FC = () => {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      price: 'Free on orders $50+',
      time: '3-7 business days',
      description: 'Our most popular shipping option with reliable delivery times.',
      icon: Truck
    },
    {
      name: 'Express Shipping',
      price: '$9.99',
      time: '1-3 business days',
      description: 'Faster delivery for when you need your items quickly.',
      icon: Clock
    },
    {
      name: 'Next Day Delivery',
      price: '$19.99',
      time: '1 business day',
      description: 'Get your order delivered the next business day.',
      icon: Shield
    }
  ];

  const shippingInfo = [
    {
      title: 'Processing Time',
      content: 'Most orders are processed within 1-2 business days. Orders placed after 2 PM EST will be processed the next business day.'
    },
    {
      title: 'Shipping Locations',
      content: 'We currently ship to all 50 US states. International shipping is not available at this time.'
    },
    {
      title: 'Order Tracking',
      content: 'Once your order ships, you\'ll receive a tracking number via email. You can track your package on our website or the carrier\'s website.'
    },
    {
      title: 'Delivery Attempts',
      content: 'If no one is available to receive your package, the carrier will leave a notice and attempt redelivery. Packages may be left at your doorstep based on carrier policy.'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton to="/" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Truck className="w-8 h-8 text-primary" />
            Shipping Information
          </h1>
          <p className="text-muted-foreground">
            Everything you need to know about our shipping options and policies
          </p>
        </div>

        {/* Shipping Options */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shippingOptions.map((option) => (
              <Card key={option.name} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 w-fit rounded-lg bg-primary/10">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{option.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-primary">{option.price}</p>
                    <p className="text-sm text-muted-foreground">{option.time}</p>
                  </div>
                  <p className="text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shipping Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Free Shipping Qualification</h4>
              <p className="text-sm text-muted-foreground">
                Free standard shipping applies to orders of $50 or more before taxes. Discount codes and gift cards do not count toward the minimum order value.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Holiday Shipping</h4>
              <p className="text-sm text-muted-foreground">
                During peak holiday seasons, shipping times may be extended. We recommend placing orders early to ensure timely delivery.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Address Requirements</h4>
              <p className="text-sm text-muted-foreground">
                Please ensure your shipping address is complete and accurate. We cannot be responsible for packages shipped to incorrect addresses provided by the customer.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Damaged Packages</h4>
              <p className="text-sm text-muted-foreground">
                If your package arrives damaged, please contact us immediately with photos. We'll work with the carrier to resolve the issue quickly.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shipping;