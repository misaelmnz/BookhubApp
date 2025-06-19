import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import ItemCard from './ItemCard';
import { Container, Line, root } from '../../ui/components';
import { fetchFeedItem } from './storeController/StoreController'

export default function Feed({ navigation, tipo }) {
    const [PUBS, SET_PUBS] = useState([]);

    useEffect(() => {
        async function loadFeed() {
            try {
                const response = await fetchFeedItem(tipo);
                SET_PUBS(response);
            } 
            catch (err) {  
                console.error("Erro ao buscar publicações:", err);
            }
        }
        loadFeed();
    }, [tipo]);

    return (
        <Container style={{ marginTop: 20, backgroundColor: root.C_WHITE, padding: 20, borderRadius: 10 }}>
            <Text style={styles.title}>
                {tipo === 0 ? "Doações" : tipo === 1 ? "À Venda" : tipo === 2 ? "Trocas" : "Itens Disponíveis"}
            </Text>
            <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
                {PUBS.map((PUB) => (
                    <ItemCard
                        key={PUB.pub_id}
                        id={PUB.pub_id}
                        titulo={PUB.pub_titulo}
                        tipo={PUB.item_tipo}
                        tipoVenda={PUB.pub_tipo}
                        valor={PUB.pub_valor}
                        imagem={PUB.imagem}
                    />
                ))}
            </ScrollView>
            <Line />
        </Container>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontFamily: root.C_FONT_LIST.Medium,
    }
})