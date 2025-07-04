/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/rin-goto-0702',
  assetPrefix: '/rin-goto-0702/',
}

module.exports = nextConfig