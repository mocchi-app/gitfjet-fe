import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/brand.module.scss';

export default function BrandPage() {
  return (
    <>
      <Head>
        <title>Brand</title>
      </Head>
      {/* Main Promo */}
      <section className={styles.mainPromo}>
        <div className={styles.text}>
          <h1 className={styles.sectionTitle}>
            Make your recommendations <br />
            shoppable.
          </h1>
          <p className={styles.sectionActionText}>
            Turn your customer's recommendations into shoppable content.
          </p>
          <Link href='brand/sign-up/store'>
            <a className={styles.getStarted}>Get Started</a>
          </Link>
        </div>
        <div className={styles.image}>
          <img src='/images/bg-card.png' alt='promo' />
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorksSection}>
        <h1 className={styles.sectionTitle}>Get shoppable recommendations.</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src='/images/inventory.png' alt='' />
            </div>
            <p className={styles.desc}>Connect your inventory.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src='/images/shoppable.png' alt='' />
            </div>
            <p className={styles.desc}>Enable shoppable recommendations with advocates.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src='/images/order.png' alt='' />
            </div>
            <p className={styles.desc}>Orders are placed directly in your existing shop.</p>
          </div>
        </div>
      </section>

      {/* Scale your gift sales */}
      <section className={styles.giftSalesSection}>
        <h1 className={styles.sectionTitle}>Connect your inventory with advocates.</h1>
        <p className={styles.sectionActionText}>Get started for free.</p>
        <Link href='brand/sign-up/store'>
          <a className={styles.getStarted}>Get Started</a>
        </Link>
      </section>
    </>
  );
}
