import { useEffect, useState, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronDown, Mail, MapPin, Phone, X } from 'lucide-react';
import { enquiryTypes } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';

interface FormState {
  name: string;
  email: string;
  phone: string;
  organization: string;
  type: string;
  message: string;
}

const EMPTY: FormState = { name: '', email: '', phone: '', organization: '', type: enquiryTypes[0], message: '' };

export function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [toastOpen, setToastOpen] = useState(false);
  const { hash, key } = useLocation();

  // Auto-dismiss the toast after 5 seconds
  useEffect(() => {
    if (!toastOpen) return;
    const timer = setTimeout(() => setToastOpen(false), 5000);
    return () => clearTimeout(timer);
  }, [toastOpen]);

  // Scroll to the enquiry form when arriving via /contact#enquiry
  useEffect(() => {
    if (hash !== '#enquiry') return;
    const timer = setTimeout(() => {
      document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    return () => clearTimeout(timer);
  }, [hash, key]);

  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (form.phone && !/^[+\d][\d\s-]{6,}$/.test(form.phone)) next.phone = 'Please enter a valid phone number.';
    if (!form.message.trim()) next.message = 'A short message helps us route your enquiry.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      // TODO: replace with your real submission endpoint (e.g. fetch('/api/enquiries', { ... }))
      // For now we simulate a successful send so the UX flow still works.
      await new Promise((resolve) => setTimeout(resolve, 600));

      setStatus('sent');
      setToastOpen(true);
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      {/* Toast notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed right-4 top-24 z-[100] w-[calc(100%-2rem)] max-w-sm transition-all duration-300 sm:right-6 ${
          toastOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-start gap-3 rounded-xl border border-sage-400/30 bg-forest-800 p-4 text-ivory shadow-2xl shadow-forest-900/30">
          <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-sage-400" />
          <div className="flex-1">
            <p className="text-sm font-semibold">Thanks for contacting us!</p>
            <p className="mt-0.5 text-sm text-ivory/70">We’ll get back to you shortly.</p>
          </div>
          <button
            type="button"
            onClick={() => setToastOpen(false)}
            aria-label="Close notification"
            className="shrink-0 text-ivory/50 transition-colors hover:text-ivory"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <section className="grain relative flex min-h-[78vh] items-end overflow-hidden bg-forest-900 md:items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/75 to-forest-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-forest-900/20" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 px-6 pb-16 pt-36 md:pb-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-sage-400">
              <span className="h-px w-10 bg-sage-400" /> Contact Terra
            </p>
            <MaskedLines
              lines={['Let us build', 'what lasts.']}
              className="max-w-5xl text-5xl font-bold leading-tight tracking-tight text-ivory md:text-7xl lg:text-8xl"
              startDelay={150}
            />
            <Reveal delay={350}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
                Energy projects, automation programmes, agriculture partnerships — every meaningful change starts with a conversation.
              </p>
              <a
                href="#enquiry"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-sage-400 px-6 py-3.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-ivory"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </Reveal>
          </div>
          <Reveal delay={500} className="hidden lg:col-span-4 lg:block">
            <div className="ml-auto max-w-xs border-l border-sage-400/50 py-3 pl-6 text-ivory">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-400">A good place to begin</span>
              <p className="mt-4 font-display text-2xl leading-snug">Tell us the challenge. We’ll help shape what comes next.</p>
              <p className="mt-6 text-sm text-ivory/60">Coimbatore, Tamil Nadu · Working across India</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <Reveal>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">Let’s talk</p>
              <h2 className="max-w-md font-display text-4xl leading-[1.08] text-forest-900 md:text-5xl">
                Good work starts with a good conversation.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
                Share what you’re working on. We’ll connect you with the right people and explore the next steps together.
              </p>
            </Reveal>

            <ClipReveal className="mt-10 overflow-hidden rounded-2xl bg-forest-800 p-7 text-ivory shadow-xl shadow-forest-900/10 sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-400">Reach our team</span>
              <ul className="mt-7 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ivory/10 text-sage-400">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ivory/50">Visit</span>
                    <span className="mt-1 block text-sm leading-relaxed">Terra Ecopreneurs<br />Coimbatore, Tamil Nadu, India</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ivory/10 text-sage-400">
                    <Mail size={18} />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ivory/50">Email</span>
                    <a href="mailto:hello@terraeco.in" className="mt-1 block text-sm transition-colors hover:text-sage-300">hello@terraeco.in</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ivory/10 text-sage-400">
                    <Phone size={18} />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ivory/50">Call</span>
                    <span className="mt-1 block text-sm">+91 (0) 422 000 0000</span>
                  </div>
                </li>
              </ul>
            </ClipReveal>

            <Reveal delay={150} className="mt-6 rounded-2xl border border-forest-800/10 bg-linen p-7 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-600">We can help with</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Energy & audits', 'Automation', 'Agriculture', 'Partnerships'].map((pathway) => (
                  <span key={pathway} className="rounded-full border border-forest-800/15 px-3.5 py-2 text-xs font-medium text-forest-800">
                    {pathway}
                  </span>
                ))}
              </div>
            </Reveal>
          </aside>

          <div className="lg:col-span-8">
            {status === 'sent' ? (
              <Reveal className="flex h-full min-h-[560px] flex-col items-center justify-center rounded-3xl bg-forest-800 p-10 text-center text-ivory shadow-2xl shadow-forest-900/10 sm:p-16">
                <CheckCircle2 size={48} className="text-sage-400" />
                <h2 className="mt-6 font-display text-3xl">Thank you — message received.</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/70">
                  Our team will review your enquiry and respond within two working days.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-8 rounded-sm border border-ivory/30 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-ivory/10">
                  Send another message
                </button>
              </Reveal>
            ) : (
              <Reveal className="rounded-3xl border border-forest-800/5 bg-white p-7 shadow-[0_30px_90px_-45px_rgba(27,54,42,0.28)] sm:p-10 lg:p-12">
                <div className="mb-9 flex flex-col justify-between gap-4 border-b border-forest-800/10 pb-7 sm:flex-row sm:items-end">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-600">Project enquiry</span>
                    <h2 className="mt-2 font-display text-3xl text-forest-900 sm:text-4xl">What can we help you build?</h2>
                  </div>
                  <span className="text-xs text-charcoal/55">* Required fields</span>
                </div>
                <form onSubmit={submit} noValidate className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name *" error={errors.name}>
                      <input
                        value={form.name}
                        onChange={set('name')}
                        className={inputCls(!!errors.name)}
                        placeholder="Your full name"
                        autoComplete="name"
                      />
                    </Field>
                    <Field label="Email *" error={errors.email}>
                      <input
                        value={form.email}
                        onChange={set('email')}
                        type="email"
                        className={inputCls(!!errors.email)}
                        placeholder="you@company.com"
                        autoComplete="email"
                      />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input value={form.phone} onChange={set('phone')} className={inputCls(!!errors.phone)} placeholder="+91 …" autoComplete="tel" />
                    </Field>
                    <Field label="Organization">
                      <input value={form.organization} onChange={set('organization')} className={inputCls(false)} placeholder="Company / institution" autoComplete="organization" />
                    </Field>
                  </div>
                  <Field label="Enquiry type">
                    <select value={form.type} onChange={set('type')} className={inputCls(false)}>
                      {enquiryTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message *" error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={set('message')}
                      rows={5}
                      className={`${inputCls(!!errors.message)} resize-y`}
                      placeholder="Tell us briefly about your project or partnership idea."
                    />
                  </Field>
                  {status === 'error' && (
                    <p className="rounded-lg bg-clay/10 px-4 py-3 text-sm text-clay">
                      Something went wrong sending your message. Please try again or email us directly.
                    </p>
                  )}
                  <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-3 rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold text-ivory transition-all hover:bg-forest-700 hover:shadow-lg hover:shadow-forest-900/15 disabled:cursor-not-allowed disabled:opacity-60">
                    {status === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowUpRight size={16} />
                  </button>
                </form>
              </Reveal>
            )}
          </div>

        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-900 py-20 text-ivory md:py-28">
        <div aria-hidden="true" className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-sage-400/10" />
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-sage-400/10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sage-400">
                <span className="h-px w-8 bg-sage-400" /> FAQ
              </p>
              <h2 className="font-display text-4xl leading-[1.08] md:text-5xl">
                Before we get started.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/65">
                A few useful details about working with Terra. Still have a question? We’re only a message away.
              </p>
              <a href="mailto:hello@terraeco.in" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sage-400 transition-colors hover:text-ivory">
                Ask us directly <ArrowUpRight size={16} />
              </a>
              <div className="mt-12 hidden items-end gap-4 border-t border-ivory/15 pt-6 sm:flex">
                <span className="font-display text-6xl leading-none text-sage-400">05</span>
                <span className="max-w-[120px] pb-1 text-xs uppercase leading-relaxed tracking-widest text-ivory/50">answers to help you get moving</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {[
                  {
                    question: 'How quickly will Terra respond to my enquiry?',
                    answer: 'Our team reviews new enquiries within two working days and will direct your message to the right specialist.',
                  },
                  {
                    question: 'What types of projects does Terra support?',
                    answer: 'We support energy efficiency, clean energy, industrial automation, IBMS, digital solutions, prefabricated structures, and sustainable agriculture programmes.',
                  },
                  {
                    question: 'Can you help with a project outside Coimbatore?',
                    answer: 'Yes. We work with organisations across India and for suitable engagements, with delivery partners in other regions.',
                  },
                  {
                    question: 'Do you offer project and feasibility assessments?',
                    answer: 'Yes. We begin by understanding the site, operational needs, technical constraints, commercial goals, and expected sustainability outcomes.',
                  },
                  {
                    question: 'How do I discuss a partnership or funding opportunity?',
                    answer: 'Select “Partnership” or “Other” in the enquiry form and briefly describe the opportunity. We will connect you with the appropriate Terra team.',
                  },
              ].map((item, index) => (
                <Reveal key={item.question} delay={index * 70}>
                  <details className="group rounded-xl border border-ivory/10 bg-ivory/[0.04] px-5 transition-colors open:bg-ivory/[0.08] sm:px-7">
                    <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left marker:hidden sm:py-6">
                      <span className="w-8 shrink-0 font-heading text-xs font-semibold tracking-widest text-sage-400">0{index + 1}</span>
                      <span className="flex-1 font-display text-lg leading-snug sm:text-xl">{item.question}</span>
                      <ChevronDown
                        size={20}
                        className="shrink-0 text-sage-400 transition-transform duration-300 group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="max-w-2xl pb-6 pl-12 text-sm leading-relaxed text-ivory/65 sm:pl-12">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">Find us</p>
              <h2 className="font-display text-4xl leading-[1.08] text-forest-900 md:text-5xl">Rooted in Coimbatore.</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
                Our home base is in Tamil Nadu, where we work with partners across India to turn ambitious ideas into practical impact.
              </p>
              <div className="mt-9 flex items-start gap-4 border-t border-forest-800/15 pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-800 text-sage-400">
                  <MapPin size={19} />
                </span>
                <div>
                  <p className="font-semibold text-forest-900">Terra Ecopreneurs</p>
                  <p className="mt-1 text-sm text-charcoal/65">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=11.0168&mlon=76.9558#map=12/11.0168/76.9558"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 transition-colors hover:text-forest-600"
              >
                Explore the map <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl border-[8px] border-white bg-white shadow-[0_30px_80px_-40px_rgba(27,54,42,0.35)]">
              <div className="h-[360px] sm:h-[440px] lg:h-[520px]">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=76.8%2C10.9%2C77.1%2C11.2&layer=mapnik&marker=11.0168%2C76.9558"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Terra Ecopreneurs office location"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div>
                  <p className="font-display text-lg text-forest-900">Coimbatore, India</p>
                  <p className="mt-0.5 text-xs text-charcoal/60">11.0168° N · 76.9558° E</p>
                </div>
                <MapPin size={20} className="shrink-0 text-forest-600" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium uppercase tracking-widest text-forest-600">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-clay">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return `w-full rounded-sm border bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:outline-none ${
    hasError ? 'border-clay' : 'border-forest-800/25 focus:border-forest-800'
  }`;
}