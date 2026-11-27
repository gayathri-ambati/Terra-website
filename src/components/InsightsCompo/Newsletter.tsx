// Newsletter.tsx
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Sprout } from "lucide-react";
import { Reveal } from "./Common";

interface NewsletterProps {
  onSubscribe?: (email: string) => Promise<void> | void;
}

export default function Newsletter({ onSubscribe }: NewsletterProps) {
  const [email, setEmail] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    await onSubscribe?.(email); // plug in your existing subscribe function
    setDone(true);
  };

  return (
    <section className="px-4 py-10 md:px-6">
      <Reveal className="relative mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#06281f] via-[#0a3a2c] to-[#06281f] p-8 text-white md:p-12 lg:grid-cols-[1fr_1.1fr_0.7fr]">
        <motion.div
          className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-green-400/30 blur-3xl"
          animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative">
          <p className="flex items-center gap-3 font-semibold text-[#b8f35a]">
            Stay Updated <span className="h-px w-20 bg-[#b8f35a]/60" />
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Get the Latest Insights Delivered to Your Inbox
          </h2>
          <p className="mt-3 max-w-sm text-white/80">
            Subscribe to our newsletter for expert tips, industry updates and the
            latest innovations in solar energy.
          </p>
        </div>

        <form onSubmit={submit} className="relative">
          <motion.div className="group flex items-center rounded-full border border-white/30 bg-white/5 p-1 transition focus-within:border-[#b8f35a] focus-within:shadow-[0_0_30px_rgba(184,243,90,0.35)]">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/60"
            />
            <button className="flex items-center gap-2 rounded-full bg-[#b8f35a] px-6 py-3 text-sm font-bold text-[#06281f] transition hover:bg-white active:scale-95">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={String(done)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2"
                >
                  {done ? (
                    <>
                      Subscribed <Check size={16} />
                    </>
                  ) : (
                    <>
                      Subscribe <ArrowRight size={16} />
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.div>
          <p className="mt-3 pl-4 text-xs text-white/50">
            No spam. Unsubscribe anytime.
          </p>
        </form>

        <div className="relative hidden h-48 lg:block">
          <motion.div
            className="absolute bottom-0 right-4 text-[#b8f35a] drop-shadow-[0_0_25px_rgba(184,243,90,0.8)]"
            animate={{ y: [0, -14, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sprout size={150} strokeWidth={1.2} />
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}