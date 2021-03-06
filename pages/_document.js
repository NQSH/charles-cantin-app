import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Roboto:wght@300;400;700&family=Staatliches&display=swap"
            rel="stylesheet"
          />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}