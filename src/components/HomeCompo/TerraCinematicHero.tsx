
// import React, {
//   useEffect,
//   useLayoutEffect,
//   useRef,
//   useState,
// } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./TerraCinematicHero.css";

// gsap.registerPlugin(ScrollTrigger);

// const frames = [
//   "/images/terra/terra_keyframe_01_0.0s.jpg",
//   "/images/terra/terra_keyframe_02_1.4s.jpg",
//   "/images/terra/terra_keyframe_03_2.4s.jpg",
//   "/images/terra/terra_keyframe_04_3.5s.jpg",
//   "/images/terra/terra_keyframe_05_4.6s.jpg",
//   "/images/terra/terra_keyframe_06_5.8s.jpg",
//   "/images/terra/terra_keyframe_07_7.5s.jpg",
// ];

// const chapters = [
//   {
//     number: "01",
//     eyebrow: "A NEW PERSPECTIVE",
//     title: "Innovation begins",
//     highlight: "with nature.",
//     description:
//       "We bring technology, agriculture and sustainability together to create meaningful opportunities for a better future.",
//   },
//   {
//     number: "02",
//     eyebrow: "THE BIGGER PICTURE",
//     title: "Looking beyond",
//     highlight: "the surface.",
//     description:
//       "Real progress starts by understanding the systems, resources and possibilities that shape our world.",
//   },
//   {
//     number: "03",
//     eyebrow: "SMART TECHNOLOGY",
//     title: "Intelligence",
//     highlight: "in every layer.",
//     description:
//       "We develop smart, easy-to-use technology designed to help farmers make better decisions and improve profitability.",
//   },
//   {
//     number: "04",
//     eyebrow: "OUR AGRICULTURAL CORE",
//     title: "Rooted in",
//     highlight: "possibility.",
//     description:
//       "Supporting agriculture through innovation, responsible resource management and sustainable farming practices.",
//   },
//   {
//     number: "05",
//     eyebrow: "RENEWABLE ENERGY",
//     title: "Powering a",
//     highlight: "greener future.",
//     description:
//       "Exploring the potential of clean energy and smarter infrastructure to support a more sustainable world.",
//   },
//   {
//     number: "06",
//     eyebrow: "INTEGRATED INNOVATION",
//     title: "Every element",
//     highlight: "works together.",
//     description:
//       "Our approach connects technology, people and natural resources into a more resilient ecosystem.",
//   },
//   {
//     number: "07",
//     eyebrow: "THE BIGGER VISION",
//     title: "A better future",
//     highlight: "starts together.",
//     description:
//       "We believe lasting change comes from collaboration, innovation and a shared commitment to sustainability.",
//   },
// ];

// const drawCover = (
//   ctx: CanvasRenderingContext2D,
//   image: HTMLImageElement,
//   width: number,
//   height: number,
//   alpha: number
// ) => {
//   const scale = Math.max(
//     width / image.naturalWidth,
//     height / image.naturalHeight
//   );

//   const w = image.naturalWidth * scale;
//   const h = image.naturalHeight * scale;

//   ctx.globalAlpha = alpha;
//   ctx.drawImage(image, (width - w) / 2, (height - h) / 2, w, h);
// };

// const TerraCinematicHero: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const progressRef = useRef(0);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const [activeChapter, setActiveChapter] = useState(0);
//   const [loaded, setLoaded] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     let cancelled = false;

//     const loadImages = async () => {
//       try {
//         const images = await Promise.all(
//           frames.map(
//             (src) =>
//               new Promise<HTMLImageElement>((resolve, reject) => {
//                 const image = new Image();
//                 image.src = src;
//                 image.onload = () => resolve(image);
//                 image.onerror = () =>
//                   reject(new Error(`Unable to load ${src}`));
//               })
//           )
//         );

//         if (!cancelled) {
//           imagesRef.current = images;
//           setLoaded(true);
//         }
//       } catch (error) {
//         console.error("Terra keyframe loading failed:", error);
//       }
//     };

