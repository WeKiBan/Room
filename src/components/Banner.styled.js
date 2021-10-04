import styled from 'styled-components';

export const BannerStyled = styled.div`
  display: flex;
  user-select: none;
  height: 1000px;
  min-height: 200px;
  height: 35vh;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 30%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    width: 100%;
    flex: initial;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 150px;
  margin: 50px;
  width: 40%;
  h2 {
    letter-spacing: 0.3rem;
    transform: scale(0.98, 0.9);
    padding-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    margin: 0;
    padding: 40px;
    min-height: 400px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0;
    padding: 40px;
  }
`;
