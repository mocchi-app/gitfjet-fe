import styled from 'styled-components';

import GiftCard from 'components/GiftCard';

export default function Influencer() {
  const price = '$14';
  const brandName = 'Brand Name';
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua...';
  const btn = {
    text: 'Buy',
    link: '/',
  };

  return (
    <div>
      <InfluencerData>
        <Count>
          <strong>$ 2, 234, 567,76</strong> bought with local guides
        </Count>
        <Container>
          <ImgContainer>
            <img src='/images/influencer-logo.png' alt='influencer logo' />
          </ImgContainer>
          <div>
            <Title>Sofia Loren’s 2020 Gift Guide</Title>
            <InfluencerDesc>
              <div>
                <DescItem>
                  <div>
                    <img src='/images/location.png' alt='location' />
                  </div>
                  <span>France</span>
                </DescItem>
                <DescItem>
                  <div>
                    <img src='/images/founder.png' alt='founder' />
                  </div>
                  <span>Design</span>
                </DescItem>
              </div>
              <div>
                <DescItem>
                  <div>
                    <img src='/images/cardiogram.png' alt='cardiogram' />
                  </div>
                  <span>84 Recommendations</span>
                </DescItem>
                <DescItem>
                  <div>
                    <div></div>
                    <img src='/images/home.png' alt='home' />
                  </div>
                  <span>Charity name</span>
                </DescItem>
              </div>
            </InfluencerDesc>
          </div>
        </Container>
        <InfluencerTitle>
          Sofia Loren is a certified Interior Designer in Paris.
        </InfluencerTitle>
      </InfluencerData>

      <CardsContainer>
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
        <GiftCard
          price={price}
          brandName={brandName}
          description={description}
          btn={btn}
        />
      </CardsContainer>
    </div>
  );
}

const CardsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto 120px auto;
`;

const InfluencerTitle = styled.div`
  margin: 80px 0 105px;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Noto Sans TC', sans-serif;
  text-transform: capitalize;
  color: #44516f;
`;

const InfluencerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
`;

const Count = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: #1e2e4f;
  margin-bottom: 63px;
`;

const ImgContainer = styled.div`
  margin-right: 32px;
`;

const Title = styled.h4`
  text-transform: capitalize;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 20px;
  line-height: 27px;
  font-weight: bold;
  margin: 0;
  color: #1e2e4f;
  margin-bottom: 36px;
`;

const InfluencerDesc = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-right: 50px;
  }
`;

const DescItem = styled.div`
  display: flex;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  color: #44516f;

  &:first-of-type {
    margin-bottom: 25px;
  }

  div {
    width: 40px;
  }
`;
