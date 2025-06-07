import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import ResultCard from './ResultCard';
import { Container, Line, root } from '../../../ui/components';
import HeaderDefault from '../../genericScreen/genericHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';
import { RedirectBar } from '../../genericScreen/RedirectBar';
import Result from './Result';

export default function ResultScreen({ route, navigation }) {

    const {searchText, data} = route.params;

return(
    <SafeAreaView style={{flex: 1, backgroundColor: root.C_WHITE}}>
    <HeaderDefault navigation={navigation}/>
    <Container style={styles.container}>
        <RedirectBar/>
            <Text style={styles.searchReference}>
                Resultados da Pesquisa: {searchText}
            </Text>
        <Result data={data}/>
    </Container>
    </SafeAreaView>
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