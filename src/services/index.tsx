import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: 'http://192.168.1.12:3000'
})

api.interceptors.request.use(async (config) => {
	try{
		const token = await AsyncStorage.getItem("@token");

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	}catch(e){
		console.warn(e);
	}
})

export default api;
