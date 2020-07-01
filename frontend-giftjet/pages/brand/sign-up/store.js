import Link from 'next/link';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

export default function StoreUrlForm() {
  const handleSignUp = async () => {
    const { API_BRAND } = process.env;
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';

    const res = await fetch(proxyurl + `${API_BRAND}/api/v1/brand/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyUrl: 'mocchi-app.myshopify.com',
      }),
    });
    const data = await res.json();

    console.log('data', data);
  };

  // onClick={handleSignUp}
  return (
    <Container>
      <LogoContainer>
        <img src='/images/giftjet-logo.png' alt='giftjet logo' />
      </LogoContainer>
      <PageTitle>Connect your Shopify store</PageTitle>
      <PageSubTitle>Please follow this step to sync Shopify</PageSubTitle>
      <Form>
        <FormTitle>Enter your store URL</FormTitle>
        <Input type='text' placeholder='mystore.myshopify.com' />
        <BtnContainer>
          <Link href="/brand">
            <Btn className='cancel'>Cancel</Btn>
          </Link>
          <Link href="/brand/sign-up/payment">
            <Btn className='done'>Done</Btn>
          </Link>
        </BtnContainer>
      </Form>
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

const LogoContainer = styled.div``;

const PageTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  margin-top: 43px;
  margin-bottom: 22px;
`;

const PageSubTitle = styled.h4`
  color: #979eac;
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
`;

const FormTitle = styled.h2`
  color: #1e2e4f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin: 55px 0 32px;
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
  padding: 14px 63px;
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
    background: #42cb83;
    color: #fff;
  }
`;
