"use client";
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isLocalhost = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);
  const contactEndpoint = isLocalhost
    ? '/api/contact'
    : process.env.NEXT_PUBLIC_CONTACT_API_URL || '/api/contact';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || 'General support').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMessage('Name, email, and message are required.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const data = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(result?.message || 'We could not send your message right now. Please email hello@unepal.com directly.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('We could not send your message right now. Please email hello@unepal.com directly.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden scroll-mt-28">
      {/* Subtle Premium Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50/80 to-transparent"></div>
        <div className="absolute top-[-10%] left-[-8%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(227,24,55,0.04)_0%,transparent_70%)] blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-8%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(24,90,227,0.04)_0%,transparent_70%)] blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <FadeIn className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 sm:p-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-blue-100">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-6">We're here to help.</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Whether you have a question, need support with your account, or want to report an issue, our team is ready to assist you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            <div className="rounded-3xl border border-gray-100 bg-gray-50/50 p-8 text-center hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 mx-auto bg-white shadow-sm border border-gray-100 text-brand-blue rounded-2xl flex items-center justify-center mb-6 text-xl">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">Email Support</p>
              <a href="mailto:hello@unepal.com" className="text-xl font-black text-gray-900 hover:text-brand-blue transition-colors">
                hello@unepal.com
              </a>
              <p className="text-sm text-gray-500 mt-3 font-medium">For general support and inquiries.</p>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-gray-50/50 p-8 text-center hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 mx-auto bg-white shadow-sm border border-gray-100 text-brand-primary rounded-2xl flex items-center justify-center mb-6 text-xl">
                <i className="fa-solid fa-headset"></i>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-3">Support Team</p>
              <p className="text-xl font-black text-gray-900">Fast, human help</p>
              <p className="text-sm text-gray-500 mt-3 font-medium">Reach us anytime through email and we&apos;ll reply as soon as possible.</p>
            </div>
          </div>

          <hr className="border-gray-100 mb-12" />

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Send us a message</h3>
              <p className="text-gray-600 font-medium">Fill out the form below and send your message directly to hello@unepal.com.</p>
            </div>

            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-bold text-gray-800 mb-2">Name</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required
                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-gray-50/50 focus:bg-white transition-colors"
                    placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-bold text-gray-800 mb-2">Email</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required
                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-gray-50/50 focus:bg-white transition-colors"
                    placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-bold text-gray-800 mb-2">Subject</label>
                <div className="relative">
                  <select id="contact-subject" name="subject"
                    className="w-full appearance-none rounded-2xl border border-gray-200 px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-gray-50/50 focus:bg-white transition-colors">
                    <option>General support</option>
                    <option>Privacy request</option>
                    <option>Child safety report</option>
                    <option>Moderation appeal</option>
                    <option>Business enquiry</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <i className="fa-solid fa-chevron-down text-sm"></i>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-bold text-gray-800 mb-2">Message</label>
                <textarea id="contact-message" name="message" rows={5} required
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-gray-50/50 focus:bg-white transition-colors resize-y"
                  placeholder="Include links, usernames, and any context that will help us respond faster."></textarea>
              </div>
              
              {status === 'success' && (
                <div className="rounded-2xl border border-brand-blue/15 bg-blue-50/70 px-5 py-4 text-center text-sm font-medium text-brand-blue shadow-sm shadow-brand-blue/5">
                  Your message has been sent to hello@unepal.com. We&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-2xl border border-brand-primary/15 bg-brand-primary/5 px-5 py-4 text-center text-sm font-medium text-brand-primary shadow-sm shadow-brand-primary/5">
                  {errorMessage}
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="w-full bg-brand-primary text-white font-bold py-4 rounded-2xl hover:bg-brand-blue transition-colors duration-300 text-lg shadow-lg shadow-brand-primary/20 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
