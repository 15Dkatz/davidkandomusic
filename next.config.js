/** @type {import('next').NextConfig} */
// appDir: true allows esLint to run on the /app dir
const nextConfig = {
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
