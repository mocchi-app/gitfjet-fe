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
      <section className={styles.mainPromo}>
        <div className={styles.text}>
          <h1 className={styles.title}>Supercharge your gift <br/> guides.</h1>
          <p className={styles.actionText}>Betabook helps brands sell gifts with influencers.</p>
          <a className={styles.getStarted}>Get Started</a>
        </div>
        <div className={styles.image}>
          <img src="/images/bg-card.png" alt="promo"/>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorksSection}>
        <h1 className={styles.title}>How it works</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src="/images/gift.png" alt=""/>
            </div>
            <p className={styles.desc}>Build gift guides, earn money.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src="/images/link.png" alt=""/>
            </div>
            <p className={styles.desc}>Share links to gifts you love.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src="/images/dollar-sign.png" alt=""/>
            </div>
            <p className={styles.desc}>Earn 10% from brands on each sale.</p>
          </div>
        </div>
      </section>

      {/* Scale your gift sales */}
      <section className={styles.giftSalesSection}>
        <h1 className={styles.title}>Scale your gift sales.</h1>
        <p className={styles.actionText}>Get started for free.</p>
        <a className={styles.getStarted}>Get Started</a>
      </section>
    </Layout>
  );
}
