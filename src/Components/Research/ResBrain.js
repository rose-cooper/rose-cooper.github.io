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
  var textString = `Remembering the past and imagining the future engages a large scale network of brain regions, known as the default network. Using functional magnetic resonance imaging (fMRI), my work investigates how information flows through this network and how its activity and connectivity shapes our ability to perceive and recall unique events. My research is particularly focused on connections between medial temporal and parietal areas and how their communication supports a hierarchical representation of events. I am also interested in how the pattern of functional connections within the default network explains memory idiosyncrasies or  “fingerprints” as well as differences in the way memories are experienced over time.`;

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
