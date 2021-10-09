import React from 'react';
import { NavStyled, Link } from './styles/Nav.styled';

function Nav() {
  return (
    <NavStyled>
      <h2>room</h2>
      <Link>
        <button>home</button>
      </Link>
      <Link>
        <button>shop</button>
      </Link>
      <Link>
        <button>about</button>
      </Link>
      <Link>
        <button>contact</button>
      </Link>
    </NavStyled>
  );
}

export default Nav;