//     loadImages();

//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   useLayoutEffect(() => {
//     if (!loaded || !sectionRef.current || !canvasRef.current) return;

//     const section = sectionRef.current;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     if (!ctx) return;

//     const images = imagesRef.current;
//     let currentWidth = 0;
//     let currentHeight = 0;

//     const resizeCanvas = () => {
//       const rect = canvas.getBoundingClientRect();
//       const dpr = Math.min(window.devicePixelRatio || 1, 2);

//       currentWidth = rect.width;
//       currentHeight = rect.height;

//       canvas.width = Math.round(rect.width * dpr);
//       canvas.height = Math.round(rect.height * dpr);

//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       render(progressRef.current);
//     };

//     const render = (value: number) => {
//       if (!images.length) return;

//       const framePosition = Math.max(
//         0,
//         Math.min(value, 1)
//       ) * (images.length - 1);

//       const firstIndex = Math.floor(framePosition);
//       const secondIndex = Math.min(
//         firstIndex + 1,
//         images.length - 1
//       );

//       const blend = framePosition - firstIndex;

//       ctx.clearRect(0, 0, currentWidth, currentHeight);

//       drawCover(
//         ctx,
//         images[firstIndex],
//         currentWidth,
//         currentHeight,
//         1
//       );

//       if (secondIndex !== firstIndex && blend > 0) {
//         drawCover(
//           ctx,
//           images[secondIndex],
//           currentWidth,
//           currentHeight,
//           blend
//         );
//       }
//     };

//     resizeCanvas();

//     const resizeObserver = new ResizeObserver(resizeCanvas);
//     resizeObserver.observe(canvas);

//     const mm = gsap.matchMedia();

//     mm.add(
//       {
//         desktop: "(min-width: 768px)",
//         mobile: "(max-width: 767px)",
//       },
//       (context) => {
//         const isMobile = context.conditions?.mobile;

//         gsap.to(progressRef, {
//           current: 1,
//           ease: "none",
//           onUpdate: () => {
//             render(progressRef.current);

//             const value = progressRef.current;
//             const chapter = Math.min(
//               6,
//               Math.floor(value * 7)
//             );

//             setActiveChapter(chapter);
//             setProgress(Math.round(value * 100));
//           },
//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: isMobile ? "+=300%" : "+=450%",
//             scrub: 0.8,
//           },
//         });
//       }
//     );

//     return () => {
//       mm.revert();
//       resizeObserver.disconnect();
//     };
//   }, [loaded]);

//   const chapter = chapters[activeChapter];

//   return (
//     <section ref={sectionRef} className="terra-scroll-section">
//       <div className="terra-sticky-stage">

//         {/* Cinematic Background */}
//         <div className="terra-background">
//           <div className="terra-background-glow" />
//           <div className="terra-grid-overlay" />
//         </div>

//         {/* Machine Canvas */}
//         <div className="terra-machine-container">
//           <canvas
//             ref={canvasRef}
//             className="terra-machine-canvas"
//           />

//           {!loaded && (
//             <div className="terra-loading">
//               <span className="terra-loader" />
//               <p>Preparing the future...</p>
//             </div>
//           )}
//         </div>

//         {/* Top Navigation / Branding */}
//         <div className="terra-topbar">
//           <div className="terra-brand">
//             <span className="terra-brand-symbol">T.</span>
//             <span>TERRA ECOPRENEURS</span>
//           </div>

//           <div className="terra-top-label">
//             INNOVATION × NATURE
//           </div>
//         </div>

//         {/* Left Text Content */}
//         <div className="terra-content" key={chapter.number}>
//           <div className="terra-eyebrow">
//             <span className="terra-eyebrow-line" />
//             {chapter.eyebrow}
//           </div>

//           <h1>
//             {chapter.title}
//             <br />
//             <span>{chapter.highlight}</span>
//           </h1>

