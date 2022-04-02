import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import colors from "../../styles/colors";

import { Container, HiddenValue, StyledText } from "./styles";

const Balance = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => setVisible(!visible);

  const balance = 200537496000.47;

  return (
    <Container>
      {visible ? (
        <StyledText>
          {balance.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledText>
      ) : (
        <HiddenValue />
      )}
      <View onTouchEnd={toggleVisible}>
        <Feather
          name={visible ? "eye" : "eye-off"}
          size={24}
          color={colors.darkGray}
        />
      </View>
    </Container>
  );
};

export default Balance;
