import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { enquiryTypes } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

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

  const set = (k: keyof FormState) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

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
      const { getSupabase } = await import('@/lib/supabase');
      const supabase = getSupabase();
      if (supabase) {
        const { error } = await supabase.from('enquiries').insert({
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          organization: form.organization || null,
          enquiry_type: form.type,
          message: form.message,
        });
        if (error) throw error;
      }
      setStatus('sent');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <section className="grain relative flex min-h-[70vh] items-end overflow-hidden bg-forest-900 text-ivory">
        <SceneCanvas variant="contact" className="animate-drift" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
        <div className="shell relative z-10 pb-20 pt-40">
          <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
            <span className="h-px w-10 bg-sage-400" /> Contact
          </p>
          <MaskedLines lines={['Let us build', 'what lasts.']} className="headline-xl max-w-5xl" startDelay={150} />
          <Reveal delay={350}>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-ivory/70">
              Energy projects, automation programmes, agriculture partnerships — every conversation starts with a message.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {status === 'sent' ? (
              <Reveal className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-sm bg-forest-800 p-12 text-center text-ivory">
                <CheckCircle2 size={48} className="text-sage-400" />
                <h2 className="mt-6 font-display text-3xl">Thank you — message received.</h2>
                <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-ivory/70">
                  Our team will review your enquiry and respond within two working days.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-ghost-light mt-8">
                  Send another message
                </button>
              </Reveal>
            ) : (
              <Reveal>
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
                    <p className="rounded-sm bg-clay/10 px-4 py-3 font-body text-sm text-clay">
                      Something went wrong sending your message. Please try again or email us directly.
                    </p>
                  )}
                  <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                    {status === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowUpRight size={16} />
                  </button>
                </form>
              </Reveal>
            )}
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <ClipReveal className="rounded-sm bg-forest-800 p-10 text-ivory">
              <h3 className="label-caps text-sage-400">Reach us</h3>
              <ul className="mt-8 space-y-6 font-body text-sm">
                <li className="flex gap-4">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-sage-400" />
                  <span>Terra Ecopreneurs<br />Coimbatore, Tamil Nadu, India</span>
                </li>
                <li className="flex gap-4">
                  <Mail size={18} className="mt-0.5 shrink-0 text-sage-400" />
                  <a href="mailto:hello@terraeco.in" className="transition-colors hover:text-sage-300">hello@terraeco.in</a>
                </li>
                <li className="flex gap-4">
                  <Phone size={18} className="mt-0.5 shrink-0 text-sage-400" />
                  <span>+91 (0) 422 000 0000</span>
                </li>
              </ul>
            </ClipReveal>
            <ClipReveal delay={150} className="rounded-sm bg-linen p-10">
              <h3 className="label-caps text-forest-600">Enquiry pathways</h3>
              <ul className="mt-6 space-y-4 font-body text-sm leading-relaxed text-charcoal/75">
                <li><strong className="text-forest-800">Industry:</strong> audits, retrofits, automation and IBMS programmes for factories and buildings.</li>
                <li><strong className="text-forest-800">Partners:</strong> institutions, financiers and NGOs working on energy or rural development.</li>
                <li><strong className="text-forest-800">Agriculture:</strong> FPOs and agencies interested in the TRANSFORM programme.</li>
              </ul>
            </ClipReveal>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-caps mb-2 block text-forest-600">{label}</span>
      {children}
      {error && <span className="mt-1.5 block font-body text-xs text-clay">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return `w-full rounded-sm border bg-transparent px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:outline-none ${
    hasError ? 'border-clay' : 'border-forest-800/25 focus:border-forest-800'
  }`;
}
