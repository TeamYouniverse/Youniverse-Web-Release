import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title></title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          {/* <link rel="icon" href="/assets/icons/favicon.svg" />
          <link rel="canonical" href="https://www.speechtime.co.kr" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="" />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" /> */}
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
