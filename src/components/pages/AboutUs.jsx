import MainNavbar from "../MainNavbar";
import Clients from "../Clients";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Footer from "../Footer";

export default function AboutUs() {
  return (
    <>
      {/* TEAM VARIANT NAVBAR */}
      <MainNavbar variant="team" />

      {/* HERO / ABOUT HEADER */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <p className="text-sm font-semibold text-[#737373] tracking-widest mb-4">
              ABOUT COMPANY
            </p>

            <h1 className="text-5xl font-bold text-[#252B42] mb-6">
              ABOUT US
            </h1>

            <p className="text-[#737373] text-lg mb-8 max-w-md">
              We know how large objects will act,
              but things on a small scale
            </p>

            <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition">
              Get Quote Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <img
              src="/assets/about-hero.png"
              alt="About us"
              className="relative z-10 max-w-full"
            />

            <div className="absolute w-[420px] h-[420px] bg-[#FFF0F0] rounded-full -z-0" />
          </div>

        </div>
      </section>

      {/* TEXT SECTION */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#E74040] mb-4">
              Problems trying
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] leading-snug">
              Met minim Mollie non desert <br />
              Alamo est sit cliquey dolor do <br />
              met sent.
            </h2>
          </div>

          <div>
            <p className="text-[#737373] text-base leading-relaxed">
              Problems trying to resolve the conflict between the two major realms of
              Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center place-items-center">
          {[
            ["15K", "Happy Customers"],
            ["150K", "Monthly Visitors"],
            ["15", "Countries Worldwide"],
            ["100+", "Top Partners"],
          ].map(([value, label]) => (
            <div key={label}>
              <h3 className="text-4xl font-bold text-[#252B42]">{value}</h3>
              <p className="text-sm text-[#737373] mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <video
              className="w-full h-[240px] sm:h-[360px] md:h-[500px] object-cover"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              poster="https://picsum.photos/1200/600"
              controls
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#252B42]">
            Meet Our Team
          </h2>

          <p className="mt-4 text-[#737373] max-w-xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              "/assets/team-member-1.png",
              "/assets/team-member-2.png",
              "/assets/team-member-3.png",
            ].map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={img}
                  alt="Team member"
                  className="w-full max-w-[320px] object-cover"
                />

                <h4 className="mt-6 font-bold text-[#252B42]">
                  Username
                </h4>

                <p className="text-sm text-[#737373] mb-4">
                  Profession
                </p>

                {/* LUCIDE ICONS */}
                <div className="flex gap-4 text-[#23A6F0]">
                  <Facebook size={20} className="cursor-pointer hover:opacity-70 transition" />
                  <Instagram size={20} className="cursor-pointer hover:opacity-70 transition" />
                  <Twitter size={20} className="cursor-pointer hover:opacity-70 transition" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* CLIENTS SECTION */}
<section className="w-full py-24 bg-[#FAFAFA]">
  <div className="max-w-[1200px] mx-auto px-6 text-center">

    <h2 className="text-3xl font-bold text-[#252B42]">
      Big Companies Are Here
    </h2>

    <p className="mt-4 text-[#737373] max-w-xl mx-auto">
      Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
    </p>

    <div className="mt-16">
      <Clients />
    </div>

  </div>
</section>
{/* WORK WITH US */}
<section className="w-full bg-[#2A7CC7] overflow-hidden">
  <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[480px] relative">

    {/* LEFT CONTENT */}
    <div className="
      flex flex-col justify-center
      px-6 sm:px-12 lg:px-20
      text-white
      text-center md:text-left
      items-center md:items-start
    ">
      <p className="text-sm font-semibold tracking-widest mb-4">
        WORK WITH US
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Now Let’s grow Yours
      </h2>

      <p className="text-sm md:text-base text-white/80 max-w-md mb-8">
        The gradual accumulation of information about atomic and
        small-scale behavior during the first quarter of the 20th
      </p>

      <button className="
        border border-white
        px-8 py-3 rounded-md font-semibold
        hover:bg-white hover:text-[#2A7CC7]
        transition
      ">
        Button
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative hidden md:block">
      <img
        src="/assets/work-with-us.png"
        alt="Work with us"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>
<Footer />
    </>
  );
}