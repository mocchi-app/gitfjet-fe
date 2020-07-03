import Link from 'next/link';
import styled from 'styled-components';
import { withRouter } from 'next/router';

import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, router, home }) {
  console.log('router: ', router);
  const { pathname } = router;
  
  const withNoHeader = ['store', 'complete', 'comission', 'onboarding', 'card'];

  const showHeaeder = withNoHeader
    .map(page => pathname.includes(page))
    .every(path => !path);
  console.log('showHeaeder', showHeaeder);


  const isPayment = pathname.includes('payment');

  return (
    <Container>
      { showHeaeder && <Header />}

      <main>{children}</main>

      {(showHeaeder && !isPayment) && <Footer />}
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
