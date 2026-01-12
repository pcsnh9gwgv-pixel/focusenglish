import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const PUBLIC_ROUTES = new Set([
  "/",
  "/diagnostico",
  "/lecciondemuestra",
]);

function isBlogRoute(pathname: string) {
  return pathname === "/blog" || pathname.startsWith("/blog/");
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Público
  if (PUBLIC_ROUTES.has(pathname) || isBlogRoute(pathname)) {
    return NextResponse.next();
  }

  // Solo protegemos la zona premium /app/*
  if (!pathname.startsWith("/app")) {
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Supabase recomienda validar el usuario en server con getUser()
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = "/acceder";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ["/app/:path*"],
};
