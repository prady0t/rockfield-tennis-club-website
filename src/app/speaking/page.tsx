import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Coaching',
  description: 'Professional tennis coaching at Rockfield Tennis Club for all skill levels.',
}

export default function Coaching() {
  return (
    <SimpleLayout
      title="Professional Tennis Coaching"
      intro="We offer comprehensive tennis coaching programs for players of all ages and skill levels. Our Tennis Ireland qualified coaches provide personalized instruction to help you improve your game."
    >
      <div className="space-y-8">
        <Card>
          <Card.Title>Adult Coaching</Card.Title>
          <Card.Description>
            Individual and group lessons for adult players at all levels. From complete beginners to advanced players looking to refine their technique.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Junior Coaching</Card.Title>
          <Card.Description>
            Fun and engaging tennis lessons for children and teenagers. We focus on developing fundamental skills while keeping the sessions enjoyable and motivating.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Beginner Programs</Card.Title>
          <Card.Description>
            Perfect for those new to tennis. Learn the basics of grip, stance, and stroke technique in a supportive environment.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Improver Sessions</Card.Title>
          <Card.Description>
            For players with some experience who want to enhance their skills, improve consistency, and develop more advanced techniques.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Junior Tennis Camps</Card.Title>
          <Card.Description>
            Seasonal camps during school holidays offering intensive tennis training combined with fun activities and social interaction.
          </Card.Description>
        </Card>

        <Card>
          <Card.Title>Contact for Booking</Card.Title>
          <Card.Description>
            To book coaching sessions or inquire about our programs, please contact us directly. We offer flexible scheduling to accommodate your needs.
          </Card.Description>
        </Card>
      </div>
    </SimpleLayout>
  )
}
