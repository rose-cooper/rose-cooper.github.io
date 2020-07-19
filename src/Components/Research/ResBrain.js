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
  var textString = `Remembering the past engages a large scale network of brain regions, often referred to as the default network. Using functional magnetic resonance imaging (fMRI), my work tests how information flows through this network and how its activity and connections support our ability to perceive and recall unique events. For example, we have shown that connections to and within a posterior medial subsystem support the amount of detail we recall about an event, with distinct connections supporting memory for objects and locations within the same event. I am particularly interested in how the pattern of functional connections with the default network explains memory “fingerprints” and differences in the way memories are experienced over time and between different people. `;

  const imageSource = "./img/brain.png";

  var mobileStyle = {
    flexDirection:"column"
  }
  return (
    <Container style={mobile ? mobileStyle : {}}>
      <ResBrainPhoto portrait={portrait} mobile={mobile} source={imageSource} />
      <ResText bigScreen={bigScreen} mobile={mobile} text={textString} />
    </Container>
  );
};

export default ResBrain;
