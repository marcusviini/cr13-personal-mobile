import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { CalculatorVector } from "../../static/CalculatorVector";

import {
  Container,
  StyledTitle,
  StyledText,
  StyledButtonText,
  NextButton,
  StyledTextInput,
  FormContainer
} from "./styles";

const Welcome = ({ setNewUser }: any) => {
  const [step, setStep] = useState<number>(0);
  const { register, setValue, handleSubmit } = useForm();

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const submit = (data: any) => {
    // TODO: submit
    setNewUser(false);
  };

  useEffect(() => {
    register("name");
    register("lastname");
    register("currency");
    register("initialBalancy");
    register("financialProfile");
    register("financialObjective");
  }, [register]);

  const steps: Record<number, any> = {
    0: {
      title: <StyledTitle>Gerencie suas finanças de forma fácil</StyledTitle>,
      content: (
        <>
          <CalculatorVector />
          <StyledText>
            Não esqueça mais de pagar suas dívidas. Nós cuidamos de lembrar você
            sempre que precisar.
          </StyledText>
        </>
      ),
      button: (
        <NextButton onTouchEnd={handleNextStep}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </NextButton>
      ),
    },
    1: {
      title: (
        <StyledTitle style={{ fontSize: 24 }}>
          Para começar precisamos de algumas informações básicas
        </StyledTitle>
      ),
      content: (
        <FormContainer>
          <StyledTextInput
            placeholder={"Nome"}
            onChangeText={(text) => setValue("name", text)}
          />
          <StyledTextInput
            placeholder={"Sobrenome"}
            onChangeText={(text) => setValue("lastname", text)}
          />
          <StyledTextInput
            placeholder={"Moeda"}
            onChangeText={(text) => setValue("currency", text)}
          />
          <StyledTextInput
            placeholder={"Saldo incial"}
            onChangeText={(text) => setValue("initialBalancy", text)}
          />
          <StyledTextInput
            placeholder={"Perfil financeiro"}
            onChangeText={(text) => setValue("financialProfile", text)}
          />
          <StyledTextInput
            placeholder={"Objetivo financeiro"}
            onChangeText={(text) => setValue("financialObjective", text)}
          />
        </FormContainer>
      ),
      button: (
        <NextButton onTouchEnd={handleSubmit(submit)}>
          <StyledButtonText>CONFIRMAR</StyledButtonText>
        </NextButton>
      ),
    },
  };

  return (
    <Container>
      {steps[step].title}
      {steps[step].content}
      {steps[step].button}
    </Container>
  );
};

export default Welcome;
