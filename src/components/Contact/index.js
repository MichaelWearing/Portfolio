import React from "react";

import {
  ContactH1,
  ContactBox,
  ContactDetails,
  MesageBox,
} from "./ContactElements";

export default function Contact() {
  return (
    <>
      <ContactH1 id="contact">Contact</ContactH1>
      <br />
      <ContactBox>
        Name
        <ContactDetails placeholder="Name"></ContactDetails>
        Email
        <ContactDetails placeholder="E-mail"></ContactDetails>
        Message
        <MesageBox placeholder="Mesage"></MesageBox>
      </ContactBox>
      <br />
      <br />
    </>
  );
}
