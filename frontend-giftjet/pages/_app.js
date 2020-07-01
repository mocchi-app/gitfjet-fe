import React from 'react';
import Head from 'next/head';

import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';

import Layout from 'components/Layout';

import '../assets/css/style.css';
import '../styles/global.scss';

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Head>
          <title>GiftJet</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Staatliches'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+TC:wght@100;300;400;900&display=swap'
            rel='stylesheet'
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

// Wraps all components in the tree with the data provider
export default withData(App);
