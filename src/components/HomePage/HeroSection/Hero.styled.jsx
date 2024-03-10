import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "images/porshe.jpg";

export const SectionHero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.541), rgba(0, 0, 0, 0.541)),
    url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 40%;
  color: white;
  height: calc(100dvh - 38px);
`;

export const HeroContainer = styled.div`
  padding: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #d1cac2;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
  @media screen and (min-width: 440px) {
    font-size: 42px;
  }

  @media screen and (min-width: 768px) {
    font-size: 62px;
    line-height: 1.2;
    max-width: 70%;
  }
`;

export const TitleText = styled.p`
  font-size: 18px;
  color: #d1cac2;
  font-weight: 600;
  padding: 4px;
  text-align: center;
  margin: 0 auto;

  @media screen and (min-width: 440px) {
    font-size: 26px;
    max-width: 447px;
  }
`;

export const LinkToCars = styled(Link)`
  color: antiquewhite;
  text-transform: uppercase;
  font-size: 22px;
  border: 2px solid whitesmoke;
  padding: 8px;
  transition: all 400ms ease;
  &:hover, 
  &:focus {
     border-color: #3232c7;
     background-color: #3232c7;
  }

    @media screen and (min-width: 440px) {
      font-size: 38px;
    }
`