import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function MainNavbar({ variant = "default" }) {
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden md:block w-full bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* MENU */}
          <ul className="flex items-center gap-6 text-[#737373] font-medium relative">

            <li>
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="hover:text-black">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-black">
                About
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:text-black">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>

            {/* PAGES DROPDOWN */}
            <li
              className="relative cursor-pointer hover:text-black"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              Pages

              {pagesOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded w-40 py-2 text-sm">
                  <li>
                    <Link
                      to="/team"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              )}
            </li>

          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {variant === "team" ? (
              <>
                <span className="text-[#23A6F0] font-medium cursor-pointer">
                  Login
                </span>

                <button className="bg-[#23A6F0] text-white px-5 py-2 rounded text-sm font-semibold">
                  Become a member →
                </button>
              </>
            ) : (
              <>
                <span className="font-medium cursor-pointer text-[#23A6F0]">
                  Login / Register
                </span>
                <Search size={20} className="text-[#23A6F0]" />
                <ShoppingCart size={20} className="text-[#23A6F0]" />
              </>
            )}
          </div>

        </div>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="md:hidden w-full bg-white border-b px-4 py-4">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-[#252B42]">
            Bandage
          </Link>

          <div className="flex items-center gap-4 text-[#252B42]">
            <Search size={20} />
            <ShoppingCart size={20} />
            <Menu size={22} />
          </div>
        </div>

        {/* MOBILE MENU */}
        <ul className="mt-6 flex flex-col items-center gap-4 text-[#737373] text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/team">Team</Link></li>
        </ul>

      </div>
    </>
  );
}