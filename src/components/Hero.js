import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import arrow from '../images/icon-arrow.svg';
import Nav from './Nav';
import {
  HeroStyled,
  ShopNow,
  Container,
  ImgDiv,
  ImgContainer,
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
      <ImgContainer>
        <Swiper
          className="swiper"
          slidesPerView={1}
          loop="true"
          nextButton=".next-button"
          previousButton=".previous-button"
          centeredSlides
          onSlideChange={() => console.log('slide change')}
        >
          {heroAssets.map((asset, index) => (
            <SwiperSlide key={asset.id}>
              <ImgDiv img={asset.images} />
            </SwiperSlide>
          ))}
        </Swiper>
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
          <Buttons slideUp={slideUp} slideDown={slideDown} />
        </Big>
      </Container>
    </HeroStyled>
  );
}

export default Hero;
