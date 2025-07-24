import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import { CoachingContent } from '@/components/CoachingContent'

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
        <CoachingContent />
      </Container>
    </SimpleLayout>
  )
}
