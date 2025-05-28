import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import { root, TextCustom, Container } from '../../../ui/components';

import SearchBar from '../../genericScreen/searchbar';

export default function Searchscreen() {

    return (
        <Container style={styles.container}>
            <Container style={{padding: 10, backgroundColor: root.C_BACKGROUND_COLOR, borderRadius: 20}}>
            <Text style={styles.title}>Filtros</Text> 
            <Text style={styles.subtitle}>Gêneros</Text>

            <Text style={styles.subtitle}>Coleção</Text>

            <Text style={styles.subtitle}>Tipo de Publicação</Text>
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

    genTitle: {

    },

    optionText: {

    },

    container: {
        padding: 20,
        backgroundColor: NaN,
    },
})
 