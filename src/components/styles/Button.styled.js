import styled from 'styled-components';

export const ButtonsStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  user-select: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.vDarkGrey};
    }
    img {
      height: 35%;
      width: 25%;
    }
  }
`;
