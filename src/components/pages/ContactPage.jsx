import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1f2a44] mb-4">
          Get answers to all your questions.
        </h1>

        <p className="text-gray-500 mb-8">
          Problems trying to resolve the conflict between the two <br />
          major realms of Classical physics:
        </p>

        <button className="bg-[#4f9cf9] hover:bg-[#3b82f6] text-white font-semibold px-6 py-3 rounded-md mb-8 transition">
          CONTACT OUR COMPANY
        </button>

        <div className="flex items-center justify-center gap-6 text-gray-400">
          <Twitter size={20} className="cursor-pointer hover:text-[#4f9cf9]" />
          <Facebook size={20} className="cursor-pointer hover:text-[#1877f2]" />
          <Instagram size={20} className="cursor-pointer hover:text-[#e4405f]" />
          <Linkedin size={20} className="cursor-pointer hover:text-[#0a66c2]" />
        </div>
      </div>
    </section>
  );
}

export default ContactPage;