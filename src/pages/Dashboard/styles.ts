import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  height: 100%;
  align-items: center;
  background: ${colors.primary};
`;

export const TreinosContainer = styled.View`
  margin: 20px 0;
`;

export const TreinoContainer = styled.View`
  width: 295px;
  height: 90px;
  background: red;
  border-radius: 10px;
  padding: 10px 16px;
  margin-top: 10px;
  overflow: hidden;
`;

export const TreinoDescription = styled.Text`
  color: ${colors.white};
`;
