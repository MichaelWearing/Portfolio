import styled from "styled-components";

export const InfoContainer = styled.div`
  background: deepskyblue;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 0 30px;
  min-height: 80vh;
`;

export const InfoH1Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px;
`;

export const InfoH1 = styled.h1`
  font-size: 45px;
`;

export const InfoImg = styled.img`
  height: 15em;
  width: 15em;
`;

export const InfoText = styled.p`
  background: deepskyblue;

  padding: 0 400px;
  text-align: center;
  font-size: 24px;
  min-height: 25vh;

  @media screen and (min-width: 1500px) {
    padding: 0 550px;
  }
`;

export const InfoArrow = styled.img`
  background: deepskyblue;

  display: flex;

  min-height: 14vh;

  width: 100%;
  height: 100px;
  padding: 0 400px;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;

  ${'' /*   width: 100%;
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
     
    Constuction video thing*/}
`;