import { ProductGallery } from "./ProductGallery"
import Link from "next/link"
import { Button } from "../ui/button"


const BestProducts = () => {
  return (
    <section className="mt-30">

    <div className="flex items-center gap-4">
        <div className="bg-primary h-10 w-5 rounded-sm"/>
        <h4 className="text-primary">This Month</h4>
    </div>

    <div className="flex justify-between mt-10">
      <h2>Best Selling Products</h2>
      <Link href="/products">
        <Button className="px-8 py-5 cursor-pointer">View All</Button>
      </Link>
    </div>



      <ProductGallery />


    </section>
  )
}

export default BestProducts