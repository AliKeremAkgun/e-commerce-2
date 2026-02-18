import imgLeft from "../assets/x1.png";
import imgRight from "../assets/x2.png";

export default function Content() {
  return (
    <section className="w-full px-4 md:px-0 mt-24">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT IMAGES */}
        <div className="flex gap-6 w-full md:w-1/2">
          <img
            src={imgLeft}
            alt="Happy customer"
            className="w-1/2 object-cover rounded-md"
          />

          <img
            src={imgRight}
            alt="Happy customer"
            className="w-1/2 object-cover rounded-md"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm text-[#23A6F0] font-semibold">
            Featured Products
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mt-4">
            We love what we do
          </h2>

          <p className="text-sm text-[#737373] mt-6 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>

          <p className="text-sm text-[#737373] mt-4 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>

      </div>
    </section>
  );
}