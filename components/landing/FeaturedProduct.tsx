import Link from "next/link"

const FeaturedProduct = () => {
  return (
    <section className="my-10 lg:my-25">
      <Link href={"/"}>
      <div className="bg-[url(/products/Featured_Product.jpeg)] bg-center bg-cover w-full h-125"/>
      </Link>
    </section>
  )
}

export default FeaturedProduct