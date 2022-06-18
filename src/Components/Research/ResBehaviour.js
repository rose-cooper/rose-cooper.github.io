import React from "react";
import styled from "@emotion/styled/macro";
import ResPhoto from "./ResPhoto";
import ResText from "./ResText";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const ResBehaviour = ({mobile,bigScreen,portrait}) => {
  var textString = `When we remember a past event, we mentally piece together the features of our original experience — the sights, sounds, conversations, thoughts and feelings attached to that moment in time. Memory is more like a jigsaw puzzle than a video player: remembering one detail helps us to fit the others in place. But, the type of information we recall and the accuracy and vividness with which we do so varies considerably between memories and from one person to another.

During my PhD, I studied how memory for visual information of past events (such as places) differs in autism, integrating behavioral assessments, eye tracking, and neuroimaging. My postdoctoral research used multimodal, dynamic tasks in conjunction with magnetic resonance imaging (MRI) to test how we perceive and remember visual, emotional, and social features of our environment, and how those features influence our subjective experience of the past.`;

  const imageSource = "./img/behaviour.jpg";

  var mobileStyle = {
    flexDirection:"column-reverse"
  }
  return (
    <Container style={mobile ? mobileStyle : {}}>
      <ResText bigScreen={bigScreen} mobile={mobile} text={textString} />
      <ResPhoto bigScreen={bigScreen} sportrait={portrait} mobile={mobile} source={imageSource} />
    </Container>
  );
};

export default ResBehaviour;
