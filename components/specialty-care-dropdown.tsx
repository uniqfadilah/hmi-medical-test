"use client"

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const specialties = [
  // Column 1
  [
    { name: 'Bariatric Surgery', href: '#' },
    { name: 'Cardiology', href: '#' },
    { name: 'Colorectal', href: '#' },
    { name: 'Dermatology', href: '#' },
    { name: 'Ear, Nose & Throat', href: '#' },
    { name: 'Gastroenterology', href: '#' },
  ],
  // Column 2
  [
    { name: 'Gynaecology & Obstetrics', href: '#' },
    { name: 'Family Medicine', href: '#' },
    { name: 'Internal Medicine', href: '#' },
    { name: 'Orthopaedic', href: '#' },
    { name: 'Paediatrics', href: '#' },
    { name: 'Renal Medicine', href: '#' },
  ],
  // Column 3
  [
    { name: 'Respiratory & Intensive Care Medicine', href: '#' },
    { name: 'Sleep Medicine', href: '#' },
    { name: 'Urology & Male Subfertility', href: '#' },
    { name: 'Internal Medicine', href: '#' },
  ],
]

interface SpecialtyCareDropdownProps {
  isOpen: boolean
}

const SpecialtyCareDropdown = ({ isOpen }: SpecialtyCareDropdownProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed top-[155px] left-0 w-screen bg-white shadow-lg z-50">
      <div className="h-[2px] w-full bg-gradient-to-r from-[#0957CB] via-[#00AEEF] to-[#00D494]"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-12 items-start">
          {/* Left side - Specialty Lists */}
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-[#4ade80] text-xs font-semibold uppercase tracking-wider mb-6 font-inter">
              SPECIALTY CARE
            </h3>
            
            {/* Three columns of specialties */}
            <div className="flex gap-12">
              {specialties.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-3.5">
                  {column.map((specialty) => (
                    <Link
                      key={specialty.name}
                      href={specialty.href}
                      className="text-sm text-gray-700 hover:text-primary-newblue transition-colors font-inter whitespace-nowrap"
                    >
                      {specialty.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Promotional Card */}
          <div className="w-[320px] flex-shrink-0">
            <div className="bg-white rounded-xl p-6 text-gray-900 shadow-lg border border-gray-200">
              {/* Doctor Image */}
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/specialties/xray.png"
                  alt="Medical Specialties"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Heading */}
              <h4 className="text-primary-newblue text-lg font-semibold mb-3 font-inter">
                Medical Specialties
              </h4>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed font-inter">
                Choosing the right type of specialist, depends on your condition. Begin your journey by selecting from our 16 specialty types of care.
              </p>
              
              {/* Link */}
              <Link
                href="#"
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