import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: column;
  background: #000D26;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 20;
  color: white;
  text-align: center;
`;

export const Footer = styled.View`
  flex: 2;
  background: #EDEDF1;
  align-items: center;
`;

export const ViewForm = styled.KeyboardAvoidingView`
  background: white;
  flex: 1.5;
  flex-direction: column;
  width: 300;
  margin-bottom: 10;
  margin-top: -30;
`;


export const ViewInput = styled.View`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5;
  margin-left: 8;
  margin-right: 8;
  flex-direction: row;
  margin-top: 25;
`;

export const InputText = styled.TextInput`
  flex: 1;
  padding-left: 10;
`;

export const ButtonView = styled.View`
  margin-top: 35;
  align-items: center;
  justify-content: center;
`;

export const ButtonTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center
  width: 250;
  height: 40;
  background: #00a000;
  border-radius: 8;
`;

export const TitleButton =  styled.Text`
  font-size: 18;
  color: white;
`;

export const ImageLogo = styled.Image`
  width: 130;
  height: 130;
`;