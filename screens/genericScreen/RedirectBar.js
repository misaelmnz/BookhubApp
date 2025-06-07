import React from 'react';
import { View, TextInput, StyleSheet, Image, Pressable, Text } from 'react-native';
import { root } from '../../ui/Components';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export const Lupa = () => {
    return (
        <Entypo name='magnifying-glass' size={30} color="black"/>
    )
}

export function RedirectBar({ style, placeholder }) {
    const navigation = useNavigation();
    return (
        <Pressable style={[styles.container, style]} onPress={() => {navigation.navigate('Pesquisa')}}>
            <Text style={styles.input}>Buscar</Text>
            <Lupa/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: root.C_WHITE,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        borderColor: root.C_SUB_COLOR,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        paddingVertical: 8,
        color: root.C_BLACK,
        opacity: 0.5,
        fontSize: 18,
        fontFamily: 'Inter-ThinItalic',
        textAlign: 'flex-start',
    },
});
