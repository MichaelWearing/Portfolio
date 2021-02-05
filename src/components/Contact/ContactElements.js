import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

const SlideIn = keyframes`
10%{
  transform: translateX(-10vh);
}
30%{
  transform: translateX(0vh);
}
70%{
  transform: translateX(-10vh);
}
100%{
  transform: translateX(0vh);
}
`;

export const ContactH1 = styled.h1`
  background: aliceblue;

  text-align: center;
  font-size: 8vh;

  animation: ${SlideIn} 3s;
`;

export const ContactBox = styled.div`
  background: springgreen;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;

  width: 100%;
  margin: 0 auto;
  max-width: 555px;

  padding: 18px 0;
`;

export const ContactDetails = styled.input`
  width: 50vh;
  height: 2.5em;
  border-radius: 6px;
  border: 1px solid black;
  padding: 5px 8px;
`;

export const MesageBox = styled.textarea`
  height: 15vh;
  width: 50vh;

  border-radius: 6px;
  border: 1px solid black;
  padding: 5px 8px;
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 5vh;

  padding: 5vh 0 0 0;
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0px 79vh;

  @media screen and (min-width: 1500px) {
    padding: 0px 90vh;
  }
`;

export const MailIcon = styled.a`
  font-size: 8vh;
  color: black;

  &:hover {
    color: white;
  }
`;
export const LinkedinIcon = styled.a`
  font-size: 8vh;
  color: black;

  &:hover {
    color: white;
  }
`;

export const ContactText = styled.p`
  text-align: center;
  width: 100%;
  padding: 0 30% 3vh;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  color: white;

  width: 98%;
  padding-left: 2%;
`;

export const TopScroll = styled(Link)`
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
