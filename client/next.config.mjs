/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: false,
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
    };

    return config;
  },
  experimental: {
    missingSuspenseWithCSRBailout: false, 
    workerThreads: false,
    cpus: 4,
  },
};

export default nextConfig;
