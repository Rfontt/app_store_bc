import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Title, SubTitle, ViewUpdatePassword, InputUpdatePassword, ButtonSubmit, TitleButtonSubmit } from '../../component/updatepassword';
import Api from '../../services';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function UpdatePassword() {
	const navigation = useNavigation();
	const [password, setPassword] = useState('');
	const [token, setToken] = useState('');

	const RecoverPassword = async()=> {
		if (password != '' || token != '') {
			try{
				await Api.patch('/password', { password, token });

				Alert.alert("Senha alterada", "Sua senha foi alterada",
				[{
					text: "OK", onPress: ()=> navigation.navigate("Login")
				}])
			}catch(error){
				Alert.alert("Opps", "Esse token não é válido");
			}
		}else{
			Alert.alert("Opps", "Você não preencheu todos os campos!");
		}
	}
	return(
		<Container>
			<Title> Recupere sua senha </Title>
			<SubTitle> Informe o email cadastrado: </SubTitle>

			<ViewUpdatePassword>
				<AntDesign name="lock" size={20} color="#3465d9"/>
				<InputUpdatePassword placeholder = "Nova senha:" secureTextEntry
				 onChangeText={(text)=> setPassword(text)} />
			</ViewUpdatePassword>	

			<ViewUpdatePassword>
				<AntDesign name="qrcode" size={20} color="#3465d9" />
				<InputUpdatePassword placeholder = "Token de recuperação:" secureTextEntry
				 onChangeText={(text)=> setToken(text)} />
			</ViewUpdatePassword>	

			<ButtonSubmit onPress = {RecoverPassword}>
				<TitleButtonSubmit>
					Recuperar
				</TitleButtonSubmit>
			</ButtonSubmit>
		</Container>
	)
}