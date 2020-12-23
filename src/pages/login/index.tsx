import React, { useState, useContext } from 'react';
import { Container, Title, SubTitle, ViewLogin, InputLogin,
ButtonForgotPassword, TitleButtonForgotPassword, ButtonSubmit, TitleButtonSubmit } from '../../component/login';
import { StatusBar } from '../../component/StatusBar';
import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
  const navigation = useNavigation();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const submit = async() => {
    if (email != '' && password != '') {
      try{
        let response = await Api.post("/login", { email, password });

        await AsyncStorage.setItem("@token", response.data.token);
        navigation.reset({
          routes:[{name:'Home'}]
        });
      }catch(e){
        Alert.alert("Falha", "Dados incorretos");
      }

    }else{
      Alert.alert("Opps", "Preencha todos os dados.");
    }
  } 

  return(
    <Container>
      <StatusBar  backgroundColor = "#000D26" barStyle = "light-content" hidden = {false} translucent = {true} />

      <Title> Faça login </Title>
      <SubTitle> Informe os dados abaixo </SubTitle>

      <ViewLogin>
        <Entypo name="email" size={15} color="#3465d9" />
      	<InputLogin placeholder ="Email:"
        onChangeText={(text)=> setEmail(text)} />
      </ViewLogin>

      <ViewLogin>
        <AntDesign name="lock" size={18} color="#3465d9" />
      	<InputLogin placeholder ="Password:"
        onChangeText={(text)=> setPassword(text)} secureTextEntry />
      </ViewLogin>

      <ButtonForgotPassword onPress= {() => navigation.navigate("GenerateToken")}>
      	<TitleButtonForgotPassword> Esqueceu a senha? </TitleButtonForgotPassword>
      </ButtonForgotPassword>

      <ButtonSubmit onPress={submit}>
      	<TitleButtonSubmit> Logar </TitleButtonSubmit>
      </ButtonSubmit>
    </Container>
  );
}
