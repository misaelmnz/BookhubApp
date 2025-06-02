import { useEffect, useState} from 'react';
import { ScrollView, Alert, StyleSheet, Text } from 'react-native';
import ItemCard from './ItemCard';
import { Container, Line } from '../../ui/Components';
import { root, TextCustom } from '../../ui/Components';
import { fetchFeedItem } from './storeController/StoreController'

export default function Feed({ navigation }) {
    const [PUBS, SET_PUBS] = useState([]);
    useEffect(() => {
        async function loadFeed() {
            try {
                const response = await fetchFeedItem();
                SET_PUBS(response);
            } 
            catch (err) {  
                console.error("Erro ao buscar publicações:", err);
            }
        }
        loadFeed();
    }, []);

    return (
        <Container style={{marginTop: 20, backgroundColor: root.C_WHITE, padding: 20, borderRadius: 10}}>
        <Text style={styles.title}>Itens Disponíveis</Text>
        <ScrollView horizontal={true} bounces={false} showsHorizontalScrollIndicator={false}>
            {PUBS && PUBS.map((PUB) => (
                <ItemCard
                    key={PUB.pub_id}
                    id={PUB.pub_id}
                    titulo={PUB.pub_titulo}
                    tipo={PUB.item_tipo}
                    tipoVenda={PUB.pub_tipo}
                    valor={PUB.pub_valor}
                    imagem={PUB.imagem}
                    >
                </ItemCard>
            ))}
        </ScrollView>
        <Line></Line>
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