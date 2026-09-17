import { createAPIFileRoute } from '@tanstack/react-start/api';
import { ImageResponse } from '@vercel/og';
import React from 'react';


export const APIRoute = createAPIFileRoute('/api/og')({
  GET: ({ request }) => {
    try {
      const { searchParams } = new URL(request.url);
      
      const hasTitle = searchParams.has('title');
      const title = hasTitle
        ? searchParams.get('title')?.slice(0, 100)
        : 'CryptoBeacon - Independent Cryptocurrency Research';
        
      const category = searchParams.get('category') || 'Article';

      return new ImageResponse(
        (
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              backgroundColor: '#0a0a0b', // dark surface
              padding: '60px 80px',
              fontFamily: 'sans-serif',
            }}
          >
            {/* Background decorative elements */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(200, 140, 20, 0.15) 0%, transparent 50%)',
              }}
            />
            
            {/* Header / Logo area */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#f5b301',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: '20px', height: '20px', backgroundColor: '#0a0a0b', borderRadius: '4px' }} />
              </div>
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                CryptoBeacon
              </span>
            </div>

            {/* Content area */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                marginTop: 'auto',
                marginBottom: 'auto',
                maxWidth: '900px',
              }}
            >
              <div
                style={{
                  color: '#f5b301', // primary-like color
                  fontSize: '24px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {category}
              </div>
              <div
                style={{
                  fontSize: '64px',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                {title}
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                color: '#8e8e93', // secondary text
                fontSize: '24px',
                fontWeight: 500,
              }}
            >
              <span>cryptobeacon.site</span>
              <span>Independent Research</span>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
          headers: {
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        }
      );
    } catch (e: any) {
      console.log(`${e.message}`);
      return new Response(`Failed to generate the image`, {
        status: 500,
      });
    }
  },
});
