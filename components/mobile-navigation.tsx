"use client"

import React, { useState } from 'react'
import { Menu, X, Search, Globe, ChevronRight, ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'
import { SpecialtyCare } from '@/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface MobileNavigationProps {
  specialties?: SpecialtyCare[]
}

// Constants
const NAVIGATION_ITEMS = [
  { label: 'Find a Doctor', href: '#', hasArrow: false },
  { label: 'Find a Clinic', href: '#', hasArrow: false },
  { label: 'Our Services', href: '#', hasArrow: true },
  { label: 'Specialty Care', href: '#', hasArrow: true },
  { label: 'Health Screening', href: '#', hasArrow: false },
  { label: 'Medical Travel', href: '#', hasArrow: true },
] as const

const UTILITY_LINKS = [
  { label: 'About Us', href: '#', hasArrow: true },
  { label: 'News & Resources', href: '#', hasArrow: true },
  { label: 'Contact Us', href: '#', hasArrow: false },
] as const


const Logo = () => (
  <div className="relative w-[120px] h-[48px]">
    <Image
      src="/hmi_logo.png"
      alt="HMI Medical Logo"
      fill
      className="object-contain"
      priority
      sizes="(max-width: 768px) 120px, 120px"
      quality={100}
      style={{ borderRadius: 4 }}
    />
  </div>
)


const MobileNavigation = ({ specialties = [] }: MobileNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedNav, setSelectedNav] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setSelectedNav(null)
  }

  const toggleNav = (navKey: string) => {
    setSelectedNav(selectedNav === navKey ? null : navKey)
  }

  const goBack = () => {
    setSelectedNav(null)
  }

  const getNavTitle = (navKey: string | null) => {
    switch (navKey) {
      case 'specialty-care':
        return 'Specialities & Treatments'
      case 'services':
        return 'Our Services'
      case 'medical-travel':
        return 'Medical Travel'
      case 'language':
        return 'Language'
      case 'about-us':
        return 'About Us'
      case 'news-resources':
        return 'News & Resources'
      default:
        return ''
    }
  }

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* Top Banner */}
      <div className='bg-primary-newblue text-white text-center'>
        <h5 className='text-sm font-medium py-[8px] font-inter text-[#FEFEFE]'>
          Discover our range of tailored health <br /> screening packages
        </h5>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="flex items-center gap-4">
              <button
                className="text-white hover:text-gray-200 transition-colors focus:outline-none"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-200 transition-colors focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={closeMenu} />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {!selectedNav && <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Logo />
            <button
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Make Appointment CTA */}
          <div className="bg-primary-newblue px-4 py-3">
            <button
              onClick={closeMenu}
              className="w-full flex items-center justify-between text-white hover:text-gray-200 transition-colors"
            >
              <span className="font-medium">Make Appointment</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.label === 'Specialty Care' ? (
                    <button
                      onClick={() => toggleNav('specialty-care')}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-surface hover:text-primary-newblue transition-colors rounded-md"
                      aria-expanded={selectedNav === 'specialty-care'}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          selectedNav === 'specialty-care' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  ) : item.label === 'Our Services' ? (
                    <button
                      onClick={() => toggleNav('services')}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-surface hover:text-primary-newblue transition-colors rounded-md"
                      aria-expanded={selectedNav === 'services'}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          selectedNav === 'services' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  ) : item.label === 'Medical Travel' ? (
                    <button
                      onClick={() => toggleNav('medical-travel')}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-surface hover:text-primary-newblue transition-colors rounded-md"
                      aria-expanded={selectedNav === 'medical-travel'}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          selectedNav === 'medical-travel' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={`block px-4 py-3 text-sm text-gray-700 hover:bg-surface hover:text-primary-newblue transition-colors rounded-md ${
                        item.hasArrow ? 'flex items-center justify-between' : ''
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasArrow && <ChevronRight className="h-4 w-4" />}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Utility Links */}
          <div className="px-4 py-4 border-t border-gray-200">
            <ul className="space-y-2">
              {/* Language Selector */}
              <li>
                <button
                  onClick={() => toggleNav('language')}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  aria-expanded={selectedNav === 'language'}
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>English</span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      selectedNav === 'language' ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              </li>

              {/* Other Utility Links */}
              {UTILITY_LINKS.map((link) => (
                <li key={link.label}>
                  {link.label === 'About Us' ? (
                    <button
                      onClick={() => toggleNav('about-us')}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      aria-expanded={selectedNav === 'about-us'}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          selectedNav === 'about-us' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  ) : link.label === 'News & Resources' ? (
                    <button
                      onClick={() => toggleNav('news-resources')}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      aria-expanded={selectedNav === 'news-resources'}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          selectedNav === 'news-resources' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>}

        {!!selectedNav && (
          <div className="flex flex-col h-full">
            {/* Header with Back Button and Title */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={goBack}
                  className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
                  aria-label="Go back"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h2 className="text-base font-medium text-gray-900 font-inter">
                  {getNavTitle(selectedNav)}
                </h2>
              </div>
              <button
                onClick={closeMenu}
                className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content based on selectedNav */}
            {selectedNav === 'specialty-care' && (
              <div className="flex-1 overflow-y-auto">
                {/* Image Section */}
                {specialties && specialties.length > 0 && specialties[0]?.thumbnail && (
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={urlFor(specialties[0].thumbnail).quality(100).url()}
                      alt={specialties[0].thumbnail.alt || specialties[0].title || 'Medical Specialties'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* See All Specialties Link */}
                <div className="px-4 py-4 border-b border-gray-200">
                  <Link
                    href="/specialty"
                    onClick={closeMenu}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-primary-newblue transition-colors"
                  >
                    <span>See all specialties</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Specialties List */}
                <div className="px-4 py-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 font-inter">
                    SPECIALITIES & TREATMENTS
                  </h3>
                  {specialties && specialties.length > 0 ? (
                    <ul className="space-y-3">
                      {specialties.map((specialty) => {
                        const href = specialty.slug?.current 
                          ? `/specialty/${specialty.slug.current}` 
                          : '#'
                        return (
                          <li key={specialty._id}>
                            <Link
                              href={href}
                              onClick={closeMenu}
                              className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1"
                            >
                              {specialty.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm">No specialties available.</p>
                  )}
                </div>
              </div>
            )}

            {selectedNav === 'services' && (
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 font-inter">
                  OUR SERVICES
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      General Services
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Emergency Services
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Outpatient Services
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Inpatient Services
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Diagnostic Services
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Surgical Services
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {selectedNav === 'medical-travel' && (
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 font-inter">
                  MEDICAL TRAVEL
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Medical Travel Packages
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Travel Arrangements
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Visa Assistance
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Accommodation
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {selectedNav === 'language' && (
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 font-inter">
                  SELECT LANGUAGE
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button onClick={closeMenu} className="block w-full text-left text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      EN
                    </button>
                  </li>
                  <li>
                    <button onClick={closeMenu} className="block w-full text-left text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      ID
                    </button>
                  </li>
                  <li>
                    <button onClick={closeMenu} className="block w-full text-left text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      ZH
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {selectedNav === 'about-us' && (
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 font-inter">
                  ABOUT US
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Leadership Team
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {selectedNav === 'news-resources' && (
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 font-inter">
                  NEWS & RESOURCES
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Latest News
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Health Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Patient Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-primary-newblue transition-colors py-1">
                      Press Releases
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default MobileNavigation
