import React, { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ lazy load ALL heavy sections
const Navbar = lazy(() => import("./sections/Navbar"));
const Hero = lazy(() => import("./sections/Hero"));
const ShowCaseScetion = lazy(() => import("./sections/ShowCaseScetion"));
const Logosections = lazy(() => import("./sections/Logosections"));
const Featurecard = lazy(() => import("./sections/Featurecard"));
const Experience = lazy(() => import("./sections/Experience"));
const TeshStack = lazy(() => import("./sections/TeshStack"));
const Testimonial = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <>
      {/* 🔔 Toast (lightweight, ok) */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* ✅ Navbar */}
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      <main className="flex flex-col gap-28 overflow-x-hidden">

        <Suspense fallback={<div style={{ height: "100vh" }} />}>
          <Hero />
        </Suspense>

        <Suspense fallback={null}>
          <ShowCaseScetion />
          <Logosections />
          <Featurecard />
          <Experience />
          <TeshStack />
          <Testimonial />
          <Contact />
        </Suspense>

      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
