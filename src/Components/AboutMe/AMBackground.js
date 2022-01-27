import React from "react";
import styled from "@emotion/styled/macro";
import AMPhoto from "./AMPhoto";
import AMText from "./AMText";

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  width: 80%;
  font-weight: bold;
`;

const Title = styled.div`
  line-height: 1.2;
  font-size: 1.15rem;
  display: flex;
  width: 80%;
  font-style: italic;
  flex-direction: column;
`;

const Blurb = styled.div`
  padding-top: 3rem;
  padding-bottom: 1rem;
  line-height: 1;
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  color: #008beb;
`;

const Background = styled.div`
  width: 60vw;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: -5vh;
`;

const Container = styled.div`
width: 100vw;
padding-top: 15vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-bottom: 10vh;
`;

const AMBackground = ({mobile,bigScreen}) => {
  var mobileStyle = {
    flexDirection:"column",
    marginLeft: "10vw",
    marginRight: "10vw",
    alignItems: "center",
    width: "80%",
  }
  var mobileTextStyle = {
    width: "100%",
    marginBottom: "1rem",
  }
  var titleText1 = "Experiential AI Research Associate";
  var titleText2 = "Northeastern University";
  return (
    <Container>
      <Background style={mobile ? mobileStyle : {}}>
        <Name style={mobile ? mobileTextStyle : {}} >
          Rose Cooper, PhD
        </Name>
        <Title style={mobile ? mobileTextStyle : {}}>
          <div>{titleText1}</div>
          <div>{titleText2}</div>
        </Title>
      </Background>
      <Blurb>Neuroscience • Psychology • AI</Blurb>
    </Container>
  );
};

export default AMBackground;
