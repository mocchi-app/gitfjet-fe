import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.homeMainPromo}>
        <h1 className={styles.sectionTitle}>Find the perfect gift.</h1>
        <p className={styles.sectionActionText}>
          Shop gift guides with gurus, buy directly from brands.
        </p>
        <div className={styles.inputContainer}>
          <input
            type='text'
            placeholder='Tell us who you’re gifting for'
            className={styles.inputSearch}
          />
          <img src="/images/search-white.png" alt="search" className={styles.searchIcon} />
        </div>
      </section>
    </>
  );
}
