import React from "react";
import styled from "@emotion/styled/macro";

const TopImage = styled.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  position: relative;
  border-bottom: 2px solid black;
`;

const Name = styled.div`
  font-size: 4rem;
  font-family: "Montserrat", sans-serif;
  position: absolute;
  top: 5vh;
  padding-top: 10vh;
  height: 20vh;
  width: 100vw;
`;

const TopPicture = () => {
  var imageSource = `./img/toppic.jpg`;

  return (
    <div id="home">
      <TopImage src={imageSource} alt=""></TopImage>
      <Name>Rose Cooper, PhD</Name>
    </div>
  );
};

export default TopPicture;
