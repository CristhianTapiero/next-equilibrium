import "./globals.css";
import { SessionWrapper } from './components/SessionWrapper'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="es">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Equilibrium - Centro de atención integral para la comunidad, servicios de estetica, spa y centro geriatrico." />
          <title>Equilibrium</title>
        </head>
        <body>
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
