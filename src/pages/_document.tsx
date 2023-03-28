import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head></Head>
      <body className='bg-green dark:bg-emerald-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
