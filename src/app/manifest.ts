import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ashok Enterprises — Premium Jute Products',
    short_name: 'Ashok Jute',
    description: 'Buy premium handcrafted jute bags, eco-friendly tote bags, jute rugs, curing sheets & bulk raw jute materials. Direct from manufacturer in West Bengal, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf7f2',
    theme_color: '#2e5a27',
    icons: [
      {
        src: '/brand_logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/brand_logo_final.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
