/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 90 is used by the screenshot lightbox, where detail matters
    qualities: [75, 90],
  },
};

export default nextConfig;
