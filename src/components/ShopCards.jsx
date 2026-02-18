import leftImg from "../assets/shop-left.jpg";
import topRightImg from "../assets/shop-top-right.jpg";
import bottomRightImg from "../assets/shop-bottom-right.jpg";

export default function ShopCards() {
  return (
    <section className="w-full px-4 md:px-0 mt-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT BIG CARD */}
        <div className="relative">
          <img
            src={leftImg}
            alt="Top Product"
            className="w-full h-full object-cover rounded-md"
          />

          <div className="absolute bottom-0 left-0 bg-[#2A7CC7]/70 text-white p-6 w-2/3">
            <h3 className="text-lg font-semibold">
              Top Product Of <br /> the Week
            </h3>

            <button className="mt-4 border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#2A7CC7] transition">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          
          {/* TOP RIGHT */}
          <div className="relative">
            <img
              src={topRightImg}
              alt="Top Product"
              className="w-full h-full object-cover rounded-md"
            />

            <div className="absolute bottom-0 left-0 bg-[#2A7CC7]/70 text-white p-6 w-2/3">
              <h3 className="text-lg font-semibold">
                Top Product Of the Week
              </h3>

              <button className="mt-4 border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#2A7CC7] transition">
                EXPLORE ITEMS
              </button>
            </div>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="relative">
            <img
              src={bottomRightImg}
              alt="Top Product"
              className="w-full h-full object-cover rounded-md"
            />

            <div className="absolute bottom-0 left-0 bg-[#2A7CC7]/70 text-white p-6 w-2/3">
              <h3 className="text-lg font-semibold">
                Top Product Of the Week
              </h3>

              <button className="mt-4 border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#2A7CC7] transition">
                EXPLORE ITEMS
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}