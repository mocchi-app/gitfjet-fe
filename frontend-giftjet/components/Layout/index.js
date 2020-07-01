import Link from 'next/link';
import styled from 'styled-components';
import { withRouter } from 'next/router';

import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, router, home }) {
  console.log('router: ', router);
  const { pathname } = router;

  const isSignUp = pathname.includes('sign-up');
  const isOnboarding = pathname.includes('onboarding');
  const isPayment = pathname.includes('payment');

  return (
    <Container>
      {(!isSignUp && !isOnboarding) && <Header />}

      <main>{children}</main>

      {(!isSignUp && !isPayment) && <Footer />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  main {
    flex: 1;
  }
`;

export default withRouter(Layout);
