import React from "react";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import {
  ContactH1,
  ContactBox,
  ContactDetails,
  MesageBox,
  ContactDiv,
  ContactIcons,
  MailIcon,
  LinkedinIcon,
  GithubIcon
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
        <p>076 297 02 58</p>
      </ContactDiv>
    </>
  );
}
