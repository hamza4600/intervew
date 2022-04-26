/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images :{
//   },


// }

// module.exports = nextConfig

module.exports = {
  images: {
    domains:["rickandmortyapi.com"]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

}


// domains:["rickandmortyapi.com"]
