import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

function pathnameIsAsset(pathname: string) {
  return /\.(ico|png|jpe?g|gif|svg|webp|woff2?|ttf|txt|xml|html|webmanifest)$/i.test(
    pathname,
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (pathnameIsAsset(pathname)) {
    return NextResponse.next();
  }

  const first = pathname.split("/")[1];
  if (first && isLocale(first)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", pathname);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Includere esplicitamente `/` così il redirect locale copre anche la root in tutti i hosting.
  matcher: ["/", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
