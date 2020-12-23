import React, { useState, useEffect } from 'react';
import { Container, Title, Header, Footer, ListCustomers } from '../../component/indexCustomers';
import FindByAllCustomers from './FindByAllCustomers';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


interface CustomersData {
	id: number;
	name: string;
	purchase: string;
	price: number;
	amount: number;
	total: number;
}

export default function Customer() {
	const navigation = useNavigation();
	const [ customers, setCustomers ] = useState<CustomersData[]>([]);

	useEffect(()=> {
		Api.get<CustomersData[]>('/customer')
		.then(response => {
			setCustomers(response.data.Customers);
		})
	}, [])

	const numColumns = 2;

	return (
		<Container>
			<Header>
				<Title> Você possui {customers.length} clientes: </Title>
			</Header>

			<Footer>
				<ListCustomers data = { customers } keyExtractor = { item => item.id }
				renderItem = {({ item }) => (
					<FindByAllCustomers data = { item } />
				)}
				numColumns = {numColumns} />
			</Footer>
		</Container>
	);
}
