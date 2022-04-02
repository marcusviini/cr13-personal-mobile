import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  background-color: white;
  width: 100%;
  min-height: 54px;
  border-radius: 28px;
  margin-top: 16px;
  padding: 10px 25px;
`;

export const StyledTitle = styled.Text`
  font-family: "jost_500";
  font-size: 14px;
  color: ${colors.darkGray};
  margin-left: 6px;
`;

export const StyledSubTitle = styled.Text`
  font-family: "jost_500";
  font-size: 10px;
  color: ${colors.gray};
  margin-left: 6px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 34px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

