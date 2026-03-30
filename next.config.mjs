/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      /** Browsers request `/favicon.ico` by default; serve the same asset as `app/icon.png`. */
      { source: "/favicon.ico", destination: "/icon.png" },
    ];
  },
};

export default nextConfig;
