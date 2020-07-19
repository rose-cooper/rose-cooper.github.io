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
  margin-bottom: 5vh;
  margin-top: -10vh;
`;

const ResBackground = ({mobile,bigScreen,portrait}) => {
  var mobileStyle = {
    marginTop: "0%"
  }
  return (
    <div id="research">
      <Background style={mobile ? mobileStyle : {}}>
        <ResColumns portrait={portrait} bigScreen={bigScreen} mobile={mobile}/>
      </Background>
    </div>
  );
};

export default ResBackground;
