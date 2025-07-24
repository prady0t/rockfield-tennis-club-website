'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card } from '@/components/Card'
import { NewsletterContent } from '@/components/NewsletterContent'

interface Newsletter {
  name: string
  filename: string
  displayName: string
}

export function NewsletterClient() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const selectedNewsletter = searchParams.get('file')

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

  // If a specific newsletter is selected, show it
  if (selectedNewsletter) {
    return (
      <div className="mx-auto max-w-4xl lg:max-w-none">
        <NewsletterContent filename={selectedNewsletter} />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="mt-16 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          Loading newsletters...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-16 text-center">
        <p className="text-red-600 dark:text-red-400">
          {error}
        </p>
      </div>
    )
  }

  if (newsletters.length === 0) {
    return (
      <div className="mt-16 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          No newsletters available at the moment. Check back soon for updates!
        </p>
      </div>
    )
  }

  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {newsletters.map((newsletter, index) => (
        <Card key={index} className="flex flex-col">
          <Card.Title>
            <a 
              href={`/newsletter?file=${encodeURIComponent(newsletter.filename)}`}
              className="text-teal-500 dark:text-teal-400 hover:underline"
            >
              {newsletter.displayName}
            </a>
          </Card.Title>
          <Card.Description>
            Click to read the full newsletter
          </Card.Description>
        </Card>
      ))}
    </div>
  )
} 