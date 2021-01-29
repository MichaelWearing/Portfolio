import styled from "styled-components";

export const InfoContainer = styled.div`
  background: cyan;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 0 30px;
  min-height: 50vh;
`;

export const InfoH1Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 20px;
`;

export const InfoH1 = styled.h1`
  background: orange;

  font-size: 45px;
`;

export const InfoImg = styled.img`
  height: 15em;
  width: 15em;
`;

export const InfoText = styled.p`
    padding: 0 400px;
    text-align: center;
    font-size: 24px;

    @media screen and (min-width: 1500px) {
        padding: 0 550px;
    }
`;

