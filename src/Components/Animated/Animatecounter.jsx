import React, { useState, useEffect, useRef } from "react";
import { counterItems } from "../../constants";
import CountUpLib from "react-countup";
const CountUp = CountUpLib.default || CountUpLib; // ✅ correct

const Animatecounter = () => {
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCount) {
          setStartCount(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [startCount]);

  return (
    <div ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.id}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white font-bold text-5xl mb-2">
              {startCount ? (
                <CountUp
                  start={0}
                  end={item.value}
                  suffix={item.suffix}
                  duration={2}
                  delay={index * 0.2}
                />
              ) : (
                <span>{`0${item.suffix}`}</span>
              )}
            </div>

            <div className="text-white/50 text-lg">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animatecounter;