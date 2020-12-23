import React from 'react';
import { Alert } from 'react-native';
import { Container, ViewUsers, TitleName, TitleEmail, ViewButtons, ButtonDelete, ButtonEdit } from '../../component/findbyallusers';
import { StatusBar } from '../../component/StatusBar';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Api from '../../services';
import { useNavigation } from '@react-navigation/native';


export default function FindByAllUsers({ data }) {
	const navigation = useNavigation();

	function deleteUser(id: number) {
		var idParams = id;

		Alert.alert("Excluir", "Deseja excluir esse usuário?", 
			[
				{
					text: "Não"
				},

				{
					text: "Sim", onPress: ()=> Api.delete(`/user/${idParams}`)
				}

			])
	}

	function editUser(id: number, name: string, email: string ) {
		navigation.navigate("UpdateUser", { id, name, email })
	}

	function UpdateAndDeleteUsers() {
		return(
			<ViewButtons>

				<ButtonDelete onPress = {() => deleteUser(data.id)} >
					<FontAwesome name="user-times" size={24} color="black" />
				</ButtonDelete>

				<ButtonEdit onPress = {() => editUser(data.id, data.name, data.email)} >
					<MaterialCommunityIcons name="account-edit" size={28} color="black" />
				</ButtonEdit>
			</ViewButtons>
		)
	}

  return(
    <Container>
    	<StatusBar barStyle = "light-content" hidden = {false} translucent = {true} />

    	<Swipeable renderLeftActions = {UpdateAndDeleteUsers}>
	    	<ViewUsers>
	      		<TitleName> { data.name } </TitleName>
	      		<TitleEmail> @{ data.email } </TitleEmail>
	      </ViewUsers>
	    </Swipeable>		
    </Container>
  )
}
