/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['www.google.co.uk','links.papareact.com', 'plataform-lookaside.fbsbx.com', 'firebasestorage.googleapis.com']
  },
}

module.exports = nextConfig
