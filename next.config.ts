import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://images.unsplash.com;
  font-src 'self' data:;
  connect-src 'self' blob: https://images.unsplash.com;
  media-src 'self' blob:;
  object-src 'none';
  frame-src 'self' https://wa.me;
  worker-src 'self' blob:;
  child-src 'self' blob:;
  base-uri 'self';
  form-action 'self' https://wa.me;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), fullscreen=(self)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
