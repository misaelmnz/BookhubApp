import React from 'react';

import { View, StyleSheet } from 'react-native';

import { root } from '../../../ui/components';

import SearchBar from '../../genericScreen/searchbar';

export default function Searchscreen({ onChangeText, style }) {

    return (
        <View style={[styles.container, style]}>
            <SearchBar
                placeholder="Buscar"
                onChangeText={onChangeText}
            />
        </View>
    );
}
 