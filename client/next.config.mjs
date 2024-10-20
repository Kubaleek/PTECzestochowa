/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
    };

    return config;
  },
  experimental: {
    missingSuspenseWithCSRBailout: false, 
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
