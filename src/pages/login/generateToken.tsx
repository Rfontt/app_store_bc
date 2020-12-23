import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Title, SubTitle, ViewUpdatePassword, InputUpdatePassword, ButtonSubmit, TitleButtonSubmit } from '../../component/updatepassword';
import { MaterialIcons } from '@expo/vector-icons';
import Api from '../../services';
import { useNavigation } from '@react-navigation/native';

export default function UpdatePassword() {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');

	const GenerateToken = async()=> {
		if (email != '') {
			try{
				await Api.post('/token', { email });

				Alert.alert("Token enviado", "Enviamos um email com o seu token de recuperação", 
				[{
					text: "OK", onPress: ()=> navigation.navigate("RecoverPassword")
				}])
			}catch(error){
				Alert.alert("Opps", "Esse email não está cadastrado!");
			}
		}else{
			Alert.alert("Opps", "Você não preencheu o campo de email!");
		}
	}
	return(
		<Container>
			<Title> Recupere sua senha </Title>
			<SubTitle> Informe o email cadastrado: </SubTitle>

			<ViewUpdatePassword>
				<MaterialIcons name="email" size={20} color="#3465d9" />
				<InputUpdatePassword placeholder = "Email:"
				 onChangeText={(text)=> setEmail(text)} />
			</ViewUpdatePassword>	

			<ButtonSubmit onPress = {GenerateToken}>
				<TitleButtonSubmit>
					Gerar token
				</TitleButtonSubmit>
			</ButtonSubmit>
		</Container>
	)
}