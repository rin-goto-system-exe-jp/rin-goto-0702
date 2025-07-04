/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/rin-goto-0702' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rin-goto-0702/' : '',
}

module.exports = nextConfig