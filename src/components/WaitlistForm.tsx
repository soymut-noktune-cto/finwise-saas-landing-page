'use client';

import React, { useState, FormEvent } from 'react';

interface WaitlistFormProps {
  variant?: 'hero' | 'section';
  placeholder?: string;
  ctaText?: string;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

const WaitlistForm: React.FC<WaitlistFormProps> = ({
  variant = 'hero',
  placeholder = 'Enter your email',
  ctaText = 'Join Waitlist',
}) => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setState('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setState('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setState('success');
        setMessage(data.message || 'Thank you for joining! Check your email for confirmation.');
        setEmail('');
      } else {
        setState('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setState('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  const isHero = variant === 'hero';

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className={`flex flex-col sm:flex-row gap-3 ${isHero ? 'items-center' : ''}`}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={state === 'loading' || state === 'success'}
            className={`
              flex-1 px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isHero ? 'bg-white text-gray-900' : 'bg-white text-gray-900'}
              placeholder:text-gray-500
            `}
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            disabled={state === 'loading' || state === 'success'}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isHero 
                ? 'bg-foreground text-white hover:bg-foreground/90' 
                : 'bg-foreground text-white hover:bg-foreground/90'
              }
              whitespace-nowrap
            `}
          >
            {state === 'loading' ? 'Joining...' : state === 'success' ? 'Joined!' : ctaText}
          </button>
        </div>

        {message && (
          <div
            className={`
              text-sm px-4 py-2 rounded-lg
              ${state === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
              }
            `}
            role="alert"
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default WaitlistForm;

