import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

interface AuthContextData{
  signed: boolean;
  token: string | null;
  loading: boolean;
  signOut(): void; 
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [ token, setToken ] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(()=> {
		async function loadStorageData(){
			const storageToken = await AsyncStorage.getItem("@token");

			if (storageToken) {
				setToken(storageToken);
				setLoading(false);
			}else{
				setLoading(false);
			}	
		}

		loadStorageData();
	}, []);

	async function signOut(){
		await AsyncStorage.clear();
	}

	return (
		<AuthContext.Provider value={{ signed: !!token, signOut, loading, token: ''}}>
    		{children}
  		</AuthContext.Provider>
	);
}


export default AuthContext;
