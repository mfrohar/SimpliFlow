/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Base path matches the GitHub repo name
  basePath: '/SimpliFlow',

  // Image optimization is not available in static export
  images: {
    unoptimized: true,
  },

  // Required for static hosting compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
