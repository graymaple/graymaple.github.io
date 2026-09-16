import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The portfolio is content-only, so emit a fully static build that can be
  // hosted on GitHub Pages without a server runtime.
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
