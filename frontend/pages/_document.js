import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function Document() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bamboosleeping.com";

  return (
    <Html lang="en">
      <Head>
        {/* CookieYes banner */}
        {process.env.NEXT_PUBLIC_COOKIE_YES && (
          <Script
            id="cookieyes"
            type="text/javascript"
            src={`https://cdn-cookieyes.com/client_data/${process.env.NEXT_PUBLIC_COOKIE_YES}/script.js`}
            strategy="beforeInteractive"
          />
        )}

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');`}
        </Script>

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <Script
            id="ga"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        )}

        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Bamboo Sleeping" />
        <meta
          name="description"
          content="BambooSleeping: Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />

        <meta
          name="keywords"
          content="electronic drums, Alesis Strike Pro, Yamaha drum kit, drum pads, best electronic drums, used electronic drum set, beginner electronic drum kit"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="theme-color" content="#ffffff" />

        {/* Canonical URL */}
        {/* <link rel="canonical" href={siteUrl} /> */}

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bamboo Sleeping Blog - Discover luxurious, eco-friendly bamboo pillows and bedding."
        />
        <meta
          property="og:description"
          content="BambooSleeping: Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />
        <meta property="og:image" content={`${siteUrl}/logo_1250_1250.png`} />
        <meta property="og:image:width" content="1250" />
        <meta property="og:image:height" content="1250" />
        <meta property="og:site_name" content="Bamboo Sleeping" />
        <meta name="twitter:image" content={`${siteUrl}/logo_1250_1250.png`} />

        {/* Preconnect for Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        />

        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          />
        </noscript>

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="32x32" />

        {/* Canonical URL */}
        {/* <link rel="canonical" href="https://www.bamboosleeping.com" /> */}
      </Head>

      <body>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
