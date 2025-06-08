import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { root, Container } from '../../../ui/components';
import OptionsList from './OptionsWrapper';
import { CheckboxContainer } from './OptionsButton';
import SearchHeader from './SearchHeader';
import { fetchSearchResults } from '../storeController/StoreController';
import { useNavigation } from '@react-navigation/native';

export default function Screen({ navigation }) {

    const [searchText, setSearchText] = React.useState("");

    const [results, setResults] = React.useState([]);
    
    const [selectedGenres, setSelectedGenres] = React.useState([]);

    const [selectedCollection, setSelectedCollection] = React.useState("Todos");

    const [selectedPublicationType, setSelectedPublicationType] = React.useState("Todos")

    const toggleGenre = (genreId) => {
        setSelectedGenres(prev =>
            prev.includes(genreId)
                ? prev.filter(id => id !== genreId)
                : [...prev, genreId]
        );
    };

    const selectCollection = (name) => setSelectedCollection(name);

    const selectPublicationType = (name) => setSelectedPublicationType(name);

    const handleSearchTextChange = (text) => setSearchText(text);

    const handleSearchTextSubmit = async () => {
        const filters = {
            titulo: searchText,
            generos: selectedGenres,
            itemTipo: selectedCollection,
            tipo: selectedPublicationType 
        };
    console.log('pesquisa:', JSON.stringify(filters, null, 2)); 

    try {
        const response = await fetchSearchResults(filters);
        setResults(response);
        navigation.navigate('Resultado', {
            searchText: searchText,
            data: response
        });
        
    } catch (err) {
        console.error("Erro ao buscar resultados:", err);
        Alert.alert("Erro", "Não foi possível realizar a pesquisa. Tente novamente mais tarde.");
    }
};


return (
    <Container style={styles.container}>
            <SearchHeader
            Search={handleSearchTextSubmit}
            SearchText={handleSearchTextChange}
            searchQuery={searchText}
            />
            {
             
            }
            <Container style={{padding: 10, backgroundColor: '#fffcf5', borderRadius: 20}}>
            <Text style={styles.title}>Filtros</Text> 
                <Text style={styles.subtitle}>Gêneros</Text>
                    <OptionsList selectedGenres={selectedGenres} toggleGenre={toggleGenre}></OptionsList>
                <Text style={styles.subtitle}>Coleção</Text>
                    <Container style={styles.containerColecao}>
                        {['Coleção', 'Unidade', 'Todos'].map(name => (
                            <CheckboxContainer
                                key={name}
                                name={name}
                                selected={selectedCollection === name}
                                onSelect={() => selectCollection(name)}
                                single
                            />
                        ))}
                    </Container>
                <Text style={styles.subtitle}>Tipo de Publicação</Text>
                    <Container style={styles.containerColecao}>
                        {['Venda', 'Doação', 'Troca', 'Todos'].map(name => (
                            <CheckboxContainer
                                key={name}
                                name={name}
                                selected={selectedPublicationType === name}
                                onSelect={() => selectPublicationType(name)}
                                single
                            />
                        ))}
                    </Container>
            </Container>
    </Container>
    );
}



const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 10,
        color: root.C_BLACK,
        fontFamily: root.C_FONT_LIST.Light,
    },

    subtitle: {
        fontSize: 14,
        marginBottom: 5,
        color: root.C_BLACK,
        fontFamily: root.C_FONT_LIST.Light,
    },

    container: {
        padding: 20,
        backgroundColor: root.C_WHITE,
    },

    containerColecao: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingInline: 10,
        marginBottom: 10,
        height: 40,
        width: '100%',
    }
})
 