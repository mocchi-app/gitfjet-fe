import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

import Product from 'components/product';
import { UserContext } from '../../../providers/UserProvider';

export default function Dashboard() {
  const { API_BRAND } = process.env;
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const { userToken } = useContext(UserContext);
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    if (productsList.length > 0) return;

    // const res = await fetch(proxyurl + `${API_BRAND}/api/v1/brand/products`, {
    const res = await fetch('/api/v1/brand/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });

    console.log('res', res);

    if (res.ok) {
      const data = await res.json();
      console.log('data', data);
      setProductsList(data);
    } else {
      return [];
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container>
      <Header>Active Products</Header>
      {productsList.map((product) => (
        <Product key={product.id} />
      ))}
    </Container>
  );
}

const Header = styled.h1`
  color: #1e2e4f;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 62px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 35px;
  align-items: center;
  color: #1e2e4f;
`;
