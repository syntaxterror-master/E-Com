import Link from "next/link"
import { Heart, ShoppingCart, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import TopBanner from "./TopBanner"

const Navbar = () => {
  return (<>
    <TopBanner />
  <header className='py-4 px-10 border-b '>
    <nav className="flex items-center justify-between">

      <div>
          <Link href="/" className="text-3xl">Exclusive</Link>
      </div>

      <div className="w-full hidden md:flex px-8">
          <Field orientation="horizontal">
          <Input type="search" placeholder="What are you looking for?" />
          <Button>Search</Button>
          </Field>
      </div>

      <div className="flex items-center gap-10">
          <Heart />
          <ShoppingCart />
          <UserRound />
      </div>

    </nav>
      <div className="w-full mt-5 md:hidden flex">
      <Field orientation="horizontal">
      <Input type="search" placeholder="What are you looking for?" />
      <Button>Search</Button>
      </Field>
      </div>
  </header>
  </>
  )
}

export default Navbar