import "./globals.css";
import { SessionWrapper } from '../components/SessionWrapper'
import Navbar from '../assets/Navbar'
import Footer from '../assets/Footer'

export default function RootLayout({
  children,
}:{
  children: React.ReactNode}) {
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
          <div className="page-structure">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
