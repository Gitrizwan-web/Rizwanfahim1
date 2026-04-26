import Button from "../Components/Button";
import Heroexperience from "../Components/Heromodels/Heroexperience";
import { words } from "../constants/index";
import { useGSAP } from "@gsap/react";
import Animatecounter from "../Components/Animated/Animatecounter";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {

  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        heroRef.current.querySelectorAll("h1"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,   // 5 sec bahut slow lagta hai hero ke liye
          ease: "power2.out",
        }
      );
    },
    { scope: heroRef }   // important
  );

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="backgroundimg" />
      </div>

      <div className="hero-layout">
        <header
          ref={heroRef}
          className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5"
        >
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2 "
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed font-medium">
              Hi, I’m Rizwan — a MERN stack developer crafting fast, scalable,
              and beautiful web apps.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <Heroexperience />
          </div>
        </figure>
      </div>

      <Animatecounter />
    </section>
  );
};

export default Hero;