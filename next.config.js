/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/EVERBREW',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.everbrew.com.br',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
