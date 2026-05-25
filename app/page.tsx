import Hero from "@/components/landing/Hero";
import FlashSales from "@/components/landing/FlashSales";
import BrowserCategory from "@/components/landing/BrowseCategory";
import BestProducts from "@/components/landing/BestProducts";
import FeaturedProduct from "@/components/landing/FeaturedProduct";
import OurProducts from "@/components/landing/OurProducts";
import NewArrival from "@/components/landing/NewArrival";

export default function page() {
  return (
      <main className="min-h-full  flex flex-col">
        <section className="px-10">
          <Hero />
          <FlashSales />
          <BrowserCategory />
          <BestProducts />
          <FeaturedProduct />
          <OurProducts />
          <NewArrival />
        </section>
      </main>
  );
}