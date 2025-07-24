import { type Metadata } from 'next'
import { Suspense } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import { CoachingClient } from '@/components/CoachingClient'

export const metadata: Metadata = {
  title: 'Coaching',
  description: 'Professional tennis coaching at Rockfield Tennis Club for all skill levels.',
}

export default function Coaching() {
  return (
    <SimpleLayout
      title="Coaching"
      intro="Professional tennis coaching programs at Rockfield Tennis Club."
    >
      <Container className="mt-16 sm:mt-20">
        <Suspense fallback={
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <div className="text-zinc-700 dark:text-zinc-300 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                  Loading coaching information...
                </h2>
              </section>
            </div>
          </div>
        }>
          <CoachingClient />
        </Suspense>
      </Container>
    </SimpleLayout>
  )
}
