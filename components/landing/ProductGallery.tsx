"use client";

import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { RatingStatic } from "../ui/rating-static";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  url: string;
  price: number;
  discount_amount?: number;
  discount_precent?: number;
  image: string;
}

interface ProductGalleryProps {
  products?: GalleryItem[];
  className?: string;
}

const ProductGallery = ({

  products = [
    { 
      id: 1,
      title: "Vejos pjovimo robotas Grunder SRM3150, 1500 m²",
      price: 1124.00,
      discount_amount: 799.00,
      discount_precent: 71,
      url: "#",
      image: "/products/product1.webp",
    },
    { 
      id: 2,
      title: "Vejos pjovimo robotas Segway NAVIMOW i105, 500 m²",
      price: 877.00,
      discount_amount: 779.00,
      discount_precent: 71,
      url: "#",
      image: "/products/product2.webp",
    },
    { 
      id: 3,
      title: "Vejos pjovimo robotas Ecovacs GOAT A1600 PRO, 1600 m²",
      price: 1475.00,
      discount_amount: 1340.89,
      discount_precent: 71,
      url: "#",
      image: "/products/product3.webp",
    },
    { 
      id: 4,
      title: "Vejos pjovimo robotas Dreame A2 3000, 3000 m²",
      price: 1869.00,
      discount_amount: 1499.00,
      discount_precent: 0,
      url: "#",
      image: "/products/product4.webp",
    },
    { 
      id: 5,
      title: "Vejos pjovimo robotas Grunder SRM3150, 1500 m²",
      price: 1124.00,
      discount_amount: 799.00,
      discount_precent: 71,
      url: "#",
      image: "/products/product1.webp",
    },
    { 
      id: 6,
      title: "Vejos pjovimo robotas Segway NAVIMOW i105, 500 m²",
      price: 877.00,
      discount_amount: 779.00,
      discount_precent: 71,
      url: "#",
      image: "/products/product2.webp",
    },
    { 
      id: 7,
      title: "Vejos pjovimo robotas Ecovacs GOAT A1600 PRO, 1600 m²",
      price: 1475.00,
      discount_amount: 1340.89,
      discount_precent: 71,
      url: "#",
      image: "/products/product3.webp",
    },
    { 
      id: 8,
      title: "Vejos pjovimo robotas Dreame A2 3000, 3000 m²",
      price: 1869.00,
      discount_amount: 1499.00,
      discount_precent: 0,
      url: "#",
      image: "/products/product4.webp",
    },
  ],

  className,
}: ProductGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

    const [yellow, setYellow] = useState(3)

  return (
    <section className={cn("py-10", className)}>
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative w-full max-w-full md:left-[-1rem]"
        >
          <CarouselContent className="hide-scrollbar w-full max-w-full">
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:max-w-[452px]">
                <a
                  href={product.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-3/2 overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        {product.discount_amount && product.discount_precent 
                          ? (
                           <div className="z-100 bg-primary rounded-sm text-primary-foreground left-5 top-5 px-3 py-0.5  absolute">
                          -{product.discount_precent}%
                          </div>
                            )
                          :(
                            <></>
                            )
                        } 
            
                        <Image
                          fill
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-cover object-center"
                          />
                          <Heart className="z-100 right-5 top-5 absolute" />
                        </div>
                      </div>
                    </div>
                  </div>
                   </a>
                  <div className="mb-2 line-clamp-3 pt-4 text-lg font-bold break-words md:mb-3 md:pt-4 md:text-lg lg:pt-4 lg:text-xl">
                    {product.title}
                  </div>
                  {product.discount_amount && product.discount_precent 
                  ? (
                  <div className="mb-6 flex gap-6 line-clamp-2 text-sm text-muted-foreground md:text-base">
                  <p className="text-primary text-lg">{product.discount_amount?.toFixed(2)} €</p>
                  <p className="text-sm"><span className="line-through">{product.price.toFixed(2)}</span> €</p>
                  </div>
                  ) : (
                  <div className="mb-6 flex gap-6 line-clamp-2 text-sm text-muted-foreground md:text-base">
                  <p className="text-primary text-lg">{product.price.toFixed(2)} €</p>
                  </div> 
                  )
                  }
                  <div className="flex gap-4 items-center text-sm">
                    <RatingStatic
                    size={24}
                    precision={0.5}
                    disabled
                    value={yellow}
                    onValueChange={setYellow}
                    variant='yellow'
                    aria-label='Rating Yellow'
                    />
                    <p>(80)</p>
                  </div>
               
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { ProductGallery };
