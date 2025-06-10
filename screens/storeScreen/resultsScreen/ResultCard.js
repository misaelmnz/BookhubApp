import React from 'react';
import { StyleSheet, Image, Text, Button } from 'react-native';
import { CardCustom, Shadow, root, Container, ButtonCustom, Line} from '../../../ui/components';
import { useNavigation } from '@react-navigation/native';

export default function ResultCard({ 
  id, 
  titulo='Titulo da Obra', 
  nome='...',
  tipoVenda,
  tipo,
  imagem, 
  preco='...',
  valor='...', 
  onPress }) {

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

  return (
    <Shadow style={styles.shadow}>
      <CardCustom style={styles.card}>
        <Image source={{ uri: imagem }} style={styles.image}/>
            <Container style={styles.container}>
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.name}>{nome}</Text>
                {
                  <Text style={styles.price}>R$ {Number(preco).toFixed(2).replace('.', ',')}</Text>
                }
                  <ButtonCustom
                      onPress={handlePress}
                      padding={5}
                      style={
                        {
                          width: '70%',
                          alignSelf: 'center',
                        }
                      }
                  >
                    <Text style={styles.order}>Ver detalhes</Text>
                  </ButtonCustom>
            </Container>
      </CardCustom>
      <Line/>
    </Shadow>
  )
}

const styles = StyleSheet.create({
  shadow: {
    margin: 10,
  },

  card: {
    borderRadius: 5,
    backgroundColor: root.C_BACKGROUND_COLOR,
    width: 360,
    height: 150,
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    shadowColor: root.C_BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },

  container: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingInline: 10,
  },

  image: {
    resizeMode: 'contain',
    width: '30%',
    height: '100%',
    backgroundColor: root.C_BACKGROUND_COLOR,
    marginBottom: 8,
    borderRadius: 5, 
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: root.C_BLACK,
    fontFamily: root.C_FONT_LIST.Light,
  },

  name: {
    fontSize: 14,
    color: root.C_BLACK,
    fontFamily: root.C_FONT_LIST.ThinItalic,
  },

  price: {
    fontSize: 18,
    color: root.C_BLACK,
    fontFamily: root.C_FONT_LIST.Bold,
    alignSelf: 'flex-end',
  },

  order: {
    fontSize: 14, 
    color: root.C_WHITE,
    fontFamily: root.C_FONT_LIST.Light,
    alignSelf: 'center',
  }
});
