import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Specialties from '@/components/specialties'
import Maps from '@/components/maps'
import CorporateEnquiries from '@/components/corporate-enquiries'
import OurSpecialist from '@/components/our-specialist'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surrface">
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home-page.webp"
            alt="HMI Community Outreach Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative h-full container mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl space-y-4">
            <p className="text-white text-sm  font-bold  uppercase tracking-wide">
              COMMUNITY OUTREACH
            </p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              HMI CARES FOR ALL<br />SINGAPOREANS
            </h1>
            
            <p
              className="text-white text-base md:text-lg mb-8 max-w-xl leading-relaxed"
              style={{
                textShadow:
                  "0px 1px 3px rgba(0,0,0,0.4), 0px 0px 25px rgba(0,0,0,0.25)"
              }}
            >
              The event marks the official launch of HMI Cares, our new community health initiative in honour of SG60.
            </p>
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 text-black border-gray-300 rounded-full px-6 py-3 h-auto font-medium text-base"
            >
              Find out more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-4">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-white text-xs md:text-sm gap-2 md:gap-0">
              <p className="text-left">HMI Cares for all Singaporeans</p>
              <p className="text-center">25 Years of Care</p>
              <p className="text-right">40 years of Total Defence</p>
            </div>
          </div>
        </div>
      </section>
      <Maps />
      <Specialties />
      <OurSpecialist />
      <CorporateEnquiries />
    </div>
  )
}

export default page