/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: "/:path*",
	// 			destination: `http://192.168.0.168:7246/:path*`,
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
