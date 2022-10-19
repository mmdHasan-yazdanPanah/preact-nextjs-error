
const withPreact = require('next-plugin-preact');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This lines causes error
    esmExternals: false,
  },
}

module.exports = withPreact(nextConfig)
