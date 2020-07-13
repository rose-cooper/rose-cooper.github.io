import React from "react";
import styled from "@emotion/styled/macro";

const Photo = styled.img`
  width: 50vh;
  height: 35vh;
  margin-right: 5vw;
  object-fit: contain;
  position: relative;
`;

const ResBrainPhoto = ({ source }) => {
  var imageSource = source;
  return <Photo src={imageSource} alt="" />;
};

export default ResBrainPhoto;
