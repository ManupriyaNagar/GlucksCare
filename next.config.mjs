// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true, 
//   // experimental: {
//   //   appDir: true,
//   // },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
