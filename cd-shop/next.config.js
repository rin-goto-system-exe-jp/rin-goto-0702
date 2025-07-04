/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/rin-goto-0702' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rin-goto-0702/' : '',
  distDir: 'out',
}

module.exports = nextConfig