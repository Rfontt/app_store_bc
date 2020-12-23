import React, { useState, useEffect } from 'react';
import { Container, ViewList, Title, ListUsers } from '../../component/indexUsers';
import FindByAllUsers from './FindByAllUsers';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services';

interface UsersData {
  id: number;
  email: string;
  name: string;
}

export default function Users() {
	const navigation = useNavigation();
	const [ user, setUser ] = useState<UsersData[]>([]);

	useEffect(()=> {
		Api.get<UsersData[]>('/user')
		.then(response => {
			setUser(response.data.Users);
		})
	}, [])

	return (
		<Container>
			<ViewList>
				<Title> {user.length} usuários encontrados </Title>

				<ListUsers
				data = { user } keyExtractor = { item => item.id }
				renderItem = {({item}) => (
					<FindByAllUsers data = {item} />
				)} />
			</ViewList>
		</Container>
	);
}
