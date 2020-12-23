import React, { useContext } from 'react';
import { Container, Header, Title, Footer, ButtonCustomerAndPurchase, ButtonUserAndSignOut, ButtonCustomers,
ButtonPurchases, ButtonUsers, ButtonSignOut, TitleButtonCustomers,
TitleButtonPurchases, TitleButtonUsers, TitleButtonSignOut, ImageLogo } from '../../component/home';
import { StatusBar } from '../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/auth';
import { Zocial } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Logo from '../imagens/imagemTwo.png'


export default function Home() {
	const { signOut } = useContext(AuthContext);
	const navigation = useNavigation();

	function SignOut(){
		signOut();
		navigation.reset({
            routes:[{name:'Login'}]
        });
	}

	return (
		<Container>
			<StatusBar  backgroundColor = "#000D26" barStyle = "light-content" hidden = {false} translucent = {true} />

			<Header>
				<Title> Brechó do Cruzeiro </Title>
				<ImageLogo source = {Logo} />
			</Header>

			<Footer>
				<ButtonCustomerAndPurchase>
					<ButtonCustomers onPress = {()=> navigation.navigate("Customers")}>
						<Zocial name="persona" size={24} color="#FBD285" />
						<TitleButtonCustomers> Clientes </TitleButtonCustomers>
					</ButtonCustomers>

					<ButtonPurchases onPress = {()=> navigation.navigate("Purchases")}>
						<Entypo name="bar-graph" size={24} color="green" />
						<TitleButtonPurchases> Estoque </TitleButtonPurchases>
					</ButtonPurchases>
				</ButtonCustomerAndPurchase>

				<ButtonUserAndSignOut>
					<ButtonUsers onPress = {()=> navigation.navigate("Users")}>
						<FontAwesome5 name="users-cog" size={24} color="#DCDCDC" />
						<TitleButtonUsers> Usuários </TitleButtonUsers>
					</ButtonUsers>

					<ButtonSignOut onPress = {SignOut}>
						<AntDesign name="logout" size={24} color="white" />
						<TitleButtonSignOut> Sair </TitleButtonSignOut>
					</ButtonSignOut>
				</ButtonUserAndSignOut>
			</Footer>
		</Container>
	);
}
