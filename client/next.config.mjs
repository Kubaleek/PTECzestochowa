/** @type {import('next').NextConfig} */

import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig = {
    async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: `${process.env.NEXTAUTH_URL}/auth/:path*`,
      },
      {
        source: '/api/:path*',
        destination: `${process.env.BACKEND_URL}/api/:path*`,
      },
    ];
  },

  distDir: 'build',
  reactStrictMode: true,
  
  webpack: (config, { isServer }) => {
    // Disable Webpack caching temporarily
    config.cache = {
      type: 'memory',  // Use memory-based caching
      cacheUnaffected: true,
    };

    // Server-side chunking
    if (isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
      };
    }

    // Node.js module fallbacks for the client
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    return config;
  },
};

export default nextConfig;

