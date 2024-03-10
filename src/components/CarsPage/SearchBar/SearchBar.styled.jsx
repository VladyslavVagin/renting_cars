import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 24px 0;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  @media screen and (min-width: 480px){
    flex-direction: row;
    align-items: flex-end;
    column-gap: 24px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
`;

export const LabelSelect = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #8a8a89;
`;