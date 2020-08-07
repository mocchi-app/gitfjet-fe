import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';


import Spinner from 'components/spinner';
import { INTERNAL_LINKS } from 'enum';

export default function StoreUrlForm() {
  const [loading, setLoading] = useState(false);
  const [storeName, setStoreName] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/v1/brand/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyUrl: storeName || 'mocchi-app.myshopify.com',
      }),
    });
    const data = await res.json();
    const { signUpUrl = '' } = data;

    if (signUpUrl !== '') {
      console.log('signUpUrl:', signUpUrl);
      setLoading(false);
      document.location.href = signUpUrl;
    }
  };

  const goToHomePage = (e) => {
    e.preventDefault();
    router.push(INTERNAL_LINKS.HOME)
  }

  return (
    <Container>
      <LogoContainer>
        <img src='/images/guideshop-logo.svg' alt='giftjet logo' onClick={goToHomePage} />
      </LogoContainer>
      <PageTitle>Connect your Shopify store</PageTitle>
      <PageSubTitle>Please follow this step to sync Shopify</PageSubTitle>
      <Form>
        {loading && (
          <>
            <SpinContainer>
              <Spinner />
            </SpinContainer>
            <Overlay></Overlay>
          </>
        )}
        <FormTitle>Enter your store URL</FormTitle>
        <Input
          type='text'
          placeholder='mystore.myshopify.com'
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
        <BtnContainer>
          <Link href='/'>
            <Btn className='cancel'>Cancel</Btn>
          </Link>
          <Btn className='done' onClick={handleSignUp}>
            Done
          </Btn>
        </BtnContainer>
      </Form>
    </Container>
  );
}

const SpinContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 21px;
  align-items: center;
  color: #1e2e4f;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 25px;
  margin-left: 40px;
  
  img {
    height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;

const PageTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  margin-top: 85px;
  margin-bottom: 22px;
`;

const PageSubTitle = styled.h4`
  color: #1E2E4F;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 48px;
`;

const Form = styled.form`
  margin: 0;
  width: 670px;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const FormTitle = styled.h2`
  color: #1e2e4f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin: 55px 0 32px;
  text-align: center;
`;

const Input = styled.input`
  background: #f4f9ff;
  border-radius: 60px;
  border: none;
  outline: none;
  width: 415px;
  padding: 15px 20px;
  color: #44516f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  width: 415px;
  justify-content: space-between;
  margin-bottom: 70px;
`;

const Btn = styled.a`
  padding: 14px 75px;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  box-sizing: border-box;
  border-radius: 60px;

  &.cancel {
    border: 1px solid #979eac;
    color: #979eac;
  }

  &.done {
    background: #2fc3ff;
    cursor: pointer;
    color: #fff;
  }
`;
