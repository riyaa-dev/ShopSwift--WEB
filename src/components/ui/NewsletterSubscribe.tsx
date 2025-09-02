import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { useNewsletter } from '../../context/NewsletterContext';

interface NewsletterSubscribeProps {
  className?: string;
  variant?: 'dark' | 'light';
}

const NewsletterSubscribe: React.FC<NewsletterSubscribeProps> = ({ 
  className = "", 
  variant = 'light' 
}) => {
  const [email, setEmail] = useState('');
  const { subscribe, state } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      await subscribe(email.trim());
      setEmail('');
    }
  };

  const isDark = variant === 'dark';

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={isDark ? 
          "flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300" : 
          "flex-1"
        }
        required
      />
      <Button 
        type="submit" 
        disabled={state.isSubscribing}
        className={isDark ? 
          "bg-white text-brand-primary hover:bg-white/90" : 
          "bg-gradient-brand hover:opacity-90"
        }
      >
        {state.isSubscribing ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
};

export default NewsletterSubscribe;