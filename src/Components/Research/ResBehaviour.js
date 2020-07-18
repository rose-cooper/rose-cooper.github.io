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

const ResBehaviour = ({mobile}) => {
  var textString = `When we remember a past event, such as dinner with friends or a hike through a national park, we mentally piece together the diverse aspects of our original experience — the sights, sounds, conversations, thoughts and feelings attached to that moment. Memory is more like a jigsaw puzzle than a video player: remembering one detail helps us to fit the others in place. But, the kinds of content we recall and the accuracy with which we do so varies drastically over time, between different experiences, and from one person to another. My prior research explored how the quality and structure of memories differs in autism, and my current research tests how we ‘reconstruct’ details of our memories, and how those details influence our subjective experience of the past.`;

  const imageSource = "./img/behaviour.jpg";

  var mobileStyle = {
    flexDirection:"column-reverse"
  }
  return (
    <Container style={mobile ? mobileStyle : {}}>
      <ResText mobile={mobile} text={textString} />
      <ResPhoto mobile={mobile} source={imageSource} />
    </Container>
  );
};

export default ResBehaviour;
