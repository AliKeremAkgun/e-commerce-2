import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-0">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-6">
          <h2 className="text-xl font-bold text-[#252B42]">
            Bandage
          </h2>

          <div className="flex gap-4 text-[#23A6F0]">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-16 text-sm">

          {/* Company Info */}
          <div>
            <h4 className="font-bold text-[#252B42] mb-4">
              Company Info
            </h4>
            <ul className="space-y-2 text-[#737373]">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#252B42] mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-[#737373]">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold text-[#252B42] mb-4">
              Features
            </h4>
            <ul className="space-y-2 text-[#737373]">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[#252B42] mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-[#737373]">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-bold text-[#252B42] mb-4">
              Get In Touch
            </h4>

            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="border px-4 py-2 w-full text-sm outline-none"
              />
              <button className="bg-[#23A6F0] text-white px-4 py-2 text-sm font-semibold">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-[#737373] mt-2">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-center py-6 text-sm text-[#737373] bg-[#FAFAFA]">
          Made With Love By Finland All Right Reserved
        </div>

      </div>
    </footer>
  );
}