'use client'

import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/RockfieldLogo.webp"
              alt="Rockfield Tennis Club Logo"
              width={400}
              height={400}
              className="w-80 h-80 object-contain"
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
          
          {/* Club Features Section */}
          <div className="mt-16 sm:mt-20">
            <div className="space-y-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-7.5A2.25 2.25 0 0 0 4.5 4.5v11.25m0 0h7.5m-7.5 0h7.5m-7.5 0v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5m-7.5 0h7.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">9 Omni Surface Courts</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We have 2 Clay, 2 Astro and 5 Hard Courts available. We have lights on 4 of our courts.
                  </p>
                </div>
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Coaching</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We have various Tennis Ireland Coaches available to help you. Adult and Junior beginners, improvers lessons available. Group or Individual as required.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Social Tennis Evenings</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    Club Members Social Tennis evenings take place weekly. Mens Social 6-8pm Monday. Ladies Social 7-9pm Wednesday.
                  </p>
                </div>
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H4.5m0 0v-.375c0-.621.504-1.125 1.125-1.125h-.375M4.5 9.75v.75m0-3v.375c0 .621.504 1.125 1.125 1.125h.375m-1.125-1.125h-.375c-.621 0-1.125.504-1.125 1.125v.375m1.125-1.125h.375c.621 0 1.125-.504 1.125-1.125V9.75m-7.5 6v.75m0-3v.375c0 .621.504 1.125 1.125 1.125h.375m-1.125-1.125h-.375c-.621 0-1.125.504-1.125 1.125v.375m1.125-1.125h.375c.621 0 1.125-.504 1.125-1.125V15.75m-7.5-6v.75m0-3v.375c0-.621.504-1.125 1.125-1.125h.375m-1.125-1.125h-.375c-.621 0-1.125.504-1.125 1.125v.375m1.125-1.125h.375c.621 0 1.125-.504 1.125-1.125V9.75m-7.5 6v.75m0-3v.375c0 .621.504 1.125 1.125 1.125h.375m-1.125-1.125h-.375c-.621 0-1.125.504-1.125 1.125v.375m1.125-1.125h.375c.621 0 1.125-.504 1.125-1.125V15.75" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Pay and Play</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    Don't want to commit to a membership? We are also a Pay and Play facility. Just come along and pay... and play!
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Annual Membership</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We have Senior, Family, Student and Junior memberships options available. Membership runs from April to end of March.
                  </p>
                </div>
                <div className="flex-1 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700/40">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0-.981 3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Club Tournaments & Events</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We have Club Championships, internal box leagues and much more.
                  </p>
                </div>
              </div>


            </div>
          </div>
          
          {/* Booking and Contact Section */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/join" variant="primary" className="group">
              Join as Member
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
            <Button href="/public-play" variant="secondary" className="group">
              Pay & Play
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
            <Button href="/about" variant="secondary" className="group">
              Contact
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>

          {/* Social Links Section */}
          <div className="mt-16 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
              Follow Us
            </h3>
            <div className="flex gap-6 justify-center">
              <SocialLink href="https://www.facebook.com/rockfieldtennisclub/" aria-label="Follow on Facebook" icon={FacebookIcon} />
            <SocialLink
                href="https://www.instagram.com/rockfieldtennisclub/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
                href="https://x.com/Rockfieldtenni1"
                aria-label="Follow on X"
                icon={XIcon}
            />
          </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 sm:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Common questions about our club and services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "Can I rent a racket?",
                    answer: "Yes, we have rackets available for rent at the clubhouse for a small fee."
                  },
                  {
                    question: "What are the opening hours?",
                    answer: "Summer: Mon-Fri 9am-9pm, Sat-Sun 1pm-9pm. Winter: Mon-Fri 9am-4pm, Sat-Sun 1pm-4pm."
                  },
                  {
                    question: "Do you have group coaching in the coming weeks?",
                    answer: "Yes, we offer regular group coaching sessions. Please contact our coaches for current schedules."
                  },
                  {
                    question: "Do you have coaching for age group \"X\" in the coming weeks?",
                    answer: "We offer coaching for all age groups. Contact us for specific age group schedules and availability."
                  },
                  {
                    question: "How do I become a member?",
                    answer: "Visit our Join page to see membership options and complete the application process online."
                  },
                  {
                    question: "Do I have to join the club to play?",
                    answer: "No, we offer Pay & Play options. You can book courts and play without membership."
                  },
                  {
                    question: "Can I join coaching sessions if I am not a member?",
                    answer: "Yes, coaching sessions are available to both members and non-members."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/40 hover:shadow-lg transition-all duration-200 cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 pr-4">
                          {faq.question}
                        </h3>
                        <svg 
                          className={clsx(
                            "h-5 w-5 text-zinc-500 transition-transform duration-200 flex-shrink-0",
                            openFaq === index && "rotate-180"
                          )}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div 
                        className={clsx(
                          "overflow-hidden transition-all duration-200 ease-in-out",
                          openFaq === index ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}
