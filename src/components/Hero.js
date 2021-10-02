import React from 'react';
import imageDesktop from '../images/desktop-image-hero-1.jpg';
import imageMobile from '../images/mobile-image-hero-1.jpg';
import arrow from '../images/icon-arrow.svg';
import Nav from './Nav';
import { HeroStyled, ShopNow, Container, ImgDiv, Small, Big } from './styles/Hero.styled';
import Buttons from './Buttons';

function Hero() {
  return (
    <HeroStyled>
      <Nav />
      <ImgDiv img={[imageDesktop, imageMobile]} alt="desk">
        <Small className="small">
          <Buttons />
        </Small>
      </ImgDiv>

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
        <Big>
          <Buttons />
        </Big>
      </Container>
    </HeroStyled>
  );
}

export default Hero;
