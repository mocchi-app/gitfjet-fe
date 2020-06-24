import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';

import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, router, home }) {
  console.log('router: ', router);
  const { pathname } = router;

  const isSignUp = pathname.includes('sign-up');

  return (
    <div>
      {!isSignUp && <Header />}

      <main>{children}</main>

      {!isSignUp && <Footer />}
    </div>
  );
}

export default withRouter(Layout);
