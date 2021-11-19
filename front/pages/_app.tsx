import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'style/common'; 
import 'antd/dist/antd.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}



export default MyApp;