import React from "react";
import styled from "@emotion/styled/macro";
import { useMediaQuery } from 'react-responsive';

const Photo = styled.img`
  width: 50vh;
  height: 35vh;
  margin-right: 5vw;
  object-fit: contain;
  position: relative;
  max-width: 90vw;
`;

const ResBrainPhoto = ({ source,mobile,portrait, bigScreen}) => {
  const isNarrow = useMediaQuery({
        query: '(min-height: 1000px)'
    });
  var mobileStyle = {
    marginRight: "0vw"
  }
  var portraitStyle = {
    width: "30vw",
    height: "25vw"
  }
  var imageSource = source;
  return <Photo style={mobile ? mobileStyle :
    bigScreen ? {} : 
    portrait || isNarrow ? portraitStyle :
    {}} src={imageSource} alt="" />;
};

export default ResBrainPhoto;
