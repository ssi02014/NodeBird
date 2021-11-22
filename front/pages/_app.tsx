import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'style/common'; 
import wrapper from 'redux/store';
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


// wrapper가 알아서 Provider로 감싸주기 때문에 중복으로 감쌀 필요가 없다.
// const makestore = () => store;
// const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);