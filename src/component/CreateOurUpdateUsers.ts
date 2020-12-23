import styled from 'styled-components';
 
export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000D26;
  padding-horizontal: 30;
  padding-vertical: 100;
`;

export const Title = styled.Text`
  margin-top: 8;
  color: #DCDCDC;
  font-weight: bold;
  font-size: 30;
`;

export const SubTitle = styled.Text`
  margin-top: 3;
  color: gray;
  margin-bottom: 30;
`;

export const ViewDatasUser = styled.KeyboardAvoidingView`
  margin-top: 10;
  flex-direction: row;
  border-radius: 5;
  padding-horizontal: 15;
  padding-vertical: 10;
  align-items: center;
  border: 1px solid;
  background-color: #DCDCDC;
`;

export const InputDatasUser = styled.TextInput`
  flex: 1;
  padding-left: 10;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: 100%;
  height: 40;
  background-color: #1E90FF;
  justify-content: center;
  align-items: center;
  margin-top: 30;
  border-radius: 18; 
`;

export const TitleButtonSubmit = styled.Text`
  color: white;
  font-size: 15;
  font-weight: bold;
`;