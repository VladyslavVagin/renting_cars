import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImageCar = styled.img`
  object-fit: cover;
  border-radius: 14px;
`;

export const CardTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--dark-color);
  margin-top: 14px;
  margin-bottom: 8px;

  span {
    color: var(--accent-color);
  }
`;

export const InfoList = styled.ul`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--backdrop-color);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 14px;
  max-width: 405px;

  li {
    position: relative;
    padding-right: 4px;
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

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: var(--dark-color);
  margin-bottom: 24px;
`;

export const SubTitle = styled.div`
  margin-bottom: 24px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.42857;
    color: var(--dark-color);
  }
`;

export const ListConditions = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  li {
    background: #f9f9f9;
    border-radius: 35px;
    padding: 7px 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #363535;

    span {
      font-weight: 600;
      color: var(--accent-color);
    }
  }
`;

export const RentalCarBtn = styled(Link)`
  outline: none;
  border: none;
  background:  var(--accent-color);
  border-radius: 12px;
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: var(--white-color);
`;
