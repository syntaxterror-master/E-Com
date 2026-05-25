
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Monitor, Smartphone, Watch, Camera, Headphones, Gamepad2, SportShoe, ToyBrick, HeartPlus } from "lucide-react";
import Link from "next/link";

const categories = [
 {
  title: "Phones",
  href: "#",
  icon: <Smartphone size={100} strokeWidth={0.5}/>
 },
{
  title: "Computers",
  href: "#",
  icon: <Monitor size={100} strokeWidth={0.5}/>
 },
{
  title: "Watches",
  href: "#",
  icon: <Watch size={100} strokeWidth={0.5}/>
 },
{
  title: "Camera",
  href: "#",
  icon: <Camera size={100} strokeWidth={0.5}/>
 },
 {
  title: "HeadPhones",
  href: "#",
  icon: <Headphones size={100} strokeWidth={0.5}/>
 },
 {
  title: "Gaming",
  href: "#",
  icon: <Gamepad2 size={100} strokeWidth={0.5}/>
 },
{
  title: "Sports & Outdoor",
  href: "#",
  icon: <SportShoe size={100} strokeWidth={0.5}/>
 },
{
  title: "Baby's & Toys",
  href: "#",
  icon: <ToyBrick size={100} strokeWidth={0.5}/>
 },
{
  title: "Health & Beauty",
  href: "#",
  icon: <HeartPlus size={100} strokeWidth={0.5}/>
 },
];
const BrowserCategory = () => {
  return (
    <section className="mt-30 border-b">

      <div className="flex items-center gap-4">
        <div className="bg-primary h-10 w-5 rounded-sm"/>
        <h4 className="text-primary">Categories</h4>
      </div>

      <h2 className="mt-10">Browser By Category</h2>

    <Carousel
      className="w-full my-15 px-8"
      opts={{
        align: "start",
      }}
      > 
      <CarouselPrevious className="ml-9" />
      <CarouselNext className="mr-9" />
      <CarouselContent className="-ml-2">
        {categories.map((categorie, idx) => (
          <CarouselItem className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/6" key={idx}>
            <Link href={categorie.href}>
            <div className="flex hover:bg-primary hover:ease-in-out hover:transition hover:delay-50 hover:scale-3d hover:text-primary-foreground flex-col items-center justify-center gap-4 aspect-square border p-1">
             {categorie.icon}
             <p className="text-lg">
             {categorie.title}
             </p>
            </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
        </section>  
  );
}

export default BrowserCategory;
