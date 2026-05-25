import { ProductGallery } from "./ProductGallery"
import Link from "next/link"
import { Button } from "../ui/button"


const OurProducts = () => {
  return (
    <section className="mt-30">

      <div className="flex items-center gap-4">
        <div className="bg-primary h-10 w-5 rounded-sm"/>
        <h4 className="text-primary">Our Products</h4>
      </div>

      <h2 className="mt-5">
      Explore Our Products
      </h2>


      <ProductGallery />

      <div className="flex items-center justify-center my-20">
      <Link href="/products">
        <Button className="cursor-pointer px-8 py-6">View All Products</Button>
      </Link>
      </div>

    </section>
  )
}

export default OurProducts