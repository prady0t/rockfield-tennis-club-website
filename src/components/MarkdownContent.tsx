'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

interface MarkdownContentProps {
  content: string
  className?: string
}

export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  return (
    <div className={`prose prose-zinc dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          img: ({ src, alt }) => {
            if (!src) return null
            
            // Handle relative paths from markdown
            let imageSrc = src
            if (src.startsWith('../')) {
              // Convert relative path to public URL
              imageSrc = src.replace('../', '/')
            } else if (src.startsWith('./')) {
              // Convert relative path to public URL
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
        {content}
      </ReactMarkdown>
    </div>
  )
} 