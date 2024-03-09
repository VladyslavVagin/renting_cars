import styled from "styled-components";

export const Card = styled.li`
  max-width: 274px;
  width: 274px;
  height: 426px;
`;

export const ImageContainer = styled.div`
  width: 274px;
  height: 268px;
  position: relative;
`;

export const CarImage = styled.img`
  object-fit: cover;
  border-radius: 14px;
`;

export const CardTitle = styled.p`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    color: #3470ff;
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const CarInfoList = styled.ul`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px 4px;
  max-width: 274px;
  max-height: 48px;
  margin-bottom: 28px;

  li {
    position: relative;
    padding-right: 4px;
  }

  li:last-of-type {
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  li::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const LearMoreBtn = styled.button`
  width: 100%;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  &:hover,
  &:focus {
    background-color: #224bac;
  }
`;

export const HeartBtn = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
  position: absolute;
  top: 8px;
  right: 8px;
  svg {
    fill: transparent;
    stroke: white;
    transition: all 400ms ease;
    &:hover, 
    &:focus {
      transform: scale(1.1);
      stroke: #a72f2f;
    }
  }

`;
