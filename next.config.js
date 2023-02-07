/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `https://192.168.0.166:7131/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
