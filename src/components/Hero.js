import React, { useState } from 'react';
import imageDesktop from '../images/desktop-image-hero-1.jpg';
import imageMobile from '../images/mobile-image-hero-1.jpg';
import arrow from '../images/icon-arrow.svg';
import Nav from './Nav';
import {
  HeroStyled,
  ShopNow,
  Container,
  ImgDiv,
  Small,
  Big,
} from './styles/Hero.styled';
import Buttons from './Buttons';
import { heroAssets } from '../data';

function Hero() {
  const [slideNum, setSlideNum] = useState(0);
  const { title, paragraph, images } = heroAssets[slideNum];
  const slideUp = () => {
    if (slideNum === 2) {
      setSlideNum(0);
    } else {
      const newSlideNum = slideNum + 1;
      setSlideNum(newSlideNum);
    }
  };
  const slideDown = () => {
    if (slideNum === 0) {
      setSlideNum(2);
    } else {
      const newSlideNum = slideNum - 1;
      setSlideNum(newSlideNum);
    }
  };
  return (
    <HeroStyled>
      <Nav />
      <ImgDiv img={[images[0], images[1]]} alt="desk">
        <Small className="small">
          <Buttons slideUp={slideUp} slideDown={slideDown} />
        </Small>
      </ImgDiv>

      <Container>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <ShopNow>
          <h6>SHOP NOW</h6>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </ShopNow>
        <Big>
          <Buttons slideUp={slideUp} slideDown={slideDown} />
        </Big>
      </Container>
    </HeroStyled>
  );
}

export default Hero;