//           <p>{chapter.description}</p>

//           <div className="terra-chapter-number">
//             <span>{chapter.number}</span>
//             <span className="terra-number-divider" />
//             <span>07 CHAPTERS</span>
//           </div>
//         </div>

//         {/* Bottom Scroll Indicator */}
//         <div className="terra-bottom">
//           <div className="terra-scroll-hint">
//             <span className="terra-scroll-icon">
//               ↓
//             </span>
//             <span>SCROLL TO EXPLORE</span>
//           </div>

//           <div className="terra-progress">
//             <span>0{activeChapter + 1}</span>

//             <div className="terra-progress-track">
//               <div
//                 className="terra-progress-fill"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>

//             <span>07</span>
//           </div>

//           <span className="terra-progress-percentage">
//             {progress}%
//           </span>
//         </div>

//         {/* Cinematic Vignette */}
//         <div className="terra-vignette" />
//       </div>
//     </section>
//   );
// };

// export default TerraCinematicHero;




// import React, {
//   useEffect,
//   useLayoutEffect,
//   useRef,
//   useState,
// } from "react";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./TerraCinematicHero.css";

// gsap.registerPlugin(ScrollTrigger);

// const frames = [
//   "/images/terra/terra_keyframe_01_0.0s.jpg",
//   "/images/terra/terra_keyframe_02_1.4s.jpg",
//   "/images/terra/terra_keyframe_03_2.4s.jpg",
//   "/images/terra/terra_keyframe_04_3.5s.jpg",
//   "/images/terra/terra_keyframe_05_4.6s.jpg",
//   "/images/terra/terra_keyframe_06_5.8s.jpg",
//   "/images/terra/terra_keyframe_07_7.5s.jpg",
// ];

// const chapters = [
//   {
//     number: "01",
//     eyebrow: "A NEW PERSPECTIVE",
//     title: "Innovation begins",
//     highlight: "with nature.",
//     description:
//       "We bring technology, agriculture and sustainability together to create meaningful opportunities for a better future.",
//   },
//   {
//     number: "02",
//     eyebrow: "THE BIGGER PICTURE",
//     title: "Looking beyond",
//     highlight: "the surface.",
//     description:
//       "Real progress starts by understanding the systems, resources and possibilities that shape our world.",
//   },
//   {
//     number: "03",
//     eyebrow: "SMART TECHNOLOGY",
//     title: "Intelligence",
//     highlight: "in every layer.",
//     description:
//       "We develop smart, easy-to-use technology designed to help farmers make better decisions and improve profitability.",
//   },
//   {
//     number: "04",
//     eyebrow: "OUR AGRICULTURAL CORE",
//     title: "Rooted in",
//     highlight: "possibility.",
//     description:
//       "Supporting agriculture through innovation, responsible resource management and sustainable farming practices.",
//   },
//   {
//     number: "05",
//     eyebrow: "RENEWABLE ENERGY",
//     title: "Powering a",
//     highlight: "greener future.",
//     description:
//       "Exploring the potential of clean energy and smarter infrastructure to support a more sustainable world.",
//   },
//   {
//     number: "06",
//     eyebrow: "INTEGRATED INNOVATION",
//     title: "Every element",
//     highlight: "works together.",
//     description:
//       "Our approach connects technology, people and natural resources into a more resilient ecosystem.",
//   },
//   {
//     number: "07",
//     eyebrow: "THE BIGGER VISION",
//     title: "A better future",
//     highlight: "starts together.",
//     description:
//       "We believe lasting change comes from collaboration, innovation and a shared commitment to sustainability.",
//   },
// ];

// const TerraCinematicHero: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const progressFillRef = useRef<HTMLDivElement>(null);
//   const progressTextRef = useRef<HTMLSpanElement>(null);

//   const progressRef = useRef({ value: 0 });
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const lastChapterRef = useRef(-1);

