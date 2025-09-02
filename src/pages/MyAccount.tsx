import React from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import BackButton from '../components/ui/BackButton';

const MyAccount: React.FC = () => {
  const accountSections = [
    {
      title: 'Order History',
      description: 'View and track your orders',
      icon: Package,
      href: '/orders',
      color: 'text-blue-500'
    },
    {
      title: 'Wishlist',
      description: 'Your saved items',
      icon: Heart,
      href: '/wishlist',
      color: 'text-red-500'
    },
    {
      title: 'Track Order',
      description: 'Track your current orders',
      icon: Package,
      href: '/track',
      color: 'text-green-500'
    },
    {
      title: 'Account Settings',
      description: 'Manage your account details',
      icon: Settings,
      href: '/settings',
      color: 'text-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton to="/" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <User className="w-8 h-8 text-primary" />
            My Account
          </h1>
          <p className="text-muted-foreground">
            Manage your account, orders, and preferences
          </p>
        </div>

        {/* User Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">john.doe@example.com</p>
                <p className="text-sm text-muted-foreground">Member since January 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {accountSections.map((section) => (
            <Link key={section.title} to={section.href}>
              <Card className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-100 ${section.color}`}>
                      <section.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <Link to="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" className="flex-1">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyAccount;