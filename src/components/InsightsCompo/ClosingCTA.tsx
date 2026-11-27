// ClosingCTA.tsx — replaces Newsletter + FinalCTA
import { useState, type FormEvent } from "react";

export default function ClosingCTA({ onSubscribe }: { onSubscribe?: (email: string) => Promise<void> | void }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    await onSubscribe?.(email);
    setDone(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#06281f] py-28 text-white">
      <img src="/images/village-solar.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06281f] via-[#06281f]/70 to-[#06281f]/80" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">Bring solar to your village or home</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/solutions" className="rounded-full bg-[#b8f35a] px-6 py-3.5 text-sm font-bold text-[#06281f] hover:bg-white">Explore solar solutions</a>
          <a href="/contact#consultation" className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold hover:bg-white hover:text-[#06281f]">Request a consultation</a>
        </div>
        <form onSubmit={submit} className="mx-auto mt-12 flex max-w-md items-center rounded-full border border-white/30 bg-white/5 p-1 focus-within:border-[#b8f35a]">
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email for new articles" aria-label="Email address"
            className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-white/60"
          />
          <button className="rounded-full bg-[#b8f35a] px-5 py-3 text-sm font-bold text-[#06281f] hover:bg-white">
            {done ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}