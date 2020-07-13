import styled from 'styled-components';

export default function Product({ title, imageSrc, id }) {
  return (
    <Container>
      <ImageContainer>
        {imageSrc && <img src={imageSrc} alt='product' />}
      </ImageContainer>
      <InfoSection>
        <Title>
          {title} <span>$24</span>
        </Title>
        <Description>
          Amet minim mollit non deserunt ullamco est sit aliqua
        </Description>
      </InfoSection>
      <Action>Add +</Action>
    </Container>
  );
}

const Description = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #979eac;
  margin: 0;
`;

const Title = styled.h3`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #1e2e4f;
  margin: 0 0 7px 0;

  span {
    color: #FC5185;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
  }
`;

const Action = styled.a`
  color: #fff;
  background: #FC5185;
  border-radius: 60px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 26px;
  padding: 5px 32px;
`;

const ImageContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;

  img {
    max-width: 100%;
    height: 100%;
    /* height: auto; */
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 23px;
  padding-top: 15px;
  border-bottom: 1px solid #eee;
`;
