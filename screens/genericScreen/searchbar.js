import React from 'react';

import { View, TextInput, StyleSheet, Alert } from 'react-native';

import { root } from '../../ui/Components';

export default function SearchBar({ placeholder, onChangeText, style, editable, redirect}) {

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={root.C_GRAY}
                onChangeText={onChangeText}
                editable={editable}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 60,
        backgroundColor: root.C_WHITE,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        borderColor: root.C_SUB_COLOR,
        borderWidth: 1,
    },
    input: {
        height: '100%',
        color: root.C_BLACK,
        opacity: 0.5,
        fontSize: 18,
        fontFamily: 'Inter-ThinItalic',
        textAlign: 'flex-start',
    },
});
