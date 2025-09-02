import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

interface NewsletterState {
  emails: string[];
  isSubscribing: boolean;
}

interface NewsletterContextType {
  state: NewsletterState;
  subscribe: (email: string) => Promise<void>;
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export const NewsletterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<NewsletterState>({
    emails: [],
    isSubscribing: false
  });

  const subscribe = async (email: string) => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (state.emails.includes(email)) {
      toast({
        title: "Already Subscribed",
        description: "This email is already subscribed to our newsletter.",
        variant: "destructive"
      });
      return;
    }

    setState(prev => ({ ...prev, isSubscribing: true }));

    // Simulate API call
    setTimeout(() => {
      setState(prev => ({
        emails: [...prev.emails, email],
        isSubscribing: false
      }));

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter."
      });
    }, 1000);
  };

  return (
    <NewsletterContext.Provider value={{
      state,
      subscribe
    }}>
      {children}
    </NewsletterContext.Provider>
  );
};

export const useNewsletter = () => {
  const context = useContext(NewsletterContext);
  if (context === undefined) {
    throw new Error('useNewsletter must be used within a NewsletterProvider');
  }
  return context;
};