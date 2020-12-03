import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Home from '../pages/home';

const Stack = createStackNavigator();

function RouterLogin(){
	return(
		<Stack.Navigator>
			<Stack.Screen name= "Login" component={Login}
	        options={{ headerShown: false }} />
	        
	        <Stack.Screen name= "Home" component={Home}
	        options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}


export default RouterLogin;