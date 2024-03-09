import React from "react";
import { HeroContainer, SectionHero, Title, TitleText } from "./Hero.styled";

const Hero = () => {
  return (
    <SectionHero>
      <HeroContainer>
        <Title>VCARS - modern service for renting cars in Ukraine</Title>
        <TitleText>All cars have 100% insurance!!!</TitleText>
      </HeroContainer>
    </SectionHero>
  );
};

export default Hero;
