import MainNavbar from "../MainNavbar";
import Footer from "../Footer";

export default function BlogPage() {
  return (
    <>
      <MainNavbar />

      <div className="min-h-[60vh] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#252B42]">
          Blog Page
        </h1>
      </div>

      <Footer />
    </>
  );
}