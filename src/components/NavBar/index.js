import React from "react";

import linkedin from "../../images/Linkedin.svg";
import github from "../../images/GitHub.png";

import {
  NavContainer,
  NavMyName,
  NavMenu,
  NavItem,
  NavLinks,
  Linkedin,
  GitHub,
} from "./NavBarElements";

export default function NavBar() {
  return (
    <NavContainer>
      <NavMyName>Michael Wearing</NavMyName>
      <NavMenu>
        <NavItem>
          <NavLinks>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Projects</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Experience</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Skills</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Contact</NavLinks>
        </NavItem>
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
      </NavMenu>
    </NavContainer>
  );
}
