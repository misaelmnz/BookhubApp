import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { root, Container } from '../../../ui/Components';
import OptionsList from './options';
import { CheckboxContainer } from './OptionsButton';

export default function Screen() {
    const [selectedGenres, setSelectedGenres] = React.useState([]);
    const [selectedCollection, setSelectedCollection] = React.useState('');
    const [selectedPublicationType, setSelectedPublicationType] = React.useState('');

    const toggleGenre = (genreId) => {
        setSelectedGenres(prev =>
            prev.includes(genreId)
                ? prev.filter(id => id !== genreId)
                : [...prev, genreId]
        );
    };

    const selectCollection = (name) => setSelectedCollection(name);
    const selectPublicationType = (name) => setSelectedPublicationType(name);

    const handleSearch = async () => {
    const filters = {
        genres: selectedGenres,
        collection: selectedCollection,
        publication: selectedPublicationType,
    };
    console.log('JSON enviado:', JSON.stringify(filters, null, 2)); // 

    try {
        const response = await fetch('http://localhost:3000/pesquisa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(filters),
        });
        const data = await response.json();
        
    } catch (err) {
        console.error('Erro ao pesquisar:', err);
    }
};

    return (
        <Container style={styles.container}>
            
            <Container style={{padding: 10, backgroundColor: root.C_BACKGROUND_COLOR, borderRadius: 20}}>
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
            <Button onPress={handleSearch} title='Testar'></Button>
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

    genTitle: {

    },

    optionText: {

    },

    container: {
        padding: 20,
        backgroundColor: NaN,
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
 