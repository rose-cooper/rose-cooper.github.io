import React from "react";
import styled from "@emotion/styled/macro";

const Photo = styled.img`
  width: 50vh;
  height: 35vh;
  object-fit: contain;
  position: relative;
  margin-left: 5vw;
  max-width: 90vw;
`;

const ResPhoto = ({ source, mobile, portrait}) => {
  var mobileStyle = {
    marginLeft: "0vw"
  }
  var portraitStyle = {
    width: "30vw",
    height: "25vw"
  }
  var imageSource = source;
  return <Photo style={mobile ? mobileStyle : portrait ? portraitStyle : {}} src={imageSource} alt="" />;
};

export default ResPhoto;
