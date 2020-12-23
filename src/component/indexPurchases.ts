import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.5;
  background: #000D26;
  flex-direction: column;
  justify-content: center;
`;

export const Footer = styled.View`
  flex: 2;
  background: #000D26;
  align-items: center;
`;

export const Title = styled.Text`
	text-align: center;
  font-size: 20;
  color: white;
`;

export const ListPurchases = styled.FlatList``;

export const SeparatorView = styled.View`
  width: 5;
  color: black;
`;
