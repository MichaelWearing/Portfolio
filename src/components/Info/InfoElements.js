import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export const InfoContainer = styled.div`
  background: #C7D2EB;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 0 30px;
  ${"" /* min-height: 94vh; */}
`;

export const InfoH1Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  width: 55%;
  ${"" /* padding: 0 50px; */}

  min-height: 80vh;
  padding-top: 27vh;

  cursor: default;
`;

const Bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-50px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
`;

export const InfoH1Letters = styled.p`
  &:hover {
    color: deepskyblue;
    animation: ${Bounce} 1s ease;
  }
`;

const FadeIn = keyframes`
    0% { 
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% { 
      opacity: 0;
    }
    75% {
      opacity: 0;
      transform: translateX(-50px);    }
    100% { 
      opacity: 1;
    }
`;

export const InfoGreeting = styled.p`
  color: deepskyblue;
  font-size: 4vh;

  animation: ${FadeIn} 1s ease;
`;

export const InfoH1Div = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 12vh;

  animation: ${FadeIn} 2s;
`;

export const InfoPTag = styled.p`
  color: aliceblue;
  width: 55%;
  font-size: 2vh;

  animation: ${FadeIn} 3s ease;
`;

export const InfoImg = styled.img`
  height: 15em;
  width: 15em;
`;
/* const bounce = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`; */
const bounce = keyframes`
    0% { 
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% { 
      opacity: 0;
    }
    60%{
      transform: translateY(-10vh);
    }
    75%{
      transform: translateY(0vh);
    }
    85%{
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

  animation: ${bounce} 6s;
`;

export const InfoArrow = styled.img`
  display: flex;

  min-height: 14vh;

  width: 100%;
  height: 100px;
  padding: 0 400px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;

  ${
    "" /*   width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    background: #020104;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    position: relative;
	z-index: 1;
	overflow: hidden;
     
    Constuction video thing*/
  }
`;
