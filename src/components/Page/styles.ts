import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View<{
  removeHorizontalPadding: boolean;
  removeVerticalPadding: boolean;
}>`
  display: flex;
  height: 100%;
  align-items: center;
  background: ${colors.primary};
  padding: ${(props) =>
    `${props.removeVerticalPadding ? "0" : "40px"} ${
      props.removeHorizontalPadding ? "0" : "20px"
    }`};
`;
