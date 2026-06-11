import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* Next.js 15.5.19 Configuration */

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    cacheControl: 'public, max-age=60, must-revalidate',
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Headers for security and performance
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ]
  },

  // Redirects (for future use)
  redirects: async () => {
    return []
  },

  // Rewrites (for future use)
  rewrites: async () => {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    }
  },

  // Webpack optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
        },
      }
    }
    return config
  },

  // Experimental features for Next.js 15
  experimental: {
    optimizePackageImports: [
      'gsap',
      'framer-motion',
      'react-icons',
      'lenis',
    ],
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Disable powered by header for security
  poweredByHeader: false,

  // Production source maps
  productionBrowserSourceMaps: false,

  // Optimize fonts
  optimizeFonts: true,

  // Compress static files
  compress: true,

  // Generate ETags
  generateEtags: true,

  // Clean dist directory
  cleanDistDir: true,

  // Trailing slash
  trailingSlash: false,

  // React strict mode (helps catch bugs)
  reactStrictMode: true,

  // SWC minify
  swcMinify: true,
}

export default nextConfig

