# Rockfield Tennis Club Website Management Guide

## Table of Contents
1. [Git/GitHub Basics](#gitgithub-basics)
2. [Making Text Edits](#making-text-edits)
3. [Adding/Removing Pages](#addingremoving-pages)
4. [Modifying Menu Items](#modifying-menu-items)
5. [Image Management](#image-management)
6. [Updating News/Newsletters](#updating-newsnewsletters)
7. [Adding New Coaching Sections](#adding-new-coaching-sections)
8. [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Git/GitHub Basics

### What is Git and GitHub?
- **Git**: A version control system that tracks changes to files
- **GitHub**: A web platform that hosts Git repositories and provides collaboration tools

### Basic Git Concepts
- **Repository (Repo)**: A folder containing your project files and Git history
- **Commit**: A snapshot of your files at a specific point in time
- **Branch**: A separate line of development
- **Pull Request**: A way to propose changes to the main codebase

### Getting Started with GitHub
1. **Create a GitHub Account**: Go to [github.com](https://github.com) and sign up
2. **Fork the Repository**: Click the "Fork" button on the Rockfield Tennis Club repository
3. **Clone to Your Computer**: Download the repository to your local machine

### Basic Git Commands
```bash
# Check status of your files
git status

# Add files to staging area
git add filename.md

# Commit changes with a message
git commit -m "Updated coaching information"

# Push changes to GitHub
git push origin main

# Pull latest changes from GitHub
git pull origin main
```

---

## Making Text Edits

### Editing via GitHub Web Interface (Recommended for Non-Technical Users)

#### Step 1: Navigate to the File
1. Go to the Rockfield Tennis Club repository on GitHub
2. Navigate to the file you want to edit
3. Click on the file name to open it

#### Step 2: Edit the File
1. Click the pencil icon (✏️) in the top-right corner to edit
2. Make your changes in the text editor
3. Scroll down to see a preview of your changes

#### Step 3: Commit Your Changes
1. Add a descriptive commit message explaining what you changed
2. Click "Commit changes" to save

### Editing Markdown Files
Markdown is a simple text format that converts to formatted web pages.

#### Basic Markdown Syntax
```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

[Link text](https://example.com)

![Image alt text](image-path.jpg)
```

### Common File Locations
- **Home page content**: `src/app/page.tsx`
- **Coaching content**: `public/coaching/Coaching.md`
- **Newsletters**: `public/newsletter/`
- **Navigation**: `src/components/Header.tsx`

---

## Adding/Removing Pages

### Adding a New Page

#### Step 1: Create the Page File
1. Navigate to `src/app/` in the repository
2. Create a new folder with your page name (e.g., `events`)
3. Create a `page.tsx` file inside the folder

#### Step 2: Basic Page Template
```tsx
import { type Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for search engines.',
}

export default function PageName() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Page Title
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Page description goes here.
          </p>
        </div>
        
        {/* Add your content here */}
      </div>
    </Container>
  )
}
```

#### Step 3: Add to Navigation
See [Modifying Menu Items](#modifying-menu-items) section below.

### Removing a Page
1. Delete the page folder from `src/app/`
2. Remove the page from navigation (see below)
3. Commit your changes

---

## Modifying Menu Items

### Navigation Structure
The main navigation is located in `src/components/Header.tsx`

### Adding a Menu Item

#### Step 1: Edit Header.tsx
1. Open `src/components/Header.tsx`
2. Find the navigation sections (around lines 150-180)
3. Add your new menu item to both mobile and desktop navigation

#### Example: Adding "Events" Page
```tsx
// In the mobile navigation section
<MobileNavItem href="/events">Events</MobileNavItem>

// In the desktop navigation section  
<NavItem href="/events">Events</NavItem>
```

#### Step 2: Complete Navigation Update
You need to add the item in two places:
1. **Mobile Navigation** (around line 150)
2. **Desktop Navigation** (around line 180)

### Removing a Menu Item
1. Remove the `<NavItem>` or `<MobileNavItem>` line
2. Remove it from both mobile and desktop sections
3. Commit your changes

---

## Image Management

### Uploading Images

#### Step 1: Choose the Right Location
- **General images**: `public/`
- **Coaching images**: `public/coaching/images/`
- **Newsletter images**: `public/newsletter/`
- **Logo and branding**: `public/`

#### Step 2: Upload via GitHub
1. Navigate to the appropriate folder in the repository
2. Click "Add file" → "Upload files"
3. Drag and drop your image files
4. Add a descriptive commit message
5. Click "Commit changes"

#### Step 3: Image Best Practices
- **File formats**: Use `.jpg`, `.jpeg`, `.png`, or `.webp`
- **File sizes**: Keep images under 1MB for web performance
- **Naming**: Use descriptive names with hyphens (e.g., `tennis-court-1.jpg`)
- **Alt text**: Always provide descriptive alt text for accessibility

### Using Images in Content

#### In Markdown Files
```markdown
![Description of image](path/to/image.jpg)
```

#### In React Components
```tsx
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Description of image"
  width={600}
  height={400}
  className="rounded-lg shadow-lg"
/>
```

### Image Optimization
- The website automatically optimizes images
- Use appropriate dimensions for your use case
- Consider using `.webp` format for better compression

---

## Updating News/Newsletters

### Adding a New Newsletter

#### Step 1: Create Newsletter File
1. Navigate to `public/newsletter/` in the repository
2. Click "Add file" → "Create new file"
3. Name your file: `month - year.html` (e.g., `september - 2025.html`)

#### Step 2: Newsletter Template
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Rockfield Tennis Club Newsletter - Month Year</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #0f766e;
            border-bottom: 2px solid #0f766e;
            padding-bottom: 10px;
        }
        h2 {
            color: #0f766e;
            margin-top: 30px;
        }
        .highlight {
            background-color: #f0fdfa;
            padding: 15px;
            border-left: 4px solid #0f766e;
            margin: 20px 0;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>Rockfield Tennis Club Newsletter</h1>
    <p><strong>Month Year</strong></p>
    
    <h2>Club Updates</h2>
    <p>Your newsletter content goes here...</p>
    
    <div class="highlight">
        <h3>Important Announcement</h3>
        <p>Highlight important information here...</p>
    </div>
    
    <h2>Upcoming Events</h2>
    <ul>
        <li>Event 1 - Date and details</li>
        <li>Event 2 - Date and details</li>
    </ul>
    
    <h2>Contact Information</h2>
    <p>For more information, contact us at [contact details]</p>
</body>
</html>
```

#### Step 3: Newsletter Content Guidelines
- **Keep it concise**: Focus on important updates
- **Use clear headings**: Organize content with proper headings
- **Include images**: Add relevant photos when possible
- **Call to action**: Include contact information or next steps
- **Proofread**: Check for spelling and grammar errors

#### Step 4: Newsletter Features
- Newsletters automatically appear on the website
- They're sorted by date (newest first)
- Users can view them in a dedicated newsletter section

### Updating Existing Newsletters
1. Navigate to the newsletter file in `public/newsletter/`
2. Click the pencil icon to edit
3. Make your changes
4. Commit with a descriptive message

---

## Adding New Coaching Sections

### Understanding the Coaching Page Structure
The coaching page uses a markdown file (`public/coaching/Coaching.md`) for content management.

### Adding a New Coaching Section

#### Step 1: Edit Coaching.md
1. Navigate to `public/coaching/Coaching.md`
2. Click the pencil icon to edit
3. Add your new section at the end of the file

#### Step 2: Section Template
```markdown
## New Coaching Program

**Program Details:**
- **Dates**: [Start date] to [End date]
- **Times**: [Specific times]
- **Cost**: €[Amount] for members / €[Amount] for non-members
- **Contact**: [Coach name] at [phone number]

**Description:**
Provide a detailed description of the program, what participants will learn, and any requirements.

**How to Book:**
Explain the booking process and any deadlines.

![Program Image](images/program-image.jpg)
```

#### Step 3: Adding Images
1. Upload your image to `public/coaching/images/`
2. Reference it in your markdown using: `![Alt text](images/filename.jpg)`

#### Step 4: Section Organization
- **Use clear headings**: Start with `##` for main sections
- **Include key information**: Dates, times, costs, contact details
- **Add visual elements**: Images help make content engaging
- **Use formatting**: Bold important information, use lists for details

### Example: Adding a Junior Tennis Camp
```markdown
## 🎾 Junior Tennis Camp - Summer 2025

**Camp Details:**
- **Dates**: July 15-19, 2025
- **Times**: 9:00 AM - 12:00 PM daily
- **Ages**: 8-14 years
- **Cost**: €120 for members / €140 for non-members
- **Contact**: Coach Louise at 089 446 9236

**What's Included:**
- Professional tennis coaching
- Equipment provided (rackets available)
- Snack break included
- Certificate of participation

**Booking:**
Call or text Coach Louise to reserve your spot. Limited to 20 participants.

![Junior Camp](images/junior-camp-2025.jpg)
```

### Best Practices for Coaching Content
- **Keep it current**: Remove outdated programs
- **Include contact information**: Always provide a way to book
- **Use emojis sparingly**: They can make content more engaging
- **Be specific**: Include exact dates, times, and costs
- **Add images**: Visual content increases engagement

---

## Troubleshooting Common Issues

### Page Not Loading
**Problem**: Changes don't appear on the website
**Solution**: 
1. Check if your changes were committed to GitHub
2. Wait 5-10 minutes for deployment to complete
3. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)

### Images Not Displaying
**Problem**: Images appear broken on the website
**Solution**:
1. Check the image path in your markdown/HTML
2. Ensure the image file was uploaded to the correct folder
3. Verify the filename matches exactly (case-sensitive)

### Navigation Not Working
**Problem**: New menu items don't appear
**Solution**:
1. Check that you added the item to both mobile and desktop navigation
2. Verify the page file exists in the correct location
3. Ensure the href path matches your page folder name

### Markdown Not Rendering
**Problem**: Markdown formatting doesn't appear correctly
**Solution**:
1. Check markdown syntax (proper spacing, correct symbols)
2. Ensure the file has the correct extension (`.md`)
3. Verify the content is being loaded by the correct component

### Newsletter Not Appearing
**Problem**: New newsletter doesn't show in the list
**Solution**:
1. Check the filename format: `month - year.html`
2. Ensure the file is in the `public/newsletter/` folder
3. Wait for the page to refresh and reload

### Git Issues
**Problem**: Can't commit or push changes
**Solution**:
1. Check your internet connection
2. Ensure you have write permissions to the repository
3. Try refreshing the GitHub page
4. Contact the repository administrator if issues persist

### Content Not Updating
**Problem**: Changes made but not visible
**Solution**:
1. Check if you're editing the correct file
2. Verify your changes were saved and committed
3. Wait for deployment to complete
4. Clear browser cache and refresh

---

## Quick Reference

### File Locations
- **Home page**: `src/app/page.tsx`
- **Coaching content**: `public/coaching/Coaching.md`
- **Newsletters**: `public/newsletter/`
- **Navigation**: `src/components/Header.tsx`
- **Images**: `public/` and subfolders

### Common Commands
- **Edit file**: Click pencil icon on GitHub
- **Add new file**: Click "Add file" → "Create new file"
- **Upload files**: Click "Add file" → "Upload files"
- **Commit changes**: Scroll down and click "Commit changes"

### Contact Information
For technical support or questions about this guide, contact the website administrator.

---

*This guide is designed to help non-technical users manage the Rockfield Tennis Club website effectively. If you encounter issues not covered here, please refer to the troubleshooting section or contact support.* 