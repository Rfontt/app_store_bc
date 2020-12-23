import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20;
`;

export const ViewUsers = styled.View`
  flex: 1;
  margin-top: 2;
  background: white;
  width: 340;
  height: 40;
  justify-content: center;
  border-radius: 8;
`;

export const TitleName = styled.Text`
	text-align: center;
	font-size: 15;
	padding-left: 10;
`;
export const TitleEmail = styled.Text`
	text-align: center;
	margin-top: 2;
	font-size: 9;
	padding-left: 10;
	color: #4F4F4F;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
`;

export const ButtonDelete = styled.TouchableOpacity`
	background: red;
	width: 40;
	height: 40;
	border-radius: 40;
	align-items: center;
	justify-content: center;
`;

export const ButtonEdit = styled.TouchableOpacity`
	background: green;
	width: 40;
	height: 40;
	align-items: center;
	justify-content: center;
	margin-left: 2;
	border-radius: 40;
`;


