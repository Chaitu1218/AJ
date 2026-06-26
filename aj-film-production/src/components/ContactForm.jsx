import { useState } from "react";
import { Send } from "lucide-react";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const mobile = formData.get("mobile")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // Your WhatsApp Number
    const phoneNumber = "918320130497";

    const text = `
New Contact Form Message

Name: ${name}

Email: ${email}

Mobile: ${mobile}

Message:
${message}
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");

    alert("Redirecting to WhatsApp...");

    form.reset();

    setLoading(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl mx-auto space-y-5"
    >
      {/* Name & Email */}

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-medium text-white">
            Name
          </label>

          <input
            type="text"
            name="name"
            required
            maxLength={100}
            className="w-full border border-white/30 bg-black text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-white">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            maxLength={255}
            className="w-full border border-white/30 bg-black text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white"
          />
        </div>

      </div>

      {/* Mobile */}

      <div>

        <label className="block mb-2 font-medium text-white">
          Mobile Number
        </label>

        <input
          type="tel"
          name="mobile"
          required
          placeholder="+91 9876543210"
          className="w-full border border-white/30 bg-black text-white placeholder:text-white/40 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white"
        />

      </div>

      {/* Message */}

      <div>

        <label className="block mb-2 font-medium text-white">
          Message
        </label>

        <textarea
          rows="5"
          name="message"
          required
          placeholder="Tell us about your event..."
          className="w-full border border-white/30 bg-black text-white placeholder:text-white/40 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white"
        />

      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="w-full justify-center bg-white hover:bg-neutral-200 text-black font-semibold px-6 py-4 rounded-lg flex items-center gap-2 transition disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          "Opening WhatsApp..."
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

    </form>
  );
}

export default ContactForm;
