import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Title, SubTitle, ViewDatasUser, InputDatasUser, ButtonSubmit, TitleButtonSubmit } from '../../component/CreateOurUpdateUsers';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Api from '../../services';


export default function CreateUser() {
	const navigation = useNavigation();

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const updateUserSubmit = async()=> {
		if (name != '' && email != '' && password != '') {
			try{
				await Api.post('/user', { name, email, password });
				Alert.alert("Criado", "Usuário criado com sucesso!", 
					[
						{
							text: "ok", onPress: ()=> navigation.navigate("Users")
						}
					])
			}catch(e){
				Alert.alert("Erro", "Usuário já existe");
			}
		}else{
			Alert.alert("Opps", "Preencha todos os dados!");
		}
	}

	return(
		<Container>
			<Title>
				Crie um novo usuário
			</Title>

			<SubTitle>
				Informe os dados a baixo:
			</SubTitle>

			<ViewDatasUser>
				<FontAwesome name="user" size={20} color="#1E90FF" />
				<InputDatasUser placeholder = "Name"
				 onChangeText = {text => setName(text)}/>
			</ViewDatasUser>

			<ViewDatasUser>
				<Entypo name="email" size={15} color="#1E90FF" />
				<InputDatasUser placeholder = "Email"
				 onChangeText = {text => setEmail(text)} />
			</ViewDatasUser>

			<ViewDatasUser>
				<AntDesign name="lock" size={18} color="#1E90FF" />
				<InputDatasUser placeholder = "Senha"
				 onChangeText = {text => setPassword(text)} secureTextEntry />
			</ViewDatasUser>

			<ButtonSubmit onPress = {()=> updateUserSubmit()}>
				<TitleButtonSubmit>
					Criar
				</TitleButtonSubmit>
			</ButtonSubmit>
		</Container>
	);
}