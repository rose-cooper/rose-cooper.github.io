import React from "react";
import styled from "@emotion/styled/macro";

const Photo = styled.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
`;

const Container = styled.div`
  position: relative;
  width: 60%;
  flex: 0 0 40%;
  display: block;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const AMPhoto = () => {
  var imageSource = `./img/face.jpg`;
  return (
    <Container>
      <Photo src={imageSource} alt="" />
    </Container>
  );
};

export default AMPhoto;
