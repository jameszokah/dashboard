
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdn.faceio.net/fio.js"
          strategy="beforeInteractive"
          onReady={() => {
            window.faceio = new window.faceIO("7ea8b03d76eacd3700efe2198849f39a");
          }}
        ></Script>
      </body>
    </Html>
  )
}