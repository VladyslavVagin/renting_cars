import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 24px 0;
  padding: 0 40px;
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
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

export const SearchBtn = styled.button`
  outline: none;
  border: none;
  background: #3470ff;
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
  transition: all 400ms ease;
  &:hover,
  &:focus {
    background: #0046e9;
  }
`;
