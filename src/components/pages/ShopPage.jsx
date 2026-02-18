import TopNavbar from "../TopNavbar";
import MainNavbar from "../MainNavbar";
import ShopCategories from "../ShopCategories";
import ShopFilterBar from "../ShopFilterBar";
import ProductCards from "../ProductCards";
import Clients from "../Clients";
import Footer from "../Footer";

export default function ShopPage() {
  return (
    <>
      {/* TOP NAVBAR */}
      <TopNavbar />

      {/* MAIN NAVBAR */}
      <MainNavbar />

      {/* PAGE HEADER / BREADCRUMB */}
      <section className="w-full bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex items-center justify-between">
          
          {/* LEFT TITLE */}
          <h1 className="text-2xl font-bold text-[#252B42]">
            Shop
          </h1>

          {/* RIGHT BREADCRUMB */}
          <div className="text-sm text-[#737373] flex items-center gap-2">
            <span className="font-semibold text-[#252B42]">Home</span>
            <span>{">"}</span>
            <span>Shop</span>
          </div>

        </div>
      </section>
      <ShopCategories />
      <ShopFilterBar />
      <ProductCards showPagination showLoadMore={false} />
      <Clients />
      <Footer />
    </>
  );
}