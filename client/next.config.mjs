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
};

export default nextConfig;

