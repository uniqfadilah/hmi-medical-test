import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
  <>
        <Navigation />
        {children}
        <Footer />
  </>
  )
}

export default layout