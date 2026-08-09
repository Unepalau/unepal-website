'use client';

import { useEffect, useRef, useState } from 'react';

const CONTACT_ENDPOINT = 'https://us-central1-unepalwebsite.cloudfunctions.net/contact';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) closeButtonRef.current?.focus();
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') ?? '').trim(),
          email: String(data.get('email') ?? '').trim(),
          subject: String(data.get('subject') ?? 'General support').trim(),
          message: String(data.get('message') ?? '').trim(),
        }),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok) throw new Error(result?.message || 'We could not send your message.');
      setStatus('success');
      setMessage('Your message has been sent to the uNepal team.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'We could not send your message. Please email hello@unepal.com.');
    }
  }

  return (
    <section id="contact" className="section section--sm scroll-mt-20 bg-white">
      <div className="site-shell">
        <div className="flex flex-col gap-6 rounded-[26px] border border-[#E4E6EB] bg-[#F3F4F6] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#E60023]">Support</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold tracking-[-.035em] text-[#071632] sm:text-3xl">Need a hand with uNepal?</h2>
            <p className="mt-2 text-sm font-medium leading-6 text-[#65676B]">Contact support for account, privacy, moderation, safety, or business enquiries.</p>
          </div>
          <button type="button" onClick={() => { setStatus('idle'); setMessage(''); setOpen(true); }} className="button button--dark shrink-0">Contact support</button>
        </div>
      </div>

      {open ? (
        <div className="contact-backdrop fixed inset-0 z-[80] flex items-end justify-center bg-[#071632]/66 p-3 backdrop-blur-sm sm:items-center sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <div className="contact-dialog max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[26px] bg-white shadow-[0_28px_80px_rgba(7,22,50,.38)]" role="dialog" aria-modal="true" aria-labelledby="contact-title">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-[#E4E6EB] bg-white/95 px-5 py-5 backdrop-blur sm:px-7">
              <div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#E60023]">uNepal support</p><h3 id="contact-title" className="mt-1 font-display text-2xl font-extrabold text-[#071632]">Send a message</h3></div>
              <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 shrink-0 place-items-center rounded-[14px] border border-[#E4E6EB] text-xl text-[#071632]" aria-label="Close contact form">×</button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-bold text-[#1C1E21]">Name <span className="text-[#E60023]">*</span><input name="name" required autoComplete="name" className="mt-2 h-[52px] w-full rounded-[14px] border border-[#E4E6EB] bg-white px-4 font-medium outline-none focus:border-[#0B4EA2] focus:ring-4 focus:ring-[#0B4EA2]/10" /></label>
                <label className="text-sm font-bold text-[#1C1E21]">Email <span className="text-[#E60023]">*</span><input name="email" type="email" required autoComplete="email" className="mt-2 h-[52px] w-full rounded-[14px] border border-[#E4E6EB] bg-white px-4 font-medium outline-none focus:border-[#0B4EA2] focus:ring-4 focus:ring-[#0B4EA2]/10" /></label>
              </div>
              <label className="mt-4 block text-sm font-bold text-[#1C1E21]">Subject<select name="subject" className="mt-2 h-[52px] w-full rounded-[14px] border border-[#E4E6EB] bg-white px-4 font-medium outline-none focus:border-[#0B4EA2] focus:ring-4 focus:ring-[#0B4EA2]/10"><option>General support</option><option>Privacy request</option><option>Child safety report</option><option>Moderation appeal</option><option>Business enquiry</option></select></label>
              <label className="mt-4 block text-sm font-bold text-[#1C1E21]">Message <span className="text-[#E60023]">*</span><textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-[14px] border border-[#E4E6EB] bg-white p-4 font-medium outline-none focus:border-[#0B4EA2] focus:ring-4 focus:ring-[#0B4EA2]/10" /></label>
              {message ? <p role="status" className={`mt-4 rounded-[14px] px-4 py-3 text-sm font-bold ${status === 'success' ? 'bg-[#F2F5FA] text-[#0B4EA2]' : 'bg-[#FFF2F4] text-[#C9001F]'}`}>{message}</p> : null}
              <button type="submit" disabled={status === 'sending'} className="button button--red mt-5 w-full disabled:cursor-not-allowed disabled:opacity-55">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
              <p className="mt-4 text-center text-xs font-medium text-[#65676B]">Or email <a href="mailto:hello@unepal.com" className="font-bold text-[#003893] underline underline-offset-2">hello@unepal.com</a></p>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
