import React from 'react';
import fetch from 'node-fetch';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

import Head from 'next/head';
import App from 'next/app';

import Navigation from '../../components/Navigation';
import Social from '../../components/Social';
import css from './styles.css';
import '../index.css';

const client = new ApolloClient({
  uri:
    'https://api.takeshape.io/project/4bb9e2e0-a18f-4c1a-99f3-3eab414085d7/graphql',

  cache: new InMemoryCache({
    addTypename: false,
  }),

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer dd4a14e9c44e4f5a9749f3fe2d6bb1ca`,
  },
  fetch,
});

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
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <div className={css.app}>
          <Head>
            <script
              src="https://kit.fontawesome.com/f9c2d11971.js"
              crossOrigin="anonymous"
            ></script>
          </Head>

          <div className={css.fixedContainer}>
            <div className={css.fixed}>
              <Navigation className={css.navigation} />
              <Social className={css.social} />
            </div>
          </div>

          <div className={css.page}>
            <Component {...pageProps} />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default CustomApp;
