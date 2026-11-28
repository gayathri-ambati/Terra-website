import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Mail, MapPin, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "November 28, 2026";

  return (
    <main className="relative isolate overflow-hidden bg-[#F8FAEF] text-[#10271E]">
      {/* Decorative leaves */}
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
            Privacy Policy
          </h1>
          <p className="mt-3 font-body text-sm text-[#3D5145]">
            Last updated: <span className="font-semibold text-[#10271E]">{lastUpdated}</span>
          </p>
          <span className="mt-5 block h-[2px] w-16 bg-[#4A9A2B]" />
        </header>

        <article className="mt-10 space-y-8 font-body text-[15px] leading-7 text-[#21372C]">
          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              1. Introduction
            </h2>
            <p className="mt-3">
              Terra Ecopreneurs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website, contact us, or use our services. By using
              our website, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We may collect the following categories of information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#4A9A2B]">
              <li>
                <strong>Personal identification information</strong> — such as your
                name, email address, phone number, and company name when you fill
                out a form, subscribe to updates, or contact us.
              </li>
              <li>
                <strong>Usage data</strong> — such as your IP address, browser
                type, pages visited, time spent on pages, and other diagnostic
                data collected automatically.
              </li>
              <li>
                <strong>Communication data</strong> — the content of emails,
                messages, or inquiries you send to us.
              </li>
              <li>
                <strong>Cookies and similar technologies</strong> — small data
                files stored on your device to improve your browsing experience
                (see Section 6).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#4A9A2B]">
              <li>Respond to inquiries and provide customer support.</li>
              <li>Send you updates, newsletters, and marketing communications (only with your consent).</li>
              <li>Improve our website, products, and services.</li>
              <li>Monitor and analyze usage trends and preferences.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
              <li>Protect against fraudulent or unauthorized activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              4. Legal Basis for Processing
            </h2>
            <p className="mt-3">
              Where applicable, we process your personal data on the basis of
              your consent, to perform a contract with you, to comply with legal
              obligations, or for our legitimate business interests (such as
              improving our services), provided those interests do not override
              your rights.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              5. Sharing Your Information
            </h2>
            <p className="mt-3">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#4A9A2B]">
              <li>
                <strong>Service providers</strong> — trusted third parties who
                help us operate our website, send emails, or provide analytics,
                bound by confidentiality obligations.
              </li>
              <li>
                <strong>Legal authorities</strong> — when required by law, court
                order, or to protect our rights and safety.
              </li>
              <li>
                <strong>Business transfers</strong> — in connection with a
                merger, acquisition, or sale of assets, subject to this policy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              6. Cookies &amp; Tracking Technologies
            </h2>
            <p className="mt-3">
              Our website may use cookies and similar tracking technologies to
              enhance your experience. You can instruct your browser to refuse
              all cookies or to indicate when a cookie is being sent. However,
              some parts of our website may not function properly without
              cookies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              7. Data Retention
            </h2>
            <p className="mt-3">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this policy, comply with legal
              obligations, resolve disputes, and enforce our agreements. When
              data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              8. Data Security
            </h2>
            <p className="mt-3">
              We implement reasonable technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              9. Your Rights
            </h2>
            <p className="mt-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#4A9A2B]">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Object to or restrict our processing of your data.</li>
              <li>Withdraw consent at any time (without affecting prior processing).</li>
              <li>Request data portability.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the
              details below.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              10. Third-Party Links
            </h2>
            <p className="mt-3">
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices of those sites, and we
              encourage you to review their privacy policies before providing
              any personal information.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              11. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we have inadvertently collected such information,
              please contact us, and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              12. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. The
              &quot;Last updated&quot; date at the top of this page reflects the
              most recent revision. We encourage you to review this page
              periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-[#0A3B24]">
              13. Contact Us
            </h2>
            <p className="mt-3">
              If you have questions or concerns about this Privacy Policy or our
              data practices, please reach out:
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