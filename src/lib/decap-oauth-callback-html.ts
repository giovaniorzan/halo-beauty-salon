/**
 * HTML returned on /callback for Decap CMS (NetlifyAuthenticator handshake).
 * @see https://unpkg.com/decap-cms-lib-auth@3.0.0/dist/esm/netlify-auth.js
 */

export function decapOAuthCallbackPage(
  variant: "success" | "error",
  payload: { token: string; provider: "github" } | { message: string },
  allowedOrigins: string[],
): string {
  const provider = "github";
  const fullMessage =
    variant === "success"
      ? `authorization:${provider}:success:${JSON.stringify(payload)}`
      : `authorization:${provider}:error:${JSON.stringify(payload)}`;

  const originsJson = JSON.stringify(allowedOrigins);

  return `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Autentificare Decap</title>
</head>
<body>
  <script>
(function () {
  var origins = ${originsJson};
  function allowed(o) {
    for (var i = 0; i < origins.length; i++) {
      if (origins[i] === o) return true;
    }
    return false;
  }
  function receiveMessage(e) {
    if (!allowed(e.origin)) {
      console.warn("[Decap OAuth] Origine respinsă:", e.origin);
      return;
    }
    window.opener.postMessage(${JSON.stringify(fullMessage)}, e.origin);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:${provider}", "*");
})();
  </script>
</body>
</html>`;
}
