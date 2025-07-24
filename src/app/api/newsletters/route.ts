import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const newsletterDir = path.join(process.cwd(), 'public/newsletter')
    
    // Check if directory exists
    if (!fs.existsSync(newsletterDir)) {
      return NextResponse.json({ newsletters: [] })
    }

    // Read all files in the newsletter directory
    const files = fs.readdirSync(newsletterDir)
    
    // Filter for HTML files and create newsletter objects
    const newsletters = files
      .filter(file => file.endsWith('.html'))
      .map(file => {
        const filename = file
        const displayName = file.replace('.html', '').replace(/-/g, ' ')
        
        return {
          name: displayName,
          filename: filename,
          displayName: displayName
        }
      })
      .sort((a, b) => {
        // Sort by date if possible, otherwise alphabetically
        const dateA = new Date(a.displayName)
        const dateB = new Date(b.displayName)
        
        if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
          return dateB.getTime() - dateA.getTime() // Newest first
        }
        
        return b.displayName.localeCompare(a.displayName) // Reverse alphabetical
      })

    return NextResponse.json({ newsletters })
  } catch (error) {
    console.error('Error reading newsletter directory:', error)
    return NextResponse.json({ newsletters: [] })
  }
} 