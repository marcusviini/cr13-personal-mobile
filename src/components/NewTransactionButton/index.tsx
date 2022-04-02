import React from 'react';
import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import colors from '../../styles/colors';

const NewTransactionButton = () => {
  return (
    <Container>
      <MaterialIcons name="add" size={26} color={colors.white} />
    </Container>
  );
};

export default NewTransactionButton;
