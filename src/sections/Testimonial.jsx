import GlowCard from "../Components/Heromodels/Glowcard";
import Title from "../Components/Heromodels/Title";
import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center  section-pading">
      <div className="w-full h-full md:px-10 px-5 ">
        <Title
          title="What People Say About Me?"
          sub="⭐ Client Feedback Highlights"
        />
        <div className="lg-columns-3 md:columns-3 columns-1 mt-16 ">
          {testimonials.map((item) => (
            <GlowCard key={item.id} card={{ review: item.review }}>
              <div className="flex items-center gap-3">
                <div >
                  <img
                    src={item.imgPath}
                    alt={item.name}
               
                  />
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-white-50">{item.mention}</p>
                </div>
                
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
