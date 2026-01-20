import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getSpecialtyCareBySlug } from '@/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

import { PortableTextBlock } from '@/lib/queries'

// Helper function to render portable text blocks
function renderPortableText(blocks: PortableTextBlock[]): React.ReactNode {
  if (!blocks || !Array.isArray(blocks)) return null

  return blocks.map((block, index) => {
    if (block._type !== 'block' || !block.children) {
      return null
    }

    const renderText = (children: PortableTextBlock['children'] = []): React.ReactNode[] => {
      return children
        .map((child, childIndex) => {
          if (child._type === 'span' && child.text) {
            let content: React.ReactNode = child.text
            
            if (child.marks && Array.isArray(child.marks)) {
              child.marks.forEach((mark: string) => {
                if (mark === 'strong') {
                  content = <strong key={`${index}-${childIndex}-strong`}>{content}</strong>
                } else if (mark === 'em') {
                  content = <em key={`${index}-${childIndex}-em`}>{content}</em>
                }
              })
            }
            
            return <span key={`${index}-${childIndex}`}>{content}</span>
          }
          return null
        })
        .filter((node) => node !== null) as React.ReactNode[]
    }

    const text = renderText(block.children)
    const style = block.style || 'normal'
    
    switch (style) {
      case 'h1':
        return <h1 key={index} className="text-4xl font-bold mb-4 mt-6">{text}</h1>
      case 'h2':
        return <h2 key={index} className="text-3xl font-bold mb-3 mt-5">{text}</h2>
      case 'h3':
        return <h3 key={index} className="text-2xl font-semibold mb-2 mt-4">{text}</h3>
      case 'h4':
        return <h4 key={index} className="text-xl font-semibold mb-2 mt-3">{text}</h4>
      case 'blockquote':
        return <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">{text}</blockquote>
      default:
        return <p key={index} className="mb-4 leading-relaxed text-gray-700">{text}</p>
    }
  }).filter((node) => node !== null)
}

export default async function SpecialtyPage({ params }: PageProps) {
  const { slug } = await params
  const specialty = await getSpecialtyCareBySlug(slug)

  if (!specialty) {
    notFound()
  }
console.log(specialty, "SPECIALTY")
  const thumbnailUrl = specialty.thumbnail?.asset
    ? urlFor(specialty.thumbnail).quality(100).url()
    : null
  const thumbnailAlt = specialty.thumbnail?.alt || specialty.title

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Hero Section with Thumbnail */}
      <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={thumbnailAlt}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/40"></div>
        

      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
           <Link
              href="/"
              className="inline-flex items-center gap-3 "
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back</span>
            </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-eyebrow mb-4 leading-tight ">
              {specialty.title}
            </h1>
        <div className="max-w-4xl">
          {specialty.description && Array.isArray(specialty.description) && (
            <div className="prose prose-lg max-w-none">
              {renderPortableText(specialty.description)}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
