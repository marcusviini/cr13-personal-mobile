import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
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
  margin-top: 30px;
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex-direction: column;
  flex:1;
  margin-top: 52px;
  margin-left:24px ;
  margin-right:100px;
  height:114px;
  width:54px;
`;

