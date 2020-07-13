import React from "react";
import styled from "@emotion/styled/macro";
import AMPhoto from "./AMPhoto";
import AMText from "./AMText";

const Background = styled.div`
  width: 100vw;
  background: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: -5vh;
  margin-bottom: -5vh;
`;

const AMBackground = () => {
  return (
    <Background>
      <AMPhoto />
      <AMText />
    </Background>
  );
};

export default AMBackground;
