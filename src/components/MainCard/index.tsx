import React, { ReactNode, useState } from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";

import {
  Container,
  HeaderContainer,
  TitleContainer,
  StyledSubTitle,
  StyledTitle,
} from "./styles";

interface MainCardProps {
  title: string;
  subTitle?: string;
  icon: ReactNode;
  children?: ReactNode;
  collapse?: boolean;
}

const MainCard = ({
  title,
  subTitle,
  icon,
  children,
  collapse,
}: MainCardProps) => {
  const [open, setOpen] = useState(false);

  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          {icon}
          <View>
            <StyledTitle>{title}</StyledTitle>
            {subTitle && <StyledSubTitle>{subTitle}</StyledSubTitle>}
          </View>
        </TitleContainer>
        {collapse && (
          <View onTouchEnd={handleCollapse}>
            <MaterialIcons
              name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={24}
              color={colors.darkGray}
            />
          </View>
        )}
      </HeaderContainer>
      {(!collapse || open) && (
        <View style={subTitle ? { marginTop: 8 } : undefined}>{children}</View>
      )}
    </Container>
  );
};

export default MainCard;

