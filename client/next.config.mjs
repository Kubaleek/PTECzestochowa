/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.optimization.splitChunks = {
        chunks: 'all',
      };
  
      return config;
    },
  };
  
  export default nextConfig;
  