import React from "react";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import {
  ContactH1,
  ContactDiv,
  ContactIcons,
  MailIcon,
  LinkedinIcon,
  ContactText,
  Footer,
  TopScroll,
} from "./ContactElements";

export default function Contact() {
  return (
    <>
      <ContactH1 id="contact">Contact</ContactH1>
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
        Currently Looking for work! My inbox is open to all however, whether you
        are interested in hiring me or simply have a question, don't hesitate to
        reach out. Have a nice day!
      </ContactText>
      <Footer>
        {/* <TopScroll to="info" smooth={true} offset={-50}>
          ^^^ To The Top ^^^
        </TopScroll> */}
        <p> Designed and Built by Michael Wearing</p>
      </Footer>
    </>
  );
}
