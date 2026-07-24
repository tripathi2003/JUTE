import { ImageResponse } from 'next/og'

export const alt = 'Ashok Enterprises — Premium Jute Products India'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1b3a12 0%, #2e5a27 35%, #3d7a33 65%, #5a9a4a 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.08)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-120px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.06)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            padding: '40px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#86efac',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            -- ECO-FRIENDLY JUTE PRODUCTS --
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Ashok Enterprises
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Premium Handcrafted Jute Bags • Curing Sheets • Raw Materials
          </div>

          {/* Bottom tagline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginTop: '20px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '16px',
            }}
          >
            <span>🌿 100% Natural</span>
            <span>•</span>
            <span>🏭 Direct from Manufacturer</span>
            <span>•</span>
            <span>🇮🇳 Made in India</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
