import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import BackButton from '../components/ui/BackButton';

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "How do I place an order?",
      answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment gateway."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-7 business days. Express shipping is available for 1-3 business days. Free shipping is available for orders over $50."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with all packaging. Some items like electronics may have different return periods."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by visiting our 'Track Order' page and entering your order ID."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within the United States. We're working on expanding our shipping options to include international destinations."
    },
    {
      question: "How do I create an account?",
      answer: "Click on the 'Account' button in the top navigation and select 'Sign Up'. You'll need to provide your email address and create a password. Having an account allows you to track orders and save your wishlist."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 1 hour of placement. After that, orders are typically processed and shipped. Contact customer service immediately if you need to make changes."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged item, please contact us immediately with photos of the damage. We'll arrange for a replacement or refund as quickly as possible."
    },
    {
      question: "Do you have a physical store?",
      answer: "We're primarily an online retailer, but we do have a showroom at our headquarters. Please contact us to schedule a visit if you'd like to see products in person."
    }
  ];

  const categories = [
    { name: "Orders & Shipping", count: 4 },
    { name: "Returns & Refunds", count: 2 },
    { name: "Account & Payment", count: 3 },
    { name: "General", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton to="/" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-primary" />
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex justify-between items-center p-2 rounded hover:bg-muted">
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Questions & Answers</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Still Need Help */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for? Our customer support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="mailto:support@shopswift.com"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Email Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;