import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

interface AuthContextData{
  signed: boolean;
  user: string | null;
  loading: boolean;
  signOut(): void; 
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [ user, setUser ] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(()=> {
		async function loadStorageData(){
			const storageToken = await AsyncStorage.getItem("@token");

			if (storageToken) {
				setUser(storageToken);
				setLoading(false);
			}else{
				setLoading(false);
			}	
		}

		loadStorageData();
	}, []);

	function signOut(){
		AsyncStorage.clear();
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, signOut, loading, user: ''}}>
    		{children}
  		</AuthContext.Provider>
	);
}


export default AuthContext;
