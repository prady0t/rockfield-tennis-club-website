import { Suspense } from 'react'
import { Container } from '@/components/Container'
import { NewsletterClient } from '@/components/NewsletterClient'

export default function NewsletterPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Newsletters
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Stay updated with the latest club news and events through our regular newsletters.
          </p>
        </div>
        
        <Suspense fallback={
          <div className="mt-16 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              Loading newsletters...
            </p>
          </div>
        }>
          <NewsletterClient />
        </Suspense>
      </div>
    </Container>
  )
} 