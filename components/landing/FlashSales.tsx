import { ProductGallery } from "./ProductGallery"
import Link from "next/link";
import { Button } from "../ui/button";

const FlashSales = () => {
  return (
    <section className="mt-30 border-b">

      <div className="flex items-center gap-4">
        <div className="bg-primary h-10 w-5 rounded-sm"/>
        <h4 className="text-primary">Today&apos;s</h4>
      </div>

      <div className="mt-5 items-end flex gap-15">

        <h2>Flash Sales</h2>

        <div className="flex items-center gap-7">

        <div className="flex items-center gap-6">
          <p className="text-sm">Days<br/><span className="text-4xl font-bold">03</span></p>
        <p className="text-primary text-end text-3xl">:</p>
        </div>


        <div className="flex items-center gap-6">
          <p className="text-sm">Hours<br/><span className="text-4xl font-bold">23</span></p>
        <p className="text-primary text-end text-3xl">:</p>
        </div>

                <div className="flex items-center gap-6">
          <p className="text-sm">Hours<br/><span className="text-4xl font-bold">23</span></p>
        <p className="text-primary text-end text-3xl">:</p>
        </div>

        <div className="flex items-center gap-6">
        <p className="text-sm">Minutes<br/><span className="text-4xl font-bold">19</span></p>
        <p className="text-primary text-end text-3xl">:</p>
        </div>

        <div className="flex items-center gap-6">
        <p className="text-sm">Seconds<br/><span className="text-4xl font-bold">56</span></p>
        </div>

        </div>

      </div>

      <ProductGallery />

      <div className="flex items-center justify-center my-20">
      <Link href="/products">
        <Button className="cursor-pointer px-8 py-6">View All Products</Button>
      </Link>
        </div>

    </section>
  )
}

export default FlashSales