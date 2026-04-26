import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">

        {/* 🔥 Logo */}
        <a href="#hero" className="logo text-lg font-semibold">
          Rizwan Fahim
        </a>

        {/* Desktop Nav */}
        <nav className="desktop hidden md:block">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (desktop only) */}
        <a className="contact-btn group hidden md:flex" href="#contact">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        {/* 🔥 Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* 🔥 Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden z-50">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-blue-600 rounded-lg"
            >
              Contact me
            </a>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
