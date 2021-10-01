import styled from 'styled-components';
export const NavStyled = styled.nav`
  position: absolute;
  top: 50px;
  left: 100px;
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    transform: scale(1, 0.8);
    margin-right: 2rem;
    color: white;
    font-size: 30px;
    font-weight: 300;
    cursor: pointer;
  }
  li {
    list-style: none;
    margin: 1rem;
    transform: scale(1, 0.9);
  }
  a {
    color: white;
    font-size: 1.3rem;
    text-decoration: none;
  }
`;

export const Link = styled.li`
  position: relative;
  &:hover {
    &:after {
      content: '';
      background: white;
      position: absolute;
      bottom: -1rem;
      left: 50%;
      margin-left: -7px;
      height: 1px;
      width: 14px;
      border-bottom: ${({ active }) => (active ? '1px white solid' : 'none')};
    }
  }
`;
