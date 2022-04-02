import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-family: "jost_500";
  font-size: 24px;
  color: ${colors.black};
`;

export const HiddenValue = styled.View`
  height: 18px;
  width: 70%;
  margin: 8px 0;
  border-radius: 6px;
  background: ${colors.lightGray};
`;
