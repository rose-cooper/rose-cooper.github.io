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
`;

const PubBackground = () => {
  const items = data.map((i) => <PubCard key={i.title} data={i} />);

  return (
    <div id="publications">
      <Background>{items}</Background>
    </div>
  );
};

export default PubBackground;

/*
{data.map((i) => (
          <PubCard key={i.title} data={i} />
        ))}
*/
