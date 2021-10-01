import React from 'react';
import desktop from '../images/desktop-image-hero-1.jpg';
import arrow from '../images/icon-arrow.svg';
import Nav from './Nav';
import {
  HeroStyled,
  ShopNow,
  Container,
  Buttons,
  DeskStyled,
  Button,
} from './styles/Hero.styled';
import buttonRight from '../images/icon-angle-right.svg';
import buttonLeft from '../images/icon-angle-left.svg';

function Hero() {
  return (
    <HeroStyled>
      <Nav />
      <DeskStyled src={desktop} alt="desk" />
      <Container>
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort and style for property owners
          across the county. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <ShopNow>
          <h6>SHOP NOW</h6>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </ShopNow>
        <Buttons>
          <Button>
            <img src={buttonLeft} alt="right arrow" />
          </Button>
          <Button>
            <img src={buttonRight} alt="right arrow" />
          </Button>
        </Buttons>
      </Container>
    </HeroStyled>
  );
}

export default Hero;
