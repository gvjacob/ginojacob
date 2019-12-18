import React from 'react';
import App from 'next/app';
import './_app.css';

import Navigation from '../components/Navigation';

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
      <div className={'app'}>
        <Navigation />
        <Component {...pageProps} />

        <style jsx>
          {`
            .app {
              padding: 0 10%;
              padding: 40px 10% 0 10%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CustomApp;
