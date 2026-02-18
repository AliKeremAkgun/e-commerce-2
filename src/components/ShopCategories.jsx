import cat1 from "../assets/cat-1.jpg";
import cat2 from "../assets/cat-2.jpg";
import cat3 from "../assets/cat-3.jpg";
import cat4 from "../assets/cat-4.jpg";
import cat5 from "../assets/cat-5.jpg";

const categories = [
  { id: 1, img: cat1 },
  { id: 2, img: cat2 },
  { id: 3, img: cat3 },
  { id: 4, img: cat4 },
  { id: 5, img: cat5 },
];

export default function ShopCategories() {
  return (
    <section className="w-full bg-[#FAFAFA] py-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        {categories.map((item) => (
          <div key={item.id} className="relative overflow-hidden group">
            
            <img
              src={item.img}
              alt="category"
              className="w-full h-[220px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
              <h3 className="font-bold text-lg">CLOTHS</h3>
              <p className="text-sm">5 Items</p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}