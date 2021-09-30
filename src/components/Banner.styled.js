import styled from 'styled-components';

export const BannerStyled = styled.div`
  display: flex;
  min-height: 300px;
  height: 30vh;
  width: 100%;
`;

export const Image = styled.img`
  width: 30%;
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px;
  h2 {
    letter-spacing: 0.3rem;
    transform: scale(0.98, 0.9);
    padding-bottom: 1rem;
  }
  width: 40%;
`;
