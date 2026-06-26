import { Link } from "react-router-dom";
import {
  Camera,
  Heart,
 Sparkles,
  Cake,
  Briefcase,
  Baby,
  Award,
  Users,
  Aperture,
  ArrowRight,
} from "lucide-react";

import GallerySlider from "../components/GallerySlider";
import ContactForm from "../components/ContactForm";

// Images
import heroCanon from "../assets/hero-dslr.jpg";
import photographer from "../assets/photographer.jpg";

function Home() {
  const services = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Wedding Photography",
      description:
        "Capturing every emotion and unforgettable moment of your wedding day.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "Pre-Wedding Shoot",
      description:
        "Creative outdoor and cinematic pre-wedding photography sessions.",
    },
    {
      icon: <Cake className="h-8 w-8 text-white" />,
      title: "Birthday Events",
      description:
        "Celebrate every birthday with colorful and memorable photographs.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Corporate Events",
      description:
        "Professional photography and videography for business events.",
    },
    {
      icon: <Baby className="h-8 w-8 text-white" />,
      title: "Baby Shoot",
      description:
        "Beautiful baby portraits with love, care and creativity.",
    },
    {
      icon: <Camera className="h-8 w-8 text-white" />,
      title: "Portrait Photography",
      description:
        "Elegant portraits that express personality and confidence.",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-black"
      >
        <img
          src={heroCanon}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="font-body text-5xl md:text-7xl font-bold text-white leading-tight">

              AJ Film
              <br />

              <span className="text-white">
                Production
              </span>

            </h1>

            <p className="mt-8 text-gray-300 text-lg max-w-xl leading-8">

              Photography & Videography that transform your
              beautiful memories into timeless stories.

            </p>

            <div className="flex gap-5 mt-10">

              <a
                href="#contact"
                className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition"
              >
                Book Now

                <ArrowRight size={18} />

              </a>

              <a
                href="#gallery"
                className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
              >
                View Gallery
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="py-24 bg-black text-white"
      >

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src={photographer}
              alt=""
              className="rounded-2xl shadow-2xl"
            />

          </div>

          <div>

            <h2 className="text-5xl font-bold mb-8">

              Meet Ajay Bharti

            </h2>

            <p className="text-white/75 leading-8 mb-6">

              Professional Photographer & Cinematic Videographer with years of experience capturing life's most precious moments. I specialize in creating timeless photographs and cinematic films that tell authentic stories with emotion and creativity. Every frame is crafted to preserve memories you'll cherish forever. From weddings to portraits and special events, I turn moments into lasting masterpieces.

            </p>

            <p className="text-white/75 leading-8 mb-10">

              Every photograph tells a story.
              Every frame captures an emotion.

            </p>

            <div className="grid sm:grid-cols-3 gap-8">

              <div className="flex items-center gap-3">
                <Award className="text-white" />
                <span>Wedding Expert</span>
              </div>

              <div className="flex items-center gap-3">
                <Users className="text-white" />
                <span>500+ Clients</span>
              </div>

              <div className="flex items-center gap-3">
                <Camera className="text-white" />
                <span>Creative Shoots</span>
              </div>

            </div>

          </div>

        </div>

      </section>

            {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="py-24 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-5">
            Our Services
          </h2>

          <p className="text-center text-white/70 mb-16">
            Professional Photography & Videography Services
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-black border border-white/20 rounded-2xl shadow-lg hover:border-white/50 transition duration-500 p-8"
              >

                <div className="mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-7">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section
        id="gallery"
        className="py-24 bg-black text-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-bold mb-5">

            Gallery

          </h2>

          <p className="text-center text-gray-400 mb-16">

            A glimpse of our recent work.

          </p>

          <GallerySlider />

          <div className="text-center mt-12">

            <Link
              to="/gallery"
              className="inline-block bg-white hover:bg-neutral-200 text-black font-semibold px-8 py-4 rounded-lg transition"
            >
              View Complete Gallery
            </Link>

          </div>

        </div>

      </section>

            {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="py-24 bg-black text-white"
      >
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-bold mb-5">
              Let's Create Together
            </h2>

            <p className="text-white/70 text-lg">
              Have an event coming up? We'd love to capture your memories.
            </p>

          </div>

          <div className="bg-black border border-white/20 rounded-2xl shadow-xl p-8">

            <ContactForm />

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;
