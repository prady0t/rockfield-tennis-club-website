import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import Image from 'next/image'

function ShoppingBagIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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

export default function Shop() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Club Shop
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Get your official Rockfield Tennis Club branded apparel and merchandise.
          </p>
        </div>

        {/* Partnership Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <ShoppingBagIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Partnership with Camden Clothing
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                We are proud to partner with Camden Clothing to provide high-quality, 
                club-branded apparel for our members. All items feature the official 
                Rockfield Tennis Club logo and are available in a variety of sizes and styles.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CalendarIcon className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">Quarterly Ordering</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Orders are processed quarterly to ensure efficient production and delivery.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ShoppingBagIcon className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">Club Collection</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      All orders are collected from the club premises for your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://rockfield.secure-decoration.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative w-80 h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              >
                <Image
                  src="/keep-calm-play-tennis.jpg"
                  alt="Rockfield Tennis Club Shop - Click to visit online store"
                  fill
                  className="object-cover object-left"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Ordering Information */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <PhoneIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              How to Order
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <Card.Title>Contact Information</Card.Title>
              <Card.Description>
                <strong>Fiona</strong><br />
                Phone: 086 1633901<br />
                <br />
                Contact Fiona for all shop-related inquiries, orders, and questions about available merchandise.
              </Card.Description>
            </Card>
            
            <Card>
              <Card.Title>Online Shop Portal</Card.Title>
              <Card.Description>
                When the shop is active, you can place orders through our secure online portal:<br />
                <br />
                <a 
                  href="https://rockfield.secure-decoration.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300 underline"
                >
                  rockfield.secure-decoration.com
                </a>
              </Card.Description>
            </Card>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-16">
          <Card>
            <Card.Title>Important Information</Card.Title>
            <Card.Description>
              <div className="space-y-4">
                <div>
                  <strong>VAT:</strong> All prices include VAT where applicable.
                </div>
                <div>
                  <strong>Order Periods:</strong> Please check with Fiona for current order periods and deadlines.
                </div>
                <div>
                  <strong>Collection:</strong> All orders must be collected from the club premises.
                </div>
                <div>
                  <strong>Payment:</strong> Payment details will be provided when placing your order.
                </div>
              </div>
            </Card.Description>
          </Card>
        </div>

        {/* Current Order Status */}
        <div className="mt-16">
          <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <CalendarIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200">
                Current Order Period
              </h3>
            </div>
            <p className="text-teal-700 dark:text-teal-300">
              Please contact Fiona (086 1633901) for information about the current ordering period and available merchandise.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
} 