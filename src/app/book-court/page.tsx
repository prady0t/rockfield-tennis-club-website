import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function BookCourtPage() {
  return (
    <SimpleLayout
      title="Book a Court"
      intro="Reserve your court time at Rockfield Tennis Club. Members can pre-book courts online, while Pay & Play guests can check availability on arrival."
    >
      <Container className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800/50">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                For Members
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Club members can pre-book courts using our online booking system. 
                You'll need your membership credentials to access the booking portal.
              </p>
              <button className="inline-flex items-center gap-2 justify-center rounded-full px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-200">
                Book Online (Members Only)
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800/50">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Pay & Play
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Non-members are welcome to play on a Pay & Play basis. 
                Courts are available based on availability at the time of arrival.
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                <strong>Note:</strong> No advance booking available for Pay & Play guests.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800/50">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Court Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Clay Courts</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">2 courts available</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Astro Courts</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">2 courts available</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Hard Courts</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">5 courts available (4 with lights)</p>
            </div>
          </div>
        </div>
      </Container>
    </SimpleLayout>
  )
} 