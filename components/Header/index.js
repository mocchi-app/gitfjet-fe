import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
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
        <Link href='/sign-up'>
          <a className={styles.signUpBtn}>Sign Up</a>
        </Link>
      </div>
    </header>
  );
}
