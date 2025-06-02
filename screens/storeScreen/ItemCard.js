import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { CardCustom, Shadow, TextCustom, root } from '../../ui/Components';
import { useNavigation } from '@react-navigation/native';

export default function ItemCard({ id, titulo, tipo, tipoVenda, valor, imagem, onPress }) {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Detalhe da publicação', {
      pubId: id,
      titulo,
      tipo,
      tipoVenda,
      valor,
      imagem,
    });
  };

  const defineTipo = (tipo) => {
    switch (tipo) {
      case 0:
        return 'Livro';
      case 1:
        return 'Revista';
      case 2:
        return 'Quadrinho';
      case 3: ;
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
      <TouchableOpacity onPress={handlePress}>
        <Shadow style={styles.shadow}>
        <CardCustom style={styles.card}>
          <Image source={{ uri: imagem }} style={styles.image} />
          <Shadow style={styles.badge}>
            <Text style={styles.badgeText}>{defineTipo(tipo)}</Text>
          </Shadow>
          <Text style={styles.title}>{titulo}</Text>
          <Text style={styles.marker}>{defineTipoVenda(tipoVenda)}</Text>
          {tipoVenda === 1 && valor !== null && (
            <Text style={styles.valor}>
              R$ {Number(valor).toFixed(2).replace('.', ',')}
            </Text>
          )}
        </CardCustom>
      </Shadow>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shadow: {
    margin: 10,
  },
  card: {
    borderRadius: 10,
    backgroundColor: root.C_WHITE,
    padding: 10,
    width: 200,
    height: 300,
    alignItems: 'flex-start',
    position: 'relative',
    shadowColor: root.C_BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#ccc',
    marginBottom: 8,
  },

  marker: {
    position: 'absolute',
    right: 0,
    bottom: 20,
    height: 25,
    fontSize: 12,
    paddingHorizontal: 10,
    backgroundColor: root.C_PURPLE,
    color: root.C_WHITE,
    borderTopLeftRadius: 5,
  },

  badge: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    opacity: 0.9,
    backgroundColor: root.C_BADGE_COLOR,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  badgeText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    fontFamily: 'Inter-Semibold'
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: root.C_BLACK,
    fontFamily: 'Inter-ExtraLight'
  },
  subTitle: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: root.C_WHITE,
    fontFamily: 'Inter-ExtraLight'
  },
  valor: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: root.C_BLACK,
    fontFamily: 'Inter-Bold'
  }
});