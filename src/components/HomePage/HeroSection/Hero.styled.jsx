import styled from "styled-components";
// import img from "../../../images/car-color.jpg";
// import imgDark from "../../../images/car-dark.jpg";
import img from "../../../images/porshe.jpg";

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
  font-size: 62px;
  line-height: 1.2;
  max-width: 70%;
  text-align: center;
  text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
`;

export const TitleText = styled.p`
  font-size: 26px;
  color: #d1cac2;
  font-weight: 600;
  max-width: 447px;
  padding: 4px;
  text-align: center;
  margin: 0 auto;
`;
