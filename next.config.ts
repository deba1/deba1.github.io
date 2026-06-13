/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforces a static HTML export via 'npm run build'
  output: 'export',
  
  // Disables the default Node.js image optimization server 
  // since GitHub Pages hosts static files exclusively
  images: {
    unoptimized: true,
  },
};

export default nextConfig;