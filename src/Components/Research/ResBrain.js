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
  var textString = `Remembering the past and imagining the future engages a large scale network of brain regions, known as the default network. Using functional MRI, my work investigates how activity and communication of this network shape our ability to perceive and recall unique events. My research is focused on connections between medial temporal and parietal brain regions and how their communication supports the formation and retrieval of event models. I am particularly interested in how the pattern of functional connections within the default network explains individual differences in subjective experience.`;

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
