import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../providers/UserProvider';
import { saveToken } from '../store/actions/tokenAction';

import { INTERNAL_LINKS } from 'enum';

export default function ComissionForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [comission, setComission] = useState(10);
  const [loading, setLoading] = useState(true);
  const { updateComission, updateUserToken } = useContext(UserContext);

  const { token = '' } = router.query;
  console.log('token', token);
  dispatch(saveToken(token));

  const goToHomePage = (e) => {
    e.preventDefault();
    router.push(INTERNAL_LINKS.HOME)
  }

  const handleSubmit = () => {
    updateComission(comission);
    router.push('/card');
  };

  const isPaymentSetup = async () => {
    const response = await fetch('/api/v1/payment/card', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('response', response);

    if (response.ok) {
      const data = await response.json();

      // console.log('response IS OK', data);
      // const { clientSecret = '' } = data;
      // console.log('clientSecret', clientSecret);
      router.push('/dashboard');

    } else {
      console.error('response IS NOT OK', data);
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    setLoading(true);
    if (token !== '') {
      updateUserToken(token);
    }
  }, []);

  useEffect(() => {
    isPaymentSetup();
  }, []);

  const handleChange = (option) => {
    if (option === 'minus' && comission === 10) {
      return;
    }

    if (option === 'plus' && comission === 100) {
      return;
    }

    if (option === 'minus') {
      const newValue = comission - 10;
      setComission(newValue);
      return;
    }

    if (option === 'plus') {
      const newValue = comission + 10;
      setComission(newValue);
      return;
    }
  };

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <LogoContainer>
        <img src='/images/guideshop-logo.svg' alt='giftjet logo' onClick={goToHomePage} />
      </LogoContainer>
      <Form>
        <FormTitle>Welcome to matchjet</FormTitle>
        <Note>
          Please confirm your user commission percentage and you’ll be all set.
        </Note>
        <InputContainer>
          <Input type='text' />
          <img
            src='/images/plus-circle.png'
            className='plus'
            alt='plus button'
            onClick={() => handleChange('plus')}
          />
          <img
            src='/images/minus-circle.png'
            className='minus'
            alt='minus button'
            onClick={() => handleChange('minus')}
          />
          <Value>{comission}%</Value>
        </InputContainer>
        <Btn onClick={handleSubmit}>Confirm</Btn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 21px;
  align-items: center;
  color: #1e2e4f;
  position: relative;
  height: 100vh;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 25px;
  margin-left: 40px;
  margin-bottom: 95px;

  img {
    height: 100%;
    object-fit: contain;
    cursor: pointer;
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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const FormTitle = styled.h2`
  color: #1e2e4f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin: 0 0 52px;
`;

const Note = styled.div`
  font-family: Avenir Next;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  color: #1e2e4f;
  width: 400px;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  width: 415px;
  margin-bottom: 30px;
  position: relative;

  background: #f4f9ff;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 15px 20px;
  color: #44516f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  height: 48px;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  .plus {
    right: 7px;
  }

  .minus {
    left: 7px;
  }
`;

const Value = styled.div`
  position: absolute;
  color: #44516f;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  font-family: 'Noto Sans TC', sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Input = styled.input`
  background: #f4f9ff;
  border-radius: 8px;
  border: none;
  outline: none;
  width: 100%;
  padding: 15px 20px;
  color: #44516f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: none;
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
  background: #FC5185;
  color: #fff;
  width: 420px;
  text-align: center;

  &:hover {
    background: #dc3b6c;
  }
`;
