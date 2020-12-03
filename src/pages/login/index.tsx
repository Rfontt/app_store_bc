import React, { useState, useContext } from 'react';
import { Container, Title, SubTitle, ViewLogin, InputLogin,
ButtonForgotPassword, TitleButtonForgotPassword, ButtonSubmit, TitleButtonSubmit } from '../../component/login';
import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services';

export default function Login() {
  const navigation = useNavigation();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const submit = async() => {
    if (email != '' && password != '') {
      let response = await Api.post("/login", { email, password });
      
      if (response.data.token) {
        await AsyncStorage.setItem("@token", response.data.token);
        navigation.reset({
            routes:[{name:'Home'}]
        });
      }else{
        Alert.alert("Dados incorretos");
      }

    }else{
      Alert.alert("Preencha todos os dados.");
    }
  } 

  return(
    <Container>
      <Title> Faça login </Title>
      <SubTitle> Informe os dados abaixo </SubTitle>

      <ViewLogin>
      	<InputLogin placeholder ="Email:"
        onChangeText={(text)=> setEmail(text)} />
      </ViewLogin>

      <ViewLogin>
      	<InputLogin placeholder ="Password:"
        onChangeText={(text)=> setPassword(text)} />
      </ViewLogin>

      <ButtonForgotPassword>
      	<TitleButtonForgotPassword> Esqueceu a senha? </TitleButtonForgotPassword>
      </ButtonForgotPassword>

      <ButtonSubmit onPress={submit}>
      	<TitleButtonSubmit> Logar </TitleButtonSubmit>
      </ButtonSubmit>
    </Container>
  );
}
