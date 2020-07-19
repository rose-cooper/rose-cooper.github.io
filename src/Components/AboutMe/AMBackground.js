import React from "react";
import styled from "@emotion/styled/macro";
import AMPhoto from "./AMPhoto";
import AMText from "./AMText";

const Background = styled.div`
  width: 70vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5vh;
`;

const Container = styled.div`
width: 100vw;
padding-top: 10vh;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10vh;
`;

const AMBackground = ({mobile,bigScreen}) => {
  var mobileStyle = {
    flexDirection:"column",
    marginLeft: "10vw",
    marginRight: "10vw",
  }
  return (
    <Container>
    <Background style={mobile ? mobileStyle : {}}>
      <AMPhoto mobile={mobile}/>
      <AMText bigScreen={bigScreen} mobile={mobile}/>
    </Background>
    </Container>
  );
};

export default AMBackground;
