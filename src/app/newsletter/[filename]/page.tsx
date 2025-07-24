'use client'

import { Container } from '@/components/Container'
import { NewsletterContent } from '@/components/NewsletterContent'

interface NewsletterPageProps {
  params: {
    filename: string
  }
}

export default function NewsletterPage({ params }: NewsletterPageProps) {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-4xl lg:max-w-none">
        <NewsletterContent filename={decodeURIComponent(params.filename)} />
      </div>
    </Container>
  )
} 