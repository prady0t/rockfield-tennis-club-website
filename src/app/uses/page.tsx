import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Rockfield Tennis Club for membership, coaching, or general inquiries.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Contact Rockfield Tennis Club"
      intro="We'd love to hear from you! Whether you're interested in membership, coaching, or just want to learn more about our club, please don't hesitate to get in touch."
    >
      <div className="space-y-8">
        <Card>
          <Card.Title>General Inquiries</Card.Title>
          <Card.Description>
            For general questions about the club, facilities, or services, please contact us through our main office.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Membership Information</Card.Title>
          <Card.Description>
            Interested in joining Rockfield Tennis Club? We offer various membership options including Senior, Family, Student, and Junior memberships.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Coaching Bookings</Card.Title>
          <Card.Description>
            To book coaching sessions or inquire about our coaching programs, please contact our coaching team directly.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Court Bookings</Card.Title>
          <Card.Description>
            Members can book courts online through our booking system. For non-members, pay-and-play is available based on court availability.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Social Tennis</Card.Title>
          <Card.Description>
            Join our social tennis evenings! Men's social on Monday 6-8pm and Ladies social on Wednesday 7-9pm.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Visit Us</Card.Title>
          <Card.Description>
            Come and see our facilities in person. We're located in a convenient location with 9 omni-surface courts including clay, astro, and hard courts.
          </Card.Description>
        </Card>
      </div>
    </SimpleLayout>
  )
}
