import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import Image from 'next/image'

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Hero Image Section */}
        <div className="mb-16">
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/keepcalm-7-scaled.jpg' : '/keepcalm-7-scaled.jpg'}
              alt="Rockfield Tennis Club"
              fill
              className="object-contain bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Contact Rockfield Tennis Club
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you're interested in membership, coaching, or just want to learn more about our club, please don't hesitate to get in touch.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <Card.Title className="text-xl mb-3">General Inquiries</Card.Title>
            <Card.Description>
              For general questions about the club, facilities, or services, please contact us through our main office.
            </Card.Description>
          </Card>

          <Card className="p-6">
            <Card.Title className="text-xl mb-3">Membership Information</Card.Title>
            <Card.Description>
              Interested in joining Rockfield Tennis Club? We offer various membership options including Senior, Family, Student, and Junior memberships.
            </Card.Description>
          </Card>

          <Card className="p-6">
            <Card.Title className="text-xl mb-3">Coaching Bookings</Card.Title>
            <Card.Description>
              To book coaching sessions or inquire about our coaching programs, please contact our coaching team directly.
            </Card.Description>
          </Card>

          <Card className="p-6">
            <Card.Title className="text-xl mb-3">Court Bookings</Card.Title>
            <Card.Description>
              Members can book courts online through our booking system. For non-members, pay-and-play is available based on court availability.
            </Card.Description>
          </Card>

          <Card className="p-6">
            <Card.Title className="text-xl mb-3">Social Tennis</Card.Title>
            <Card.Description>
              Join our social tennis evenings! Men's social on Monday 6-8pm and Ladies social on Wednesday 7-9pm.
            </Card.Description>
          </Card>

          <Card className="p-6">
            <Card.Title className="text-xl mb-3">Visit Us</Card.Title>
            <Card.Description>
              Come and see our facilities in person. We're located in a convenient location with 9 omni-surface courts including clay, astro, and hard courts.
            </Card.Description>
          </Card>
        </div>
      </div>
    </Container>
  )
}
