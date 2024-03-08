import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  background-color: inherit;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #3470ff;
  display: block;
  margin: 40px auto;
  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: blue;
  }
`;

export const TextEnd = styled.p`
    font-size: 28px;
    font-weight: 700;
    color: #3470ff;
    text-align: center;
    margin: 40px 0;
`