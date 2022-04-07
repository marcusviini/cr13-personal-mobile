import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-paper';

import {
  Container,
  HeaderContainer,
  TitleContainer,
  StyledSubTitle,
  StyledTitle,
} from "./styles";

const MainCard: React.FC = () => {
  const [data, dataSet] = useState<any>(null)

  useEffect(() => {
    async function getUserName() {
      const user:any = await AsyncStorage.getItem('@cr13Personal:user')
      await dataSet(JSON.parse(user))
    }

    getUserName()
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
        <StyledTitle style={{ fontSize: 20 ,color:"#E6E6E6"}}>Bem vindo,</StyledTitle>
        <StyledSubTitle style={{ fontSize: 20, color:"#FF9000" }}>{data?.nome || ''}</StyledSubTitle>
        </TitleContainer>
        <Avatar.Image size={90} source={require('../../../assets/avatar/muzy.png')}/>
      </HeaderContainer>
    </Container>
  );
};

export default MainCard;

