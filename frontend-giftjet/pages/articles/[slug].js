import { useRouter } from 'next/router';
import Query from 'components/query';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import ARTICLE_QUERY from '../../apollo/queries/article/article';

const Article = () => {
  const router = useRouter();

  if (!router.query.slug) return <p>Loading...</p>;

  return (
    <Query query={ARTICLE_QUERY} variables={{ slug: router.query.slug }}>
      {({ data: { articleBySlug: article } }) => {
        if (!article)
          return (
            <h2 style={{ marginTop: '200px', textAlign: 'center' }}>
              {' '}
              404 | Not Found{' '}
            </h2>
          );
        const imageUrl = article.image ? article.image.url : null;
        const products = article.products;
        return (
          <div className='w3-content' style={{ marginTop: '30px' }}>
            <div className='w3-row w3-padding-64'>
              <h1 className='w3-center'>{article.title}</h1> <br />
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img src={imageUrl} className='w3-round' alt='Table Setting' />
              </div>
              <h5 className='w3-center'>Tradition since 1889</h5>
              <div className='react-mark-down'>
                <ReactMarkdown source={article.content} />
              </div>
              <hr />
              <div className='w3-row'>
                {products.map((product, index) => (
                  <div key={index} className='w3-col m4'>
                    <div className='w3-card w3-margin w3-margin-top'>
                      <img
                        src={product.image ? product.image.url : null}
                        style={{ width: '100%' }}
                      />
                      <div className='w3-container w3-white'>
                        <div className='react-mark-down'>
                          <ReactMarkdown source={product.description} />
                        </div>
                        <hr style={{ marginTop: '0px', marginBottom: '0px' }} />
                        <div
                          style={{
                            paddingTop: '10px',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src={
                              product.editor && product.editor.photo
                                ? product.editor.photo.url
                                : null
                            }
                            alt='Image'
                            className='w3-left w3-margin-right'
                            style={{ width: '50px' }}
                          />
                          <span className='w3-large'>
                            {product.editor.firstName
                              ? product.editor.firstName +
                                ' ' +
                                product.editor.lastName
                              : 'Private Author'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
