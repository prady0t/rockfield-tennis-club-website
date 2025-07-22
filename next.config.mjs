import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    unoptimized: true,
  },
  // IMPORTANT: Set basePath to your repository name for GitHub Pages (production only)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/rockfield-tennis-club-website',
    assetPrefix: '/rockfield-tennis-club-website/',
  }),
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
