import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import TopNavbar from "../TopNavbar";
import MainNavbar from "../MainNavbar";
import ProductCards, { products } from "../ProductCards";
import Clients from "../Clients";
import Footer from "../Footer";
import {
  Heart,
  ShoppingCart,
  Eye,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const images = product.images ?? [product.img];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <TopNavbar />
      <MainNavbar />

      <main className="max-w-[1200px] mx-auto px-6 py-12">

        {/* BREADCRUMB */}
        <div className="text-sm text-[#737373] mb-8">
          <Link to="/" className="text-[#252B42] font-semibold">Home</Link>
          <span className="mx-2">{">"}</span>
          <Link to="/shop">Shop</Link>
        </div>

        {/* MAIN PRODUCT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* IMAGE */}
          <div className="relative">
            <img src={images[activeImageIndex]} alt="Product" className="w-full" />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              <ChevronRight />
            </button>

            <div className="flex gap-4 mt-6">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 cursor-pointer border ${
                    index === activeImageIndex
                      ? "border-[#23A6F0]"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-2xl font-bold text-[#252B42]">
              Floating Phone
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className={`cursor-pointer ${
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() =>
                    setRating(rating === star ? star - 1 : star)
                  }
                />
              ))}
              <span className="text-sm text-[#737373] ml-2">
                10 Reviews
              </span>
            </div>

            <p className="text-2xl font-bold mt-6">$1,139.33</p>

            <p className="text-sm mt-2">
              Availability :
              <span className="text-[#23A6F0] ml-1">In Stock</span>
            </p>

            <p className="text-sm text-[#737373] mt-6 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie.
            </p>

            <hr className="my-6" />

            {/* COLORS */}
            <div className="flex gap-4">
              {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map(
                (color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-6 h-6 rounded-full ${
                      selectedColor === index
                        ? "ring-2 ring-offset-2 ring-gray-400"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4 mt-8">
              <button className="bg-[#23A6F0] text-white px-8 py-3 rounded font-semibold">
                Select Options
              </button>

              <button
                onClick={() => setLiked(!liked)}
                className="border p-3 rounded-full"
              >
                <Heart className={liked ? "fill-red-500 text-red-500" : ""} />
              </button>

              <button
                onClick={() => setAddedToCart(!addedToCart)}
                className="border p-3 rounded-full"
              >
                <ShoppingCart className={addedToCart ? "text-[#23A6F0]" : ""} />
              </button>

              <button className="border p-3 rounded-full">
                <Eye />
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="border-b mt-24 flex gap-10 text-sm font-semibold text-[#737373]">
          {["description", "additional", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 ${
                activeTab === tab
                  ? "border-b-2 border-[#23A6F0] text-[#252B42]"
                  : ""
              }`}
            >
              {tab === "description" && "Description"}
              {tab === "additional" && "Additional Information"}
              {tab === "reviews" && "Reviews (0)"}
            </button>
          ))}
        </div>

        {/* EXTRA INFO */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
                <img
                  src="https://picsum.photos/600/600?random=12"
                  alt="Lorem Product"
                  className="w-[316px] h-[372px] object-cover rounded-[5.39px]"
                />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div>
                  <h3 className="text-xl font-bold text-[#252B42] mb-4">
                    Lorem ipsum dolor
                  </h3>

                  <p className="text-sm text-[#737373] leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <p className="text-sm text-[#737373] leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>

                  <p className="text-sm text-[#737373] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#252B42] mb-4">
                  Lorem ipsum dolor
                </h3>

                <ul className="space-y-3 text-sm text-[#737373]">
                  <li>› Lorem ipsum dolor sit amet</li>
                  <li>› Consectetur adipiscing elit</li>
                  <li>› Sed do eiusmod tempor</li>
                  <li>› Incididunt ut labore et dolore</li>
                </ul>

                <h3 className="text-xl font-bold text-[#252B42] mb-4 pt-6">
                  Lorem ipsum dolor
                </h3>

                <ul className="space-y-3 text-sm text-[#737373]">
                  <li>› Lorem ipsum dolor sit amet</li>
                  <li>› Consectetur adipiscing elit</li>
                  <li>› Sed do eiusmod tempor</li>
                  <li>› Incididunt ut labore et dolore</li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>
        <ProductCards showLoadMore={false} />
        <Clients />
        <Footer />
      </main>
    </>
  );
}