import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, Image, Modal, StyleSheet, Animated, TouchableOpacity, ScrollView, Linking } from 'react-native';
import axios from 'axios';
import FooterDefault from "../../genericScreen/genericHeader";
import { root } from '../../../ui/components';

export default function DetailScreen({ route, navigation }) {
  const { pubId } = route.params;
  const [detalhes, setDetalhes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    axios.get(`http://192.168.28.166:3000/detalhesPUB/${pubId}`)
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

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (!detalhes) {
    return <Text>Publicação não encontrada.</Text>;
  }

  const {
    item_titulo, item_status, item_autor, item_editora,
    item_datadepublicacao, item_isbnCode, user_nome,
    user_sobrenome, user_celular, pub_descricao, imagem,
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: root.C_WHITE }}>
      <FooterDefault />

      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <Text style={styles.header}>{pub_titulo}</Text>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={{ uri: imagem }} style={styles.image} />
        </TouchableOpacity>

        {/* MODAL DE IMAGEM TRANSPARENTE */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseText}>Fechar</Text>
            </TouchableOpacity>
            <Image source={{ uri: imagem }} style={styles.fullImage} />
          </View>
        </Modal>

        {/* NOME E SOBRENOME ALINHADOS À DIREITA */}
        <Text style={styles.anunciante}>{user_nome} {user_sobrenome}</Text>

        <View style={styles.badgesContainer}>
          <Text style={styles.badge}>{tipoItemTexto}</Text>
          <Text style={styles.saleType}>{tipoVendaTexto}</Text>
        </View>

        <View style={styles.details}>
          {pub_tipo === 1 && (
            <Text style={styles.price}>R$ {Number(pub_valor).toFixed(2)}</Text>
          )}
          <Text style={styles.title}>{item_titulo}</Text>

          {/* CAIXA DE DESCRIÇÃO */}
          <Text style={styles.sectionTitle}>Descrição</Text>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{pub_descricao}</Text>
          </View>

          {/* SEÇÃO DE DETALHES */}
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
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 10,
    color: root.C_BLACK
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
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
    zIndex: 1
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 18
  },
  fullImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain'
  },
  anunciante: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: root.C_BLACK,
    marginBottom: 10
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
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  detailText: {
    fontSize: 14,
    marginVertical: 2,
    color: root.C_BLACK
  },
  title: {
    fontSize: 20,
    marginVertical: 2,
    color: root.C_BLACK
  },
  price: {
    fontSize: 35,
    marginVertical: 2,
    color: root.C_BLACK
  },
  button: {
    backgroundColor: '#FFA64D',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: root.C_WHITE,
    fontSize: 16,
    fontWeight: 'bold'
  }
});