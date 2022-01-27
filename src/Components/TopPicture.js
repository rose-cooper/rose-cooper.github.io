import React from "react";
import styled from "@emotion/styled/macro";
import { useMediaQuery } from 'react-responsive';

const TopImage = styled.img`
  width: 100vw;
  object-fit: cover;
  position: relative;
  border-bottom: 2px solid black;
`;

const TopPicture = ({bigScreen}) => {
  var imageSource = `./img/toppic.jpg`;
  const isSmall = useMediaQuery({
      query: '(max-width: 768px)'
    });
  var smallText = {fontSize: "2.5rem", paddingTop: "5vh"}
  var smallImage = {height: "20vh"}
  var bigStyle = {
      fontSize: "7vh"
  }
  return (
    <div id="home">
      <TopImage style={isSmall ? smallImage : {height : '40vh'}} src={imageSource} alt=""></TopImage>
    </div>
  );
};

export default TopPicture;
