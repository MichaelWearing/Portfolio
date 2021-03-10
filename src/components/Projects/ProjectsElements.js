import styled from "styled-components";

export const TimelineContainer = styled.div`
  background: aliceblue;
`;

export const TimelineH1 = styled.h1`
  background: #fff;
  color: deepskyblue;

  text-align: center;
  font-size: 8vh;
`;

export const PortfolioImg = styled.img`
  width: 370px;
  height: 215px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 20vh;
`;

export const Link = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: black;
  background: lightgray;
  text-decoration: none;

  border: 1px solid black;
  border-radius: 4px;

  padding: 3px 6px;
  width: 9vh;

  cursor: pointer;
`;
