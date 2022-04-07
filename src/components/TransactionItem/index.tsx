import React from "react";

import {
  Container,
  SubContainer,
  StyledTitle,
} from "./styles";

interface TransactionItemProps {
  description: string;
}

const TransactionItem = ({
  description,
}: TransactionItemProps) => {

  return (
    <Container >
      <SubContainer>
        <StyledTitle key={Math.random()}>{description}</StyledTitle>
      </SubContainer>
    </Container>
  );
};

export default TransactionItem;

