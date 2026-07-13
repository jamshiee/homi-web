'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", SITE.web3formsKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        console.error("Error", data);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="card-flat flex flex-col items-center justify-center p-12 text-center"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-bold text-dark">Thank you for reaching out!</p>
            <p className="mt-2 text-sm text-muted">We&apos;ll get back to you as soon as we can.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-8 text-sm font-semibold text-brand hover:text-dark transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="card-flat space-y-5"
            onSubmit={handleSubmit}
          >
            {/* {SITE.web3formsKey === 'YOUR_WEB3FORMS_KEY' && (
              <div className="rounded-xl bg-orange-50 p-4 text-sm text-orange-800">
                <strong>Setup Required:</strong> Add your Web3Forms access key to <code className="font-mono font-bold">src/lib/site.ts</code> to enable this form.
              </div>
            )} */}
            
            {status === 'error' && (
              <div className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
                Something went wrong submitting the form. Please try again or email us directly.
              </div>
            )}
            
            <input type="hidden" name="subject" value="New Contact Form Submission from Homi" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={status === 'submitting'}
                className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-dark outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 disabled:opacity-50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={status === 'submitting'}
                className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-dark outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 disabled:opacity-50"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={status === 'submitting'}
                className="w-full resize-y rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-dark outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 disabled:opacity-50"
                placeholder="Tell us more..."
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="btn-primary w-full sm:w-auto min-w-[140px] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send message'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
