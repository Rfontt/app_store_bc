import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Footer, ViewForm, ViewInput, InputText, ButtonView, ButtonTouchableOpacity, TitleButton, ImageLogo } from '../../component/CreateOurUpdateCustomerAndPurchase';
import { StatusBar } from '../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Api from '../../services';
import Logo from '../imagens/imagemOne.png';

export default function CreateCustomer() {
	const navigation = useNavigation();

	const [ name, setName ] = useState('');
	const [ purchase, setPurchase ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ amount, setAmount ] = useState('');
	const [ date, setDate ] = useState('');

	const sendForm = async()=> {
		if (name != '' && purchase != '' && price != '' && amount != '' && date != ''){
			try{
				await Api.post('/customer', {name, purchase, price, amount, date});
				Alert.alert("Criado", "Cliente criado com sucesso",
					[
						{
							text: "ok", onPress: ()=> navigation.navigate("Customers")
						}
					]);
			}catch(e){
				Alert.alert("Error", "Tipos de dados incorretos");
			}
		}else{
			Alert.alert("Opps", "Preencha todos os dados!");
		}
	}

	return (
		<Container>
			<StatusBar  backgroundColor = "#000D26" barStyle = "light-content" hidden = {false} translucent = {true} />

			<Header>
				<ImageLogo source = {Logo} />
			</Header>

			<Footer>
				<ViewForm behavior="padding" enabled>
					<ViewInput>
						<Octicons name="person" size={24} color="gray" />
						<InputText placeholder = "Nome"
						onChangeText = {t=>setName(t)} />
					</ViewInput>

					<ViewInput>
						<Entypo name="price-tag" size={24} color="pink" />
						<InputText placeholder = "Compra"
						onChangeText = {t=>setPurchase(t)} />
					</ViewInput>

					<ViewInput>
						<MaterialIcons name="attach-money" size={24} color="green" />
						<InputText placeholder = "Preço"
						onChangeText = {t=>setPrice(t)} />
					</ViewInput>


					<ViewInput>
						<FontAwesome name="cart-plus" size={24} color="black" />
						<InputText placeholder = "Quantidade"
						onChangeText = {t=>setAmount(t)} />
					</ViewInput>

					<ViewInput>
						<MaterialIcons name="date-range" size={24} color="#576298" />
						<InputText placeholder = "Data"
						onChangeText = {t=>setDate(t)} />
					</ViewInput>

					<ButtonView>
						<ButtonTouchableOpacity onPress={()=> sendForm()}>
							<TitleButton> Criar </TitleButton>
						</ButtonTouchableOpacity>
					</ButtonView>
				</ViewForm>
			</Footer>
		</Container>
	)
}
