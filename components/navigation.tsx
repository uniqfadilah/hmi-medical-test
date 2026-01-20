"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Globe, Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import SpecialtyCareDropdown from './specialty-care-dropdown'
import { SpecialtyCare } from '@/lib/queries'

interface NavigationProps {
  specialties?: SpecialtyCare[]
}

// Constants
const LANGUAGES = ['EN', 'ID', 'ZH'] as const

const UTILITY_LINKS = [
  { label: 'About Us', href: '#' },
  { label: 'News & Resources', href: '#' },
  { label: 'Contact Us', href: '#' },
] as const

const NAVIGATION_ITEMS = [
  { label: 'Find a Doctor', href: '#' },
  { label: 'Find a Clinic', href: '#' },
  { label: 'Our Services', href: '#' },
  { label: 'Specialty Care', href: '#' },
  { label: 'Health Screening', href: '#' },
  { label: 'Medical Travel', href: '#' },
] as const

// Styles
const linkStyles = "text-sm text-gray-600 hover:text-gray-900 transition-colors"
const navLinkStyles = "px-4 py-2 text-sm text-gray-700 hover:text-primary-newblue transition-colors font-inter "

// Components
import Image from "next/image"

const Logo = () => (
     <div className="relative w-[120px] h-[48px]">
      <Image
        src="/hmi_logo.png"
        alt="HMI Medical Logo"
        fill
        className="object-contain"
        priority
        sizes="(max-width: 768px) 96px, 120px"
        quality={100}
        style={{ borderRadius: 4 }}
      />

    </div>
)

const LanguageSelector = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none">
      <Globe className="h-4 w-4" />
      <span>EN</span>
      <ChevronDown className="h-3 w-3" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      {LANGUAGES.map((lang) => (
        <DropdownMenuItem key={lang}>{lang}</DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)

const UtilityLinks = () => (
  <div className="flex items-center gap-4">
    {UTILITY_LINKS.map((link, index) => (
      <React.Fragment key={link.label}>
        <a href={link.href} className={`${linkStyles} font-inter`}>
          {link.label}
        </a>
        {index < UTILITY_LINKS.length - 1 && (
          <Separator orientation="vertical" className="h-4" />
        )}
      </React.Fragment>
    ))}
    <button
      className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
      aria-label="Search"
    >
      <Search className="h-4 w-4" />
    </button>
  </div>
)

const TopBar = () => (
  <div className="border-b border-gray-200">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-10">
        <LanguageSelector />
        <UtilityLinks />
      </div>
    </div>
  </div>
)

const MainNavigation = ({ specialties = [] }: { specialties?: SpecialtyCare[] }) => {
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false)
  const specialtyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (specialtyRef.current && !specialtyRef.current.contains(event.target as Node)) {
        setIsSpecialtyOpen(false)
      }
    }

    if (isSpecialtyOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSpecialtyOpen])

  return (
    <nav className="hidden lg:flex font-inter relative">
      <ul className="flex items-center gap-1 list-none">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.label} className="relative">
            {item.label === 'Specialty Care' ? (
              <div ref={specialtyRef} className="relative">
                <button
                  onClick={() => setIsSpecialtyOpen(!isSpecialtyOpen)}
                  className={`${navLinkStyles} font-inter hover:bg-surface hover:text-primary-newblue flex items-center gap-1`}
                  aria-expanded={isSpecialtyOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform ${isSpecialtyOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <SpecialtyCareDropdown isOpen={isSpecialtyOpen} specialties={specialties} />
              </div>
            ) : (
              <a 
                href={item.href} 
                className={`${navLinkStyles} font-inter hover:bg-surface hover:text-primary-newblue`}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Navigation = ({ specialties = [] }: NavigationProps) => {
  return (
    <header className="w-full bg-white lg:flex flex-col hidden fixed top-0 left-0 right-0 z-50">
      <div className='bg-primary-newblue text-white text-center'>
        <h5 className='text-sm font-medium py-[8px] font-inter text-[#FEFEFE]'>Discover our range of tailored health screening packages</h5>
      </div>
      <TopBar/>
      
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-[66px] justify-between h-20 ">
            <Logo />
            <MainNavigation specialties={specialties} />
            <Button className="bg-primary-newblue hover:bg-primary-newblue/90 text-white rounded-full px-6 py-2 h-auto font-medium">
              Make Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
