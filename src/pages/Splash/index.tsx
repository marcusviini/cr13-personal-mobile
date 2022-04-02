import React from "react";
import styled from "styled-components/native";
import Page from "../../components/Page";
import { Logo } from "../../static/Logo";

const Container = styled.View`
  justify-content: center;
  height: 100%;
`;

const Splash = () => {
  return (
    <Page removeAddTransactionButton>
      <Container>
        <Logo />
      </Container>
    </Page>
  );
};

export default Splash;

