import React from "react";

import mikey from "../../images/MikeyCircle.png";

import {
  InfoContainer,
  InfoH1Container,
  InfoH1,
  InfoImg,
  InfoText,
} from "./InfoElements";

export default function Info() {
  return (
    <>
      <InfoContainer>
        <InfoH1Container>
          <InfoH1>Hey! I'm Michael</InfoH1>
          <InfoH1>a FullStack Developer!</InfoH1>
        </InfoH1Container>
        <InfoImg src={mikey} />
      </InfoContainer>
      <InfoText>
        Hobby Coder, turned Full Stack Developer. I began my tech journey by
        self teaching myself Java before landing my first position in a company.
        There is nothing better than listening to Lo-Fi on YouTube while coding
        away for hours on end. I am a flexible person, able to fit into any role
        in a team.
      </InfoText>
    </>
  );
}
