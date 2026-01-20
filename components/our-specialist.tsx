'use client'

import Image from 'next/image'
import { ArrowRight,  } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card } from '@/components/ui/card'

const specialists = [
  {
    id: 1,
    title: 'Colon Health',
    description: 'Maintaining a healthy colon involves balanced nutrition, regular screenings, and lifestyle choices.',
    image: '/specialists/colon-health.webp',
  },
  {
    id: 2,
    title: 'Urology',
    description: 'Related to kidneys, bladder, prostate requiring specialized medical attention and treatment.',
    image: '/specialists/urology.webp',
  },
  {
    id: 3,
    title: 'Skin Health',
    description: 'Practices aimed at maintaining and enhancing the health and appearance of the skin.',
    image: '/specialists/skin-health.webp',
  },
]

export default function OurSpecialist() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24  overflow-hidden">
      <div className="absolute top-0 left-0 w-[100%] lg:w-[80%]  bg-[#F1F6FF] rounded-tr-[100px]  h-[630px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
           <p
              className="text-sm md:text-base font-medium uppercase tracking-wide mb-4 text-gradient-eyebrow inline-block"
      
            >
              OUR SPECIALISTS
            </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12  w-[100%] lg:w-[80%]">
          <div>
         
            <h2 className="text-[32px] max-w-[356px] font-bold text-primary-newblue mb-6">
              Find specialist care to your needs
            </h2>
          </div>
          
          <div className="flex flex-col justify-center">
            <p className="text-[#6E6E6E] text-base md:text-lg mb-6 leading-relaxed">
              From heart-care to aging gracefully, HMI Medical has a diverse and experienced group of doctors ready to help you in your journey to a healthier tomorrow.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-[#6E6E6E] font-medium hover:text-primary-newblue transition-colors group"
            >
              Our network of specialists
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-[12px] lg:w-min">
              {specialists.map((specialist) => (
                <CarouselItem key={specialist.id} className=" basis-1/2 lg:basis-1/3  pl-[12px] ">
                  <Card className="overflow-hidden  p-0
                   bg-transparent border-none shadow-none">
                    <div className="relative w-[230px] h-[262px] sm:h-[448px] sm:w-[392px] ">
                      <Image
                        src={specialist.image}
                        alt={specialist.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    
                    <div className="">
                      <div className="flex items-center justify-between ">
                        <h3 className="text-xl font-semibold text-[#3C3C3C] font-inter">
                          {specialist.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-[#6E6E6E]" />
                      </div>
                      <p className="text-sm text-[#6E6E6E] leading-relaxed">
                        {specialist.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
                
            <CarouselPrevious 
                className="left-2 md:-left-12 bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300 text-[#6E6E6E] shadow-md"
            />
            <CarouselNext 
              className="right-2 md:-right-12 bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300 text-[#6E6E6E] shadow-md"
            />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
