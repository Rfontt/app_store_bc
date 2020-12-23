import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Title, SubTitle, ViewDatasUser, InputDatasUser, ButtonSubmit, TitleButtonSubmit } from '../../component/CreateOurUpdateUsers';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Api from '../../services';

interface UserDatas {
	id: number;
	name: string;
	email: string;
}

export default function UpdateUser() {
	const navigation = useNavigation();
	const route = useRoute();
	const params = route.params as UserDatas;

	const [ name, setName ] = useState(params.name);
	const [ email, setEmail ] = useState(params.email);

	const updateUserSubmit = async()=> {
		if (name != '' && email != '') {
			try{
				await Api.put(`/user/${params.id}`, { name, email });
				Alert.alert("Atualizado", "Usuário atualizado com sucesso!", 
					[
						{
							text: "ok", onPress: ()=> navigation.navigate("Users")
						}
					])
			}catch(e){
				Alert.alert("Opps", "Dados Incorretos");
			}
		}else{
			Alert.alert("Opps", "Preencha todos os dados!");
		}
	}

	return(
		<Container>
			<Title>
				Atualize o usuário
			</Title>

			<SubTitle>
				Modifique as informações a baixo:
			</SubTitle>

			<ViewDatasUser>
				<FontAwesome name="user" size={20} color="#1E90FF" />
				<InputDatasUser placeholder = "Name"
				value = {name} onChangeText = {text => setName(text)}/>
			</ViewDatasUser>

			<ViewDatasUser>
				<Entypo name="email" size={15} color="#1E90FF" />
				<InputDatasUser placeholder = "Email"
				value = {email} onChangeText = {text => setEmail(text)} />
			</ViewDatasUser>

			<ButtonSubmit onPress = {()=> updateUserSubmit()}>
				<TitleButtonSubmit>
					Atualizar
				</TitleButtonSubmit>
			</ButtonSubmit>
		</Container>
	);
}