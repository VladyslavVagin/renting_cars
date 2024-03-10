import styled from "styled-components";

export const ListCars = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px 29px;
  justify-content: center;
`;

export const ImageContainerMechanic = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  p {
    font-size: 24px;
    font-weight: 600;
    color: #0d5cb6;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;

    p {
      font-size: 34px;
    }

    img {
      width: 300px;
      height: 500px;
    }
  }
`
