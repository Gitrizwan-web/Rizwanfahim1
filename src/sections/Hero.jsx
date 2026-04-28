import Button from "../Components/Button";
import { words } from "../constants/index";
import { useGSAP } from "@gsap/react";
import Animatecounter from "../Components/Animated/Animatecounter";
import gsap from "gsap";
import { useRef, lazy, Suspense } from "react";

const Heroexperience = lazy(() =>
  import("../Components/Heromodels/Heroexperience")
);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      const elements = heroRef.current.querySelectorAll(".hero-anim");

      gsap.from(elements, {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { scope: heroRef }
  );

  return (
    <section id="hero" className="relative overflow-hidden">

      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.webp" loading="lazy" alt="bg" />
      </div>

      <div className="hero-layout">

        <header ref={heroRef} className="flex flex-col md:px-20 px-5">

          <div className="hero-text">

            <h1 className="hero-anim">
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                    <span key={word.text} className="flex items-center gap-2">
                      <img src={word.imgPath} loading="lazy" alt={word.text} />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1 className="hero-anim">into Real Projects</h1>
            <h1 className="hero-anim">that Deliver Results</h1>

          </div>

          <p className="hero-anim text-white/70 max-w-md">
            MERN stack developer building scalable apps.
          </p>

          <Button className="hero-anim" text="See my Work" />

        </header>

        {/* 🔥 CRITICAL FIX */}
        <figure className="pointer-events-none">
          <Suspense fallback={null}>
            <Heroexperience />
          </Suspense>
        </figure>

      </div>

      <Animatecounter />
    </section>
  );
};

export default Hero;
