import React from 'react';
import { Alert } from 'react-native';
import {ViewContainer, ViewName, NameText, PurchaseText, PriceText, AmountText, TotalText,
ViewCustomers, ViewTextAndIcon, ButtonsView, ButtonEdit, ButtonDelete } from '../../component/findbyallcustomers';
import { StatusBar } from '../../component/StatusBar';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services';


export default function FindByAllCustomers({ data }) {
	const navigation = useNavigation();

	function DeleteCustomer(id: number) {
		var idParams = id;

		Alert.alert(
			"Excluir cliente",
			"Deseja excluir esse cliente?",
			[
				{
					text: "Não"
				},
				{
					text: "Sim", onPress: () => Api.delete(`/customer/${idParams}`)
				}
			]
		);
	}

	function NavigateToUpdateCustomer(id: number, name: string, purchase: string, price: number, amount: number, date: string) {
		navigation.navigate("UpdateCustomer", {id, name, purchase, price, amount, date});
	}

	return(
		<ViewContainer>
      <StatusBar barStyle = "light-content" hidden = {false} translucent = {true} />

			<ViewName>
				<NameText> {data.name} </NameText>
			</ViewName>

			<ViewCustomers>
				<ViewTextAndIcon>
					<Entypo name="price-tag" size={24} color="pink" />
					<PurchaseText> {data.purchase} </PurchaseText>
				</ViewTextAndIcon>

				<ViewTextAndIcon>
					<MaterialIcons name="attach-money" size={24} color="green" />
					<PriceText> R$: {data.price} </PriceText>
				 </ViewTextAndIcon>

				<ViewTextAndIcon>
					<EvilIcons name="cart" size={28} color="black" />
					<AmountText> {data.amount} peças </AmountText>
				 </ViewTextAndIcon>

				<TotalText> Total a receber: R$: {data.total} </TotalText>
			</ViewCustomers>

			<ButtonsView>
				<ButtonDelete onPress = {()=> DeleteCustomer(data.id)} >
					<AntDesign name="delete" size={24} color="black" />
				</ButtonDelete>

				<ButtonEdit onPress = {()=> NavigateToUpdateCustomer(data.id, data.name, data.purchase, data.price, data.amount, data.date)} >
					<MaterialIcons name="mode-edit" size={24} color="black" />
				</ButtonEdit>
			</ButtonsView>
		</ViewContainer>
	)
}
