import Head from 'next/head';
import Layout from '../components/Layout';

import styles from '../styles/brand.module.scss';

export default function BrandPage() {
  return (
    <Layout>
      <Head>
        <title>Brand</title>
      </Head>
      {/* Main Promo */}
      <section></section>

      {/* How it works */}
      <section></section>

      {/* Scale your gift sales */}
      <section className={styles.giftSalesSection}>
        <h1 className={styles.title}>Scale your gift sales.</h1>
        <p className={styles.actionText}>Get started for free.</p>
        <a className={styles.getStarted}>Get Started</a>
      </section>
    </Layout>
  );
}
