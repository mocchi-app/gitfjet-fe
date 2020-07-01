import styled from 'styled-components';
import Articles from 'components/articles';
import Query from 'components/query';
import ARTICLES_QUERY from '../../apollo/queries/article/articles';

const ArticlesPage = () => {
  return (
    <>
      <Count>
        <strong>$ 2, 234, 567,76</strong> bought with local guides
      </Count>

      <HeaderImage />

      <Query query={ARTICLES_QUERY}>
        {({ data: { articles } }) => {
          return <Articles articles={articles} />;
        }}
      </Query>
    </>
  );
};

const HeaderImage = styled.div`
  background-image: url('/images/articles-bg.png');
  background-repeat: no-repeat;
  background-position: center center;
  height: 510px;
  margin-bottom: 70px;
`;

const Count = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: #1e2e4f;
  margin: 25px 0;
  text-align: center;
`;

export default ArticlesPage;
