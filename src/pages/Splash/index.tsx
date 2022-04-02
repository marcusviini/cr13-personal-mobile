import React from "react";
import Page from "../../components/Page";
import { Logo } from "../../static/Logo";
import { Container } from "./styles";

const Splash = () => {
  return (
    <Page removeAddTransactionButton>
      <Container>
        <Logo width={300} height={322.51} />
      </Container>
    </Page>
  );
};

export default Splash;
