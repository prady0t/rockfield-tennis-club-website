import { type Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.188-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
    </svg>
  )
}

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Join As A Member - Rockfield Tennis Club',
  description:
    'Become a member of Rockfield Tennis Club and enjoy access to our world-class facilities, coaching programs, and vibrant tennis community.',
}

const membershipTiers = [
  {
    name: 'Senior Member',
    price: '€100',
    description: 'Annual Senior Membership. Play as much as you like, join in our events and sign up for group lessons!',
    image: 'SeniorMembership.webp',
    popular: false,
  },
  {
    name: 'Family Membership',
    price: '€165',
    description: 'Why not play as a family? Our family membership provides great enjoyment for the entire family! Please note over 18s living at home are considered student members if they are in 3rd level education.',
    image: 'FamilyMembership.webp',
    popular: false,
  },
  {
    name: 'Junior Member (U/18)',
    price: '€50',
    description: 'We have just opened up our membership to junior players and look forward to offering lots of fun events for these upcoming stars!',
    image: 'JuniorMembership.webp',
    popular: false,
  },
  {
    name: 'Young Adult Membership',
    price: '€60',
    description: 'Any person who is aged 18 to 23 years of age',
    image: 'Student.webp',
    popular: false,
  },
]



export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
              <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Join Rockfield Tennis Club
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
              Become part of Ireland's premier tennis community. Whether you're a beginner looking to learn or an experienced player seeking competitive play, we have the perfect membership option for you.
            </p>
          </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-center mb-12">
            Annual Membership Options
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border p-8 ${
                  tier.popular
                    ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                    : 'border-zinc-200 dark:border-zinc-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-teal-500 px-4 py-1 text-sm font-medium text-white">
                      <StarIcon className="mr-1 h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={tier.image}
                      alt={`${tier.name} illustration`}
                      width={400}
                      height={400}
                      className="h-56 w-56 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                    {tier.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {tier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Ready to Get Started?
            </h2>
            <div className="mt-6 flex justify-center">
              <Button href="https://ebookingonline.net/box/signup.php?id=391">
                Apply Online
              </Button>
            </div>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400">
              For any queries regarding membership, please contact our Membership Officer Gemma Good on 087 125 1946
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
