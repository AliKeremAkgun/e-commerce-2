import { Grid, List } from "lucide-react";

export default function ShopFilterBar() {
  return (
    <section className="w-full bg-[#FFFFFF] py-8">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          
          <p className="text-sm text-[#737373] text-center">
            Showing all 12 results
          </p>

          {/* VIEWS */}
          <div className="flex items-center gap-3 text-sm text-[#737373]">
            <span>Views:</span>
            <button className="border p-2 rounded hover:bg-gray-100">
              <Grid size={16} />
            </button>
            <button className="border p-2 rounded hover:bg-gray-100">
              <List size={16} />
            </button>
          </div>

          {/* SORT + FILTER */}
          <div className="flex items-center gap-3">
            <select className="border px-4 py-2 text-sm rounded text-[#737373]">
              <option>Popularity</option>
              <option>Newest</option>
            </select>

            <button className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm font-semibold">
              Filter
            </button>
          </div>
        </div>

{/* DESKTOP LAYOUT */}
<div className="hidden md:flex relative items-center">

  {/* LEFT */}
  <p className="text-sm text-[#737373]">
    Showing all 10 results
  </p>

  {/* CENTER - VIEWS */}
  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-[#737373]">
    <span>Views:</span>
    <button className="border p-2 rounded hover:bg-gray-100">
      <Grid size={16} />
    </button>
    <button className="border p-2 rounded hover:bg-gray-100">
      <List size={16} />
    </button>
  </div>

  {/* RIGHT */}
  <div className="ml-auto flex items-center gap-6">
    <select className="border px-4 py-2 text-sm rounded text-[#737373]">
      <option>Popularity</option>
      <option>Newest</option>
    </select>

    <button className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm font-semibold">
      Filter
    </button>
  </div>

</div>

      </div>
    </section>
  );
}