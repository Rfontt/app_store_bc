import React, { useState, useEffect } from 'react';
import { Container,Header, Title, Footer, ListPurchases, SeparatorView } from '../../component/indexPurchases';
import FindByAllPurchases from './FindByAllPurchases';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services';

interface PurchasesData {
	id: number;
	purchase: string;
	pricePurchase: number;
	pieceQuantity: number;
	payment: number;
	installment: number;
  valueToSell: number;
  profit: number;
}

export default function Purchases() {
	const navigation = useNavigation();
	const [ purchases, setPurchases ] = useState<PurchasesData[]>([]);

	useEffect(()=> {
		Api.get<PurchasesData[]>('/purchase')
		.then(response => {
			setPurchases(response.data.Purchases);
		})
	}, [])

	return (
		<Container>
			<Header>
				<Title> Você realizou {purchases.length} compras  </Title>
			</Header>

			<Footer>
				<ListPurchases
				data = { purchases } keyExtractor = { item => item.id }
				renderItem = {({item}) => (
					<FindByAllPurchases data = {item} />
				)}
				horizontal
				ItemSeparatorComponent = {() => <SeparatorView />} />
			</Footer>
		</Container>
	);
}
