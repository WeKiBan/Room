import styled from 'styled-components';

export const HeroStyled = styled.div`
  font-family: ;
  user-select: none;
  position: relative;
  display: flex;
  width: 100%;
  min-height: 400px;
  height: 65vh;

  .toggleButton {
    display: none;
    position: absolute;
    border: none;
    background: none;
    z-index: 1000;
    left: 10px;
    top: 10px;
    width: 40px;
    cursor: pointer;
    transition: transform ease-in 0.33s;
    &:hover {
      transform: scale(0.9);
    }
    .icon {
      font-size: 30px;
      color: white;
    }
  }
  .imgContainer {
    position: relative;
    width: 55%;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
  }
  .smallButtons {
    display: inline-block;
    position: absolute;
    width: 130px;
    height: 65px;
    bottom: 0;
    right: 0;
    z-index: 1000;
  }

  .infoContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    width: 45%;
    min-height: 400px;
    letter-spacing: 0.2rem;
    .slideTitle {
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
    }

    .shopNowTitle {
      font-family: ${({ theme }) => theme.font.fontFamily};
      font-size: 18px;
      text-transform: capitalize;
      letter-spacing: 0.7rem;
      font-weight: 300;
    }
  }

  .bigButtons {
    display: inline-block;
    position: absolute;
    width: 160px;
    height: 80px;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
  .shopNow {
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
    .arrow {
      opacity: 0.4;
      width: 40px;
      margin-left: 3rem;
    }
  }

  // styles for smaller than mid screens
  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    flex-direction: column;
    height: auto;
    .toggleButton {
      display: inline;
    }
    .imgContainer {
      width: 100%;
      height: 370px;
    }
    .infoContainer {
      width: 100%;
      padding: 35px;
    }
    .shopNow {
      justify-content: center;
    }
    .slideTitle {
      line-height: 3.5rem;
      padding-bottom: 1rem;
      text-align: center;
    }
    .slideParagraph {
      text-align: center;
    }
    .shopNowTitle {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  // styles for up to mid screens
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    .infoContainer {
      padding: 40px;
    }
  }
`;
