import styled from 'styled-components';

export const ButtonsStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 160px;
  height: 80px;
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
      height: 50%;
      width: 30%;
    }
  }
`;
