import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Footer, ViewForm, ViewInput, InputText, ButtonView, ButtonTouchableOpacity, TitleButton, ImageLogo } from '../../component/CreateOurUpdateCustomerAndPurchase';
import { StatusBar } from '../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Api from '../../services';
import Logo from '../imagens/imagemfour.png'


export default function CreatePurchase() {
	const navigation = useNavigation();

	const [ purchase, setPurchase ] = useState('');
	const [ pricePurchase, setPricePurchase ] = useState('');
	const [ pieceQuantity, setPieceQuantity ] = useState('');
	const [ payment, setPayment ] = useState('');
	const [ installment, setInstallment ] = useState('');
	const [ valueToSell, setValueToSell ] = useState('');

	const sendForm = async()=> {
		if (purchase != '' && pricePurchase != '' && pieceQuantity != '' && payment != '' && installment != '' && valueToSell != ''){
			try{
				await Api.post('/purchase', {purchase, pricePurchase, pieceQuantity, payment, installment, valueToSell});

				Alert.alert("Criado", "Compra criada com sucesso",
					[
						{
							text: "ok", onPress: ()=> navigation.navigate("Purchases")
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
				<ViewForm behavior="height">
					<ViewInput>
						<MaterialCommunityIcons name="purse" size={24} color="#D3839B" />
						<InputText placeholder = "Compra feita"
						onChangeText = {t=>setPurchase(t)} />
					</ViewInput>

					<ViewInput>
						<MaterialIcons name="attach-money" size={24} color="green" />
						<InputText placeholder = "Preço da compra"
						onChangeText = {t=>setPricePurchase(t)} />
					</ViewInput>

					<ViewInput>
						<Foundation name="list-number" size={24} color="blue" />
						<InputText placeholder = "Quantidade de peça"
						onChangeText = {t=>setPieceQuantity(t)} />
					</ViewInput>

					<ViewInput>
						<FontAwesome5 name="money-check-alt" size={24} color="#00CED1" />
						<InputText placeholder = "Pagamento"
						onChangeText = {t=>setPayment(t)} />
					</ViewInput>

					<ViewInput>
						<Entypo name="credit-card" size={24} color="#4B0082" />
						<InputText placeholder = "Parcelamento"
						onChangeText = {t=>setInstallment(t)} />
					</ViewInput>

					<ViewInput>
						<Foundation name="pricetag-multiple" size={24} color="#FFA07A" />
						<InputText placeholder = "Valor para revenda"
						onChangeText = {t=>setValueToSell(t)} />
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
