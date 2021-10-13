import React, { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import arrow from '../images/icon-arrow.svg';
import Nav from './Nav';
import ImageCarousel from './ImageCarousel';
import {
  HeroStyled,
  ShopNow,
  Container,
  ImgContainer,
  Small,
  Big,
} from './styles/Hero.styled';
import Buttons from './Buttons';
import { heroAssets } from '../data';

function Hero({ handleOpenCloseNav }) {
  const sliderRef = useRef();
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
      <button onClick={() => handleOpenCloseNav()} className="toggleButton">
        <FaBars className="icon" />
      </button>
      <Nav />
      <ImgContainer>
        <ImageCarousel />
        <Small className="small">
          <Buttons slideUp={slideUp} slideDown={slideDown} />
        </Small>
      </ImgContainer>

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
          <Buttons
            sliderRef={sliderRef}
            slideUp={slideUp}
            slideDown={slideDown}
          />
        </Big>
      </Container>
    </HeroStyled>
  );
}

export default Hero;
