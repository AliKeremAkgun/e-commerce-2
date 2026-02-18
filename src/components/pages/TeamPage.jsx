import MainNavbar from "../MainNavbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

import teamBig from "../../assets/team-big.png";
import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
import team4 from "../../assets/team-4.png";

export default function TeamPage() {
  return (
    <>
      <MainNavbar variant="team" />

      {/* PAGE HEADER */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          
          <p className="text-sm font-semibold text-[#737373] tracking-widest mb-4">
            WHAT WE DO
          </p>

          <h1 className="text-5xl font-bold text-[#252B42] mb-6">
            Innovation tailored for you
          </h1>

          {/* BREADCRUMB */}
          <div className="flex items-center justify-center gap-2 text-sm text-[#737373]">
            <Link to="/" className="text-[#252B42] font-medium">
              Home
            </Link>
            <span>{">"}</span>
            <span>Team</span>
          </div>

        </div>
      </section>

      {/* TEAM IMAGE GRID – FULL WIDTH */}
      <section className="w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* LEFT BIG IMAGE */}
          <div>
            <img
              src={teamBig}
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT GRID */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <img src={team1} className="w-full h-full object-cover" />
            <img src={team2} className="w-full h-full object-cover" />
            <img src={team3} className="w-full h-full object-cover" />
            <img src={team4} className="w-full h-full object-cover" />
          </div>

        </div>
      </section>
      {/* MEET OUR TEAM */}
<section className="bg-white py-24">
  <div className="max-w-[1200px] mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-3xl font-bold text-[#252B42] text-center mb-16">
      Meet Our Team
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

      {/* CARD */}
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="text-center">

          {/* IMAGE */}
          <img
            src={`/assets/team-member-${index + 1}.png`}
            alt="Team Member"
            className="w-full aspect-square object-cover mb-6"
          />

          {/* NAME */}
          <h3 className="font-bold text-[#252B42] mb-1">
            Username
          </h3>

          {/* PROFESSION */}
          <p className="text-sm text-[#737373] mb-4">
            Profession
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-4 text-[#23A6F0]">
            <Facebook size={18} />
            <Instagram size={18} />
            <Twitter size={18} />
          </div>

        </div>
      ))}

    </div>
  </div>
</section>
{/* CTA SECTION */}
<section className="w-full py-24 bg-white">
  <div className="max-w-[600px] mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-[#252B42] mb-6">
      Start your 14 days free trial
    </h2>

    <p className="text-sm text-[#737373] leading-relaxed mb-8">
      Met minim Mollie non desert Alamo est sit cliquey dolor
      do met sent. RELIT official consequent.
    </p>

    <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition mb-10">
      Try it free now
    </button>

    {/* SOCIAL ICONS */}
    <div className="flex justify-center gap-6 text-[#23A6F0]">
      <Twitter className="cursor-pointer hover:scale-110 transition" />
      <Facebook className="cursor-pointer hover:scale-110 transition" />
      <Instagram className="cursor-pointer hover:scale-110 transition" />
      <Linkedin className="cursor-pointer hover:scale-110 transition" />
    </div>

  </div>
</section>
<Footer />
    </>
  );
}