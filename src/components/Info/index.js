import React from "react";

import arrow from "../../images/ArrowDown.svg";

import {
  InfoContainer,
  InfoH1Container,
  InfoGreeting,
  InfoH1,
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
            <InfoH1>Michael Wearing</InfoH1>
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
