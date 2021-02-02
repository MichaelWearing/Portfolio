import React from "react";

import mikey from "../../images/MikeyCircle.png";
import arrow from "../../images/ArrowDown.svg";
import video from "../../images/video.mp4";

import {
  InfoContainer,
  InfoH1Container,
  InfoH1,
  InfoH2,
  InfoImg,
  InfoText,
  InfoArrow,
  Video,
} from "./InfoElements";

export default function Info() {
  return (
    <>
      <InfoContainer id="info">
        <InfoH1Container>
          <InfoH1>Michael Wearing</InfoH1>
          <InfoH2>Full-Stack Developer</InfoH2>
        </InfoH1Container>
        <InfoImg src={mikey} />
        <br />
        <br />
        <InfoArrow src={arrow} />
      </InfoContainer>
      {/*  <InfoText>
        Hobby Coder, turned Full-Stack Developer. I began my tech journey by
        self teaching myself Java before landing my first position in a company.
        There is nothing better than listening to Lo-Fi on YouTube while coding
        away for hours on end. I am a flexible person, able to fit into any role
        in a team.
      </InfoText> */}
      {/* <Video autoPlay loop muted src={video} type='video/mp4'/> */}
    </>
  );
}
