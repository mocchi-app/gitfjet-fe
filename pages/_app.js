import Layout from '../components/Layout';
import '../styles/global.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+TC:wght@100;300;400;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}