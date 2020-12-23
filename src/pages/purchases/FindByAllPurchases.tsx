import React from 'react';
import { Alert } from 'react-native';
import { Container, ViewDatasPurchases, TitleDatasPurchases, ViewProfitPurchase,TitleProfitPurchases, ViewRoundProfitPurchase,
ViewAllDatasPurchases, TitleAllDatasPurchases, ViewLinePurchase, TitleValueToSell, ButtonsView, ButtonEdit, ButtonDelete} from '../../component/findbyallpurchases';
import { StatusBar } from '../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Api from '../../services';

export default function FindByAllPurchases({ data }) {
	const navigation = useNavigation();

	function DeletePurchase(id: number) {
		let idParams = id;

		Alert.alert("Excluir compra", "Deseja excluir essa compra?",
			[
				{
					text: "Não"
				},

				{
					text: "Sim", onPress: ()=> Api.delete(`/purchase/${idParams}`)
				}
		  ])
	}

	function NavigateToUpdatePurchase(id: number, purchase: string, pricePurchase: number,
		pieceQuantity: number, payment: number, installment: number, valueToSell: number) {
			navigation.navigate("UpdatePurchase", {id, purchase, pricePurchase, pieceQuantity, payment, installment, valueToSell})
	}
	return(
		<Container>
			<StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#000D26" translucent = {true} />

			<ViewDatasPurchases>
				<ViewProfitPurchase>
					<AntDesign name="barschart" size={24} color="#32CD32" />
					<TitleProfitPurchases> Você obteve um lucro de: </TitleProfitPurchases>
				</ViewProfitPurchase>

				<ViewRoundProfitPurchase>
					<TitleDatasPurchases> R$: { data.profit } </TitleDatasPurchases>
				</ViewRoundProfitPurchase>

				<ViewAllDatasPurchases>
						<MaterialCommunityIcons name="purse" size={24} color="#D3839B" />
						<TitleAllDatasPurchases> Compra de: </TitleAllDatasPurchases>
				</ViewAllDatasPurchases>

				<ViewLinePurchase>
					<TitleDatasPurchases> • { data.purchase } </TitleDatasPurchases>
				</ViewLinePurchase>

				<ViewAllDatasPurchases>
						<MaterialIcons name="attach-money" size={24} color="green" />
						<TitleAllDatasPurchases> Preço da compra: </TitleAllDatasPurchases>
				</ViewAllDatasPurchases>

				<ViewLinePurchase>
					<TitleDatasPurchases> • R$: { data.pricePurchase } </TitleDatasPurchases>
				</ViewLinePurchase>

				<ViewAllDatasPurchases>
						<Foundation name="list-number" size={24} color="#FFA07A" />
						<TitleAllDatasPurchases> Quantidade de peças: </TitleAllDatasPurchases>
				</ViewAllDatasPurchases>

				<ViewLinePurchase>
					<TitleDatasPurchases> • { data.pieceQuantity } </TitleDatasPurchases>
				</ViewLinePurchase>

				<ViewAllDatasPurchases>
						<TitleValueToSell> Valor da revenda: </TitleValueToSell>
				</ViewAllDatasPurchases>

				<ViewLinePurchase>
					<TitleDatasPurchases> • R$: { data.valueToSell } </TitleDatasPurchases>
				</ViewLinePurchase>

			</ViewDatasPurchases>

			<ButtonsView>
				<ButtonDelete onPress = {()=> DeletePurchase(data.id)}>
					<MaterialCommunityIcons name="delete-forever" size={34} color="#FFC0CB" />
				</ButtonDelete>

				<ButtonEdit onPress = {()=> NavigateToUpdatePurchase(data.id, data.purchase, data.pricePurchase, data.pieceQuantity, data.payment, data.installment, data.valueToSell)}>
					<MaterialCommunityIcons name="playlist-edit" size={34} color="#FFC0CB" />
				</ButtonEdit>
			</ButtonsView>
		</Container>
	)
}
