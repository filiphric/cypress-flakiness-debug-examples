/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig