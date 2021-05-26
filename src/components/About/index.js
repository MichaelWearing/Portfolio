import React from "react";

import useOnScreen from "../CustomHooks/useOnScreen";

import mikey from "../../images/MikeyCircle.png";
import arrow from "../../images/ArrowDown.svg";

import {
  AboutDiv,
  AboutH1Div,
  AboutH1,
  StaticAboutH1,
  AboutContent,
  AboutText,
  AboutText1,
  AboutText2,
  AboutSkills,
  MikeyImg,
  SkillList,
  Skill,
  ArrowLink,
  InfoArrow,
} from "./AboutElements";

export default function About() {
  const [ref, visible] = useOnScreen({ threshold: 0.8 });
  return (
    <>
      <AboutDiv id="bubbles">
        <AboutH1Div ref={ref} id="about">
          {visible ? (
            <AboutH1>About Me</AboutH1>
          ) : (
            <StaticAboutH1>About Me</StaticAboutH1>
          )}
        </AboutH1Div>

        <AboutContent>
          <AboutText>
            <AboutText1>
              Hobby Coder, turned Full-Stack Developer. I began my tech journey
              by self teaching myself Java before landing my first position in a
              company. There is nothing better than listening to Lo-Fi on
              YouTube while coding away for hours on end. I am a flexible
              person, able to fit into any role in a team.
            </AboutText1>
            <AboutText2>
              I am orginally from England and have always had a passion for
              Tech. Growing up playing video games, problem solving has always
              been somthing that I am great at.
            </AboutText2>
            <AboutSkills>
              Some technologies i've been working with recently:
              <SkillList>
                <Skill>▹ JavaScript (ES6+)</Skill>
                <Skill>▹ Java</Skill>
                <Skill>▹ React</Skill>
                <Skill>▹ Express</Skill>
                <Skill>▹ Node.js</Skill>
                <Skill>▹ HTML & CSS</Skill>
              </SkillList>
            </AboutSkills>
          </AboutText>
          <MikeyImg src={mikey} />
        </AboutContent>
        <ArrowLink to="projects" smooth={true} offset={-50}>
          <InfoArrow src={arrow} />
        </ArrowLink>
      </AboutDiv>
    </>
  );
}
