import { Heart, ShoppingCart, Eye, Star, Clock, BarChart2 } from "lucide-react";
import post1 from "../assets/post-1.png";
import post2 from "../assets/post-2.png";

const posts = [
  {
    id: 1,
    img: post1,
  },
  {
    id: 2,
    img: post2,
  },
];

export default function FeaturedPosts() {
  return (
    <section className="w-full px-4 md:px-0 mt-24">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#23A6F0] font-semibold">
            Practice Advice
          </p>

          <h2 className="text-3xl font-bold text-[#252B42] mt-2">
            Featured Posts
          </h2>
        </div>

        {/* POSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row bg-white shadow-sm"
            >
              {/* IMAGE */}
              <div className="relative md:w-1/2">
                <img
                  src={post.img}
                  alt="Post"
                  className="w-full h-full object-cover"
                />

                {/* SALE BADGE */}
                <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-semibold px-3 py-1 rounded">
                  Sale
                </span>

                {/* ICONS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  <button className="bg-white p-2 rounded-full shadow">
                    <Heart size={16} />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow">
                    <ShoppingCart size={16} />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow">
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:w-1/2">
                {/* TOP ROW */}
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#23A6F0]">English Department</span>
                  <span className="flex items-center gap-1 bg-[#252B42] text-white px-2 py-1 rounded text-xs">
                    <Star size={12} className="text-yellow-400" />
                    4.9
                  </span>
                </div>

                <h3 className="font-bold text-[#252B42]">
                  Graphic Design
                </h3>

                <p className="text-sm text-[#737373] mt-2">
                  We focus on ergonomics and meeting you where you work.
                  It's only a keystroke away.
                </p>

                {/* SALES */}
                <p className="mt-3 text-sm text-[#737373] font-semibold">
                  ⬇ 15 Sales
                </p>

                {/* PRICE */}
                <div className="flex gap-2 mt-2 text-sm">
                  <span className="line-through text-[#BDBDBD]">$16.48</span>
                  <span className="text-[#23856D] font-semibold">$6.48</span>
                </div>

                {/* COLORS */}
                <div className="flex gap-2 mt-4">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="w-3 h-3 rounded-full bg-gray-800" />
                </div>

                {/* INFO */}
                <div className="flex gap-4 mt-6 text-xs text-[#737373]">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> 22h
                  </span>
                  <span className="flex items-center gap-1">
                    <BarChart2 size={14} /> 64 Lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <BarChart2 size={14} /> Progress
                  </span>
                </div>

                {/* BUTTON */}
                <button className="mt-6 border border-[#23A6F0] text-[#23A6F0] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#23A6F0] hover:text-white transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}