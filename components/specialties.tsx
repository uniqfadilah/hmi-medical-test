import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { getMedicalServices } from '@/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export default async function Specialties() {
  const medicalServices = await getMedicalServices()

  if (!medicalServices || medicalServices.length === 0) {
    return (
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <h1 className="text-[32px] font-bold text-primary-newblue">Medical Specialties</h1>
        <p className="text-sm text-[#6E6E6E] max-w-[496px]">
          We prioritise reducing healthcare hassles – from department transitions to staff knowing your name.
        </p>
        <p className="mt-[36px] text-muted-foreground">No medical services available.</p>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <h1 className="text-[32px] font-bold text-primary-newblue">Medical Specialties</h1>
      <p className="text-sm text-[#6E6E6E] max-w-[496px]">
        We prioritise reducing healthcare hassles – from department transitions to staff knowing your name.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[36px]">
        {medicalServices.map((service) => {
          const imageUrl = service.icon?.asset
            ? urlFor(service.icon).quality(100).url()
            : null
          const altText = service.icon?.alt || service.title

          return (
            <Card
              key={service._id}
              className="flex border-none flex-row items-center gap-4 p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#F1F8FA] flex items-center justify-center">
                {imageUrl ? (
                  <div className="w-10 h-10 relative">
                    <Image
                      src={imageUrl}
                      alt={altText}
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base md:text-lg mb-1 text-left font-inter">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground text-left leading-relaxed font-inter">
                  {service.description}
                </p>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
