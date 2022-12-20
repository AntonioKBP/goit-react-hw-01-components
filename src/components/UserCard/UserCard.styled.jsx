import styled from '@emotion/styled';

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 300px;
  height: 300px
  background-color: antiquewhite;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  background-color: azure;
  align-items: center;
`;
export const ProfileImg = styled.img`
  display: block;
  width: 250px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;
export const ProfileTag = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
`;
export const ProfileLocation = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  background-color: antiquewhite;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 12px;
`;

export const StatsItemLabel = styled.span``;
export const StatsItemQty = styled.span``;
