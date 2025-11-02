/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper static generation for Vercel
  output: 'standalone',
  
  // Enable trailing slashes for better routing
  trailingSlash: false,
  
  // Disable image optimization if not needed
  images: {
    unoptimized: true
  },
  
  // Ensure API routes work correctly
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  }
}

module.exports = nextConfig
