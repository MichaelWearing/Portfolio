import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export const AboutH1 = styled.h1`
  background: aliceblue;

  text-align: center;
  font-size: 8vh;

  ${"" /* padding-bottom: 7vh; */}
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
  border-radius: 16px;
  margin: auto;
  max-width: 61em;
  min-height: 70vh;
  align-content: center;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5vh;
`;

export const AboutText1 = styled.p`
  ${"" /* background: deepskyblue; */}

  ${"" /* padding: 0 400px; */}
  ${'' /* padding-bottom: 8vh; */}
  ${'' /* text-align: center; */}
  font-size: 22px;
  min-height: 24vh;

  ${"" /* @media screen and (min-width: 1500px) {
    padding: 0 550px;
  } */}
`;
export const AboutText2 = styled.p`
  ${"" /* background: deepskyblue; */}

  ${"" /* padding: 0 400px 43vh 400px; */}
  ${'' /* text-align: center; */}
  font-size: 22px;
  min-height: 16vh;

  ${"" /* @media screen and (min-width: 1500px) {
    padding: 0 550px;
  } */}
`;

export const MikeyImg = styled.img`
  height: 20em;
  width: 20em;
`;

export const AboutSkills = styled.p`
  font-size: 22px;
  min-height: 18vh;

  ${"" /* @media screen and (min-width: 1500px) {
    padding: 0 550px;
  } */}
`;

export const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 250px));
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`;
export const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
`;

const bounce = keyframes`
10%{
  transform: translateY(-10vh);
}
30%{
  transform: translateY(0vh);
}
70%{
  transform: translateY(-10vh);
}
100%{
  transform: translateY(0vh);
}
`;

export const ArrowLink = styled(Link)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  animation: ${bounce} 3s;
`;

export const InfoArrow = styled.img`
  display: flex;

  min-height: 14vh;

  width: 100%;
  height: 100px;
  padding: 0 400px;
`;
