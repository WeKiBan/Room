import React from 'react';
import { BannerStyled, Image, InfoDiv } from './Banner.styled';
import table from '../images/image-about-dark.jpg';
import chair from '../images/image-about-light.jpg';

function Banner() {
  return (
    <BannerStyled>
      <Image src={table} />
      <InfoDiv>
        <h2>ABOUT OUR FURNITURE</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best expresses your interests and what inspires you. Find furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space{' '}
        </p>
      </InfoDiv>
      <Image src={chair} />
    </BannerStyled>
  );
}

export default Banner;
