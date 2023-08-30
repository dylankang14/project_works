/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: "/api/:path*",
	// 			destination: "http://192.168.0.166:8080/api/:path*",
	// 		},
	// 	];
	// },
	output: 'standalone',
};

module.exports = nextConfig;
