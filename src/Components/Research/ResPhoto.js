import React from "react";
import styled from "@emotion/styled/macro";

const Photo = styled.img`
  width: 50vh;
  height: 35vh;
  object-fit: contain;
  position: relative;
  margin-left: 5vw;
`;

const ResPhoto = ({ source }) => {
  var imageSource = source;
  return <Photo src={imageSource} alt="" />;
};

export default ResPhoto;
