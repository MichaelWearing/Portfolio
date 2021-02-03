import React from "react";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import {
  ContactH1,
  ContactBox,
  ContactDetails,
  MesageBox,
  ContactDiv,
  ContactIcons,
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
        <FaEnvelope />  
        <FaLinkedin />
        </ContactIcons>
        <p>076 297 02 58</p>
      </ContactDiv>
    </>
  );
}
