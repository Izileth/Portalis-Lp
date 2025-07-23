import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfólio de Seu Nome, especialista em [sua área, ex.: design gráfico, desenvolvimento web]. Veja meus projetos criativos e entre em contato!"/>

        <meta name="keywords" content="portfólio, [sua área], projetos, [seu nome], [palavras-chave relacionadas]"/>
        <meta name="robots" content="index, follow"/>

        <meta property="og:title" content="Seu Nome - Portfólio de Projetos Criativos"/>
        <meta property="og:description" content="Explore o portfólio de [Seu Nome], com projetos incríveis em [sua área]."/>
        <meta property="og:image" content="https://seusite.com/images/og-image.jpg"/>
        <meta property="og:url" content="https://seusite.com"/>
        <meta property="og:type" content="website"/>

      
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Seu Nome - Portfólio de Projetos Criativos"/>
        <meta name="twitter:description" content="Explore o portfólio de [Seu Nome], com projetos incríveis em [sua área]."/>
        <meta name="twitter:image" content="https://seusite.com/images/og-image.jpg"/>
        
        <link rel="icon" type="image/png" href="https://i.pinimg.com/1200x/eb/4f/20/eb4f207b244725523ac2fb53e429b586.jpg"/>

        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
      
        <link rel="canonical" href="https://seusite.com"/>

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
