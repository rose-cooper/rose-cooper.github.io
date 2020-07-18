import React from "react";
import styled from "@emotion/styled/macro";

const Text = styled.div`
  font-size: 1rem;
  color: black;
  word-wrap: normal;
  display: block;
  white-space: pre-line;
  line-height: 1.5;
  text-align: justify;
  text-justify: inter-word;
`;

const ResText = ({ text,mobile}) => {

  var mobileStyle = {
    marginTop: "5vh"
  }
  return <Text style={mobile ? mobileStyle : {}}>{text}</Text>;
};

export default ResText;
