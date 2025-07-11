import { View, StyleSheet, Text } from 'react-native';
import { Container, root } from '../../../ui/components';
import HeaderDefault from '../../genericScreen/Header';
import RedirectBar from '../../genericScreen/RedirectBar';
import Result from './Result';

export default function ResultScreen({ route, navigation }) {

    const {searchText, data} = route.params;

return(
    <View style={{flex: 1, backgroundColor: root.C_WHITE, paddingBottom: 150}}>
    <HeaderDefault navigation={navigation}/>
    <Container style={styles.container}>
        <RedirectBar/>
            <Text style={styles.searchReference}>
                Resultados da Pesquisa: {searchText}
            </Text>
        <Result data={data}/>
    </Container>
    </View>
)
}

const styles = StyleSheet.create({
    searchReference: {
        fontSize: 16,
        fontFamily: root.C_FONT_LIST.ThinItalic,
        color: root.C_BLACK,
        marginVertical: 10,
        alignSelf: 'center',
    },
        container: {
        width: '100%',
        backgroundColor: root.C_WHITE,
        padding: 20,
        position: 'relative',
    },
})