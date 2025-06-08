/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    
    images: {
      domains: ['cdn.dummyjson.com'],
      unoptimized:true
    },
    output: 'export',


};

export default nextConfig;
