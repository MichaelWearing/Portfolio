import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaGithub, FaPlay } from "react-icons/fa";

import portfolio from "../../images/Portfolio.png";
import starwars from "../../images/StarWars.png";

import {
  TimelineContainer,
  TimelineH1,
  PortfolioImg,
  LinkContainer,
  Link,
} from "./ProjectsElements";

export default function Projects() {
  return (
    <>
      <TimelineContainer>
        <TimelineH1 id="projects">Projects</TimelineH1>

        <VerticalTimeline>
          <VerticalTimelineElement
            icon={<FaReact />}
            iconStyle={{ background: "#EE82EE", color: "#fff" }}
          >
            <h3>Portfolio Site</h3>
            <h4>Date</h4>
            <br />
            <PortfolioImg src={portfolio} />
            <br />
            <h4>Description: </h4>
            <p>This is a link to the code for this website.</p>
            <br />
            <Link href="https://github.com/MichaelWearing/Portfolio">
              <FaGithub />
              Code
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaReact />}
            iconStyle={{ background: "#EE82EE", color: "#fff" }}
          >
            <h3>StarWars App Hackday Project</h3>
            <h4>Date</h4>
            <br />
            <PortfolioImg src={starwars} />
            <br />
            <h4>Description: </h4>
            <p>
              This is a project I made towards the end of my time at salt. This
              app was made in 1 day. It is an app that allows the user to
              choose a planet, and then a character from that planet, and
              finally see information about that character.
            </p>
            <br />
            <LinkContainer>
              <Link href="https://github.com/MichaelWearing/Salt-HackDay-StarWars">
                <FaGithub />
                Code
              </Link>
              <Link href="https://github.com/MichaelWearing/Salt-HackDay-StarWars">
                <FaPlay />
                Demo
              </Link>
            </LinkContainer>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </TimelineContainer>
    </>
  );
}
