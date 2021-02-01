import styled from "styled-components";

export const ContactH1 = styled.h1`
  background: springgreen;

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
