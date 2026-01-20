import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import MobileNavigation from '@/components/mobile-navigation'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
  <>
        <Navigation />
        <MobileNavigation />
        {children}
        <Footer />
  </>
  )
}

export default layout