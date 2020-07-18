import React from "react";
import styled from "@emotion/styled/macro";

const Photo = styled.img`
  width: 50vh;
  height: 35vh;
  object-fit: contain;
  position: relative;
  margin-left: 5vw;
`;

const ResPhoto = ({ source, mobile}) => {
  var mobileStyle = {
    marginLeft: "0vw"
  }
  var imageSource = source;
  return <Photo style={mobile ? mobileStyle : {}} src={imageSource} alt="" />;
};

export default ResPhoto;
