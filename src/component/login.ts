import styled from 'styled-components';
 
export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding-horizontal: 30;
  padding-vertical: 100;
`;

export const Title = styled.Text`
  margin-top: 40;
  color: #3465d9;
  font-weight: bold;
  font-size: 30;
`;

export const SubTitle = styled.Text`
  margin-top: 3;
  color: gray;
  margin-bottom: 30;
`;

export const ViewLogin = styled.View`
  margin-top: 10;
  flex-direction: row;
  border-radius: 5;
  padding-horizontal: 15;
  padding-vertical: 10;
  align-items: center;
  border: 1px solid;
  
`;
export const InputLogin = styled.TextInput`
  flex: 1;
  padding-left: 10;
`;

export const ButtonForgotPassword = styled.TouchableOpacity``;

export const TitleButtonForgotPassword = styled.Text`
  text-align: center;
  margin-top: 15;
  color: #3465d9;
`;
export const ButtonSubmit = styled.TouchableOpacity`
  width: 100%;
  height: 40;
  background-color: #3465d9;
  justify-content: center;
  align-items: center;
  margin-top: 25;
  border-radius: 50; 
`;

export const TitleButtonSubmit = styled.Text`
  color: white;
  font-size: 15;
  font-weight: bold;
`;