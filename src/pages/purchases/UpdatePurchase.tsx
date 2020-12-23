import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Footer, ViewForm, ViewInput, InputText, ButtonView, ButtonTouchableOpacity, TitleButton, ImageLogo } from '../../component/CreateOurUpdateCustomerAndPurchase';
import { StatusBar } from '../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Api from '../../services';
import Logo from '../imagens/imagemFive.png';

interface PurchasesDatas {
	id: number;
	purchase: string;
	pricePurchase: number;
	pieceQuantity: number;
	payment: number;
	installment: number;
  valueToSell: number;
}

export default function UpdatePurchase() {
	const navigation = useNavigation();
	const route = useRoute();
	const params = route.params as PurchasesDatas;

	const [ purchase, setPurchase ] = useState(params.purchase);
	const [ pricePurchase, setPricePurchase ] = useState(params.pricePurchase + '');
	const [ pieceQuantity, setPieceQuantity ] = useState(params.pieceQuantity + '');
	const [ payment, setPayment ] = useState(params.payment + '');
	const [ installment, setInstallment ] = useState(params.installment + '');
	const [ valueToSell, setValueToSell ] = useState(params.valueToSell + '');

	const sendForm = async()=> {
		if (purchase != '' && pricePurchase != '' && pieceQuantity != '' && payment != '' && installment != '' && valueToSell != ''){
			try{
				await Api.put(`/purchase/${params.id}`, {purchase, pricePurchase, pieceQuantity, payment, installment, valueToSell});

				Alert.alert("Atualizado", "Compra atualizada com sucesso",
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
				<ImageLogo source = { Logo } />
			</Header>

			<Footer>
				<ViewForm>
					<ViewInput>
						<MaterialCommunityIcons name="purse" size={24} color="#D3839B" />
						<InputText placeholder = "Compra feita" value = {purchase}
						onChangeText = {t=>setPurchase(t)} />
					</ViewInput>

					<ViewInput>
						<MaterialIcons name="attach-money" size={24} color="green" />
						<InputText placeholder = "Preço da compra" value = {pricePurchase}
						onChangeText = {t=>setPricePurchase(t)} />
					</ViewInput>

					<ViewInput>
						<Foundation name="list-number" size={24} color="blue" />
						<InputText placeholder = "Quantidade de peça" value = {pieceQuantity}
						onChangeText = {t=>setPieceQuantity(t)} />
					</ViewInput>

					<ViewInput>
						<FontAwesome5 name="money-check-alt" size={24} color="#00CED1" />
						<InputText placeholder = "Pagamento" value = {payment}
						onChangeText = {t=>setPayment(t)} />
					</ViewInput>

					<ViewInput>
						<Entypo name="credit-card" size={24} color="#4B0082" />
						<InputText placeholder = "Parcelamento" value = {installment}
						onChangeText = {t=>setInstallment(t)} />
					</ViewInput>

					<ViewInput>
						<Foundation name="pricetag-multiple" size={24} color="#FFA07A" />
						<InputText placeholder = "Valor para revenda" value = {valueToSell}
						onChangeText = {t=>setValueToSell(t)} />
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
