import TopBanner from "@/components/landing/TopBanner";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FlashSales from "@/components/landing/FlashSales";
import BrowserCategory from "@/components/landing/BrowseCategory";
import BestProducts from "@/components/landing/BestProducts";
import FeaturedProduct from "@/components/landing/FeaturedProduct";

export default function page() {
  return (
      <main className="min-h-full  flex flex-col">
        <TopBanner />
          <Navbar />
        <section className="px-10">
          <Hero />
          <FlashSales />
          <BrowserCategory />
          <BestProducts />
          <FeaturedProduct />
        </section>
      </main>
  );
}