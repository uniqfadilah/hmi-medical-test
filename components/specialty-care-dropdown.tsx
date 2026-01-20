"use client"

import React, { useMemo } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SpecialtyCare } from '@/lib/queries'


interface SpecialtyCareDropdownProps {
  isOpen: boolean
  specialties?: SpecialtyCare[]
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const SpecialtyCareDropdown = ({ isOpen, specialties = [], onMouseEnter, onMouseLeave }: SpecialtyCareDropdownProps) => {

  const columns = useMemo(() => {
    if (!specialties || specialties.length === 0) return [[], [], []]
    
    const itemsPerColumn = Math.ceil(specialties.length / 3)
    return [
      specialties.slice(0, itemsPerColumn),
      specialties.slice(itemsPerColumn, itemsPerColumn * 2),
      specialties.slice(itemsPerColumn * 2),
    ]
  }, [specialties])

  if (!isOpen) return null



  return (
    <div 
      className="fixed top-[155px] left-0 w-screen bg-[#F9F9F9] shadow-lg z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-[#0957CB] via-[#00AEEF] to-[#00D494]"></div>
          <div className="flex justify-between">
          <div className="flex-1 bg-white shadow-sm py-[24px] px-[145px]">
          <div className="container mx-auto ">
              <h3
              className="text-sm w-min whitespace-nowrap font-bold uppercase tracking-wider mb-6 font-inter bg-gradient-to-r from-[#0957CB] via-[#00AEEF] to-[#00D494] bg-clip-text text-transparent"
            >
              SPECIALTY CARE
            </h3>
            
            {specialties && specialties.length > 0 ? (
              <div className="flex gap-12">
                {columns.map((column, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-3.5">
                    {column.map((specialty) => {
                      const href = specialty.slug?.current 
                        ? `/specialty/${specialty.slug.current}` 
                        : '#'
                      return (
                        <Link
                          key={specialty._id}
                          href={href}
                          className="text-sm text-gray-700 hover:text-primary-newblue transition-colors font-inter whitespace-nowrap"
                        >
                          {specialty.title}
                        </Link>
                      )
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No specialties available.</p>
            )}
          </div>
          </div>

          <div className=" py-[60px] px-[71px]">
            <div className="w-[320px] bg-transparent rounded-xl  text-gray-90">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/medical-spec.webp"
                  alt="sp "
                  fill
                  className="object-cover"
                />
              </div>
              
              <h4 className="text-primary-newblue text-lg font-semibold mb-3 font-inter">
                Medical Specialties
              </h4>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed font-inter">
                Choosing the right type of specialist, depends on your condition. Begin your journey by selecting from our specialty types of care.
              </p>
              
              <Link
                href="/specialty"
                className="text-primary-newblue text-sm font-medium hover:underline inline-flex items-center gap-1 font-inter group"
              >
                See all specialties
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex container mx-auto divider divide-x ">
          {["In the News", "Our Network", "Our Specialties"].map((item) => (
   
              <h4 key={item} className="text-[#5A5A5A] text-xs font-semibold my-4 font-inter px-4">{item}</h4>
         
          ))}
        </div>
    </div>
  )
}

export default SpecialtyCareDropdown