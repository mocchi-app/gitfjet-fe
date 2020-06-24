import Head from 'next/head';
import styles from '../styles/affiliate.module.scss';

export default function AffiliatePage() {
  return (
    <>
      <Head>
        <title>Brand</title>
      </Head>
      {/* Main Promo */}
      <section className={styles.mainPromo}>
        <div className={styles.text}>
          <h1 className={styles.sectionTitle}>Create gift guides, <br /> earn money.</h1>
          <p className={styles.sectionActionText}>Build gift guides, earn money.</p>
          <a className={styles.getStarted}>Get Started</a>
        </div>
        <div className={styles.image}>
          <img src="/images/bg-card.png" alt="promo"/>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorksSection}>
        <h1 className={styles.sectionTitle}>How it works</h1>
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

      {/* Get started */}
      <section className={styles.getStartedSection}>
        <h1 className={styles.sectionTitle}>Get started</h1>
        <p className={styles.sectionActionText}>Share gift guides, earn money.</p>
        <a className={styles.getStarted}>Get Started</a>
      </section>
    </>
  );
}
