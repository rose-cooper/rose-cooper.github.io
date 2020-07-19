import React from "react";
import styled from "@emotion/styled/macro";
import PubCard from "./PubCard";

import data from "./Papers.json";

const Background = styled.div`
  padding-top: 10vh;
  width: 100vw;
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  line-height: 1;
  font-size: 16px;
`;

const PubBackground = ({mobile,bigScreen}) => {
  const items = data.map((i, index) => {
    const prevItem = data[index-1];
    return(
    <PubCard prevPaper={prevItem} mobile={mobile} key={i.title} data={i} />)});

var mobileStyle = {
  paddingTop: "5vh"
}
var bigStyle = {
  fontSize: "2vh"
}

  return (
    <div id="publications">
      <Background style={mobile ? mobileStyle : bigScreen ? bigStyle : {}}>{items}</Background>
    </div>
  );
};

export default PubBackground;

/*
{data.map((i) => (
          <PubCard key={i.title} data={i} />
        ))}
*/
