'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export function CoachingContent() {
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [useMarkdown, setUseMarkdown] = useState(false)

  useEffect(() => {
    // Try to fetch the markdown file
    fetch('/coaching/Coaching.md')
      .then(response => response.text())
      .then(content => {
        setMarkdownContent(content)
        setUseMarkdown(true)
      })
      .catch(() => {
        // Fallback to static content if markdown can't be loaded
        setUseMarkdown(false)
      })
  }, [])

  if (useMarkdown && markdownContent) {
    return (
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            img: ({ src, alt }) => {
              if (!src) return null
              
              // Handle relative paths from markdown
              let imageSrc = src
              if (src.startsWith('../')) {
                imageSrc = src.replace('../', '/')
              } else if (src.startsWith('./')) {
                imageSrc = src.replace('./', '/')
              }
              
              return (
                <div className="my-8 flex justify-center">
                  <Image
                    src={imageSrc}
                    alt={alt || ''}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )
            },
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 mt-8">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-3 mt-6">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-zinc-800 dark:text-zinc-200">
                {children}
              </em>
            ),
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    )
  }

  // Static fallback content
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="text-zinc-700 dark:text-zinc-300 space-y-8">
        {/* Junior Corner Section */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            Junior Corner
          </h2>
          
          <div className="space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Coach Louise will be hosting Junior Friday club on July 11th and July 18th.🎉🎾🍕
            </p>
            
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              The event starts at 17:00 and finishes at 18:15! 🕔🎾
            </p>
            
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              For any further information see above or contact Coach Louise or Robert McCarthy ℹ️
            </p>
          </div>
          
          <div className="my-8 flex justify-center">
            <Image
              src="/coaching/images/junior_friday.jpeg"
              alt="Junior Friday Tennis Club"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Adult Tennis Camp Section */}
        <section className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            🌟 Adult Tennis Camp – Sunday July 20th
          </h2>
          
          <div className="space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Master your core technique and learn how to play doubles like a pro! No racket? No problem – we'll provide one.
            </p>
            
            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 space-y-2">
              <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                🕧 12:30–3pm | €40 members / €45 non-members
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                📞 Call/text 089 446 9236 to book your place!
              </p>
            </div>
          </div>
          
          <div className="my-8 flex justify-center">
            <Image
              src="/coaching/images/adult-tennis-camps.jpeg"
              alt="Adult Tennis Camp"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
      </div>
    </div>
  )
} 