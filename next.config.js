/** @type {import('next').NextConfig} */

// IMPORTANT: replace 'REPO_NAME' below with your actual GitHub repository name.
// e.g. if your repo is github.com/yourname/my-portfolio, set REPO_NAME = 'my-portfolio'.
// If you deploy to a USER/ORG page (repo named yourname.github.io), leave both empty strings ''.
const REPO_NAME = 'my-portfolio';

const nextConfig = {
  output: 'export',
  basePath: REPO_NAME ? `/${REPO_NAME}` : '',
  assetPrefix: REPO_NAME ? `/${REPO_NAME}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: REPO_NAME ? `/${REPO_NAME}` : '',
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'webpack-glsl-loader'
        }
      ]
    });
    return config;
  }
}

module.exports = nextConfig
