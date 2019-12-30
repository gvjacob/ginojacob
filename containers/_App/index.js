import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Head from 'next/head';
import App from 'next/app';

import withApollo from '../../hocs/withApollo';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import css from './styles.css';
import './index.css';

class CustomApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <div className={css.app}>
          <Head>
            <script
              src="https://kit.fontawesome.com/f9c2d11971.js"
              crossOrigin="anonymous"
            />
            <link
              rel="icon"
              type="image/png"
              href="https://images.takeshape.io/4bb9e2e0-a18f-4c1a-99f3-3eab414085d7/dev/d32c9ec6-b33d-457b-adbf-0899e7598e8e/favicon.0701fb19.png?auto=format%2Ccompress"
            />
          </Head>

          <div className={css.sidebar}>
            <Sidebar observable={'Page'} />
          </div>

          <div className={css.page} id={'Page'}>
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default withApollo(CustomApp);
