import styled from 'styled-components';

export const ViewContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const ViewName = styled.View`
  flex: 1;
  background: white;
  width: 150;
  height: 40;
  margin-top: 5;
  border-bottom-right-radius: 8;
  border-bottom-left-radius: 8;
`;

export const ViewCustomers = styled.View`
  flex: 1;
  width: 150;
  height: 200;
  background: white;
  flex-direction: column;
  margin-top: 1;
  justify-content: center;
  border-top-right-radius: 8;
  border-top-left-radius: 8;
`;

export const ViewTextAndIcon = styled.View`
  flex-direction: row;
  margin-left: 8;
`;

export const NameText = styled.Text`
	font-size: 18;
	text-align: center;
	margin-top: 7;
`;

export const PurchaseText = styled.Text`
	margin-top: 3;
	font-size: 18;
	text-align: center;
	margin-left: 2;
`;

export const PriceText = styled.Text`
	margin-top: 3;
	font-size: 18;
	margin-left: 2;
`;

export const AmountText = styled.Text`
	margin-top: 3;
	font-size: 18;
	text-align: center;
	margin-left: 2;
`;

export const TotalText = styled.Text`
	margin-top: 8;
	font-size: 18;
	text-align: center;
	margin-left: 2;
	color: red;
`;
export const ButtonsView = styled.View`
	flex-direction: row;
	margin-top: 1;
	margin-bottom: 5;

`;

export const ButtonEdit = styled.TouchableOpacity`
	background: green;
	width: 75;
	height: 35;
	align-items: center;
	justify-content: center;
  	border-bottom-right-radius: 8;
`;

export const ButtonDelete = styled.TouchableOpacity`
	background: #8B0000;
	width: 75;
	height: 35;
	align-items: center;
	justify-content: center;
  	border-bottom-left-radius: 8;
`;
