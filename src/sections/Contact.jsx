import { useRef, useState } from "react";
import { toast } from "react-toastify";

import TitleHeader from "../Components/Heromodels/Title";
import ContactExperience from "../Components/Models/Contact/Contactexperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1fbd0cb9-43a0-44a5-ba2c-1536959f9483",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");

        setForm({ name: "", email: "", message: "" });
        formRef.current.reset();
      } else {
        toast.error(data.message || "Failed to send message ❌");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error ❌ Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">

        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">

          {/* FORM */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >

                <div>
                  <label>Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="cta-button group"
                >
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </button>

              </form>
            </div>
          </div>

          {/* 3D SECTION */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
