import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { Link, animateScroll } from "react-scroll";

const BurgerCircle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 2vh;
  left: 2vw;
  width: 7vh;
  height: 7vh;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 5%;
  z-index: 98;
  cursor: pointer;
`;

const MenuBackground = styled.div`
  position: fixed;
  top: 0vh;
  left: 0vw;
  width: 50vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.85);
  border-right: 1px solid black;
  z-index: 50;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: transform 300ms ease-in-out;
`;

const Email = styled.div`
  font-size: 0.9rem;
  font-family: "Montserrat", sans-serif;
  color: black;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  color: black;
  cursor: pointer;
`;

const MyIcon = styled.img`
  margin: 5px;
  width: 24px;
  height: 24px;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const BurgerDiv = styled.div`
  position: relative;
  width: 70%;
  height: 0px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: black;
  transform-origin: 1px;
  transition: all 300ms ease-in-out;
`;

const DarkenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: transparent;
  opacity: 0.2;
  z-index: 20;
  transition: transform 300ms ease-in-out;
`;

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

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

  const collapseFunction = () => {
    setOpen(!isOpen);
  };

  var topLineStyle = {
    transform: "rotate(46deg)",
  };
  var midLineStyle = {
    transform: "translateX(-100%)",
    opacity: "0",
  };
  var botLineStyle = {
    transform: "rotate(-46deg)",
  };

  var circleStyle = {
    background: "transparent",
  }

  return (
    <>
      <DarkenContainer
        style={!isOpen ? { transform: "translateX(-120%)" } : {}}
        onClick={() => collapseFunction()}
      />
      <BurgerCircle style={isOpen ? circleStyle : {}} open={isOpen} onClick={() => collapseFunction()}>
        <BurgerDiv style={isOpen ? topLineStyle : {}} />
        <BurgerDiv style={isOpen ? midLineStyle : {}} />
        <BurgerDiv style={isOpen ? botLineStyle : {}} />
      </BurgerCircle>
      <MenuBackground style={!isOpen ? { transform: "translateX(-120%)" } : {}}>
        <Text onClick={animateScroll.scrollToTop}>Home</Text>
        <Link to="research" smooth={true} duration={1000}>
          <Text>Research</Text>
        </Link>
        <Link to="publications" smooth={true} duration={1000}>
          <Text>Papers</Text>
        </Link>
        <ButtonContainer>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <MyIcon src={linkedinSRC} alt="" />
          </a>

          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <MyIcon src={twitterSRC} alt="" />
          </a>

          <a href={googleLink} target="_blank" rel="noopener noreferrer">
            <MyIcon src={googleSRC} alt="" />
          </a>

          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <MyIcon src={githubSRC} alt="" />
          </a>
        </ButtonContainer>
        <Email> </Email>
        <div style={{ height: "1vh" }} />
        <div style={{ height: "1vh" }} />
      </MenuBackground>
    </>
  );
};

export default BurgerMenu;
