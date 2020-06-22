import styled from 'styled-components';

export default function GiftCard({ title, id, owner, icon }) {
  return (
    <Card>
      <ImgContainer>
        <img src='' alt='' />
      </ImgContainer>
      <CardMeta>
        <GiftName>Best Gifts for Men</GiftName>
        <Container>
          <OwnerInfo>
            <img src='/images/giftOwnerIcon.png' alt='gift' />
            <OwnerName>Jane Cooper</OwnerName>
          </OwnerInfo>

          <ViewListBtn>View List</ViewListBtn>
        </Container>
      </CardMeta>
    </Card>
  );
}

const Card = styled.div`
  width: 300px;
  border: 1px solid #e7e6e6;
  border-radius: 0px 0px 8px 8px;
  margin-bottom: 30px;
`;

const ImgContainer = styled.div`
  width: 300px;
  height: 300px;
  background: #ccc;

  img {
  }
`;

const CardMeta = styled.div`
  padding: 25px;
`;

const GiftName = styled.div`
  color: #1e2e4f;
  text-transform: capitalize;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  padding: 0 25px 16px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const OwnerName = styled.div`
  margin-left: 13px;
  font-size: 14px;
  line-height: 19px;
  font-family: 'Noto Sans TC', sans-serif;
`;

const ViewListBtn = styled.a`
  background: #42cb83;
  border-radius: 60px;
  color: #fff;
  padding: 6px 13px;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
`;
