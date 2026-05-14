import type { ReactNode } from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

type PolicyLink = {
  href: string;
  label: string;
};

type PolicyPageProps = {
  badge: string;
  title: string;
  description: string;
  status: string;
  intro?: ReactNode;
  helpfulLinks?: PolicyLink[];
  toc?: PolicyLink[];
  relatedLinks?: PolicyLink[];
  note?: ReactNode;
  children: ReactNode;
};

const sectionLabelClasses =
  'inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-primary/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-brand-primary';

const surfaceClasses =
  'rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur';

export default function PolicyPage({
  badge,
  title,
  description,
  status,
  intro,
  helpfulLinks = [],
  toc = [],
  relatedLinks = [],
  note,
  children,
}: PolicyPageProps) {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfbfd_0%,#f8fafc_24%,#ffffff_100%)] pt-32 pb-24 text-slate-900">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-12rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(237,27,36,0.12)_0%,rgba(237,27,36,0)_72%)] blur-3xl" />
          <div className="absolute right-[-10rem] top-[18rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(0,56,147,0.12)_0%,rgba(0,56,147,0)_72%)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto px-6">
          <section className={`${surfaceClasses} overflow-hidden p-8 sm:p-10 lg:p-12`}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(19rem,0.8fr)] lg:items-start">
              <div>
                <span className={sectionLabelClasses}>{badge}</span>
                <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[3.65rem] lg:leading-[1.02]">
                  {title}
                </h1>
                <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
                  {description}
                </p>
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
                  {status}
                </div>
              </div>

              <aside className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">
                  Service Information
                </p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  <p>
                    <span className="block text-base font-black text-slate-900">
                      uNepal
                    </span>
                    Website and mobile services for Nepalese communities worldwide.
                  </p>
                  <p>
                    Contact:{' '}
                    <a
                      href="mailto:hello@unepal.com"
                      className="font-bold text-brand-primary transition-colors hover:text-brand-blue"
                    >
                      hello@unepal.com
                    </a>
                  </p>
                </div>

                {toc.length > 0 ? (
                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">
                      On This Page
                    </p>
                    <nav className="mt-4 space-y-2" aria-label="Page sections">
                      {toc.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-slate-200 hover:bg-white hover:text-slate-950"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                ) : null}
              </aside>
            </div>
          </section>

          <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className={`${surfaceClasses} p-6 sm:p-8 lg:p-10`}>
              {helpfulLinks.length > 0 ? (
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">
                    Helpful Links
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {helpfulLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-primary/25 hover:text-brand-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {intro ? <div className="mt-6">{intro}</div> : null}

              <article className="policy-richtext mt-8">{children}</article>

              {relatedLinks.length > 0 ? (
                <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6 text-sm font-bold text-slate-500">
                  {relatedLinks.map((item, index) => (
                    <div key={item.href} className="contents">
                      {index > 0 ? <span className="text-slate-300">/</span> : null}
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-brand-primary"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ) : null}

              {note ? <div className="mt-8">{note}</div> : null}
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-[1.75rem] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">
                  Quick Contact
                </p>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  For privacy, moderation, or child-safety concerns, contact our support team directly.
                </p>
                <a
                  href="mailto:hello@unepal.com"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-brand-primary"
                >
                  Email hello@unepal.com
                </a>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function PolicyLead({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50/80 px-5 py-5 text-sm font-medium leading-7 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-6">
      {children}
    </div>
  );
}

export function PolicyNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.6rem] border border-amber-200 bg-amber-50 px-5 py-5 text-sm font-medium leading-7 text-amber-950 sm:px-6">
      {children}
    </div>
  );
}

export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200/80 pt-8 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-[2rem]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate-600">{children}</div>
    </section>
  );
}

export function PolicySubsection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-2">
      <h3 className="text-lg font-black tracking-[-0.02em] text-slate-900 sm:text-xl">{title}</h3>
      <div className="mt-3 space-y-4 text-[15px] leading-8 text-slate-600">{children}</div>
    </section>
  );
}

export function PolicyList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-3 pl-6 marker:text-brand-primary">{children}</ul>;
}
