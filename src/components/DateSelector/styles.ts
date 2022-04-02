import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
`

export const Card = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  margin-top: 16px;
  border-radius: 28px;
  background: ${colors.white};
`;

export const StyledDate = styled.Text`
  font-family: "jost_500";
  font-size: 18px;
  color: ${colors.darkGray};
`;
