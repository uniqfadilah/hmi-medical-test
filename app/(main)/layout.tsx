import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import MobileNavigation from '@/components/mobile-navigation'
import React from 'react'
import { getSpecialtyCare } from '@/lib/queries'

const layout = async ({children}: {children: React.ReactNode}) => {
  const specialties = await getSpecialtyCare()
  
  return (
  <>
        <Navigation specialties={specialties} />
        <MobileNavigation specialties={specialties} />
        {children}
        <Footer />
  </>
  )
}

export default layout