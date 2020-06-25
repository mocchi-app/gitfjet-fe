import Link from 'next/link';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

export default function Dashboard() {
  return (
    <Container>
      <LogoContainer>
        <img src='/images/giftjet-logo.png' alt='giftjet logo' />
      </LogoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 65px;
  align-items: center;
  color: #1e2e4f;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
`;
