import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Public Play',
  description: 'Book a court for public play at Rockfield Tennis Club. Pay and play options available.',
}

export default function PublicPlay() {
  return (
    <SimpleLayout
      title="Public Play"
      intro="Book a court for public play at Rockfield Tennis Club. We offer flexible pay-and-play options for non-members."
    >
      <div className="space-y-8">
        <Card>
          <Card.Title>Pay and Play</Card.Title>
          <Card.Description>
            Enjoy tennis at Rockfield Tennis Club without a membership. Our pay-and-play option allows you to book courts on an hourly basis.
          </Card.Description>
          <div className="mt-4">
            <Button href="https://rockfieldtennisclub.ie/pay-and-play/" variant="primary">
              Book a Court
            </Button>
          </div>
        </Card>

        <Card>
          <Card.Title>Court Booking</Card.Title>
          <Card.Description>
            Reserve your preferred court time through our online booking system. Available for both members and non-members.
          </Card.Description>
          <div className="mt-4">
            <Button href="https://rockfieldtennisclub.ie/pay-and-play/" variant="secondary">
              View Availability
            </Button>
          </div>
        </Card>

        <Card>
          <Card.Title>Rates and Information</Card.Title>
          <Card.Description>
            Competitive hourly rates for court rental. All equipment and facilities included in your booking.
          </Card.Description>
          <div className="mt-4">
            <Button href="/about" variant="secondary">
              Contact for Rates
            </Button>
          </div>
        </Card>
      </div>
    </SimpleLayout>
  )
}
