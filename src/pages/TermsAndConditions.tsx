import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Mail, MapPin, Phone } from "lucide-react";

export default function TermsAndConditions() {
  const lastUpdated = "November 28, 2026";

  return (
    <main className="relative isolate overflow-hidden bg-[#F8FAEF] text-[#10271E]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-10 text-[#8DBD4A]/15"
      >
        <Leaf size={180} strokeWidth={1} className="-rotate-45" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-32 text-[#8DBD4A]/15"
      >
        <Leaf size={220} strokeWidth={1} className="rotate-[135deg]" />
      </div>

      <div className="shell relative z-10 mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#8EBB62] bg-white/70 px-4 py-2 font-body text-sm font-semibold text-[#10271E] transition hover:bg-[#EFF6E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <header className="mt-8">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#3E8C2F]">
            <Leaf size={18} className="text-[#63A934]" />
            Legal
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-[#0A3B24] sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 font-body text-sm text-[#3D5145]">
            Last updated: <span className="font-semibold text-[#10271E]">{lastUpdated}</span>
          </p>
          <span className="mt-5 block h-[2px] w-16 bg-[#4A9A2B]" />
        </header>

        <article className="mt-10 space-y-8 font-body text-[15px] leading-7 text-[#21372C]">
          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              1. Agreement to Terms
            </h2>
            <p className="mt-3">
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your access
              to and use of the Terra Ecopreneurs website and services
              (collectively, the &quot;Services&quot;). By accessing or using
              our Services, you agree to be bound by these Terms. If you do not
              agree, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              2. About Terra Ecopreneurs
            </h2>
            <p className="mt-3">
              Terra Ecopreneurs is a sustainability-focused organization based
              in Coimbatore, Tamil Nadu, India, delivering solutions in
              engineering, clean energy, and smart technologies for a greener
              tomorrow. These Terms apply to all visitors, clients, partners,
              and users of our Services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              3. Eligibility
            </h2>
            <p className="mt-3">
              By using our Services, you represent that you are at least 18 years
              of age and legally capable of entering into binding contracts
              under applicable law. If you are using the Services on behalf of
              an organization, you represent that you have authority to bind
              that organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              4. Use of the Services
            </h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#4A9A2B]">
              <li>Use the Services for any unlawful, harmful, or fraudulent purpose.</li>
              <li>Attempt to gain unauthorized access to our systems or networks.</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
              <li>Copy, reproduce, or redistribute our content without prior written consent.</li>
              <li>Transmit any viruses, malware, or other harmful code.</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              5. Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this website — including text, graphics, logos,
              icons, images, and software — is the property of Terra Ecopreneurs
              or its licensors and is protected by applicable intellectual
              property laws. You may not use, reproduce, modify, or distribute
              any content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              6. User Submissions
            </h2>
            <p className="mt-3">
              If you submit inquiries, feedback, or other content to us, you
              grant us a non-exclusive, royalty-free, worldwide license to use,
              reproduce, and display such content for the purpose of responding
              to you and improving our Services. You are responsible for ensuring
              that any content you submit does not infringe third-party rights.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              7. Third-Party Links and Services
            </h2>
            <p className="mt-3">
              Our website may contain links to third-party websites or services.
              We do not control and are not responsible for the content,
              policies, or practices of those third parties. Your use of
              third-party services is at your own risk and subject to their
              terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              8. Disclaimer of Warranties
            </h2>
            <p className="mt-3">
              The Services are provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, whether express or
              implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose,
              non-infringement, or uninterrupted availability. We do not
              guarantee that the Services will be error-free or secure.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Terra Ecopreneurs and its
              affiliates, directors, employees, and agents shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, including loss of profits, data, or goodwill, arising out
              of or related to your use of the Services, even if advised of the
              possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              10. Indemnification
            </h2>
            <p className="mt-3">
              You agree to indemnify, defend, and hold harmless Terra Ecopreneurs
              and its affiliates from any claims, damages, losses, liabilities,
              and expenses (including reasonable legal fees) arising out of your
              violation of these Terms or your misuse of the Services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              11. Privacy
            </h2>
            <p className="mt-3">
              Your use of the Services is also governed by our{" "}
              <Link
                to="/privacy-policy"
                className="font-semibold text-[#3E8C2F] underline decoration-[#8EBB62] underline-offset-4 hover:text-[#2f6f24]"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              12. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms from time to time. The &quot;Last
              updated&quot; date at the top of this page indicates the most
              recent revision. Your continued use of the Services after any
              changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              13. Governing Law &amp; Jurisdiction
            </h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising out of or relating to
              these Terms or the Services shall be subject to the exclusive
              jurisdiction of the courts located in Coimbatore, Tamil Nadu,
              India.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              14. Termination
            </h2>
            <p className="mt-3">
              We reserve the right to suspend or terminate your access to the
              Services at our sole discretion, without notice, if we believe you
              have violated these Terms or engaged in conduct harmful to us or
              others.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              15. Contact Us
            </h2>
            <p className="mt-3">
              For questions about these Terms &amp; Conditions, please contact
              us:
            </p>
            <div className="mt-4 rounded-2xl border border-[#CADDB4] bg-white/60 p-5 shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
                    <Mail size={18} />
                  </span>
                  <a
                    href="mailto:ashwin@terraeco.in"
                    className="transition-colors hover:text-[#438E2E]"
                  >
                    ashwin@terraeco.in
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
                    <Phone size={18} />
                  </span>
                  <a
                    href="tel:+919110692701"
                    className="transition-colors hover:text-[#438E2E]"
                  >
                    +91 91106 92701
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
                    <MapPin size={18} />
                  </span>
                  <span>Coimbatore, Tamil Nadu, India</span>
                </li>
              </ul>
            </div>
          </section>

          <p className="rounded-xl border border-[#CADDB4] bg-[#EFF6E2] p-4 text-sm text-[#3D5145]">
            <strong className="text-[#0A3B24]">Note:</strong> This template is
            provided for informational purposes and does not constitute legal
            advice. Please consult a qualified legal professional to ensure
            compliance with the laws applicable to your business.
          </p>
        </article>
      </div>
    </main>
  );
}