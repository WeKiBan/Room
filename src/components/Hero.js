import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import arrow from '../images/icon-arrow.svg';
import { HeroStyled } from './styles/Hero.styled';
import Buttons from './Buttons';
import { heroAssets } from '../data';

function Hero({ handleOpenCloseNav, windowSize, isNavOpen }) {
  const [slideNum, setSlideNum] = useState(0);
  const { title, paragraph, images } = heroAssets[slideNum];
  console.log(images[0]);

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
    <HeroStyled isNavOpen={isNavOpen}>
      {windowSize < 900 && (
        <button onClick={() => handleOpenCloseNav()} className="toggleButton">
          <FaBars className="icon" />
        </button>
      )}
      <div
        className="imgContainer"
        style={{ backgroundImage: `url(${images[windowSize > 400 ? 0 : 1]})` }}
      >
        {windowSize <= 900 && (
          <div className="smallButtons">
            <Buttons slideUp={slideUp} slideDown={slideDown} />
          </div>
        )}
      </div>
      <div className="infoContainer">
        <h1 className="slideTitle">{title}</h1>
        <p className="slideParagraph">{paragraph}</p>
        <div className="shopNow">
          <h6 className="shopNowTitle">SHOP NOW</h6>
          <span>
            <img className="arrow" src={arrow} alt="arrow" />
          </span>
        </div>
        {windowSize > 900 && (
          <div className="bigButtons">
            <Buttons slideUp={slideUp} slideDown={slideDown} />
          </div>
        )}
      </div>
    </HeroStyled>
  );
}

export default Hero;
