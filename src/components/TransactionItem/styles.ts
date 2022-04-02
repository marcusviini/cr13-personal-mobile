import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3px 0;
`;

export const SubContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledTitle = styled.Text`
  font-family: "jost_400";
  font-size: 14px;
  color: ${colors.black};
`;

export const StyledDate = styled.Text<{ delayed: boolean }>`
  font-family: "jost_500";
  font-size: 12px;
  color: ${({ delayed }) => (delayed ? colors.red : colors.gray)};
  margin-right: 14px;
`;

export const StyledValue = styled.Text`
  font-family: "jost_400";
  font-size: 14px;
  color: ${colors.darkGray};
  margin-right: 6px;
`;

