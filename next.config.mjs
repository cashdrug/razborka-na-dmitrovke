/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack: (config, { isServer }) => { // Правило для шрифтов
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    });
    return config;
  },
};

export default nextConfig;