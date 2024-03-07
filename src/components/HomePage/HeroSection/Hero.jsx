import React from "react";
import { HeroContainer, SectionHero, Title, TitleText } from "./Hero.styled";

const Hero = () => {
  return (
    <SectionHero>
      <HeroContainer>
        <Title>VCARS - сучасний сервіс аренди авто в Україні</Title>
        <TitleText>Доставка авто по всій Україні!!!!!</TitleText>
      </HeroContainer>
    </SectionHero>
  );
};

export default Hero;
