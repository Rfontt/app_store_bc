import styled from 'styled-components';

export const Container = styled.View`
	flex: 1;
`;
export const ViewDatasPurchases = styled.View`
  background: #EDEDF1;
  flex: 0.9;
  flex-direction: column;
  width: 300;
	margin-top; 10;
	align-items: center;
	border-top-left-radius: 8;
	border-top-right-radius: 8;
`;

export const TitleDatasPurchases =  styled.Text`
  font-size: 18;
  color: #300E4E;
`;

export const ViewProfitPurchase = styled.View`
	margin-top: 10;
	flex-direction: row;
`;

export const TitleProfitPurchases =  styled.Text`
  font-size: 18;
  color: #192c33;
	margin-left: 5;
`;

export const ViewRoundProfitPurchase = styled.View`
	width: 90;
	height: 90;
	background-color: #0EBC7D;
	justify-content: center;
	align-items: center;
	border-radius: 90;
	flex-direction: column;
`;


export const ViewAllDatasPurchases = styled.View`
	margin-top: 10;
	flex-direction: row;
`;

export const TitleAllDatasPurchases =  styled.Text`
  font-size: 18;
  color: blue;
	margin-left: 5;
`;

export const ViewLinePurchase = styled.View`
	border-bottom-color: #8e93a1;
	border-bottom-width: 0.7;
	margin-left: 8;
	margin-right: 8;
	margin-top: 5;
`;

export const TitleValueToSell =  styled.Text`
  font-size: 20;
	color: red;
`;

export const ButtonsView = styled.View`
	flex-direction: row;
	margin-top: 1;
`;

export const ButtonEdit = styled.TouchableOpacity`
	background: #228B22;
	width: 150;
	height: 50;
	align-items: center;
	justify-content: center;
	border-bottom-right-radius: 8;
`;

export const ButtonDelete = styled.TouchableOpacity`
	background: #DC143C;
	width: 150;
	height: 50;
	align-items: center;
	justify-content: center;
	border-bottom-left-radius: 8;
`;
