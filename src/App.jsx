import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ShowCaseScetion from "./sections/ShowCaseScetion";
import Logosections from "./sections/Logosections";
import Featurecard from "./sections/Featurecard";
import Experience from "./sections/Experience";
import TeshStack from "./sections/TeshStack";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      {/* 🔔 Global Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* 🔝 Navbar */}
      <Navbar />

      {/* 📌 Main Sections */}
      <main className="flex flex-col gap-28 overflow-x-hidden">

        <section id="hero">
          <Hero />
        </section>

        <section id="work">
          <ShowCaseScetion />
        </section>

        <section id="logos">
          <Logosections />
        </section>

        <section id="features">
          <Featurecard />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <TeshStack />
        </section>

        <section id="testimonials">
          <Testimonial />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* 🔻 Footer */}
      <Footer />
    </>
  );
};

export default App;
