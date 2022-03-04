import React from "react";
import styled from "@emotion/styled/macro";
import ResBrainPhoto from "./ResBrainPhoto";
import ResText from "./ResText";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 10vh;
`;

const ResBrain = ({mobile,bigScreen,portrait}) => {
  var textString = `BRAIN STATES: Remembering the past engages a distributed network of brain regions, known as the default network, including regions such as posterior parietal cortex and the medial temporal lobe. Using functional MRI, my work investigates how different states of activity and communication within this network shape our ability to perceive and remember events, and explain individual differences in subjective experience.

  I am currently working within a psychology, computer science, and engineering team to develop new data-driven, machine learning methods that model individual and context-dependent differences in brain function. These methods will improve our ability to understand meaningful variation in cognitive states and brain-behavior relationships across people and situations.`;

  const imageSource = "./img/brain.png";

  var mobileStyle = {
    flexDirection:"column"
  }
  return (
    <Container style={mobile ? mobileStyle : {}}>
      <ResBrainPhoto bigScreen={bigScreen} portrait={portrait} mobile={mobile} source={imageSource} />
      <ResText bigScreen={bigScreen} mobile={mobile} text={textString} />
    </Container>
  );
};

export default ResBrain;
