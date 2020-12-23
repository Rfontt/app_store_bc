import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 2;
  background: #000D26;
  border-bottom-right-radius: 25;
  border-bottom-left-radius: 25;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 80;
  color: white;
  font-size: 30;
  text-align: center;
  font-family: Roboto_400Regular;
`;

export const Footer = styled.View`
  flex: 2;
  background: #DCDCDC;
`;

export const ButtonCustomerAndPurchase = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonUserAndSignOut = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonCustomers = styled.TouchableOpacity`
  width: 100;
  height: 100;
  background-color: #403558;;
  justify-content: center;
  align-items: center;
  margin-top: 20;
  border-radius: 100;
  flex-direction: column;
`;

export const ButtonPurchases = styled.TouchableOpacity`
  width: 100;
  height: 100;
  background-color: #483D8B;
  justify-content: center;
  align-items: center;
  margin-top: 20;
  margin-left: 8;
  border-radius: 100;
  flex-direction: column;

`;

export const ButtonUsers = styled.TouchableOpacity`
  width: 100;
  height: 100;
  background-color: #323256;
  justify-content: center;
  align-items: center;
  border-radius: 100;
  flex-direction: column;

`;

export const ButtonSignOut = styled.TouchableOpacity`
  width: 100;
  height: 100;
  background-color: #1C1C30;
  justify-content: center;
  align-items: center;
  margin-left: 8;
  border-radius: 100;
  flex-direction: column;
`;

export const TitleButtonCustomers = styled.Text`
  color: white;
	font-size: 14;
	font-weight: bold;
`;

export const TitleButtonPurchases = styled.Text`
	color: white;
	font-size: 14;
	font-weight: bold;
`;

export const TitleButtonUsers = styled.Text`
  color: white;
	font-size: 14;
	font-weight: bold;
`;

export const TitleButtonSignOut = styled.Text`
  color: white;
	font-size: 14;
	font-weight: bold;
`;

export const ImageLogo = styled.Image`
  width: 300;
  height: 200;
  margin-top: 20;
`;
