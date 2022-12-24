import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 700px;
  border: 3px solid;
  border-collapse: collapse;
  margin: 16px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;
export const TableHead = styled.thead``;
export const TableRow = styled.tr`
  background-color: 'rgb(206, 215, 19)';
`;
export const TableHeader = styled.th`
  border: 2px solid;
  padding: 4px;
  font-weight: 400;
  background-color: grey;
`;
export const TableBody = styled.tbody``;
export const TableData = styled.td`
  font-weight: 500;
  padding: 4px;
  outline: 1px solid black;
  text-align: center;
`;
