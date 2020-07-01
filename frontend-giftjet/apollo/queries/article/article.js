import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($slug: String!) {
    articleBySlug(slug: $slug) {
      id
      title
      content
      image {
        url
      }
      category {
        id
        name
      }
      products {
        title
        description
        image {
          url
        }
        editor {
          photo {
            url
          }
          firstName
          lastName
        }
      }
      published_at
    }
  }
`;

export default ARTICLE_QUERY;
