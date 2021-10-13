import React from 'react';
import { ButtonsStyled } from './styles/Button.styled';
import buttonRight from '../images/icon-angle-right.svg';
import buttonLeft from '../images/icon-angle-left.svg';

function Buttons({ slideUp, slideDown, navigationPrevRef, navigationNextRef }) {
  const handleSlideUp = () => {
    slideUp();
  };

  const handleSlideDown = () => {
    slideDown();
  };

  return (
    <ButtonsStyled>
      <div ref={navigationPrevRef} onClick={() => handleSlideDown()}>
        <img src={buttonLeft} alt="left arrow" />
      </div>
      <div ref={navigationNextRef} onClick={() => handleSlideUp()}>
        <img src={buttonRight} alt="right arrow" />
      </div>
    </ButtonsStyled>
  );
}

export default Buttons;
