import { NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};

export function middleware(req: NextRequest) {
	if (!req.url.includes("/login") && !req.cookies.has("AccessToken")) {
		const url = req.nextUrl.clone();
		url.pathname = "/login";
		url.search = "";

		return NextResponse.redirect(url);
	}
}
