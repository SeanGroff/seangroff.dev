import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { SITE_TITLE } from "~/lib/siteConfig";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: SITE_TITLE,
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
