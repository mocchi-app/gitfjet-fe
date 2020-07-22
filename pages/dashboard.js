import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import Product from "components/product";

export default function Dashboard() {
  const [productsList, setProductsList] = useState([]);
  const [change, setChange] = useState(0);
  const token = useSelector((state) => state.token);

  const getAllProducts = async () => {
    if (productsList.length > 0) return;
    const res = await fetch("/api/v1/brand/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      setProductsList(data);
    } else {
      return [];
    }
  };

  useEffect(() => {
    getAllProducts();
    setChange(0);
  }, [change]);

  return (
    <Container>
      <Header>Active Products</Header>
      {productsList.map(
        ({ id, imageSrc, title, bodyHtml, variants, approved }, i) => {
          return (
            <Product
              key={id}
              title={title}
              bodyHtml={bodyHtml}
              price={variants[0].price}
              imageSrc={imageSrc}
              id={id}
              approved={approved}
              productId={variants[0].product_id}
              token={token}
              setProductsList={setProductsList}
              productsList={productsList}
              setChange={setChange}
              index={i}
            />
          );
        }
      )}
    </Container>
  );
}

const Header = styled.h1`
  color: #1e2e4f;
  text-align: center;
  font-family: "Noto Sans TC", sans-serif;
  margin: 0 0 40px;
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
