import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ResultCard from './ResultCard';
import { Container, Line, root } from '../../../ui/Components';
import HeaderDefault from '../../genericScreen/genericHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResultScreen({ route, navigation }) {

    const {searchText, data} = route.params;

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: root.C_WHITE }}>
    <HeaderDefault navigation={navigation}/>
    <Container style={styles.container}>
        <Text style={styles.searchReference}>
            Resultados da Pesquisa: {searchText}
        </Text>

        {
            !data || data.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: root.C_BLACK, fontFamily: root.C_FONT_LIST.Regular, marginBottom: 20 }}>
                    Nenhum resultado encontrado.
                </Text>
                <Button title='Voltar' onPress={() => navigation.goBack()} color={root.C_MAIN_COLOR}>
                </Button>
                </View>
            ) : null
        }

        {
            data && data.map((item) => (
                <ResultCard
                key={item.pub_id}
                id={item.pub_id}
                tipoPublicacao={item.pub_tipo}
                titulo={item.pub_titulo}
                nome={item.user_nome}
                imagem={item.imagem}
                preco={item.pub_valor}
                //onPress={() => navigation.navigate('ItemDetails', { itemId: item.id })}
                />
            ))
        }
    </Container>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: root.C_WHITE,
        alignItems: 'center',
        padding: 20,
    },

    searchReference: {
        fontSize: 16,
        fontFamily: root.C_FONT_LIST.ThinItalic,
        color: root.C_BLACK,
        marginVertical: 10,
        alignSelf: 'center',
    }

})