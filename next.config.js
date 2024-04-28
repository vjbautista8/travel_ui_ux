/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV = 'production');
const nextConfig = {
  basePath: isProd ? '/travel_ui_ux' : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
