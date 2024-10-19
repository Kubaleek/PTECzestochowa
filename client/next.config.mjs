/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
    };

    return config;
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
