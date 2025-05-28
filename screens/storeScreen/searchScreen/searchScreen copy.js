import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import { root, TextCustom } from '../../../ui/components';

import SearchBar from '../../genericScreen/searchbar';

export default function Searchscreen({ onChangeText, style, navigation }) {

    return (
        <View>
            <TextCustom style={{ fontSize: 24, marginBottom: 10, color: root.C_BLACK, fontFamily: root.C_FONT_LIST.Light }}>Encontre seu Livro</TextCustom>
            <SearchBar
                placeholder="Buscar"
                onChangeText={onChangeText}
            />
        </View>
    );
}
 