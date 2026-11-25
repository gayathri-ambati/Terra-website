import { motion } from "framer-motion";
import { Sprout, ArrowRight, Leaf, Users, TrendingUp } from "lucide-react";

export default function Visionmission() {
  const stats = [
    { icon: Users, value: "10K+", label: "Farmers Empowered" },
    { icon: Leaf, value: "500+", label: "Acres Optimized" },
    { icon: TrendingUp, value: "35%", label: "Avg. Yield Increase" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white py-24 md:py-32">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-gradient-to-r from-green-700 to-green-500" />
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                About Us
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Growing a smarter
              <span className="mt-2 block bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
                future for agriculture.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-600">
              We are a team of innovators, problem-solvers, and partners
              dedicated to helping farmers thrive in a new era of agriculture.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#learn-more"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-green-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-700/25 transition-colors hover:bg-green-800"
            >
              Learn More About Us
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>

            {/* Stats Row */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-gray-200 pt-10">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  >
                    <Icon size={22} className="mb-2 text-green-700" />
                    <div className="text-2xl font-bold text-gray-900 md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Our Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Floating accent badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 rounded-2xl bg-white px-5 py-3 shadow-xl shadow-green-900/10 ring-1 ring-green-100"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
                </span>
                <span className="text-xs font-semibold text-gray-700">
                  Growing Since 2020
                </span>
              </div>
            </motion.div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f1f6ed] via-[#eaf3e2] to-[#dcecd0] p-8 shadow-xl shadow-green-900/5 ring-1 ring-green-100 md:p-12">
              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-green-300/50" />
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-green-300/50" />
              <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-green-300/30" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg shadow-green-700/30"
                  >
                    <Sprout size={26} />
                  </motion.div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
                      Our
                    </span>
                    <span className="ml-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-800">
                      Mission
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-semibold leading-snug text-gray-900 md:text-4xl">
                  Technology that empowers{" "}
                  <span className="italic text-green-800">farmers.</span>
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Our mission is simple: to create smart, easy-to-use
                  technology that makes farming more profitable and sustainable.
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-700">
                  We believe that by empowering farmers, we can build a
                  better, more resilient food future for everyone.
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-green-300/60 pt-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700/10">
                    <Leaf size={16} className="text-green-700" />
                  </div>
                  <p className="font-medium text-green-800">
                    Innovation rooted in agriculture
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}