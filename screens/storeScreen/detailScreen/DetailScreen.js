import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { pubId, titulo, tipo, tipoVenda, valor, imagem } = route.params;

  const defineTipo = (tipo) => {
    switch (tipo) {
      case 0:
        return 'Livro';
      case 1:
        return 'Revista';
      case 2:
        return 'Quadrinho';
      case 3:
        return 'Coleção';
      default:
        return 'Desconhecido';
    }
  }

  const defineTipoVenda = (tipoVenda) => {
    switch (tipoVenda) {
      case 0:
        return 'Doação';
      case 1:
        return 'À Venda';
      case 2:
        return 'Troca';
      default:
        return 'Desconhecido';
    }
  }


  return (
    <ScrollView>
      <ScrollView>
        <Text>{titulo}</Text>
        <Text>{defineTipo(tipo)}</Text>
        <Text>{defineTipoVenda(tipoVenda)}</Text>
        <Text>
          {valor ? `R$ ${Number(valor).toFixed(2).replace('.', ',')}` : 'Gratuito'}
        </Text>
        <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />
      </ScrollView>

    </ScrollView>
  );
}