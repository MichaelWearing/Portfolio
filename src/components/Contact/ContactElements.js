import styled from "styled-components";

export const ContactH1 = styled.h1`
  background: #CEDAED;

  text-align: center;
  font-size: 8vh;
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

  padding: 5vh 0 10vh 0;
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0px 79vh;

  @media screen and (min-width: 1500px) {
    padding: 0px 90vh;
  }
`;
