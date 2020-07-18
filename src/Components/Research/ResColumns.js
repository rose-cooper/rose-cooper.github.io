import React from "react";
import styled from "@emotion/styled/macro";
import ResBrain from "./ResBrain";
import ResBehaviour from "./ResBehaviour";

const Container = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ResColumns = ({mobile}) => {
  return (
    <Container>
      <ResBehaviour mobile={mobile}/>
      <ResBrain mobile={mobile}/>
    </Container>
  );
};

export default ResColumns;
