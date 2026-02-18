import { Link } from "react-router-dom";

import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-0 mt-6 overflow-hidden">
      <div
        className="
          max-w-[1292px]
          mx-auto
          rounded-3xl
          bg-[#96E9FB]
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          px-6
          md:px-16
          
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-md text-center md:text-left">
          <p className="text-sm font-semibold text-[#2A7CC7] tracking-wider">
            SUMMER 2020
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#252B42]">
            NEW COLLECTION
          </h1>

          <p className="mt-4 text-[#737373] text-base leading-relaxed">
            We know how large objects will act,
            <br className="hidden md:block" />
            but things on a small scale.
          </p>

          <Link
  to="/shop"
  className="
    mt-6
    inline-block
    bg-[#23A6F0]
    text-white
    px-8
    py-3
    rounded-md
    font-semibold
    hover:bg-[#1a8fd8]
    transition
  "
>
  SHOP NOW
</Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0 md:ml-10 flex-shrink-0">
          <img
            src={heroImg}
            alt="New Collection"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}