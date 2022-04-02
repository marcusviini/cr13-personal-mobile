import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 10% 10%;
  background: ${colors.primary};
  justify-content: space-between;
`;

export const StyledTitle = styled.Text`
  font-family: "jost_500";
  font-size: 32px;
  color: ${colors.white};
  text-align: center;
  margin-bottom: 16px;
`;

export const StyledText = styled.Text`
  font-family: "jost_400";
  font-size: 17px;
  color: ${colors.white};
  text-align: center;
`;

export const NextButton = styled.View`
  width: 295px;
  border-radius: 16px;
  padding: 12px;
  background: ${colors.natural};
  color: ${colors.black};
`;

export const StyledButtonText = styled.Text`
  font-family: "jost_500";
  font-size: 17px;
  color: ${colors.grey};
  text-align: center;
  margin: 0px 50px;
`;

export const FormContainer = styled.View`
  width: 295px;
  margin-top: 30px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.grey,
})`
  width: 100%;
  background: ${colors.white};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const ChangePageContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 40px;
`;
