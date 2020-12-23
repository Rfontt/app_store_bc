import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewIconCreate, ButtonIconCreate } from '../component/headerRightIcon';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../pages/home';
import Customers from '../pages/customers';
import CreateCustomer from '../pages/customers/CreateCustomer';
import UpdateCustomer from '../pages/customers/UpdateCustomer';
import Purchases from '../pages/purchases';
import UpdatePurchase from '../pages/purchases/UpdatePurchase';
import CreatePurchase from '../pages/purchases/CreatePurchase';
import Users from '../pages/users';
import UpdateUser from '../pages/users/UpdateUser';
import CreateUser from '../pages/users/CreateUser';


const Stack = createStackNavigator();

function RouterMain(){
	return(
		<Stack.Navigator>
			<Stack.Screen name= "Home" component={Home}
		    options={{ headerShown: false }} />

		  <Stack.Screen name= "Customers" component={Customers}
				options={({ navigation }) => ({
					title: "Clientes",
					headerTintColor: '#ffffff',
					headerTitleAlign: 'center',
					headerStyle: {
					 backgroundColor: '#000D26',
					 borderBottomColor: '#EDEDF1',
					 borderBottomWidth: 0.3
					},
					headerTitleStyle: {
						fontWeight: 'bold',
						color: '#EDEDF1',
						fontFamily: 'Montserrat_700Bold'
					},
					headerRight: () => (
					 <ViewIconCreate>
						 <ButtonIconCreate onPress = {()=>  navigation.navigate("CreateCustomer")}>
							 <Entypo name="circle-with-plus" size={32} color="white" />
						 </ButtonIconCreate>
					 </ViewIconCreate>
					)
				})} />

		  <Stack.Screen name= "CreateCustomer" component={CreateCustomer}
				options={{
					title: "Novo cliente",
					headerTintColor: '#ffffff',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#000D26',
						borderBottomColor: '#fffff',
						borderBottomWidth: 2
					},
					headerTitleStyle: {
						fontWeight: 'bold',
						color: '#EDEDF1'
					}
			 }}/>

		  <Stack.Screen name= "UpdateCustomer" component={UpdateCustomer}
		   	options={{
					title: "Atualizar cliente",
					headerTintColor: '#ffffff',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#000D26',
						borderBottomColor: '#fffff',
						borderBottomWidth: 2
					},
					headerTitleStyle: {
						fontWeight: 'bold',
						color: '#EDEDF1'
					}
				 }}/>

			<Stack.Screen name= "Purchases" component={Purchases}
			options={({ navigation }) => ({
				title: "Compras",
	 		  headerTintColor: '#ffffff',
	 		  headerTitleAlign: 'center',
	 		  headerStyle: {
	 		   backgroundColor: '#000D26',
	 		   borderBottomColor: '#EDEDF1',
	 		   borderBottomWidth: 0.3
 		  	},
	 		  headerTitleStyle: {
	 		    fontWeight: 'bold',
	 		    color: '#EDEDF1',
	 		    fontFamily: 'Montserrat_500Medium'
	 		  },
 		    headerRight: () => (
 		     <ViewIconCreate>
 		       <ButtonIconCreate onPress = {()=>  navigation.navigate("CreatePurchase")}>
 		         <Entypo name="circle-with-plus" size={32} color="white" />
 		       </ButtonIconCreate>
 		     </ViewIconCreate>
 		    )
		  })} />

			 <Stack.Screen name= "UpdatePurchase" component={UpdatePurchase}
 		   	options={{
 					title: "Atualizar compra",
 					headerTintColor: '#ffffff',
 					headerTitleAlign: 'center',
 					headerStyle: {
 						backgroundColor: '#000D26',
	 					borderBottomColor: '#EDEDF1',
	 					borderBottomWidth: 0.3
 					},
 					headerTitleStyle: {
 						fontWeight: 'bold',
 						color: '#EDEDF1'
 					}
 				 }}/>

				 <Stack.Screen name= "CreatePurchase" component={CreatePurchase}
	 		   	options={{
	 					title: "Nova compra",
	 					headerTintColor: '#fff',
	 					headerTitleAlign: 'center',
	 					headerStyle: {
	 						backgroundColor: '#000D26',
	 						borderBottomColor: '#EDEDF1',
	 						borderBottomWidth: 0.3
	 					},
	 					headerTitleStyle: {
	 						fontWeight: 'bold',
	 						color: '#EDEDF1'
	 					}
	 				 }}/>

		 		 <Stack.Screen name= "Users" component={Users}
		 			options={({ navigation }) => ({
						title: "Usuários",
						headerTintColor: '#ffffff',
						headerTitleAlign: 'center',
						headerStyle: {
						 backgroundColor: '#000D26',
						 borderBottomColor: '#EDEDF1',
						 borderBottomWidth: 0.3
						},
						headerTitleStyle: {
							fontWeight: 'bold',
							color: '#EDEDF1'
						},
						headerRight: () => (
						 <ViewIconCreate>
							 <ButtonIconCreate onPress = {()=>  navigation.navigate("CreateUser")}>
								 <FontAwesome name="user-plus" size={24} color="white" />
							 </ButtonIconCreate>
						 </ViewIconCreate>
						)
					})} />
				<Stack.Screen name= "UpdateUser" component={UpdateUser}
		 			options={{
	 					title: "Atualizar usuário",
	 					headerTintColor: '#fff',
	 					headerTitleAlign: 'center',
	 					headerStyle: {
	 						backgroundColor: '#000D26',
	 						borderBottomColor: '#EDEDF1',
	 						borderBottomWidth: 0.3
	 					},
	 					headerTitleStyle: {
	 						fontWeight: 'bold',
	 						color: '#EDEDF1'
	 					}
	 				}}/>

	 			<Stack.Screen name= "CreateUser" component={CreateUser}
		 			options={{
	 					title: "Novo usuário",
	 					headerTintColor: '#fff',
	 					headerTitleAlign: 'center',
	 					headerStyle: {
	 						backgroundColor: '#000D26',
	 						borderBottomColor: '#EDEDF1',
	 						borderBottomWidth: 0.3
	 					},
	 					headerTitleStyle: {
	 						fontWeight: 'bold',
	 						color: '#EDEDF1'
	 					}
	 				}}/>


		</Stack.Navigator>
	);
}


export default RouterMain;
