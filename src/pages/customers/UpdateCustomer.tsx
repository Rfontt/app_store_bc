import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Footer, ViewForm, ViewInput, InputText, ButtonView, ButtonTouchableOpacity, TitleButton, ImageLogo } from '../../component/CreateOurUpdateCustomerAndPurchase';
import { StatusBar } from '../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Api from '../../services';
import Logo from '../imagens/imagemTree.png';


interface CustomerDatas {
	id: number;
	name: string;
	purchase: string;
	price: number;
	amount: number;
	date: string;
}

export default function UpdateCustomer() {
	const navigation = useNavigation();
	const route = useRoute();
	const params = route.params as CustomerDatas;

	const [ name, setName ] = useState(params.name);
	const [ purchase, setPurchase ] = useState(params.purchase);
	const [ price, setPrice ] = useState(params.price + '');
	const [ amount, setAmount ] = useState(params.amount + '');
	const [ date, setDate ] = useState(params.date + '');

	const sendForm = async()=> {
		if (name != '' && purchase != '' && price != '' && amount != '' && date != ''){
			try{
				await Api.put(`/customer/${params.id}`, {name, purchase, price, amount, date});

				Alert.alert("Atualizado", "Cliente atualizado com sucesso",
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
				<ViewForm>
					<ViewInput>
						<Octicons name="person" size={24} color="gray" />
						<InputText placeholder = "Nome" value = {name}
						onChangeText = {t=>setName(t)} />
					</ViewInput>

					<ViewInput>
						<Entypo name="price-tag" size={24} color="pink" />
						<InputText placeholder = "Compra" value = {purchase}
						onChangeText = {t=>setPurchase(t)} />
					</ViewInput>

					<ViewInput>
						<MaterialIcons name="attach-money" size={24} color="green" />
						<InputText placeholder = "Preço" value = {price}
						onChangeText = {t=>setPrice(t)} />
					</ViewInput>


					<ViewInput>
						<FontAwesome name="cart-plus" size={24} color="black" />
						<InputText placeholder = "Quantidade" value = {amount}
						onChangeText = {t=>setAmount(t)} />
					</ViewInput>

					<ViewInput>
						<MaterialIcons name="date-range" size={24} color="#576298" />
						<InputText placeholder = "Data" value = {date}
						onChangeText = {t=>setDate(t)} />
					</ViewInput>

					<ButtonView>
						<ButtonTouchableOpacity onPress={()=> sendForm()}>
							<TitleButton> Atualizar </TitleButton>
						</ButtonTouchableOpacity>
					</ButtonView>
				</ViewForm>
			</Footer>
		</Container>
	)
}
