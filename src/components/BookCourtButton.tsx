import Link from 'next/link'
import clsx from 'clsx'

interface BookCourtButtonProps {
  className?: string
  href?: string
  onClick?: () => void
}

export function BookCourtButton({ 
  className, 
  href = 'https://ebookingonline.net/box/box3.php?id=391', 
  onClick 
}: BookCourtButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center gap-1.5 justify-center rounded-full px-3 py-1.5 text-xs font-medium',
    'bg-gradient-to-r from-teal-500 to-teal-600 text-white',
    'hover:from-teal-600 hover:to-teal-700',
    'active:from-teal-700 active:to-teal-800',
    'shadow-md shadow-teal-500/20 hover:shadow-teal-500/30',
    'ring-1 ring-teal-500/15 hover:ring-teal-500/25',
    'transition-all duration-150 ease-out',
    'transform hover:scale-102 active:scale-98',
    'backdrop-blur-sm',
    'dark:from-teal-400 dark:to-teal-500',
    'dark:hover:from-teal-500 dark:hover:to-teal-600',
    'dark:active:from-teal-600 dark:active:to-teal-700',
    'dark:shadow-teal-400/20 dark:hover:shadow-teal-400/30',
    'dark:ring-teal-400/15 dark:hover:ring-teal-400/25',
    className
  )

  const content = (
    <>
      <svg 
        className="h-3 w-3" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
      Book a Court
    </>
  )

  if (onClick) {
    return (
      <button 
        className={baseClasses} 
        onClick={onClick}
        type="button"
      >
        {content}
      </button>
    )
  }

  return (
    <Link 
      href={href} 
      className={baseClasses}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </Link>
  )
} 