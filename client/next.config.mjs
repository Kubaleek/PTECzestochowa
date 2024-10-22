/** @type {import('next').NextConfig} */

import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKEND_URL}/api/:path*`,
      },
    ];
  },
  
  distDir: 'build',
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
      };
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    return config;
  },
};

// Export the configuration
export default nextConfig;
