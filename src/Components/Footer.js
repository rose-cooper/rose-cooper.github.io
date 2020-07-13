import React from "react";
import styled from "@emotion/styled/macro";

const Container = styled.div`
  height: 5vh;
  width: 100vw;
  background-color: #313131;
  display: block;
  margin-top: 10vh;
`;

const Text = styled.div`
  line-height: 2.5;
  text-align: center;
  font-size: 0.8rem;
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <Text>&copy; Rose Cooper 2020</Text>
    </Container>
  );
};

export default Footer;
