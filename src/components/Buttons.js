import React from 'react';
import { ButtonsStyled } from './styles/Button.styled';
import buttonRight from '../images/icon-angle-right.svg';
import buttonLeft from '../images/icon-angle-left.svg';

function Buttons({ slideUp, slideDown }) {
  return (
    <ButtonsStyled>
      <div onClick={() => slideUp()}>
        <img src={buttonLeft} alt="right arrow" />
      </div>
      <div onClick={() => slideDown()}>
        <img src={buttonRight} alt="right arrow" />
      </div>
    </ButtonsStyled>
  );
}

export default Buttons;
