import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Head from 'next/head';
import App from 'next/app';

import withApollo from '../../hocs/withApollo';
import Headline from '../../components/Headline';
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
            ></script>
          </Head>

          <div className={css.sidebar}>
            <Sidebar observable={'Page'} />
          </div>

          <div className={css.page} id={'Page'}>
            <Headline className={css.headline} />
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default withApollo(CustomApp);
