import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import styles from './Header.module.scss';

export default function Header() {

  const handleSignUp = async () => {
    const { API_URL } = process.env;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const res = await fetch(proxyurl + `${API_URL}/api/v1/brand/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyUrl: "mocchi-app.myshopify.com"
      })
    });
    const data = await res.json();

    console.log('data', data);
  }

  return (
    <header className={styles.topHeader}>
      <img src='/images/giftjet-logo.png' alt='logo' />
      <div className='section-right'>
        <input
          type='text'
          placeholder='Search'
          className={styles.searchField}
        />
        <Link href='/sign-in'>
          <a className={styles.signInBtn}>Sign In</a>
        </Link>
        {/* <Link href='/sign-up'> */}
          <a className={styles.signUpBtn} onClick={handleSignUp}>Sign Up</a>
        {/* </Link> */}
      </div>
    </header>
  );
}
