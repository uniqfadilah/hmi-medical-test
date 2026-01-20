'use client'

import { MapPin, Phone, MessageCircle } from 'lucide-react'

export default function Maps() {
  return (
    <section className="w-full flex flex-col lg:flex-row">

      <div className="max-w-[683px] bg-[#008AD8] text-white p-8 md:p-12 lg:p-16">
        <h2 className="text-white text-sm md:text-base font-medium uppercase tracking-wide">
          FIND US
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">HMI Medical Centre</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm md:text-base">
                  12 Farrer Park Station Road, #05-01, Singapore 217565
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+6563226333" className="text-sm md:text-base hover:underline">
                  +65 6322 6333
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+6596552101" className="text-sm md:text-base hover:underline">
                  +65 9655 2101
                </a>
              </div>
                 <div>
                    <span className="font-bold text-sm md:text-base">General enquiries:</span>{' '}
                    <a
                      href="mailto:info.hmimedicalcentre@hmimedical.com"
                      className="text-sm md:text-base hover:underline break-all"
                    >
                      info.hmimedicalcentre@hmimedical.com
                    </a>
                  </div>
                  <div>
                    <span className="font-bold text-sm md:text-base">Feedback:</span>{' '}
                    <a
                      href="mailto:concierge.hmimedicalcentre@hmimedical.com"
                      className="text-sm md:text-base hover:underline break-all"
                    >
                      concierge.hmimedicalcentre@hmimedical.com
                    </a>
                  </div>
            </div>
          </div>
          
          {/* Satellite Clinic */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Satellite Clinic</h3>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm md:text-base">
                3 Mount Elizabeth, #12-14, Mount Elizabeth Medical Centre, Singapore 228510
              </p>
            </div>
          </div>
        </div>
      </div>
      
   
      <div className="w-full h-[530px] lg:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7894!2d103.8523!3d1.3127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a936c551cd%3A0x7fb4e58ad9cd826f!2sFarrer%20Park%20Station%20Rd%2C%20Singapore%20217565!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </section>
  )
}
