import React from "react";

import arrow from "../../images/ArrowDown.svg";

import {
  InfoContainer,
  InfoH1Container,
  InfoH1Letters,
  InfoGreeting,
  InfoH1Div,
  InfoPTag,
  ArrowLink,
  InfoArrow,
} from "./InfoElements";

export default function Info() {
  return (
    <>
      <InfoContainer id="info">
        <InfoH1Container>
          <div className="content">
            <InfoGreeting>Hi, my name is</InfoGreeting>
            <InfoH1Div>
              <InfoH1Letters>M</InfoH1Letters>
              <InfoH1Letters>i</InfoH1Letters>
              <InfoH1Letters>c</InfoH1Letters>
              <InfoH1Letters>h</InfoH1Letters>
              <InfoH1Letters>a</InfoH1Letters>
              <InfoH1Letters>e</InfoH1Letters>
              <InfoH1Letters>l</InfoH1Letters>
              <InfoH1Letters>&nbsp;</InfoH1Letters>
              <InfoH1Letters>W</InfoH1Letters>
              <InfoH1Letters>e</InfoH1Letters>
              <InfoH1Letters>a</InfoH1Letters>
              <InfoH1Letters>r</InfoH1Letters>
              <InfoH1Letters>i</InfoH1Letters>
              <InfoH1Letters>n</InfoH1Letters>
              <InfoH1Letters>g</InfoH1Letters>
            </InfoH1Div>
            <InfoPTag>
              I'm a full-stack developer based in Stockholm. I love problem
              solving. I am constantly trying to learn new skills and extend my
              toolkit.
            </InfoPTag>
          </div>
        </InfoH1Container>
        <ArrowLink to="about" smooth={true} offset={-50}>
          <InfoArrow src={arrow} />
        </ArrowLink>
      </InfoContainer>
    </>
  );
}
