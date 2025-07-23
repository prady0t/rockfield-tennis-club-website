import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'

function CalendarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TrophyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0-.981 3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Members() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Members
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Welcome to the members section of Rockfield Tennis Club. Find everything you need to know about social tennis, competitions, and member resources.
          </p>
        </div>

        {/* Social Tennis Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <UsersIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Social Tennis
            </h2>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            You will never be stuck for a person to play tennis with at Rockfield Tennis Club! 
            Apart from all our social tennis evenings, we also run end-of-month mixed Social Tournaments, Club Championships, and arrange friendly games against nearby clubs!
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <Card.Title>Friendly Matches Against Local Clubs</Card.Title>
              <Card.Description>
                We love getting our players 'match ready', so we arrange friendly matches with local clubs. Everyone loves the chance to play someone new!
              </Card.Description>
            </Card>
            
            <Card>
              <Card.Title>Social Tennis Schedule</Card.Title>
              <Card.Description>
                Men's social evenings are held every second Monday of the month, Ladies social evenings are held every second Wednesday, with a mixed doubles event on Wednesdays from 7-9 pm on the weeks it is not held.
              </Card.Description>
            </Card>
            
            <Card>
              <Card.Title>Club Championships</Card.Title>
              <Card.Description>
                Every summer, the courts get filled with matches from one of our 14 events! Great way to meet others and enjoy some competition!
              </Card.Description>
            </Card>
          </div>
          
          {/* Sign up button */}
          <div className="mt-12 flex justify-center">
            <Button 
              href="/friday-social-signup" 
              variant="primary" 
              className="group bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Sign up for Friday Social Tennis
            </Button>
          </div>
        </div>



        {/* Senior Tennis Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <TrophyIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Senior Tennis
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card>
              <Card.Title>Club Championship</Card.Title>
              <Card.Description>
                Rockfield holds one tennis championship each year, with several levels to cater to players of all abilities. This is a great opportunity for some competitive matches and to meet other players at the club.
              </Card.Description>
            </Card>

            <Card>
              <Card.Title>Dublin Lawn Tennis Council Leagues</Card.Title>
              <Card.Description>
                Rockfield competes in the DLTC leagues in men's and ladies' tournaments. There are a number of different competitions throughout the year.
              </Card.Description>
            </Card>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <Card.Title>Winter Leagues</Card.Title>
                <Card.Description>
                  Usually between January - March. Each team consists of 3 doubles pairings, with men's games on Sunday morning and ladies' games on Sunday afternoon.
                </Card.Description>
              </Card>
              
              <Card>
                <Card.Title>Summer Leagues</Card.Title>
                <Card.Description>
                  Usually between May - June. Each team consists of 2 doubles pairings and 3 singles. Men's games on Friday evening/Saturday afternoon, and ladies' games on Tuesday/Wednesday evenings.
                </Card.Description>
              </Card>
              
              <Card>
                <Card.Title>Mixed Leagues</Card.Title>
                <Card.Description>
                  Usually between July - August. Team of 3 mixed doubles with games on Friday evenings.
                </Card.Description>
              </Card>
              
              <Card>
                <Card.Title>Floodlight Leagues</Card.Title>
                <Card.Description>
                  Usually between September - November. 4 players on each team with 1 doubles pairing and 2 singles. Captains draw names for each fixture to determine who plays singles or doubles.
                </Card.Description>
              </Card>
            </div>
          </div>
        </div>

        {/* Member Resources Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <CalendarIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Important Member Resources
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <Card.Title>Newsletters</Card.Title>
              <Card.Description>
                Stay updated with the latest club news and events through our regular newsletters.
              </Card.Description>
            </Card>
            
            <Card>
              <Card.Title>Floodlight Fees</Card.Title>
              <Card.Description>
                Floodlight fees are payable by members when booking a court after dark.
              </Card.Description>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
} 