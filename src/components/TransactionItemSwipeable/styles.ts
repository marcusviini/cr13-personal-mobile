import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`

`;

export const ItemContainer = styled.View`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 20px;
`;

export const TransitionContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 54px;
  width: 100%;
  border-radius: 28px;
  background: ${colors.white};
  overflow: hidden;
`;
