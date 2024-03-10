import React from "react";
import { HeroContainer, LinkToCars, SectionHero, Title, TitleText } from "./Hero.styled";

const Hero = () => {
  return (
    <SectionHero>
      <HeroContainer>
        <Title>VCARS - modern service for renting cars in Ukraine</Title>
        <LinkToCars to={'/catalog'}>Show cars</LinkToCars>
        <TitleText>All cars have 100% insurance!!!</TitleText>
      </HeroContainer>
    </SectionHero>
  );
};

export default Hero;
