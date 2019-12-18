import React from 'react';
import App from 'next/app';

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
    const tabs = [
      { text: 'Gino', href: '/' },
      { text: 'Developer', href: '/developer' },
      { text: 'Designer', href: '/designer' },
      { text: 'Ballroom Dancer', href: '/ballroomdancer' },
    ];

    const { Component, pageProps } = this.props;
    return (
      <div className={'app'}>
        <Navigation tabs={tabs} />
        <Component {...pageProps} />

        <style jsx global>{`
          :root {
            --primary: #ff3366;
            --secondary: #828282;

            --typeSmall: 12px;
            --typeRegular: 18px;
            --typeMedium: 24px;
            --typeLarge: 36px;
            --typeXLarge: 48px;
            --typeHuge: 64px;
          }

          @font-face {
            font-family: 'Cera';
            src: url('/typefaces/Cera-Regular.otf');
          }

          @font-face {
            font-family: 'Cera';
            src: url('/typefaces/Cera-Bold.otf');
            font-weight: bold;
          }

          body {
            font-family: 'Cera';
            font-size: var(--typeRegular);
            color: black;
          }

          a {
            text-decoration: none;
            color: inherit;
          }
        `}</style>

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
