import React, { useEffect, useState } from 'react';
import {
  View, SafeAreaView, Text, Image, Modal, StyleSheet,
  TouchableOpacity, ScrollView, Linking, FlatList, Dimensions
} from 'react-native';
import axios from 'axios';
import avatar from '../../../assets/avatar.png';
import HeaderDefault from "../../genericScreen/genericHeader";
import { root } from '../../../ui/components';
import { Entypo } from '@expo/vector-icons'

export default function DetailScreen({ route, navigation }) {
  const { pubId } = route.params;
  const [detalhes, setDetalhes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalActiveIndex, setModalActiveIndex] = useState(0);

  useEffect(() => {
    axios.get(`http://192.168.15.13:3000/detalhesPUB/${pubId}`)
      .then(response => {
        setDetalhes(response.data.data);
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes da publicação:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pubId]);

  const screenWidth = Dimensions.get('window').width;

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (screenWidth * 0.8));
    setActiveIndex(index);
  };

  useEffect(() => {
    if (modalVisible) {
      setModalActiveIndex(selectedImageIndex);
    }
  }, [modalVisible, selectedImageIndex]);

  const handleModalScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setModalActiveIndex(index);
  };

  if (loading) return <Text>Carregando...</Text>;
  if (!detalhes) return <Text>Publicação não encontrada.</Text>;

  const {
    item_titulo, item_status, item_autor, item_editora,
    item_datadepublicacao, item_isbnCode, user_nome,
    user_sobrenome, user_celular, pub_descricao, imagens,
    item_tipo, pub_tipo, pub_valor, pub_titulo
  } = detalhes;

  const defineTipo = (tipo) => {
    switch (tipo) {
      case 0: return 'Livro';
      case 1: return 'Revista';
      case 2: return 'Quadrinho';
      case 3: return 'Coleção';
      default: return 'Desconhecido';
    }
  };

  const defineTipoVenda = (tipoVenda) => {
    switch (tipoVenda) {
      case 0: return 'Doação';
      case 1: return 'À Venda';
      case 2: return 'Troca';
      default: return 'Desconhecido';
    }
  };

  const tipoItemTexto = defineTipo(item_tipo);
  const tipoVendaTexto = defineTipoVenda(pub_tipo);

  const handleWhatsApp = () => {
    const mensagem = `Olá ${user_nome}, tenho interesse na sua publicação do Bookhub!`;
    const url = `https://wa.me/55${user_celular}?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: root.C_WHITE }}>
      <HeaderDefault />

      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <Text style={styles.header}>{pub_titulo}</Text>

        <FlatList
          data={imagens}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 10 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => openModal(index)}>
              <Image source={{ uri: item }} style={[styles.image, { width: screenWidth * 0.8 }]} />
            </TouchableOpacity>
          )}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          pagingEnabled
        />

        <View style={styles.pagination}>
          {imagens.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === activeIndex ? root.C_MAIN_COLOR : '#ccc' }
              ]}
            />
          ))}
        </View>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setModalVisible(false)}>
              <Entypo name="cross" size={25} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.modalIndicator}>
              {modalActiveIndex + 1} / {imagens.length}
            </Text>

            <FlatList
              data={imagens}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              initialScrollIndex={selectedImageIndex}
              getItemLayout={(data, index) => ({
                length: screenWidth,
                offset: screenWidth * index,
                index
              })}
              renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.fullImage} />
              )}
              onScroll={handleModalScroll}
              scrollEventThrottle={16}
            />
          </View>
        </Modal>

        <View style={styles.anuncianteContainer}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.anunciante}>{user_nome} {user_sobrenome}</Text>
        </View>


        <View style={styles.badgesContainer}>
          <Text style={styles.badge}>{tipoItemTexto}</Text>
          <Text style={styles.saleType}>{tipoVendaTexto}</Text>
        </View>

        <View style={styles.details}>
          {pub_tipo === 1 && (
            <Text style={styles.price}>R$ {Number(pub_valor).toFixed(2).replace('.', ',')}</Text>
          )}
          <Text style={styles.title}>{item_titulo}</Text>

          <Text style={styles.sectionTitle}>Descrição</Text>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{pub_descricao}</Text>
          </View>

          <Text style={styles.sectionTitle}>Detalhes</Text>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>Autor(a): {item_autor}</Text>
            <Text style={styles.detailText}>Editora: {item_editora}</Text>
            <Text style={styles.detailText}>Data de Lançamento: {new Date(item_datadepublicacao).toLocaleDateString()}</Text>
            <Text style={styles.detailText}>ISBN: {item_isbnCode}</Text>
            <Text style={styles.detailText}>Condição: {item_status}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleWhatsApp}>
          <Text style={styles.buttonText}>Entrar em contato via WhatsApp</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: root.C_BLACK
  },
  image: {
    aspectRatio: 1,
    height: 364,
    resizeMode: 'cover',
    marginRight: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    marginHorizontal: 4
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalClose: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 3
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 18
  },
  modalIndicator: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  fullImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain'
  },
  anuncianteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-end'
  },
  avatar: {
    width: 15,
    height: 15,
    marginRight: 8
  },
  anunciante: {
    fontSize: 18,
    color: root.C_BLACK
  },

  badgesContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  badge: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10
  },
  saleType: {
    backgroundColor: '#FFA64D',
    color: root.C_WHITE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  details: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: root.C_BLACK
  },
  descriptionBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  descriptionText: {
    fontSize: 14,
    textAlign: 'justify',
    color: root.C_BLACK
  },
  detailBox: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10
  },
  detailText: {
    fontSize: 14,
    color: root.C_BLACK,
    marginBottom: 5
  },
  title: {
    fontSize: 20,
    marginVertical: 2,
    color: root.C_BLACK
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: root.C_BLACK,
    marginBottom: 10
  },
  button: {
    backgroundColor: root.C_MAIN_COLOR,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: root.C_WHITE,
    fontSize: 16,
    fontWeight: 'bold'
  }
});