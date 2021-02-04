import styled from "styled-components";

export const AboutH1 = styled.h1`
  background: aliceblue;

  text-align: center;
  font-size: 8vh;

  ${'' /* padding-bottom: 7vh; */}
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
  border-radius: 16px;
  margin: auto;
  max-width: 61em;
  min-height: 86vh;
  align-content: center;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5vh;
`;

export const AboutText1 = styled.p`
  ${'' /* background: deepskyblue; */}

  ${'' /* padding: 0 400px; */}
  padding-bottom: 8vh;
  text-align: center;
  font-size: 24px;
  min-height: 25vh;

  ${'' /* @media screen and (min-width: 1500px) {
    padding: 0 550px;
  } */}
`;
export const AboutText2 = styled.p`
  ${'' /* background: deepskyblue; */}

  ${'' /* padding: 0 400px 43vh 400px; */}
  text-align: center;
  font-size: 24px;
  min-height: 25vh;

  ${'' /* @media screen and (min-width: 1500px) {
    padding: 0 550px;
  } */}
`;

export const MikeyImg = styled.img`
  height: 20em;
  width: 20em;
`;
