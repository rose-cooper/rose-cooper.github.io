import React from "react";
import styled from "@emotion/styled/macro";
import { useMediaQuery } from 'react-responsive';

const TopImage = styled.img`
  width: 100vw;
  object-fit: cover;
  position: relative;
  border-bottom: 2px solid black;
`;

const Name = styled.div`
  font-size: 4rem;
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  position: absolute;
  top: 5vh;
  left: 10vw;
  padding-top: 10vh;
  height: 20vh;
  width: 80vw;
  text-align: center;
`;

const TopPicture = ({bigScreen}) => {
  var imageSource = `./img/toppic.jpg`;
  const isSmall = useMediaQuery({
      query: '(max-width: 768px)'
    });
  var smallText = {fontSize: "2rem", paddingTop: "5vh"}
  var smallImage = {height: "25vh"}
  var bigStyle = {
      fontSize: "7vh"
  }
  return (
    <div id="home">
      <TopImage style={isSmall ? smallImage : {height : '50vh'}} src={imageSource} alt=""></TopImage>
      <Name style={isSmall ? smallText : bigScreen ? bigStyle : {}}>Rose Cooper, PhD</Name>
    </div>
  );
};

export default TopPicture;
