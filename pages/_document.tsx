import Document, { Html, Head, Main, NextScript } from 'next/document';

import type { DocumentContext } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl-PL" dir="ltr">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `const e=()=>o.className+=" fonts-loaded",o=document.documentElement,a="00 1em Merriweather",n="00 1em Fira Sans";sessionStorage.fonts?e():Promise.all(["4"+a,"7"+a,"italic 4"+a,"italic 7"+a,"4"+n,"6"+n,"400 1em Fira Mono"].map(e=>document.fonts.load(e))).then(()=>{sessionStorage.fonts=!0,e()})`,
            }}
          />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
