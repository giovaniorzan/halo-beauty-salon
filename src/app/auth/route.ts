import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const STATE_COOKIE = "decap_oauth_state";

export async function GET(request: NextRequest) {
  const clientId = process.env.DECAP_GITHUB_CLIENT_ID;
  const redirectUri = process.env.DECAP_OAUTH_REDIRECT_URL;

  if (!clientId || !redirectUri) {
    return new NextResponse(
      "Decap OAuth nu e configurat. Setează DECAP_GITHUB_CLIENT_ID și DECAP_OAUTH_REDIRECT_URL în Vercel.",
      { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  const provider = request.nextUrl.searchParams.get("provider");
  if (provider !== "github") {
    return new NextResponse("Provider nesuportat.", {
      status: 400,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const scope = request.nextUrl.searchParams.get("scope") || "repo";
  const state = randomBytes(24).toString("hex");

  const githubAuth = new URL("https://github.com/login/oauth/authorize");
  githubAuth.searchParams.set("client_id", clientId);
  githubAuth.searchParams.set("redirect_uri", redirectUri);
  githubAuth.searchParams.set("scope", scope);
  githubAuth.searchParams.set("state", state);

  const res = NextResponse.redirect(githubAuth);

  const secure = request.nextUrl.protocol === "https:";

  res.cookies.set(STATE_COOKIE, state, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  return res;
}
