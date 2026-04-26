import React from 'react'
import Hero from "./sections/Hero"
import ShowCaseScetion from './sections/ShowCaseScetion'
import Navbar from './sections/Navbar'
import Logosections from './sections/Logosections'
import Featurecard from './sections/Featurecard'
import Experience from './sections/Experience'
import TeshStack from './sections/TeshStack'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-24">
        <Hero />
        <ShowCaseScetion />
        <Logosections />
        <Featurecard />
        <Experience />
        <TeshStack />
        <Testimonial />
        <Contact />
      </main>
    <Footer/>
    </>
  );
};

export default App;