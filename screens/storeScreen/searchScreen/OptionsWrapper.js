import { View, StyleSheet } from 'react-native';
import OptionButton from './OptionsButton';
import { useState, useEffect } from 'react';
import { receberGeneros } from './searchController/SearchController';

export default function OptionsList({selectedGenres, toggleGenre}) {
    const [OPTIONS, SET_OPTIONS] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    SET_OPTIONS(receberGeneros)
                } catch (err) {
                    console.error("Erro ao buscar items:", err);
                }
            };
            fetchData();
        }, []);


    return (
        <View style={styles.containerGrid}>
            { OPTIONS && OPTIONS.map((option) => (
                <OptionButton
                    key={option.genero_id}
                    genreName={option.genero_nome}
                    genreId={option.genero_id}
                    selected={selectedGenres.includes(option.genero_id)}
                    onPress={() => toggleGenre(option.genero_id)}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    containerGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    }
})