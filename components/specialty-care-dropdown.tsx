"use client"

import React, { useMemo } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SpecialtyCare } from '@/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface SpecialtyCareDropdownProps {
  isOpen: boolean
  specialties?: SpecialtyCare[]
}

const SpecialtyCareDropdown = ({ isOpen, specialties = [] }: SpecialtyCareDropdownProps) => {
  // Organize specialties into 3 columns
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

  // Get first specialty for the promotional card
  const featuredSpecialty = specialties && specialties.length > 0 ? specialties[0] : null
  const thumbnailUrl = featuredSpecialty?.thumbnail?.asset
    ? urlFor(featuredSpecialty.thumbnail).quality(100).url()
    : '/specialties/xray.png'
  const thumbnailAlt = featuredSpecialty?.thumbnail?.alt || featuredSpecialty?.title || 'Medical Specialties'

  return (
    <div className="fixed top-[155px] left-0 w-screen bg-white shadow-lg z-50">
      <div className="h-[2px] w-full bg-gradient-to-r from-[#0957CB] via-[#00AEEF] to-[#00D494]"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-12 items-start">
          <div className="flex-1">
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

          <div className="w-[320px] flex-shrink-0">
            <div className="bg-white rounded-xl p-6 text-gray-900 shadow-lg border border-gray-200">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={thumbnailUrl}
                  alt={thumbnailAlt}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h4 className="text-primary-newblue text-lg font-semibold mb-3 font-inter">
                {featuredSpecialty?.title || 'Medical Specialties'}
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
      </div>
    </div>
  )
}

export default SpecialtyCareDropdown