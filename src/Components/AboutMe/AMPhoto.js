import React from "react";
import styled from "@emotion/styled/macro";

const Photo = styled.img`
  border-radius: 50%;
  border-color: #a7a7a7;
  border-width: 2px;
  border-style: solid;
  object-fit: cover;
  position: absolute;
  left: 10%;
  top: 15%;
  width: 70%;
  height: 70%;
  max-width: 600px;
  max-height: 600px;
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

const AMPhoto = ({mobile}) => {
  var mobileStyle = {
    width: "60%",
    left: "0%",
    marginBottom: "2%",
  }
  var mobilePhoto = {
    width: "80%",
    height: "80%",
    left: "10%",
  }
  var imageSource = `./img/face.jpg`;
  return (
    <Container style={mobile ? mobileStyle : {}}>
      <Photo style={mobile ? mobilePhoto : {}} src={imageSource} alt="" />
    </Container>
  );
};

export default AMPhoto;
