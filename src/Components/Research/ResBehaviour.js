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
  var textString = `When we remember an event, such as dinner with friends or a hike through a national park, we mentally piece together the diverse features of our original experience — the sights, sounds, conversations, thoughts and feelings attached to that moment. Memory is more like a jigsaw puzzle than a video player: remembering one detail helps us to fit the others in place. But, the type of information we recall and the accuracy with which we do so varies considerably between experiences and from one person to another. My doctoral research explored how memory for contextual information differs in autism. My postdoctoral research uses multimodal, naturalistic paradigms to test how we integrate and reconstruct visuospatial features of our environment, and how those features influence our subjective experience of the past.`;

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
