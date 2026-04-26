import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  // refs for all the cards
  const cardRefs = useRef([]);
  
  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;
    
    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    
    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    
    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;
    
    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
    
    // 3D rotation effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((mouseY) / centerY) * -8;
    const rotateY = ((mouseX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (index) => () => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    card.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.320, 1)";
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    
    setTimeout(() => {
      if (card) {
        card.style.transition = "";
      }
    }, 500);
  };

  // return the card component with the mouse move event
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onMouseLeave={handleMouseLeave(index)}
      className="card card-border timeline-card rounded-xl p-8 mb-5 break-inside-avoid-column relative group overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Border Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80 rounded-xl pointer-events-none" />

      {/* Glow Effect */}
      <div className="glow absolute inset-0 pointer-events-none rounded-xl"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Stars */}
        <div className="flex items-center gap-1.5 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="text-yellow-400 text-lg drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              ★
            </div>
          ))}
        </div>

        {/* Review Text */}
        {card?.review && (
          <div className="mb-5 pb-4 border-b border-white/10">
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light tracking-wide italic">
              "{card.review}"
            </p>
          </div>
        )}

        {/* Children Content */}
        {children}
      </div>

      {/* Styles */}
      <style>{`
        .glow {
          background: conic-gradient(
            from var(--start, 0deg),
            transparent 0deg,
            rgba(168, 85, 247, 0.4) 60deg,
            rgba(59, 130, 246, 0.3) 120deg,
            transparent 180deg
          );
          filter: blur(40px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-border:hover .glow {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default GlowCard;