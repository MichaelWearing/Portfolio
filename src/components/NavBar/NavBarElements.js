import styled from "styled-components";
import { Link } from "react-scroll";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;

  background: deepskyblue;
  border-bottom: 1px solid aliceblue;

  min-height: 6vh;

  position: sticky;
  top: 0;

  z-index: 5;
`;

export const NavMyName = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;

  font-weight: bold;
  font-size: 1.5em;

  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;

  align-items: center;
  text-align: center;
  list-style: none;
`;

export const NavLinks = styled(Link)`
  padding: 1em;

  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const NavItem = styled.li`
  font-size: 1.5em;
`;

export const NavIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 11vh;
  padding-top: 1vh;
`;

export const Linkedin = styled.img`
  height: 35px;
  width: 35px;
`;

export const GitHub = styled.img`
  height: 35px;
  width: 35px;

  padding-left: 1px;
`;

export const GithubIcon = styled.a`
  color: black;
  font-size: 4vh;

  &:hover {
    color: white;
  }
`;
export const LinkedinIcon = styled.a`
  color: black;
  font-size: 4vh;

  &:hover {
    color: white;
  }
`;
