import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { root, TextCustom, Container } from '../../../ui/components';
import OptionButton from './OptionsButton';
import { useState, useEffect } from 'react';

export default function OptionsList({selectedGenres, toggleGenre}) {
    const [OPTIONS, SET_OPTIONS] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('http://192.168.0.2:3000/receberGeneros');
                    const data = await response.json();
                    SET_OPTIONS(data.data);
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