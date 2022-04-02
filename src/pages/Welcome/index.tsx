import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { Logo } from "../../static/Logo";

import {
  Container,
  StyledTitle,
  StyledText,
  StyledButtonText,
  NextButton,
  StyledTextInput,
  FormContainer,
  ChangePageContainer,
} from "./styles";

const Welcome = ({ setNewUser }: any) => {
  const [step, setStep] = useState<number>(0);
  const { register, setValue, handleSubmit } = useForm();

  const handleNextStep = (step: number) => {
    setStep(step);
  };

  const submit = (data: any) => {
    // TODO: submit
    setNewUser(false);
  };

  useEffect(() => {
    register("mail");
    register("password");
  }, [register]);

  //<Ionicons name="mail-outline" size={24} color="red" />

  const steps: Record<number, any> = {
    0: {
      content: (
        <Container>
          <Logo width={200} height={215} />
          <FormContainer>
            <StyledTitle style={{ fontSize: 24 }}>Faça seu login</StyledTitle>
            <StyledTextInput
              placeholder={"Email"}
              onChangeText={(text) => setValue("email", text)}
            ></StyledTextInput>
            <StyledTextInput
              placeholder={"Senha"}
              onChangeText={(text) => setValue("password", text)}
            />
          </FormContainer>
          <NextButton onTouchEnd={handleSubmit(submit)}>
            <StyledButtonText>Entrar</StyledButtonText>
          </NextButton>
          <View onTouchEnd={() => handleNextStep(1)}>
            <StyledText style={{ marginTop: 18, marginBottom: 18 }}>
              Esqueci minha senha
            </StyledText>
          </View>
          <ChangePageContainer onTouchEnd={() => handleNextStep(2)}>
            <MaterialCommunityIcons
              name="arrow-collapse-right"
              size={20}
              color="#D98D00"
            />
            <StyledText style={{ color: "#D98D00", marginLeft: 20 }}>
              Criar uma conta
            </StyledText>
          </ChangePageContainer>
        </Container>
      ),
    },
    1: {
      content: (
        <Container>
          <>
            <Logo width={200} height={215} />
          </>

          <FormContainer>
            <StyledTitle style={{ fontSize: 24 }}>Crie sua conta</StyledTitle>
            <StyledTextInput
              placeholder={"Email"}
              onChangeText={(text) => setValue("email", text)}
            />
            <NextButton style={{ marginTop: 10 }} onTouchEnd={handleSubmit(submit)}>
              <StyledButtonText>Solicitar email para alteração de senha</StyledButtonText>
            </NextButton>
          </FormContainer>
          
          <>
          <ChangePageContainer onTouchEnd={() => handleNextStep(0)}>
              <MaterialCommunityIcons
                name="arrow-collapse-right"
                size={20}
                color="#D98D00"
              />
              <StyledText style={{ color: "#D98D00", marginLeft: 20 }}>
                Voltar para o login
              </StyledText>
            </ChangePageContainer>
          </>
        </Container>
      ),
    },
  };

  return <Container>{steps[step].content}</Container>;
};

export default Welcome;
