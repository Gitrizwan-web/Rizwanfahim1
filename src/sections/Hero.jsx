import Button from "../Components/Button";
import { words } from "../constants/index";
import { useGSAP } from "@gsap/react";
import Animatecounter from "../Components/Animated/Animatecounter";
import gsap from "gsap";
import { useRef, lazy, Suspense } from "react";

// ✅ lazy load 3D (CRITICAL FIX)
const Heroexperience = lazy(() =>
  import("../Components/Heromodels/Heroexperience")
);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const headings = heroRef.current.querySelectorAll(".hero-anim");

      gsap.from(headings, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: heroRef }
  );

  return (
    <section id="hero" className="relative overflow-hidden">

      {/* ✅ optimized background */}
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.webp"
          loading="lazy"
          alt="background"
        />
      </div>

      <div className="hero-layout">

        <header
          ref={heroRef}
          className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5"
        >
          <div className="flex flex-col gap-7">

            <div className="hero-text">

              <h1 className="hero-anim">
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          loading="lazy" // ✅ FIX
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white/50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1 className="hero-anim">into Real Projects</h1>
              <h1 className="hero-anim">that Deliver Results</h1>

            </div>

            <p className="hero-anim text-sm md:text-base text-white/70 max-w-md leading-relaxed font-medium">
              Hi, I’m Rizwan — a MERN stack developer crafting fast, scalable,
              and beautiful web apps.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12 hero-anim"
              id="button"
              text="See my Work"
            />
          </div>
        </header>

        {/* ✅ lazy load 3D */}
        <figure>
          <div className="hero-3d-layout">
            <Suspense fallback={null}>
              <Heroexperience />
            </Suspense>
          </div>
        </figure>

      </div>

      <Animatecounter />
    </section>
  );
};

export default Hero;
