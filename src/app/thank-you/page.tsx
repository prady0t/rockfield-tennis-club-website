import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your interest in Rockfield Tennis Club.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thank You"
      intro="Thank you for your interest in Rockfield Tennis Club. We appreciate you taking the time to learn more about our facilities and services. We look forward to welcoming you to our club soon!"
    />
  )
}
