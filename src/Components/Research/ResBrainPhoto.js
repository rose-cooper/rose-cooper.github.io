import React from "react";
import styled from "@emotion/styled/macro";

const Photo = styled.img`
  width: 50vh;
  height: 35vh;
  margin-right: 5vw;
  object-fit: contain;
  position: relative;
  max-width: 90vw;
`;

const ResBrainPhoto = ({ source,mobile,portrait}) => {
  var mobileStyle = {
    marginRight: "0vw"
  }
  var portraitStyle = {
    width: "30vw",
    height: "25vw"
  }
  var imageSource = source;
  return <Photo style={mobile ? mobileStyle : portrait ? portraitStyle : {}} src={imageSource} alt="" />;
};

export default ResBrainPhoto;
