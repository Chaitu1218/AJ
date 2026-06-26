import { Instagram, Mail, Phone } from "lucide-react";
import logo from "../assets/png logo.jpg";

function Footer() {
  return (
    <footer className="bg-black text-white/80 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo */}

        <div>

          <div className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="AJ Film Production"
              className="h-20 w-auto object-contain"
            />
          </div>

          <p className="text-sm leading-relaxed">
            Cinematic photography & videography for the moments that matter.
          </p>

        </div>

        {/* Explore */}

        <div>

          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Explore
          </h4>

          <ul className="space-y-2 text-sm">

            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Contact
          </h4>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white" />
              ajjubharti2002@gmail.com
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white" />
              +91 8320130497
            </li>

          </ul>

        </div>

        {/* Social */}

        <div>

          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Follow Us
          </h4>

          <div className="flex gap-3">

            <a
              href="https://www.instagram.com/aj_films_production_18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition"
            >
              <Instagram className="h-5 w-5" />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">

        © {new Date().getFullYear()} AJ Film Production. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;
