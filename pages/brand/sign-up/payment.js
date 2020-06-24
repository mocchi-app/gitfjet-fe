import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

export default function PaymentForm() {
  return (
    <Container>
      <LogoContainer>
        <img src='/images/giftjet-logo.png' alt='giftjet logo' />
      </LogoContainer>
      <Form>
        <FormTitle>Add Payment</FormTitle>
        <Input type='text' placeholder='mystore.myshopify.com' />
        <CardDetails>
          <Input type='text' placeholder='MM / YYYY' />
          <Input type='text' placeholder='CVV Code' />
        </CardDetails>
        <Btn>Confirm</Btn>
        <Footer>
          <Text> By signing up, I agree to Mocchi</Text>
          <PrivacyPollicy>Terms of Service and Privacy Policy.</PrivacyPollicy>
        </Footer>
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

const LogoContainer = styled.div`
  margin-bottom: 40px;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 415px;

  Input {
    width: 185px;
    font-size: 18px;
    line-height: 22px;
    font-weight: normal;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Form = styled.form`
  margin: 0;
  width: 670px;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FormTitle = styled.h2`
  color: #1e2e4f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin: 0 0 50px;
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
  margin-bottom: 24px;
`;

const Btn = styled.a`
  padding: 14px 63px;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  box-sizing: border-box;
  border-radius: 60px;
  background: #42cb83;
  color: #fff;
  width: 420px;
  text-align: center;
  margin-bottom: 40px;

  &:hover {
    background: #3cbc79;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 0 0 3px;
`;

const PrivacyPollicy = styled.a`
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 0;
  color: #42cb83;
`;
