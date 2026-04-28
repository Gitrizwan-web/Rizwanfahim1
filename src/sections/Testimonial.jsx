import React, { memo } from "react";
import GlowCard from "../Components/Heromodels/Glowcard";
import Title from "../Components/Heromodels/Title";
import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        
        <Title
          title="What People Say About Me?"
          sub="⭐ Client Feedback Highlights"
        />

        {/* ✅ grid instead of columns (better performance) */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
          
          {testimonials.map((item) => (
            <MemoCard key={item.id} item={item} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonial;



// ✅ memoized card (prevents re-renders)
const MemoCard = memo(({ item }) => {
  return (
    <GlowCard card={{ review: item.review }}>
      <div className="flex items-center gap-3">
        
        <div>
          <img
            src={item.imgPath}
            alt={item.name}
            loading="lazy" // 🔥 FIX
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>

        <div>
          <p className="font-bold">{item.name}</p>
          <p className="text-white/50">{item.mention}</p>
        </div>

      </div>
    </GlowCard>
  );
});
