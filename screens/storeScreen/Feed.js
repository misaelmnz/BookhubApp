import { useEffect, useState} from 'react';
import { ScrollView, Alert, StyleSheet, Text } from 'react-native';
import ItemCard from './ItemCard';
import { Container, Line } from '../../ui/components';
import { root } from '../../ui/components';
export default function Feed() {
    const [PUBS, SET_PUBS] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.0.2:3000/receberPUBS');
                const data = await response.json();
                SET_PUBS(data.data);
            } catch (err) {
                console.error("Erro ao buscar items:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <Container style={{marginTop: 20, backgroundColor: root.C_WHITE, padding: 20, borderRadius: 10}}>
        <Text style={styles.title}>Itens Disponíveis</Text>
        <ScrollView horizontal={true} bounces={false} showsHorizontalScrollIndicator={false}>
            {PUBS && PUBS.map((PUB) => (
                <ItemCard
                    key={PUB.pub_id}
                    titulo={PUB.pub_titulo}
                    tipo={PUB.item_tipo}
                    tipoVenda={PUB.pub_tipo}
                    imagem={PUB.imagem}
                    onPress={() => Alert.alert("Item selecionado")}
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
