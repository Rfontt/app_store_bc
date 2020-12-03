import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/auth';

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
		<View>
			<Text> Hello World </Text>

			<TouchableOpacity onPress = {SignOut}>
				<Text> Sair </Text>
			</TouchableOpacity>
		</View>
	);
}
