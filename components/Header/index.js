import Link from 'next/link';
import { withRouter } from 'next/router';

import styles from './Header.module.scss';

const Header = ({ router }) => {
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
        <Link href='/brand/sign-up/store'>
          <a className={styles.signUpBtn}>Sign Up</a>
        </Link>
      </div>
    </header>
  );
}

export default withRouter(Header);
