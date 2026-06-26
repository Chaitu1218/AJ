import { Link, useLocation } from "react-router-dom";
import { CalendarPlus } from "lucide-react";
import { useState } from "react";
import logo from "../assets/png ogo.jpg";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => (e) => {
    if (location.pathname !== "/") return;

    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="AJ Film Production"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">

          <a
            href="#home"
            onClick={scrollTo("home")}
            className="hover:text-white/70 transition"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={scrollTo("about")}
            className="hover:text-white/70 transition"
          >
            About
          </a>

          <a
            href="#services"
            onClick={scrollTo("services")}
            className="hover:text-white/70 transition"
          >
            Services
          </a>

          <a
            href="#gallery"
            onClick={scrollTo("gallery")}
            className="hover:text-white/70 transition"
          >
            Gallery
          </a>

          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="hover:text-white/70 transition"
          >
            Contact
          </a>

        </nav>

        {/* Book Button */}

        <Link
          to="/"
          onClick={scrollTo("contact")}
          className="hidden md:flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-5 py-2 rounded-lg font-medium transition"
        >
          <CalendarPlus size={18} />
          Book Now
        </Link>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">

          <a
            href="#home"
            onClick={scrollTo("home")}
            className="block px-6 py-4 text-white hover:bg-neutral-900"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={scrollTo("about")}
            className="block px-6 py-4 text-white hover:bg-neutral-900"
          >
            About
          </a>

          <a
            href="#services"
            onClick={scrollTo("services")}
            className="block px-6 py-4 text-white hover:bg-neutral-900"
          >
            Services
          </a>

          <a
            href="#gallery"
            onClick={scrollTo("gallery")}
            className="block px-6 py-4 text-white hover:bg-neutral-900"
          >
            Gallery
          </a>

          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="block px-6 py-4 text-white hover:bg-neutral-900"
          >
            Contact
          </a>

        </div>
      )}
    </header>
  );
}

export default Header;
