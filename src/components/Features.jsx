import { BookOpen, LayoutGrid, TrendingUp } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full px-4 md:px-0 mt-24">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#737373]">Featured Products</p>

          <h2 className="text-2xl font-bold text-[#252B42] mt-2">
            THE BEST SERVICES
          </h2>

          <p className="text-sm text-[#737373] mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* ITEM 1 */}
          <div>
            <BookOpen className="mx-auto text-[#23A6F0] w-12 h-12" />

            <h3 className="mt-6 font-bold text-[#252B42]">
              Easy Wins
            </h3>

            <p className="mt-2 text-sm text-[#737373]">
              Get your best looking smile now!
            </p>
          </div>

          {/* ITEM 2 */}
          <div>
            <LayoutGrid className="mx-auto text-[#23A6F0] w-12 h-12" />

            <h3 className="mt-6 font-bold text-[#252B42]">
              Concrete
            </h3>

            <p className="mt-2 text-sm text-[#737373]">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>

          {/* ITEM 3 */}
          <div>
            <TrendingUp className="mx-auto text-[#23A6F0] w-12 h-12" />

            <h3 className="mt-6 font-bold text-[#252B42]">
              Hack Growth
            </h3>

            <p className="mt-2 text-sm text-[#737373]">
              Overcame any hurdle or any other problem.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}