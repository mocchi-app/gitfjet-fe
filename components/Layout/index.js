import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';

import Header from '../Header';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Header />
      
      <main>{children}</main>
      
      {/* Footer */}
    </div>
  );
}
