/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/EVERBREW' : '',
  generateBuildId: async () => Date.now().toString(),
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
