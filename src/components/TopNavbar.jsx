import { Facebook, Instagram, Twitter } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="w-full bg-[#252B42] text-white text-sm hidden lg:block">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-2">
        
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <span>Follow Us :</span>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#23A6F0] transition"
          >
            <Facebook size={16} />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#23A6F0] transition"
          >
            <Instagram size={16} />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#23A6F0] transition"
          >
            <Twitter size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}