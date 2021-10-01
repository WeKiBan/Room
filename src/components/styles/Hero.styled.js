import styled from 'styled-components';

export const HeroStyled = styled.div`
  position: relative;
  display: flex;
  min-height: 300px;
  height: 70%;
  h1 {
    font-size: 45px;
    font-weight: 500;
    letter-spacing: 0.04rem;
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.colors.black};
    line-height: 4.3rem;
    transform: scale(0.98, 0.9);
  }
  h6 {
    font-size: 18px;
    text-transform: capitalize !important ;
    letter-spacing: 0.7rem;
    font-weight: 300;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

export const DeskStyled = styled.img`
  width: 80%;
`;

export const ShopNow = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.greyFont};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  img {
    opacity: 0.4;
    width: 40px;
    margin-left: 3rem;
  }
`;

export const Buttons = styled.div`
  background-color: ${({ theme }) => theme.colors.vDarkGrey};
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 160px;
  height: 80px;
  bottom: 0;
  left: 0;
  img {
    width: 90%;
    height: 100%;
    padding: 28px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