//   const [activeChapter, setActiveChapter] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   // Load and decode all frames
//   useEffect(() => {
//     let cancelled = false;

//     const loadImages = async () => {
//       try {
//         const images = await Promise.all(
//           frames.map(async (src) => {
//             const image = new Image();

//             image.src = src;

//             if (image.decode) {
//               await image.decode();
//             } else {
//               await new Promise<void>((resolve, reject) => {
//                 image.onload = () => resolve();
//                 image.onerror = () =>
//                   reject(new Error(`Failed to load ${src}`));
//               });
//             }

//             return image;
//           })
//         );

//         if (!cancelled) {
//           imagesRef.current = images;
//           setLoaded(true);
//         }
//       } catch (error) {
//         console.error("Terra image loading error:", error);
//       }
//     };

//     loadImages();

//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   // Canvas and GSAP animation
//   useLayoutEffect(() => {
//     if (!loaded) return;

//     const section = sectionRef.current;
//     const canvas = canvasRef.current;

//     if (!section || !canvas) return;

//     const ctx = canvas.getContext("2d", {
//       alpha: false,
//     });

//     if (!ctx) return;

//     const images = imagesRef.current;

//     let width = 0;
//     let height = 0;

//     let drawPositions: {
//       x: number;
//       y: number;
//       w: number;
//       h: number;
//     }[] = [];

//     const calculatePositions = () => {
//       drawPositions = images.map((image) => {
//         const scale = Math.max(
//           width / image.naturalWidth,
//           height / image.naturalHeight
//         );

//         const w = image.naturalWidth * scale;
//         const h = image.naturalHeight * scale;

//         return {
//           x: (width - w) / 2,
//           y: (height - h) / 2,
//           w,
//           h,
//         };
//       });
//     };

//     // Optimized canvas resize
//     const resizeCanvas = () => {
//       const rect = canvas.getBoundingClientRect();

//       width = rect.width;
//       height = rect.height;

//       const isMobile = window.innerWidth < 768;
//       const dpr = Math.min(
//         window.devicePixelRatio || 1,
//         isMobile ? 1 : 1.5
//       );

//       canvas.width = Math.round(width * dpr);
//       canvas.height = Math.round(height * dpr);

//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       ctx.imageSmoothingEnabled = true;
//       ctx.imageSmoothingQuality = "high";

//       calculatePositions();
//       render(progressRef.current.value);
//     };

//     // Draw frames based on scroll progress
//     const render = (value: number) => {
//       const position =
//         Math.max(0, Math.min(1, value)) *
//         (images.length - 1);

//       const firstIndex = Math.floor(position);
//       const secondIndex = Math.min(
//         firstIndex + 1,
//         images.length - 1
//       );

//       const blend = position - firstIndex;

//       const first = images[firstIndex];
//       const second = images[secondIndex];

//       const firstPos = drawPositions[firstIndex];
//       const secondPos = drawPositions[secondIndex];

//       if (!first || !firstPos) return;

//       ctx.globalAlpha = 1;
//       ctx.fillStyle = "#07140f";
//       ctx.fillRect(0, 0, width, height);

//       ctx.drawImage(
//         first,
//         firstPos.x,
//         firstPos.y,
//         firstPos.w,
//         firstPos.h
//       );

//       if (secondIndex !== firstIndex && second && secondPos) {
//         ctx.globalAlpha = blend;

//         ctx.drawImage(
//           second,
//           secondPos.x,
//           secondPos.y,
//           secondPos.w,
//           secondPos.h
//         );

//         ctx.globalAlpha = 1;
//       }
//     };

//     resizeCanvas();

//     const resizeObserver = new ResizeObserver(() => {
//       resizeCanvas();
//     });

//     resizeObserver.observe(canvas);

//     const mm = gsap.matchMedia();

//     mm.add(
//       {
//         desktop: "(min-width: 768px)",
//         mobile: "(max-width: 767px)",
//       },
//       (context) => {
//         const isMobile = context.conditions?.mobile;

