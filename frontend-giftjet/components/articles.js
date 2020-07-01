import styled from 'styled-components';
import Card from './card';

const Articles = ({ articles }) => {
  return (
    <>
      <Title>The Best Gifts For Sister</Title>
      <SubTitle>Shop the best gifts for sister, from experts.</SubTitle>
      <CardsContainer>
        {articles.map((article, i) => {
          return <Card article={article} key={`article__${article.id}`} />;
        })}
      </CardsContainer>
    </>
  );
};

const Title = styled.h1`
  color: #1e2e4f;
  text-align: center;
  font-size: 36px;
  line-height: 49px;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 0 0 23px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  color: #44516f;
  text-align: center;
  font-size: 18px;
  margin: 0 0 70px;
  font-family: 'Noto Sans TC', sans-serif;
`;

const CardsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto 120px auto;
`;

export default Articles;
