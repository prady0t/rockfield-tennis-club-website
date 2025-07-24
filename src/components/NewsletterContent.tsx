'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface NewsletterContentProps {
  filename: string
}

export function NewsletterContent({ filename }: NewsletterContentProps) {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch the newsletter content
    const basePath = process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website' : ''
    fetch(`${basePath}/newsletter/${encodeURIComponent(filename)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Newsletter not found')
        }
        return response.text()
      })
      .then(htmlContent => {
        setContent(htmlContent)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching newsletter content:', error)
        setError('Failed to load newsletter content')
        setLoading(false)
      })
  }, [filename])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-zinc-600 dark:text-zinc-400">Loading newsletter...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <Link 
          href="/newsletter"
          className="text-teal-500 dark:text-teal-400 hover:underline"
        >
          ← Back to Newsletters
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link 
          href="/newsletter"
          className="text-teal-500 dark:text-teal-400 hover:underline flex items-center gap-2"
        >
          ← Back to Newsletters
        </Link>
      </div>
      
      <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-8">
        <div 
          className="prose prose-zinc dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
} 