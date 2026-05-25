"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

const banners = [
  {src: '/banners/banner_1.jpg', alt: "Some Text"},
  {src: '/banners/banner_2.jpg', alt: "Some Text"},
  {src: '/banners/banner_3.jpg', alt: "Some Text"},
]


  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)   

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

  }, [api])

  
  
  
  return (
    <div className="w-[80%] border">
      <Carousel className="rounded-none" setApi={setApi}>
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <Card className="rounded-none">
                <CardContent className="relative h-70">
                <Image 
                className="object-cover object-center" fill alt={banner.alt} src={banner.src}/>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute flex gap-3 right-100 bottom-132">
          {banners.map((_, index) => (
          <div
          key={index}
          className={`h-3 w-3 flex ${current -1 === index ? "bg-primary border-white border-2" : "bg-muted-foreground "} rounded-full`}></div>
        ))}
      </div>
    </div>
  )
}
