/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.thesportsdb.com',
                pathname: '/**',
            },
        ],
    },
    // Enable React strict mode for better development experience
    reactStrictMode: true,
}

module.exports = nextConfig
