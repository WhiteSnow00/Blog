import AuthContext from "c/AuthContext";
import { FAB } from "c/FAB";
import { Footer } from "c/Footer";
import { TrackScroll } from "c/TrackScroll";
import Script from "next/script";
import "s/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scrollbars">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="[_Kanaria_] Blog" />
        <meta name="application-name" content="[_Kanaria_] Blog" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/site.webmanifest" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" href="/icons/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="bg-neutral-900">
        <TrackScroll />
        <AuthContext>
          <FAB />
          {children}
        </AuthContext>
        <Footer />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3762669166645243"
        crossOrigin="anonymous" />
      </body>
    </html>
  );
}
