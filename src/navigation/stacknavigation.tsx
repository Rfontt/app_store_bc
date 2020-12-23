import React, { useContext } from 'react';
import AuthContext from '../context/auth';
import LoginRouter from './loginRouter';
import MainRouter from './mainRouter';
import { Container, Loading } from '../component/loadingContext';
import { StatusBar } from '../component/StatusBar';

function Router() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
		return(
			<Container>
        <StatusBar  backgroundColor = "#000D26" barStyle = "light-content" hidden = {false} translucent = {true} />

				<Loading size="large" color = "white"/>
			</Container>
		);
	}

  	return signed ? <MainRouter /> : <LoginRouter />
}


export default Router;
