'use client'

import { useEffect, useState } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'

interface Newsletter {
  name: string
  filename: string
  displayName: string
}

export default function NewsletterPage() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const basePath = process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website' : ''
    fetch(`${basePath}/api/newsletters`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch newsletters')
        }
        return response.json()
      })
      .then(data => {
        setNewsletters(data.newsletters || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching newsletters:', error)
        setError('Failed to load newsletters')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Container className="mt-16 sm:mt-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Newsletters
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
              Loading newsletters...
            </p>
          </div>
        </div>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="mt-16 sm:mt-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Newsletters
            </h1>
            <p className="mt-6 text-lg text-red-600 dark:text-red-400">
              {error}
            </p>
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Newsletters
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Stay updated with the latest club news and events through our regular newsletters.
          </p>
        </div>

        {newsletters.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              No newsletters available at the moment. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsletters.map((newsletter, index) => (
              <Card key={index} className="flex flex-col">
                <Card.Title>
                  <Link 
                    href={`/newsletter/${encodeURIComponent(newsletter.filename)}`}
                    className="text-teal-500 dark:text-teal-400 hover:underline"
                  >
                    {newsletter.displayName}
                  </Link>
                </Card.Title>
                <Card.Description>
                  Click to read the full newsletter
                </Card.Description>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
} 