/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
    domains: ['https://goldendao-8f9f8.web.app/', 'http://localhost:3000/'],
  },
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/nft': { page: '/nft' },
    }
  },
}

module.exports = nextConfig
