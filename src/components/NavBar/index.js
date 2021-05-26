import React from "react";

import {
  NavContainer,
  NavMyName,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcons,
  LinkedinIcon,
  GithubIcon,
} from "./NavBarElements";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  return (
    <NavContainer>
      <NavMyName to="info" smooth={true} offset={-100}>
        Michael Wearing
      </NavMyName>
      <NavMenu>
        <NavItem>
          <NavLinks to="about" smooth={true} offset={-50}>
            About
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="projects" smooth={true} offset={-50}>
            Projects
          </NavLinks>
        </NavItem>
        {/* <NavItem>
          <NavLinks>Experience</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Skills</NavLinks>
        </NavItem> */}
        <NavItem>
          <NavLinks to="contact" smooth={true} offset={-50}>
            Contact
          </NavLinks>
        </NavItem>
        <NavIcons>
          <NavItem>
            <LinkedinIcon
              href="https://www.linkedin.com/in/michael-wearing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </LinkedinIcon>
          </NavItem>
          <NavItem>
            <GithubIcon
              href="https://github.com/MichaelWearing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </GithubIcon>
          </NavItem>
        </NavIcons>
      </NavMenu>
    </NavContainer>
  );
}
