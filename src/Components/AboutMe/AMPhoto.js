import React from "react";
import styled from "@emotion/styled/macro";

const Photo = styled.img`
  border-radius: 15%;
  border-color: black;
  border-width: 0px;
  border-style: solid;
  object-fit: cover;
  position: absolute;
  left: 15%;
  top: 10%;
  width: 60%;
  height: 80%;
  max-width: 600px;
  max-height: 800px;
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
    width: "70%",
    left: "0%",
    marginBottom: "20%",
  }
  var mobilePhoto = {
    width: "75%",
    height: "100%",
    left: "10%",
  }
  var imageSource = `./img/profile.jpeg`;
  return (
    <Container style={mobile ? mobileStyle : {}}>
      <Photo style={mobile ? mobilePhoto : {}} src={imageSource} alt="" />
    </Container>
  );
};

export default AMPhoto;
