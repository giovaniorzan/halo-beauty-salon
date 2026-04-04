import { NextRequest, NextResponse } from "next/server";

import { decapOAuthCallbackPage } from "@/lib/decap-oauth-callback-html";

const STATE_COOKIE = "decap_oauth_state";

function parseAllowedOrigins(): string[] {
  const raw = process.env.DECAP_ALLOWED_ORIGINS;
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function GET(request: NextRequest) {
  const clientId = process.env.DECAP_GITHUB_CLIENT_ID;
  const clientSecret = process.env.DECAP_GITHUB_CLIENT_SECRET;
  const redirectUri = process.env.DECAP_OAUTH_REDIRECT_URL;
  const allowedOrigins = parseAllowedOrigins();

  if (!clientId || !clientSecret || !redirectUri) {
    return new NextResponse(
      "Lipsește DECAP_GITHUB_CLIENT_ID, DECAP_GITHUB_CLIENT_SECRET sau DECAP_OAUTH_REDIRECT_URL în Vercel.",
      { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  if (!allowedOrigins.length) {
    return new NextResponse(
      "Lipsește DECAP_ALLOWED_ORIGINS în Vercel (ex: https://site-ul-tau.vercel.app — aceeași origine ca la base_url din config.yml).",
      { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const cookieState = request.cookies.get(STATE_COOKIE)?.value;

  if (!code || !state || !cookieState || state !== cookieState) {
    const res = new NextResponse(
      decapOAuthCallbackPage("error", { message: "Sesiune OAuth invalidă sau expirată. Încearcă din nou din /admin." }, allowedOrigins),
      { headers: { "Content-Type": "text/html; charset=utf-8" } },
    );
    res.cookies.delete(STATE_COOKIE);
    return res;
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  });

  const tokenJson = (await tokenRes.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  const res = new NextResponse(
    tokenJson.access_token
      ? decapOAuthCallbackPage(
          "success",
          { token: tokenJson.access_token, provider: "github" },
          allowedOrigins,
        )
      : decapOAuthCallbackPage(
          "error",
          {
            message:
              tokenJson.error_description ||
              tokenJson.error ||
              "GitHub nu a returnat token (verifică Client ID/Secret și callback URL).",
          },
          allowedOrigins,
        ),
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );

  res.cookies.delete(STATE_COOKIE);
  return res;
}
