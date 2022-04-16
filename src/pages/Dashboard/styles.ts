import { Animated } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  height: 100%;
  align-items: center;
  background: ${colors.primary};
`;

export const TreinosContainer = styled.View`
  margin: 20px 0;
  height: 450px;
`;

export const TreinoContainer = styled(Animated.View)`
  width: 295px;
  height: 90px;
  background: #3E3B47;
  border-radius: 10px;
  padding: 10px 16px;
  margin-top: 10px;
  overflow: hidden;
`;

export const TreinoDescription = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  justify-content: center;
  align-items: center;
`;

export const TreinoResume = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  padding-top: 5px;
`;

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50%;
  width: 200px;
  height: 200px;
`;
