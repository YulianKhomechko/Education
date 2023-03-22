// _document allows you to customize entire html document

import { Html, Main, NextScript, Head } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="overlay"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
