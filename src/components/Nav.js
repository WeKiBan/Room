import React from 'react';
import { NavStyled, Link } from './styles/Nav.styled';

function Nav() {
  return (
    <NavStyled>
      <h2>room</h2>
      <Link active={true}>
        <a href="#">home</a>
      </Link>
      <Link active={true}>
        <a href="#">shop</a>
      </Link>
      <Link active={true}>
        <a href="#">about</a>
      </Link>

      <Link active={true}>
        <a href="#">contact</a>
      </Link>
    </NavStyled>
  );
}

export default Nav;
