import Algolia from '@/algolia.config'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href={`https://${Algolia.APP_ID}-dsn.algolia.net`} crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap" />
          {process.env.NODE_ENV === 'production' ? (
            <>
              <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
              <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
              <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
              <link rel="manifest" href="/favicon/manifest.json" />
            </>
          ) : (
            <>
              <link rel="icon" href="/favicon/dev/favicon.ico" sizes="any" />
              <link rel="icon" href="/favicon/dev/icon.svg" type="image/svg+xml" />
              <link rel="apple-touch-icon" href="/favicon/dev/apple-touch-icon.png" />
              <link rel="manifest" href="/favicon/dev/manifest.json" />
            </>
          )}
          <meta name="msapplication-TileColor" content="#E25822" />
          <meta name="theme-color" content="#E25822" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
