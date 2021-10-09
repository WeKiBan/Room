import React from 'react';
import { MobileNavStyled, Link } from './styles/MobileNav.styled';
import { GrClose } from 'react-icons/gr';

function MobileNav({ navIsOpen, handleOpenCloseNav }) {
  return (
    <MobileNavStyled navIsOpen={navIsOpen}>
      <button className="closeButton" onClick={() => handleOpenCloseNav()}>
        <GrClose className="icon" />
      </button>
      <Link>home</Link>
      <Link>shop</Link>
      <Link>about</Link>
      <Link>contact</Link>
    </MobileNavStyled>
  );
}

export default MobileNav;
