import { Container } from '@/components/Container'

export default function FridaySocialSignup() {
  return (
    <div className="scroll-smooth">
      <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-4xl lg:max-w-none">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Friday Social Tennis Sign-up
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Sign up for our Friday night social tennis tournament. We have 20 spots available - please fill in the form below and pay your €5 to secure your place.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
              Important Information
            </h2>
            <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>• Please do not sign up if you do not intend to come</li>
              <li>• If you need to cancel, please text Gar at least 24 hours in advance</li>
              <li>• Payment options: Pay in the club or PayPal/Revolut</li>
              <li>• Cost: €5 per person</li>
            </ul>
          </div>

          <div className="w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdudi92IEt1IbxCwqblTmdO0CvLwAVXTl962MsZkLX2VooTGQ/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              title="Friday Social Tennis Sign-up Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
} 