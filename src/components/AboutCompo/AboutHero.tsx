
// import { MaskedLines } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';

// export function AboutHero() {
//   return (
//     <section className="grain relative flex min-h-[90vh] items-center overflow-hidden bg-forest-900 text-ivory">

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac8e?auto=format&fit=crop&w=2400&q=90')",
//         }}
//       />

//       {/* Background Scene */}
//       <SceneCanvas
//         variant="hero"
//         className="animate-drift"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/80 to-forest-900/50" />

//       {/* Bottom Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-900/30" />

//       {/* Ambient Effects */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />
//         <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-green-400/10 blur-[120px]" />
//       </div>

//       {/* Content */}
//       <div className="shell relative z-10 w-full py-28 sm:py-36 lg:py-40">

//         {/* Eyebrow */}
//         <p className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-sage-400 sm:mb-10 sm:text-sm">
//           <span className="h-px w-12 bg-sage-400" />
//           About Terra
//         </p>

//         {/* Headline */}
//         <div className="max-w-[1200px] overflow-visible pb-5 sm:pb-8">
//           <MaskedLines
//             lines={[
//               'A decade of engineering',
//               'for the real world.',
//             ]}
//             className="headline-xl max-w-5xl !leading-[1.15] tracking-[-0.035em]"
//             startDelay={150}
//           />
//         </div>

//         {/* Supporting Text */}
//         <div className="mt-8 max-w-xl sm:mt-10">
//           <p className="text-sm leading-7 text-ivory/75 sm:text-base sm:leading-8">
//             Building meaningful solutions through engineering,
//             innovation and a commitment to a more sustainable
//             real world.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }





import { useEffect, useState } from 'react';
import { MaskedLines } from '@/components/Reveal';

const slides = [
  {
    eyebrow: 'About Terra',
    title: ['A decade of engineering', 'for the real world.'],
    description:
      'Building meaningful solutions through engineering, innovation and a commitment to a more sustainable real world.',
    label: 'Engineering a better tomorrow',
    image:
      'https://i.pinimg.com/736x/8b/7d/3b/8b7d3bd436132f1b139c298cb003e5c0.jpg',
    imageAlt: 'Electrical power and engineering infrastructure',
    imageLabel: 'Engineering & Innovation',
  },
  {
    eyebrow: 'Clean Energy',
    title: ['Powering progress', 'with clean energy.'],
    description:
      'Creating smarter energy solutions that help businesses reduce their environmental impact and build a cleaner future.',
    label: 'Powering a sustainable future',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90',
    imageAlt: 'Solar panels generating renewable energy',
    imageLabel: 'Renewable Energy',
  },
  {
    eyebrow: 'Sustainable Agriculture',
    title: ['Growing better', 'for generations.'],
    description:
      'Combining technology, engineering and sustainable practices to create meaningful change for agriculture and communities.',
    label: 'Building a greener tomorrow',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90',
    imageAlt: 'Green agricultural fields and sustainable landscape',
    imageLabel: 'Sustainable Agriculture',
  },
];

export function AboutHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatic carousel - changes every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[auto] items-center overflow-hidden bg-[#F8F8F4] text-[#10372D]">

      <div className="shell relative z-10 w-full py-16 sm:py-20 lg:py-24">

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <p className="mb-7 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.24em] text-[#173C35] sm:mb-9 sm:text-sm">
              <span className="h-px w-12 bg-[#173C35]" />
              {currentSlide.eyebrow}
            </p>

            {/* Heading */}
            <div className="min-h-[140px] max-w-[750px] overflow-visible pb-3 sm:min-h-[180px] lg:min-h-[220px]">
              <MaskedLines
                key={`heading-${activeSlide}`}
                lines={currentSlide.title}
                className="max-w-5xl font-serif text-[clamp(3rem,6.5vw,6rem)] font-normal leading-[0.98] tracking-[-0.045em] text-[#10372D]"
                startDelay={100}
              />
            </div>

            {/* Description */}
            <div
              key={`description-${activeSlide}`}
              className="mt-5 max-w-[620px] animate-[fadeIn_0.6s_ease]"
            >
              <p className="text-sm leading-[1.8] text-[#536779] sm:text-base lg:text-lg">
                {currentSlide.description}
              </p>
            </div>

            {/* Bottom Label */}
            <div className="mt-8 flex items-center gap-5 sm:mt-10">
              <span className="h-px w-14 bg-[#173C35]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#173C35] sm:text-xs">
                {currentSlide.label}
              </p>
            </div>

            {/* Mobile Carousel Controls */}
            <div className="mt-8 flex items-center gap-5 lg:hidden">

              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#173C35]/30 text-2xl text-[#173C35] transition-all duration-300 hover:bg-[#10372D] hover:text-white"
              >
                ←
              </button>

              <span className="text-xs tracking-[0.2em] text-[#536779]">
                0{activeSlide + 1} / 0{slides.length}
              </span>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#173C35]/30 text-2xl text-[#173C35] transition-all duration-300 hover:bg-[#10372D] hover:text-white"
              >
                →
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="relative">

            {/* Image Container */}
            <div className="group relative aspect-[4/3.5] w-full overflow-hidden bg-[#E8E9E1] sm:aspect-[4/3] lg:aspect-[4/3.5]">

              {slides.map((slide, index) => (
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.imageAlt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                    activeSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102E25]/60 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p
                  key={`caption-${activeSlide}`}
                  className="animate-[fadeIn_0.6s_ease] text-xs font-medium uppercase tracking-[0.24em] text-white sm:text-sm"
                >
                  {currentSlide.imageLabel}
                </p>
              </div>

              {/* Slide Number */}
              <div className="absolute right-6 top-6 text-sm font-medium tracking-widest text-white">
                0{activeSlide + 1}{' '}
                <span className="text-white/60">/ 0{slides.length}</span>
              </div>

            </div>

            {/* Desktop Carousel Controls */}
            <div className="mt-6 hidden items-center justify-between lg:flex">

              {/* Progress Indicators */}
              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-[3px] transition-all duration-500 ${
                      activeSlide === index
                        ? 'w-12 bg-[#173C35]'
                        : 'w-6 bg-[#173C35]/25 hover:bg-[#173C35]/60'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-3">

                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#173C35]/30 text-2xl text-[#173C35] transition-all duration-300 hover:bg-[#10372D] hover:text-white"
                >
                  ←
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#173C35]/30 text-2xl text-[#173C35] transition-all duration-300 hover:bg-[#10372D] hover:text-white"
                >
                  →
                </button>

              </div>
            </div>

            {/* Mobile Progress Indicators */}
            <div className="mt-5 flex gap-3 lg:hidden">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-[3px] transition-all duration-500 ${
                    activeSlide === index
                      ? 'w-12 bg-[#173C35]'
                      : 'w-6 bg-[#173C35]/25'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
