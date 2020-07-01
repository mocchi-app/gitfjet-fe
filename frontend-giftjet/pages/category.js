import { useRouter } from "next/router";
import Articles from "../components/articles";
import Query from "../components/query";
import CATEGORY_ARTICLES_QUERY from "../apollo/queries/category/articles";

const Category = () => {
  const router = useRouter();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} id={router.query.id}>
      {({ data: { category } }) => {
        return (
          <div className="w3-content" style={{marginTop: '70px'}}>
            <h1 style={{ marginTop: '30px', marginBottom: '0px'}}> {category.name} </h1>
            <hr style={{marginTop: '0px', marginBottom: '30px'}} />
            <Articles articles={category.articles} />
          </div> 
        );
      }}
    </Query>
  );
};

export default Category;