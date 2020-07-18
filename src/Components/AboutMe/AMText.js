import React from "react";
import styled from "@emotion/styled/macro";

//import data from "./data.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  flex: 0 0 48%;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: black;
  word-wrap: normal;
  display: block;
  white-space: pre-line;
  line-height: 1.5;
  text-align: left;
  padding-right: 7rem;
  font-weight: 600;
`;

const Text2 = styled.div`
  font-size: 1.2rem;
  color: black;
  word-wrap: normal;
  display: block;
  white-space: pre-line;
  line-height: 1.5;
  text-align: left;
  margin-top: 2rem;
  font-style: italic;
  padding-right: 7rem;
`;

const AMText = () => {
  var text = `2017 - present
  Postdoctoral Scholar
  Memory Modulation Lab, Boston College

  2013-2017
  PhD Psychology, University of Cambridge`;

  var text2 = `I am a cognitive neuroscientist interested in how we perceive and remember events, and how brain networks support the multidimensional quality of our memories`;

  // ? to do to save data in mongodb??
  //var string = data[0].aboutme.text;
  //console.log(data[0].aboutme.text);
  return (
    <Container>
      <Text>{text}</Text>
      <Text2>{text2}</Text2>
    </Container>
  );
};

export default AMText;
