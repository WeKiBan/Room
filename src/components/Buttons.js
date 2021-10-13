import React from 'react';
import { ButtonsStyled } from './styles/Button.styled';
import buttonRight from '../images/icon-angle-right.svg';
import buttonLeft from '../images/icon-angle-left.svg';

function Buttons({ slideUp, slideDown }) {
  const handleSlideUp = () => {
    slideUp();
  };

  const handleSlideDown = () => {
    slideDown();
  };

  return (
    <ButtonsStyled>
      <div onClick={() => handleSlideUp()}>
        <img src={buttonLeft} alt="right arrow" />
      </div>
      <div onClick={() => handleSlideDown()}>
        <img src={buttonRight} alt="right arrow" />
      </div>
    </ButtonsStyled>
  );
}

export default Buttons;
