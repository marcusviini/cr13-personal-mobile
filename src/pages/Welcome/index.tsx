import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  useDispatch } from 'react-redux';
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { showToast } from '../../store/modules/toast/actions'

import { Logo } from "../../static/Logo";

import {api} from "../../service/api"

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

  const dispatch = useDispatch()

  const handleNextStep = (step: number) => {
    setStep(step);
  };

  const handleLogin = async(data: any) => {
    const {email,password} = data;
    try {
      const response = await api.post('/signIn',{
        email: 'marcustere28@gmail.com',
        password:'Y0m3g4#Alt'
      })

      const {nome} =response.data

      await AsyncStorage.setItem('@cr13Personal:user', JSON.stringify({
        nome,
        email
      }))

      dispatch(showToast({
        type:'success',
        message:response.data.message,
        iconName:'checkmark'
      }))

      setNewUser(false)
    }catch(error:any){
      console.log(error)
      dispatch(showToast({
        type:'warning',
        message: error.response?.data?.error || 'Ocorreu um erro para realizar o login',
        iconName:'warning-outline',        
      }))
    }    
  };

  const handleSendMail = async(data: any) => {
    const {email} = data;
    try {
      const response = await api.post('/sendToken',{
        email,
      })
      dispatch(showToast({
        type:'success',
        message:response.data.message,
        iconName:'checkmark'
      }))
      handleNextStep(3)
    }catch(error:any){
      dispatch(showToast({
        type:'warning',
        message:error.response?.data?.error || 'Ocorreu um erro para solicitar a alteração de senha',
        iconName:'warning-outline'
      }))
    }    
  };

  const handleChangePassword = async(data: any) => {
    const {email,token,password} = data;
    try {
      const response = await api.put('/resetPassword',{
        email,
        token,
        password
      })
      dispatch(showToast({
        type:'success',
        message:response.data.message,
        iconName:'checkmark'
      }))
      handleNextStep(0)
    }catch(error:any){
      dispatch(showToast({
        type:'warning',
        message:error.response?.data?.error || 'Ocorreu um erro para solicitar a alteração de senha',
        iconName:'warning-outline'
      }))
    }   
  };



  const handleCreateAccount = async(data: any) => {
    const {nome,cpf,email,password} = data;

    try {
      const response = await api.post('/singUp',{
        nome,
        cpf,
        email,
        password
      })

      dispatch(showToast('success',response.data.message,'checkmark',3000))
      handleNextStep(0)
    }catch(error:any){
      dispatch(showToast('warning',error.response?.data?.error,'warning-outline',3000))
    }      
  };


  useEffect(() => {
    register("nome");
    register("cpf");
    register("email");
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
          <NextButton onTouchEnd={ handleSubmit(handleLogin)}>
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
            <StyledTitle style={{ fontSize: 24 }}>Recupere sua senha</StyledTitle>
            <StyledTextInput
              placeholder={"Email"}
              onChangeText={(text) => setValue("email", text)}
            />
            <NextButton style={{ marginTop: 10 }} onTouchEnd={handleSubmit(handleSendMail)}>
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
    2: {
      content: (
        <Container>
          <>
            <Logo width={200} height={215} />
          </>
          <FormContainer>
            <StyledTitle style={{ fontSize: 24 }}>Crie sua conta</StyledTitle>
            <StyledTextInput
              placeholder={"Nome"}
              onChangeText={(text) => setValue("nome", text)}
            />
            <StyledTextInput
              placeholder={"Cpf"}
              onChangeText={(text) => setValue("cpf", text)}
            />
            <StyledTextInput
              placeholder={"Email"}
              onChangeText={(text) => setValue("email", text)}
            />
            <StyledTextInput
              placeholder={"Senha"}
              onChangeText={(text) => setValue("password", text)}
            />
            <NextButton style={{ marginTop: 10 }} onTouchEnd={ handleSubmit(handleCreateAccount)}>
              <StyledButtonText>Cadastrar</StyledButtonText>
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
    3: {
      content: (
        <Container>
        <>
          <Logo width={200} height={215} />
        </>

        <FormContainer>
          <StyledTitle style={{ fontSize: 24 }}>Altere sua senha</StyledTitle>
          <StyledTextInput
              placeholder={"Email"}
              onChangeText={(text) => setValue("email", text)}
            />
          <StyledTextInput
            placeholder={"Token enviado por email"}
            onChangeText={(text) => setValue("token", text)}
          />
          <StyledTextInput
              placeholder={"Nova senha"}
              onChangeText={(text) => setValue("password", text)}
            />
          <NextButton style={{ marginTop: 10 }} onTouchEnd={handleSubmit(handleChangePassword)}>
            <StyledButtonText>Alterar senha</StyledButtonText>
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