//         const animation = gsap.to(progressRef.current, {
//           value: 1,
//           ease: "none",

//           onUpdate: () => {
//             const value = progressRef.current.value;

//             // Draw without triggering React rendering
//             render(value);

//             // Update progress indicator directly
//             if (progressFillRef.current) {
//               progressFillRef.current.style.transform =
//                 `scaleX(${value})`;
//             }

//             if (progressTextRef.current) {
//               progressTextRef.current.textContent =
//                 `${Math.round(value * 100)}%`;
//             }

//             // React updates only when chapter changes
//             const nextChapter = Math.min(
//               6,
//               Math.floor(value * 7)
//             );

//             if (lastChapterRef.current !== nextChapter) {
//               lastChapterRef.current = nextChapter;
//               setActiveChapter(nextChapter);
//             }
//           },

//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: isMobile ? "+=300%" : "+=450%",
//             scrub: 1.2,
//             invalidateOnRefresh: true,
//             fastScrollEnd: false,
//           },
//         });

//         return () => {
//           animation.scrollTrigger?.kill();
//           animation.kill();
//         };
//       }
//     );

//     return () => {
//       mm.revert();
//       resizeObserver.disconnect();
//     };
//   }, [loaded]);

//   const chapter = chapters[activeChapter];

//   return (
//     <section
//       ref={sectionRef}
//       className="terra-scroll-section"
//     >
//       <div className="terra-sticky-stage">

//         <div className="terra-background">
//           <div className="terra-background-glow" />
//           <div className="terra-grid-overlay" />
//         </div>

//         <div className="terra-machine-container">
//           <canvas
//             ref={canvasRef}
//             className="terra-machine-canvas"
//           />

//           {!loaded && (
//             <div className="terra-loading">
//               <span className="terra-loader" />
//               <p>Preparing the future...</p>
//             </div>
//           )}
//         </div>

//         <div className="terra-topbar">
//           <div className="terra-brand">
//             <span className="terra-brand-symbol">T.</span>
//             <span>TERRA ECOPRENEURS</span>
//           </div>

//           <div className="terra-top-label">
//             INNOVATION × NATURE
//           </div>
//         </div>

//         <div
//           className="terra-content"
//           key={chapter.number}
//         >
//           <div className="terra-eyebrow">
//             <span className="terra-eyebrow-line" />
//             {chapter.eyebrow}
//           </div>

//           <h1>
//             {chapter.title}
//             <br />
//             <span>{chapter.highlight}</span>
//           </h1>

//           <p>{chapter.description}</p>

//           <div className="terra-chapter-number">
//             <span>{chapter.number}</span>
//             <span className="terra-number-divider" />
//             <span>07 CHAPTERS</span>
//           </div>
//         </div>

//         <div className="terra-bottom">
//           <div className="terra-scroll-hint">
//             <span className="terra-scroll-icon">↓</span>
//             <span>SCROLL TO EXPLORE</span>
//           </div>

//           <div className="terra-progress">
//             <span>0{activeChapter + 1}</span>

//             <div className="terra-progress-track">
//               <div
//                 ref={progressFillRef}
//                 className="terra-progress-fill"
//               />
//             </div>

//             <span>07</span>
//           </div>

//           <span
//             ref={progressTextRef}
//             className="terra-progress-percentage"
//           >
//             0%
//           </span>
//         </div>

//         <div className="terra-vignette" />
//       </div>
//     </section>
//   );
// };

// export default TerraCinematicHero;





import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TerraCinematicHero.css";

gsap.registerPlugin(ScrollTrigger);

// Load all 180 image frames automatically
const frames = Array.from({ length: 180 }, (_, index) =>
  `/images/terra/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`
);

