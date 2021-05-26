import React from "react";

import useOnScreen from "../CustomHooks/useOnScreen";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import {
  ContactH1Div,
  ContactH1,
  StaticContactH1,
  ContactDiv,
  ContactIcons,
  MailIcon,
  LinkedinIcon,
  ContactText,
  Footer,
  /* TopScroll, */
} from "./ContactElements";

export default function Contact() {

  const [ref, visible] = useOnScreen({ threshold: 0.8 });

  return (
    <>
      <div id="bubbles">
        <ContactH1Div ref={ref} id="contact">
          {visible ? (
            <ContactH1>Contact</ContactH1>
          ) : (
            <StaticContactH1>Contact</StaticContactH1>
          )}
        </ContactH1Div>
        <br />
        {/* <ContactBox>
        Name
        <ContactDetails placeholder="Name"></ContactDetails>
        Email
        <ContactDetails placeholder="E-mail"></ContactDetails>
        Message
        <MesageBox placeholder="Mesage"></MesageBox>
      </ContactBox> */}
        {/*      <br />
      <br /> */}
        {/* <p>Feel free to contact me via email</p>
      <a href="mailto:mikeywearing@gmail.com">
        <FaEnvelope />
      </a>
      <p>By phone</p> 
      <p>0762970258</p> 
      <p>Or reach out to me on Linkedin</p> 
      <FaLinkedin /> */}
        <ContactDiv>
          <p>Get in Touch</p>
          <ContactIcons>
            <MailIcon
              href="mailto:mikeywearing@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </MailIcon>
            <LinkedinIcon
              href="https://www.linkedin.com/in/michael-wearing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </LinkedinIcon>
          </ContactIcons>
        </ContactDiv>
        <ContactText>
          Currently Looking for work! My inbox is open to all however, whether
          you are interested in hiring me or simply have a question, don't
          hesitate to reach out. Have a nice day!
        </ContactText>
        <Footer>
          {/* <TopScroll to="info" smooth={true} offset={-50}>
          ^^^ To The Top ^^^
        </TopScroll> */}
          <p> Designed and Built by Michael Wearing</p>
        </Footer>
      </div>
    </>
  );
}
