import React from 'react';
import { NavStyled, Link } from './styles/Nav.styled';

function Nav() {
  return (
    <NavStyled>
      <h2>room</h2>
      <Link active={true}>
        <button>home</button>
      </Link>
      <Link active={true}>
        <button>shop</button>
      </Link>
      <Link active={true}>
        <button>about</button>
      </Link>
      <Link active={true}>
        <button>contact</button>
      </Link>
    </NavStyled>
  );
}

export default Nav;
