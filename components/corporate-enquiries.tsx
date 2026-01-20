import Image from 'next/image'
import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getInsights, type Insight } from '@/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface InsightCardProps {
  insight: Insight
}

function InsightCard({ insight }: InsightCardProps) {
    console.log(insight)
  const { title, description, thumbnail, isFeatured } = insight
  const imageUrl = thumbnail?.asset ? urlFor(thumbnail).quality(100).url() : null
  const altText = thumbnail?.alt || title

  return (
    <div
      className={cn(
        'relative h-[528px] rounded-lg overflow-hidden w-full',
        isFeatured ? 'col-span-3' : 'col-span-1'
      )}
    >
      {imageUrl ? (
        <Image src={imageUrl} alt={altText} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      ) : (
        <div className="w-full h-full bg-gray-200" aria-hidden="true" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-[#474747]/50 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 py-[24px] px-[32px] z-10">
        <h3 className="text-base font-semibold text-[#FEFEFE] mb-1">{title}</h3>
        {description && <p className="text-xs text-[#FEFEFE]">{description}</p>}
      </div>
    </div>
  )
}

export default async function CorporateEnquiries() {
  const insights = await getInsights()

  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-12 bg-[#F1F6FF]">
      <div className="container mx-auto">
        {/* Insights Section */}
        <div>
          <h1 className="text-[32px] font-bold text-primary-newblue mb-10">
            Sharing more insights
          </h1>
          {insights && insights.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                {insights.map((insight) => (
                  <InsightCard key={insight._id} insight={insight} />
                ))}
              </div>
              <div className="flex justify-center">
                <Button
                  variant="default"
                  className="bg-primary-newblue hover:bg-primary-mhiblue text-white font-medium px-8 py-2 rounded-full"
                >
                  View more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <p className="text-muted-foreground mb-6">No insights available.</p>
          )}
        </div>
      </div>
      <div className="gradient-eyebrow rounded-xl p-6 md:p-8 lg:p-10 container mx-auto mt-8">
        <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl mb-4">
          For corporate enquiries
        </h2>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-white flex-shrink-0" aria-hidden="true" />
          <a
            href="mailto:askus@hmimedical.com.sg"
            className="text-white text-sm md:text-base lg:text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="Send email to askus@hmimedical.com.sg"
          >
            askus@hmimedical.com.sg
          </a>
        </div>
      </div>
    </section>
  )
}
