import React from "react";

import linkedin from "../../images/Linkedin.svg";
import github from "../../images/GitHub.png";

import {
  NavContainer,
  NavMyName,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcons,
  Linkedin,
  GitHub,
} from "./NavBarElements";

import { FaReact, FaGithub, FaPlay } from "react-icons/fa";

export default function NavBar() {
  return (
    <NavContainer>
      <NavMyName to="info" smooth={true} offset={-50}>
        Michael Wearing
      </NavMyName>
      <NavMenu>
        <NavItem>
          <NavLinks to="about" smooth={true} offset={-35}>
            About
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="projects" smooth={true} offset={-35}>
            Projects
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Experience</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Skills</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="contact" smooth={true} offset={-35}>
            Contact
          </NavLinks>
        </NavItem>
        <NavIcons>
          <NavItem>
            <a href="https://www.linkedin.com/in/michael-wearing/">
              <Linkedin src={linkedin} />
            </a>
          </NavItem>
          <NavItem>
            <a href="https://github.com/MichaelWearing">
              <GitHub src={github} />
            </a>
          </NavItem>
        </NavIcons>
      </NavMenu>
    </NavContainer>
  );
}
