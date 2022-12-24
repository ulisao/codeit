/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  images: {
    domains: ["cloudflare-ipfs.com", "cdn.discordapp.com", "tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600", "tailwindui.com", "images.unsplash.com"],
    hostnames: ["tailwindui.com", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: 'img/logos/workflow-mark.svg?color=indigo&shade=600',
      },
    ],
  }
};
