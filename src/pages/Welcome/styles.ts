import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  display: flex;
  align-items: center;
  padding: 60px 40px;
  background: ${colors.primary};
  height: 100%;
  justify-content: space-between;
`;

export const StyledTitle = styled.Text`
  font-family: "jost_600";
  font-size: 32px;
  color: ${colors.white};
  text-align: center;
`;

export const StyledText = styled.Text`
  font-family: "jost_400";
  font-size: 17px;
  color: ${colors.white};
  text-align: center;
`;

export const NextButton = styled.View`
  border-radius: 16px;
  padding: 16px;
  background: ${colors.pink};
  color: ${colors.black};
`;

export const StyledButtonText = styled.Text`
  font-family: "jost_500";
  font-size: 17px;
  color: ${colors.white};
  text-align: center;
  margin: 0px 50px;
`;

export const FormContainer = styled.View`
  height: 380px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

export const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.pink,
})`
  width: 100%;
  background: ${colors.white};
  padding: 10px 20px;
  border-radius: 24px;
`;