const chapters = [
  {
    number: "01",
    eyebrow: "A NEW PERSPECTIVE",
    title: "Innovation begins",
    highlight: "with nature.",
    description:
      "We bring technology, agriculture and sustainability together to create meaningful opportunities for a better future.",
  },
  {
    number: "02",
    eyebrow: "THE BIGGER PICTURE",
    title: "Looking beyond",
    highlight: "the surface.",
    description:
      "Real progress starts by understanding the systems, resources and possibilities that shape our world.",
  },
  {
    number: "03",
    eyebrow: "SMART TECHNOLOGY",
    title: "Intelligence",
    highlight: "in every layer.",
    description:
      "We develop smart, easy-to-use technology designed to help farmers make better decisions and improve profitability.",
  },
  {
    number: "04",
    eyebrow: "OUR AGRICULTURAL CORE",
    title: "Rooted in",
    highlight: "possibility.",
    description:
      "Supporting agriculture through innovation, responsible resource management and sustainable farming practices.",
  },
  {
    number: "05",
    eyebrow: "RENEWABLE ENERGY",
    title: "Powering a",
    highlight: "greener future.",
    description:
      "Exploring the potential of clean energy and smarter infrastructure to support a more sustainable world.",
  },
  {
    number: "06",
    eyebrow: "INTEGRATED INNOVATION",
    title: "Every element",
    highlight: "works together.",
    description:
      "Our approach connects technology, people and natural resources into a more resilient ecosystem.",
  },
  {
    number: "07",
    eyebrow: "THE BIGGER VISION",
    title: "A better future",
    highlight: "starts together.",
    description:
      "We believe lasting change comes from collaboration, innovation and a shared commitment to sustainability.",
  },
];

const TerraCinematicHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  const progressRef = useRef({ value: 0 });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastChapterRef = useRef(-1);

  const [activeChapter, setActiveChapter] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Load and decode all 180 frames
  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      try {
        const images = await Promise.all(
          frames.map(async (src) => {
            const image = new Image();

            image.src = src;

            if (image.decode) {
              await image.decode();
            } else {
              await new Promise<void>((resolve, reject) => {
                image.onload = () => resolve();
                image.onerror = () =>
                  reject(new Error(`Failed to load ${src}`));
              });
            }

            return image;
          })
        );

        if (!cancelled) {
          imagesRef.current = images;
          setLoaded(true);
        }
      } catch (error) {
        console.error("Terra image loading error:", error);
      }
    };

    loadImages();

    return () => {
      cancelled = true;
    };
  }, []);

  // Canvas and GSAP scroll animation
  useLayoutEffect(() => {
    if (!loaded) return;

    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: false,
    });

    if (!ctx) return;

    const images = imagesRef.current;

    let width = 0;
    let height = 0;

    let drawPositions: {
      x: number;
      y: number;
      w: number;
      h: number;
    }[] = [];

    const calculatePositions = () => {
      drawPositions = images.map((image) => {
        const scale = Math.max(
          width / image.naturalWidth,
          height / image.naturalHeight
        );

        const w = image.naturalWidth * scale;
        const h = image.naturalHeight * scale;

        return {
          x: (width - w) / 2,
          y: (height - h) / 2,
          w,
          h,
        };
      });
    };

    // Draw frames based on scroll progress
    const render = (value: number) => {
      if (!images.length) return;

      const position =
        Math.max(0, Math.min(1, value)) *
        (images.length - 1);

      const firstIndex = Math.floor(position);

      const secondIndex = Math.min(
        firstIndex + 1,
        images.length - 1
      );

      const blend = position - firstIndex;

      const first = images[firstIndex];
      const second = images[secondIndex];

      const firstPos = drawPositions[firstIndex];
      const secondPos = drawPositions[secondIndex];

      if (!first || !firstPos) return;

      ctx.globalAlpha = 1;
      ctx.fillStyle = "#07140f";
      ctx.fillRect(0, 0, width, height);

      ctx.drawImage(
        first,
        firstPos.x,
        firstPos.y,
        firstPos.w,
        firstPos.h
      );

      // Smooth transition between frames
      if (secondIndex !== firstIndex && second && secondPos) {
        ctx.globalAlpha = blend;

        ctx.drawImage(
          second,
          secondPos.x,
          secondPos.y,
          secondPos.w,
          secondPos.h
        );

        ctx.globalAlpha = 1;
      }
    };

    // Optimized canvas resize
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const isMobile = window.innerWidth < 768;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        isMobile ? 1 : 1.5
      );

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      calculatePositions();
      render(progressRef.current.value);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    resizeObserver.observe(canvas);

    // Responsive GSAP animation
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
      },
      (context) => {
        const isMobile = context.conditions?.mobile;

        const animation = gsap.to(progressRef.current, {
          value: 1,
          ease: "none",

          onUpdate: () => {
            const value = progressRef.current.value;

            // Render current frame
            render(value);

            // Update progress bar
            if (progressFillRef.current) {
              progressFillRef.current.style.transform =
                `scaleX(${value})`;
            }

            // Update percentage
            if (progressTextRef.current) {
              progressTextRef.current.textContent =
                `${Math.round(value * 100)}%`;
            }

            // Update chapter only when it changes
            const nextChapter = Math.min(
              6,
              Math.floor(value * 7)
            );

            if (lastChapterRef.current !== nextChapter) {
              lastChapterRef.current = nextChapter;
              setActiveChapter(nextChapter);
            }
          },

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: isMobile ? "+=300%" : "+=450%",
            scrub: 1.2,
            invalidateOnRefresh: true,
            fastScrollEnd: false,
          },
        });

        return () => {
          animation.scrollTrigger?.kill();
          animation.kill();
        };
      }
    );

    return () => {
      mm.revert();
      resizeObserver.disconnect();
    };
  }, [loaded]);

  const chapter = chapters[activeChapter];

  return (
    <section
      ref={sectionRef}
      className="terra-scroll-section"
    >
      <div className="terra-sticky-stage">

        {/* Background */}
        <div className="terra-background">
          <div className="terra-background-glow" />
          <div className="terra-grid-overlay" />
        </div>

        {/* Animation Canvas */}
        <div className="terra-machine-container">
          <canvas
            ref={canvasRef}
            className="terra-machine-canvas"
          />

          {!loaded && (
            <div className="terra-loading">
              <span className="terra-loader" />
              <p>Preparing the future...</p>
            </div>
          )}
        </div>

        {/* Top Navigation */}
        <div className="terra-topbar">
          <div className="terra-brand">
            <span className="terra-brand-symbol">T.</span>
            <span>TERRA ECOPRENEURS</span>
          </div>

          <div className="terra-top-label">
            INNOVATION × NATURE
          </div>
        </div>

        {/* Chapter Content */}
        <div
          className="terra-content"
          key={chapter.number}
        >
          <div className="terra-eyebrow">
            <span className="terra-eyebrow-line" />
            {chapter.eyebrow}
          </div>

          <h1>
            {chapter.title}
            <br />
            <span>{chapter.highlight}</span>
          </h1>

          <p>{chapter.description}</p>

          <div className="terra-chapter-number">
            <span>{chapter.number}</span>
            <span className="terra-number-divider" />
            <span>07 CHAPTERS</span>
          </div>
        </div>

        {/* Bottom Progress */}
        <div className="terra-bottom">
          <div className="terra-scroll-hint">
            <span className="terra-scroll-icon">↓</span>
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="terra-progress">
            <span>
              {String(activeChapter + 1).padStart(2, "0")}
            </span>

            <div className="terra-progress-track">
              <div
                ref={progressFillRef}
                className="terra-progress-fill"
              />
            </div>

            <span>07</span>
          </div>

          <span
            ref={progressTextRef}
            className="terra-progress-percentage"
          >
            0%
          </span>
        </div>

        {/* Vignette */}
        <div className="terra-vignette" />

      </div>
    </section>
  );
};

export default TerraCinematicHero;
