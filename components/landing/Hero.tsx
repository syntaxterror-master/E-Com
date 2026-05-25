import { HeroSlider } from "./HeroSlider"


const Hero = () => {

  const categories = [
    {title: "Woman's Fashion"},
    {title: "Man's Fashion"},
    {title: "Electronics"},
    {title: "Home & Lifestyle"},
    {title: "Medicine"},
    {title: "Baby's & Toys"},
    {title: "Groceries & Pets"},
    {title: "Health & Beauty"},
  ]

  return (
    <section>
        <div className="flex items-end justify-between">

          <div className="border-r pt-10 pr-5">
            <ul className="flex flex-col gap-3">
          {categories.map((link, idx) => (
            <li key={idx}><a href="#">{link.title}</a></li>
          ))}
            </ul>
          </div>

            <HeroSlider/>

        </div>
    </section>
  )
}

export default Hero