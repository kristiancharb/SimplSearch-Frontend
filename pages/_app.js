import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>SimplSearch</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}