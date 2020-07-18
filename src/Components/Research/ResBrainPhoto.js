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

const ResBrainPhoto = ({ source,mobile }) => {
  var mobileStyle = {
    marginRight: "0vw"
  }
  var imageSource = source;
  return <Photo style={mobile ? mobileStyle : {}} src={imageSource} alt="" />;
};

export default ResBrainPhoto;
