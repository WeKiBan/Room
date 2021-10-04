import styled from 'styled-components';

export const HeroStyled = styled.div`
  font-family: ${({ theme }) => theme.font.fontFamily};
  user-select: none;
  position: relative;
  display: flex;
  width: 100%;
  min-height: 400px;
  height: 65vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    flex-direction: column;
    height: auto;
  }
`;

export const ImgDiv = styled.div`
  position: relative;
  background-image: url(${({ img }) => img[0]});
  background-size: cover;
  width: 55%;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    width: 100%;
    height: 370px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: url(${({ img }) => img[1]});
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  width: 45%;
  min-height: 400px;
  letter-spacing: 0.2rem;
  h1 {
    font-family: ${({ theme }) => theme.font.fontFamily};
    font-size: 45px;
    font-weight: 300;
    letter-spacing: 0.2rem;
    padding-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.black};
    line-height: 4.3rem;
    @media (max-width: 1170px) {
      line-height: 3rem;
      font-size: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
      line-height: 3.5rem;
      padding-bottom: 1rem;
    }
  }

  h6 {
    font-family: ${({ theme }) => theme.font.fontFamily};
    font-size: 18px;
    text-transform: capitalize;
    letter-spacing: 0.7rem;
    font-weight: 300;
    @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    width: 100%;
    padding: 35px;
  }
`;

export const ShopNow = styled.div`
  margin-top: 2.5rem;
  user-select: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.greyFont};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
  }

  img {
    opacity: 0.4;
    width: 40px;
    margin-left: 3rem;
  }
`;

export const Small = styled.div`
  display: none;
  position: absolute;
  width: 130px;
  height: 65px;
  bottom: 0;
  right: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    display: inline-block;
  }
`;

export const Big = styled.div`
  display: none;
  position: absolute;
  width: 160px;
  height: 80px;
  bottom: 0;
  left: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.mid}) {
    display: inline-block;
  }
`;
