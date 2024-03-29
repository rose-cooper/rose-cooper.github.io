import React from "react";
import styled from "@emotion/styled/macro";
import { Link, animateScroll } from "react-scroll";

const LinkContainer = styled.div`
  display: flex;
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 100vw;
  height: 10vh;
  margin-top: -10vh;
  background: rgba(255, 255, 255, 0.8);
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  text-align: center;
  font-size: 16px;
`;

const Text = styled.div`
  font-size: 1.4em;
  font-family: "Montserrat", sans-serif;
  color: black;
  padding-right: 40px;
  cursor: pointer;

  &:hover {
    color: #008beb;
  }
`;

const Buttons = styled.div`
  font-size: 2em;
  color: black;
  cursor: pointer;
  align-self: center;
  text-align: left;
  padding-left: 5vw;
  flex: 1 1 0px;
  display: flex;
  justify-content: flex-start;
`;

const Email = styled.div`
  font-size: 0.8em;
  font-family: "Montserrat", sans-serif;
  color: black;
  text-align: right;
  padding-right: 5vw;
  flex: 1 1 0px;
`;

const MyIcon = styled.img`
  margin: 5px;
  width: 24px;
  height: 24px;
`;

const MenuBar = ({bigScreen}) => {
  const cv = "./files/RCooper-CV.pdf";
  const linkedinSRC = "./img/linkedin.png";
  const twitterSRC = "./img/twitter.png";
  const googleSRC = "./img/googlescholar.png";
  const githubSRC = "./img/github.png";

  const linkedinLink = "https://www.linkedin.com/in/rose-cooper-phd-b46b8957/";
  const twitterLink = "https://twitter.com/RoseA_Cooper";
  const googleLink =
    "https://scholar.google.co.uk/citations?hl=en&user=oJhb_0YAAAAJ&imq=Rose+Cooper&view_op=list_works";
  const githubLink = "https://github.com/rose-cooper";

  var bigStyle = {
      fontSize: "1.8vh"
  }
  var bigIcon = {
      width: "2.2vh",
      height: "2.2vh"
  }
  return (
    <Background style={bigScreen ? bigStyle : {}}>
      <Buttons>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <MyIcon style={bigScreen ? bigIcon : {}} src={linkedinSRC} alt="" />
        </a>

        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <MyIcon style={bigScreen ? bigIcon : {}} src={twitterSRC} alt="" />
        </a>

        <a href={googleLink} target="_blank" rel="noopener noreferrer">
          <MyIcon style={bigScreen ? bigIcon : {}} src={googleSRC} alt="" />
        </a>

        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <MyIcon style={bigScreen ? bigIcon : {}} src={githubSRC} alt="" />
        </a>
      </Buttons>
      <LinkContainer>
        <Text onClick={animateScroll.scrollToTop}>Home</Text>
        <Link to="research" smooth={true} duration={1000}>
          <Text>Research</Text>
        </Link>
        <Link to="publications" smooth={true} duration={1000}>
          <Text>Papers</Text>
        </Link>
      </LinkContainer>
      <Email> </Email>
    </Background>
  );
};

export default MenuBar;
