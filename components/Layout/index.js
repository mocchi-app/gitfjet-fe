import styled from 'styled-components';
import { withRouter } from 'next/router';

import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, router }) {
  const { pathname } = router;

  const withNoHeader = [
    'store',
    'complete',
    'comission',
    'card',
  ];
  const withNoFooter = [
    'store',
    'complete',
    'comission',
    'card',
  ];

  const showHeaeder = withNoHeader
    .map((page) => pathname.includes(page))
    .every((path) => !path);

  const showFooter = withNoFooter
    .map((page) => pathname.includes(page))
    .every((path) => !path);

  return (
    <Container>
      {showHeaeder && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
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
