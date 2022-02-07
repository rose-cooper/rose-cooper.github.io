import React from "react";
import styled from "@emotion/styled/macro";

//import data from "./data.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  flex: 0 0 60%;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: black;
  word-wrap: normal;
  display: block;
  white-space: pre-line;
  line-height: 1.5;
  text-align: left;
  font-weight: 600;
`;


const AMText = ({mobile,bigScreen}) => {
  var text = `Experiential AI Postdoctoral Research Associate
  Roux Institute, Northeastern University`;

  var mobileStyle = {
    paddingLeft: "5vw"
  }
  var bigStyle = {
    fontSize: "2.2vh"
  }
  return (
    <Container style={mobile ? mobileStyle : {}}>
      <Text style={bigScreen ? bigStyle : {paddingLeft: "5vw"}}>{text}</Text>
    </Container>
  );
};

export default AMText;
