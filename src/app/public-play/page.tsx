import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import Image from 'next/image'

function ClockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CreditCardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PublicPlay() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-4xl lg:max-w-6xl text-center">
        {/* Hero Section with Image */}
        <div className="mb-16">
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/Pay-and-play.jpg' : '/Pay-and-play.jpg'}
              alt="Rockfield Tennis Club Pay and Play"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Pay and Play
              </h1>
              <p className="text-lg opacity-90">
                Book your court time and enjoy tennis at Rockfield
              </p>
            </div>
          </div>
          
          {/* Booking Button */}
          <div className="text-center">
            <Button 
              href="https://findacourt.online/?clubId=73" 
              variant="primary"
              className="text-lg px-8 py-4 bg-teal-600 hover:bg-teal-700"
            >
              Pay & Play Booking
            </Button>
          </div>
        </div>

        {/* Court Fees Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <CreditCardIcon className="h-12 w-12 text-teal-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
              Court Fees
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Competitive rates for all court types
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-teal-600">€4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-3">Hard Courts</h3>
              <p className="text-lg font-semibold text-teal-600">per hour</p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-teal-600">€8</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-3">Astro / Clay Courts</h3>
              <p className="text-lg font-semibold text-teal-600">per hour</p>
            </div>
          </div>
        </div>

        {/* Opening Hours Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <ClockIcon className="h-12 w-12 text-teal-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
              Opening Hours
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Extended hours during summer months
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Summer</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Mon - Fri:</span>
                  <span className="text-teal-600 font-semibold">9am - 9pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sat - Sun:</span>
                  <span className="text-teal-600 font-semibold">1pm - 9pm</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Winter</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Mon - Fri:</span>
                  <span className="text-teal-600 font-semibold">9am - 4pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sat - Sun:</span>
                  <span className="text-teal-600 font-semibold">1pm - 4pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-4">
                Booking Information
              </h3>
              <p className="text-teal-700 dark:text-teal-300 text-lg leading-relaxed">
                Pay and Play is now available to book online via above booking site. Booking requires an account and payment is online via credit card.
              </p>
            </div>
          </div>
        </div>

        {/* Court Layout Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <MapPinIcon className="h-12 w-12 text-teal-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
              Court Layout
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              9 courts with different surfaces to suit your preference
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">1-2</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-3">Clay Courts</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Traditional clay surface
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">3-4</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-3">Astro Courts</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Artificial grass surface
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 font-bold">5-9</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-3">Hard Courts</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Tarmac surface
              </p>
            </div>
          </div>
        </div>

        {/* General Opening Hours Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <ClockIcon className="h-12 w-12 text-teal-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
              General Opening Hours
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Standard operating hours for the club
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-teal-600 font-bold text-lg">Mon-Fri</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-3">Monday - Friday</h3>
              <p className="text-2xl font-bold text-teal-600">9am - 5pm</p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-teal-600 font-bold text-lg">Sat-Sun</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-3">Saturday - Sunday</h3>
              <p className="text-2xl font-bold text-teal-600">1pm - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
