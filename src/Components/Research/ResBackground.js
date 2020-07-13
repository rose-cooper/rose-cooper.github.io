import React from "react";
import styled from "@emotion/styled/macro";
import ResColumns from "./ResColumns";

const Background = styled.div`
  width: 100vw;
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10vh;
  margin-bottom: 10vh;
`;

const ResBackground = () => {
  return (
    <div id="research">
      <Background>
        <ResColumns />
      </Background>
    </div>
  );
};

export default ResBackground;
