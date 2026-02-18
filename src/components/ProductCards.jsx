import { Link } from "react-router-dom";

import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import product4 from "../assets/product-4.png";
import product5 from "../assets/product-5.png";

/* 🔴 ÖNEMLİ
   Aynı ürün datasını ProductPage’te de kullanacağız
*/
export const products = [
  {
    id: 1,
    img: product1,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product1, product2, product3],
  },
  {
    id: 2,
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product2, product3, product4],
  },
  {
    id: 3,
    img: product3,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product3, product4, product5],
  },
  {
    id: 4,
    img: product4,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product4, product5, product1],
  },
  {
    id: 5,
    img: product5,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product5, product1, product2],
  },
  {
    id: 6,
    img: product1,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product1, product2],
  },
  {
    id: 7,
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product2, product3],
  },
  {
    id: 8,
    img: product3,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product3, product4],
  },
  {
    id: 9,
    img: product4,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product4, product5],
  },
  {
    id: 10,
    img: product5,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
    images: [product5, product1],
  },
];

export default function ProductCards({
  showPagination = false,
  showLoadMore = true,
}) {
  return (
    <section className="w-full px-4 md:px-0 mt-24">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER – AYNI */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#737373]">Featured Products</p>
          <h2 className="text-2xl font-bold text-[#252B42] mt-2">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-sm text-[#737373] mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* GRID – AYNI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 place-items-center">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="text-center w-full max-w-[360px] sm:max-w-[240px] md:max-w-[220px]"
            >
              <img
                src={item.img}
                alt="Product"
                className="w-full h-auto object-cover mb-4 cursor-pointer"
              />

              <h3 className="font-semibold text-[#252B42] text-sm">
                {item.title}
              </h3>

              <p className="text-xs text-[#737373] mt-1">
                {item.department}
              </p>

              <div className="flex justify-center gap-3 mt-3 text-sm">
                <span className="text-[#BDBDBD] line-through">
                  {item.oldPrice}
                </span>
                <span className="text-[#23856D] font-semibold">
                  {item.price}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* LOAD MORE – AYNI */}
        {showLoadMore && (
          <div className="flex justify-center mt-16">
            <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-3 text-sm font-semibold hover:bg-[#23A6F0] hover:text-white transition">
              LOAD MORE PRODUCTS
            </button>
          </div>
        )}

        {/* PAGINATION – AYNI */}
        {showPagination && (
          <div className="flex justify-center mt-12">
            <div className="flex border rounded-md overflow-hidden text-sm">
              <button className="px-4 py-2 text-gray-400 border-r">
                First
              </button>
              <button className="px-4 py-2 border-r">1</button>
              <button className="px-4 py-2 border-r">2</button>
              <button className="px-4 py-2 border-r">3</button>
              <button className="px-4 py-2 text-[#23A6F0]">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}