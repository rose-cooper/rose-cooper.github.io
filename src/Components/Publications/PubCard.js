import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import "./transition.css";
import { Collapse } from "react-collapse";

const PaperContainer = styled.div`
  margin: 0;
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.5;
`;

const PaperTitle = styled.div`
  font-size: 0.95rem;
  text-align: left;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
`;

const PaperText = styled.div`
  font-size: 0.95rem;
  text-align: left;
  width: 90%;
  font-weight: 300;
  align-self: flex-start;
  cursor: pointer;
`;

const PaperAbstract = styled.h4`
  font-size: 0.9rem;
  font-weight: 300;
`;

const AbstractContainer = styled.div`
  width: 50vw;
  padding: 2vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: white;
  overflow: hidden;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;
  cursor: pointer;
`;

const ExpandArrow = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 0px;
  top: 0px;
  z-index: 1;
  cursor: pointer;
`;

const LinkButton = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 24px;
  top: 1px;
  z-index: 1;
`;

const GitButton = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 1px;
  right: -24px;
  z-index: 1;
`;

const OSF = styled.i`
  position: absolute;
  width: 24px;
  height: 24px;
  top: -5px;
  right: -24px;
  font-size: 1.3rem;
  z-index: 1;
`;

const YearDiv = styled.div`
  width: 10%;
  font-size: 1.5rem;
  border-right: 3px solid black;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YearDivMobile = styled.div`
  width: 100%;
  font-size: 1.2rem;
  line-height: 2;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: flexStart;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 70vw;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  min-height: 15vh;
  margin-bottom: 10px;
`;

const PubCard = ({ data, mobile, prevPaper }) => {
  const [isOpen, setOpen] = useState(false);

  const linkSRC = "./img/link.png";
  const expandSRC = "./img/expand.png";
  const githubSRC = "./img/github.png";

  const collapseFunction = () => {
    if (!isOpen) {
      //animateScroll.scrollMore(200);
    }
    setOpen(!isOpen);
  };

  const color1 = "#448AFF";
  const color2 = "#00BFA5";
  const color3 = "#f80759";

  const getColor = () => {
    switch (data.year) {
      case "2015":
      case "2019":
        return color1;
      case "2020":
      case "2016":
        return color2;
      case "2017":
        return color3;
      default:
        selectedColor = "black";
    }
  };

  var selectedColor = getColor();

  const newStyle = {
    borderColor: selectedColor,
  };

  if (prevPaper != null)
  {
    if (prevPaper.year === data.year){
      var hasPrevPaper = true;
    }
  }

  return (
    <MainContainer style={mobile ? {flexDirection : "column"} : {}}>
    {mobile && !hasPrevPaper ? (<YearDivMobile style={newStyle}>{data.year}</YearDivMobile>) :
    mobile && hasPrevPaper ? <div style={{ height: "3vh"}}/> :
     (<YearDiv style={newStyle}>{data.year}</YearDiv>)}


      <PaperContainer style={mobile ? {width : "100%"} : {}}>
        <ExpandArrow
          onClick={() => collapseFunction()}
          src={expandSRC}
          alt=""
        />
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <LinkButton
            src={linkSRC}
            alt=""
            target="_blank"
            rel="noopener noreferrer"
          />
        </a>
        {data.hasOSF != null ? (
          <OSF>
            <a
              href={data.hasOSF}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="ai ai-osf"></i>
            </a>
          </OSF>
        ) : null}
        {data.github != null ? (
          <a
            href={data.github}
            alt=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitButton src={githubSRC} alt="" />
          </a>
        ) : null}

        <PaperText style={mobile ? {width: "85%"} : {}} onClick={() => collapseFunction()}>{data.authors}</PaperText>
        <PaperText onClick={() => collapseFunction()}>{data.journal}</PaperText>
        <PaperTitle onClick={() => collapseFunction()}>{data.title}</PaperTitle>
        <Collapse isOpened={isOpen}>
          <AbstractContainer onClick={() => collapseFunction()}
          style={mobile ? {width : "90%"} : {}}>
            <PaperAbstract>{data.abstract}</PaperAbstract>
          </AbstractContainer>
        </Collapse>
      </PaperContainer>
    </MainContainer>
  );
};

export default PubCard;

// structure of json file.
//  {
//      "title" : "",
//      "authors" : "",
//      "journal" : "",
//      "year": "",
//      "abstract" : "",
//      "link": "",
//      "hasOSF": bool,
//  },

/*
      <>
        {isOpen ? (
          <CSSTransition in={is} timeout={10} classNames="grow" unmountOnExit>
            <AbstractContainer>
              <PaperAbstract>{data.abstract}</PaperAbstract>
            </AbstractContainer>
          </CSSTransition>
        ) : null}
      </>;
      */
