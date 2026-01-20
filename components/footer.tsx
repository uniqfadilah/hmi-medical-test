import React from 'react'
import { MapPin, Mail, ArrowRight, Linkedin, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

// Types
interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface AppStoreButton {
  platform: 'appstore' | 'googleplay'
  label: string
  sublabel: string
  href?: string
}

// Constants
const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Explore HMI',
    links: [
      { label: 'Find a Doctor', href: '#' },
      { label: 'Find a Clinic', href: '#' },
      { label: 'Medical Travel', href: '#' },
      { label: 'Corporate Healthcare', href: '#' },
      { label: 'Healthcare Education', href: '#' },
      { label: 'HMI One', href: '#' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'Health Screening', href: '#' },
      { label: 'Medical Specialties', href: '#' },
      { label: 'Day Surgery', href: '#' },
      { label: 'GP Services', href: '#' },
      { label: 'Healthier SG', href: '#' },
      { label: 'Radiology', href: '#' },
      { label: 'Vaccination', href: '#' },
      { label: 'Home Care Services', href: '#' },
      { label: 'Aesthetics Treatments', href: '#' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'About HMI Medical', href: '#' },
      { label: 'Mission & Values', href: '#' },
      { label: 'Model', href: '#' },
      { label: 'Governance', href: '#' },
      { label: 'Milestones', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'News & Resources',
    links: [
      { label: 'Latest Events', href: '#' },
      { label: 'In the News', href: '#' },
      { label: 'Health Tips', href: '#' },
    ],
  },
]

const APP_STORE_BUTTONS: AppStoreButton[] = [
  {
    platform: 'appstore',
    label: 'App Store',
    sublabel: 'Download on the',
  },
  {
    platform: 'googleplay',
    label: 'Google Play',
    sublabel: 'GET IT ON',
  },
]

const CONTACT_INFO = {
  company: 'Health Management International Pte Ltd',
  address: {
    line1: '320 Serangoon Road,',
    line2: '#18-08 Centrium Square,',
    line3: 'Singapore 218108',
  },
  email: 'askus@hmimedical.com',
}

interface FooterBottomLink {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
}

const FOOTER_BOTTOM_LINKS: FooterBottomLink[] = [
  { label: 'Linkedin', href: '#', icon: Linkedin },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'English', href: '#', icon: Globe },
]

// Styles
const linkStyles = 'text-white hover:text-white/80 text-sm transition-colors'
const sectionTitleStyles = 'text-sm font-medium text-white/50 mb-4'

// Components
const Logo = () => (
  <div className="relative w-[120px] h-[48px]">
    <Image
      src="/hmi_logo_footer.png"
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

const AppStoreIcon = ({ platform }: { platform: 'appstore' | 'googleplay' }) => {
  if (platform === 'appstore') {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    )
  }
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  )
}

const AppStoreButton = ({ platform, label, sublabel, href = '#' }: AppStoreButton) => (
  <Button
    variant="outline"
    className="bg-black/20 border-white/20 hover:bg-black/30 text-white h-auto py-2.5 px-4 justify-start"
    asChild
  >
    <Link href={href}>
      <div className="flex items-center gap-2.5">
        <AppStoreIcon platform={platform} />
        <div className="flex flex-col items-start">
          <span className="text-[10px] leading-tight">{sublabel}</span>
          <span className="text-sm font-semibold leading-tight">{label}</span>
        </div>
      </div>
    </Link>
  </Button>
)

const FooterLinkList = ({ title, links }: FooterSection) => (
  <div className="lg:col-span-1">
    <h3 className={sectionTitleStyles}>{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className={linkStyles}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const ContactSection = () => (
  <div className="lg:col-span-1">
    <div className="mb-6">
      <p className="text-white text-sm font-medium mb-6">{CONTACT_INFO.company}</p>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
          <p className="text-white text-sm leading-relaxed">
            {CONTACT_INFO.address.line1}
            <br />
            {CONTACT_INFO.address.line2}
            <br />
            {CONTACT_INFO.address.line3}
          </p>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-white text-sm hover:text-white/80 transition-colors"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </div>
    <Button
      variant="outline"
      className="border-white text-primary-mhiblue bg-white hover:bg-white/90 h-auto py-3 px-6"
    >
      Contact us
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </div>
)

const FooterBottom = () => (
  <div className="bg-[#004E89] border-t border-white/10">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white">
          {FOOTER_BOTTOM_LINKS.map((link, index) => {
            const Icon = link.icon
            const isLast = index === FOOTER_BOTTOM_LINKS.length - 1
            return (
              <React.Fragment key={link.label}>
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4" aria-hidden={true} />}
                  <Link href={link.href} className="hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </div>
                {!isLast && <span className="text-white/40" aria-hidden={true}>•</span>}
              </React.Fragment>
            )
          })}
        </div>
        <div className="text-sm text-white/80">
          Copyright © {new Date().getFullYear()} HMI Medical. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
)

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-primary-mhiblue text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo and App Store Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo />
              </div>
              <div className="mb-6 font-inter">
                <p className="text-[#FEFEFE]/50 text-sm mb-1">Download Healthcare app</p>
                <p className="text-[#FEFEFE]/50 text-sm font-medium">HMI One</p>
              </div>
              <div className="flex flex-col gap-3">
                {APP_STORE_BUTTONS.map((button) => (
                  <AppStoreButton key={button.platform} {...button} />
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            {FOOTER_SECTIONS.map((section) => (
              <FooterLinkList key={section.title} {...section} />
            ))}

            {/* Contact Section */}
            <ContactSection />
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
