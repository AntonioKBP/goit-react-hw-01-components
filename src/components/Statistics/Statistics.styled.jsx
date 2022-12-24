import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: azure;
  border-radius: 4px;
  margin-bottom: 25px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
`;

export const SectionTitle = styled.h2`
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const SectionList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const SectionItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: 2px;
  background-color: antiquewhite;
`;

export const ItemLabel = styled.span``;

export const ItemPercentage = styled.span``;

// export const Statistics = styled.div``;
