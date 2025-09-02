import React from 'react';
import { RotateCcw, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import BackButton from '../components/ui/BackButton';

const Returns: React.FC = () => {
  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Contact our customer service or use our online return form to start the process.',
      icon: RotateCcw
    },
    {
      step: 2,
      title: 'Package Your Item',
      description: 'Pack the item in its original packaging with all accessories and documentation.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Ship Your Return',
      description: 'Use the prepaid return label we provide or choose your own shipping method.',
      icon: Clock
    },
    {
      step: 4,
      title: 'Receive Refund',
      description: 'Once we receive and inspect your return, your refund will be processed within 3-5 business days.',
      icon: CheckCircle
    }
  ];

  const returnPolicies = [
    {
      category: 'Electronics',
      timeframe: '15 days',
      conditions: 'Must be in original packaging, unopened software, no physical damage',
      restockingFee: '15% if opened'
    },
    {
      category: 'Clothing & Accessories',
      timeframe: '30 days',
      conditions: 'Unworn, with tags, in original condition',
      restockingFee: 'None'
    },
    {
      category: 'Home & Garden',
      timeframe: '30 days',
      conditions: 'Unused, in original packaging',
      restockingFee: 'None'
    },
    {
      category: 'Books & Media',
      timeframe: '30 days',
      conditions: 'Unopened, no damage to packaging',
      restockingFee: 'None'
    }
  ];

  const nonReturnableItems = [
    'Personalized or custom-made items',
    'Perishable goods',
    'Gift cards and digital downloads',
    'Items marked as final sale',
    'Intimate apparel for hygiene reasons'
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton to="/" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <RotateCcw className="w-8 h-8 text-primary" />
            Return Policy
          </h1>
          <p className="text-muted-foreground">
            We want you to be completely satisfied with your purchase. Here's our return policy.
          </p>
        </div>

        {/* Return Process */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">How to Return an Item</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step) => (
              <Card key={step.step} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 w-fit rounded-lg bg-primary/10">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    Step {step.step}: {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Return Policies by Category */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Return Timeframes by Category</h2>
          <div className="space-y-4">
            {returnPolicies.map((policy) => (
              <Card key={policy.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{policy.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-primary">Return Window</p>
                      <p className="text-muted-foreground">{policy.timeframe}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Conditions</p>
                      <p className="text-muted-foreground">{policy.conditions}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Restocking Fee</p>
                      <p className="text-muted-foreground">{policy.restockingFee}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Non-Returnable Items */}
        <div className="mb-8">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Non-Returnable Items:</strong> Some items cannot be returned for hygiene, safety, or other reasons.
            </AlertDescription>
          </Alert>
          
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Items That Cannot Be Returned</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {nonReturnableItems.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-warning" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Refund Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold">Processing Time</h4>
                <p className="text-sm text-muted-foreground">3-5 business days after we receive your return</p>
              </div>
              <div>
                <h4 className="font-semibold">Refund Method</h4>
                <p className="text-sm text-muted-foreground">Refunds are issued to the original payment method</p>
              </div>
              <div>
                <h4 className="font-semibold">Shipping Costs</h4>
                <p className="text-sm text-muted-foreground">Original shipping costs are non-refundable unless the return is due to our error</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exchanges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold">Exchange Policy</h4>
                <p className="text-sm text-muted-foreground">We offer exchanges for defective items or wrong items sent</p>
              </div>
              <div>
                <h4 className="font-semibold">Size Exchanges</h4>
                <p className="text-sm text-muted-foreground">Size exchanges are processed as returns and new orders</p>
              </div>
              <div>
                <h4 className="font-semibold">Damaged Items</h4>
                <p className="text-sm text-muted-foreground">We'll replace or refund damaged items at no cost to you</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Returns;