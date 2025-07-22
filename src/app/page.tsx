import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'






function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}



function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}







export default function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/RockfieldLogo.webp"
              alt="Rockfield Tennis Club Logo"
              width={300}
              height={300}
              className="w-64 h-64 object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Welcome to Rockfield Tennis Club
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Rockfield Tennis Club was established in 1983 and we are a local community club 
            that prides ourselves on our open and friendly atmosphere. We are a multi-surface 
            facility offering artificial clay courts, astro and hard courts. We have an active 
            membership of nearly 800+ members with many different options for coaching and social play.
          </p>
          <div className="mt-6 flex gap-6 justify-center">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
          
          {/* Club Features Section */}
          <div className="mt-16 sm:mt-20">
            <div className="space-y-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">9 Omni Surface Courts</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We have 2 Clay, 2 Astro and 5 Hard Courts available. We have lights on 4 of our courts.
                  </p>
                </div>
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Coaching</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We have various Tennis Ireland Coaches available to help you. Adult and Junior beginners, improvers lessons available. Group or Individual as required.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Social Tennis Evenings</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    Club Members Social Tennis evenings take place weekly. Mens Social 6-8pm Monday. Ladies Social 7-9pm Wednesday.
                  </p>
                </div>
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Pay and Play</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    Don't want to commit to a membership? We are also a Pay and Play facility. Just come along and pay... and play!
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Annual Membership</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We have Senior, Family, Student and Junior memberships options available. Membership runs from April to end of March.
                  </p>
                </div>
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Club Tournaments & Events</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We have Club Championships, internal box leagues and much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking and Contact Section */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/about" variant="primary" className="group">
              Join as Member
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
            <Button href="/articles" variant="secondary" className="group">
              Pay & Play
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
            <Button href="/speaking" variant="secondary" className="group">
              Coaching
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
        </div>
      </Container>

    </>
  )
}
