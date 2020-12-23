import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import GenerateToken from '../pages/login/generateToken';
import RecoverPassword from '../pages/login/UpdatePassword';
import Home from '../pages/home';

const Stack = createStackNavigator();

function RouterLogin(){
	return(
		<Stack.Navigator>
			<Stack.Screen name= "Login" component={Login}
	        options={{ headerShown: false }} />

	        <Stack.Screen name= "GenerateToken" component={GenerateToken}
	        options={{ headerShown: false }} />

	        <Stack.Screen name= "RecoverPassword" component={RecoverPassword}
	        options={{ headerShown: false }} />
	        
	        <Stack.Screen name= "Home" component={Home}
	        options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}


export default RouterLogin;