import styled from 'styled-components';
export const MobileNavStyled = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  transition: height 0.4s ease-in-out;
  height: ${({ navIsOpen }) => (navIsOpen ? '100px' : '0')};
  overflow: hidden;
  .closeButton {
    position: absolute;
    left: 18px;
    top: 18px;
    border: none;
    background: none;
    .icon {
      font-size: 25px;
    }
  }
`;

export const Link = styled.button`
  background: none;
  border: none;
  margin: 15px;
`;
