import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import { root, TextCustom, Container } from '../../../ui/components';


export default function OptionButton ({genreName, genreId, selected, onPress}) {
    return (
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
                <View style={[styles.container, selected && { backgroundColor: '#7062B1' }]}>
                <Text style={styles.text}>{String(genreName)}</Text>
            </View>
        </TouchableOpacity>
    );
}

const Toggled = () => {
  return (
    <Image source={require('../../../assets/checkbox_selected.png')} style={ styles.toggle_icon }/>
  );
}

const UnToggled = () => {
  return (
    <Image source={require('../../../assets/checkbox_unselected.png')} style={ styles.toggle_icon }/>
  );
}

export function CheckboxContainer({ name, selected, onSelect, single }) {
    return (
        <TouchableOpacity style={styles.containerCheckbox} onPress={onSelect}>
            {selected ? <Toggled /> : <UnToggled />}
            <Text style={styles.textCheckbox}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchable: {
        width: '48%',
        marginBottom: 10,
    },
    container: {
        height: 40,
        marginBottom: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: root.C_PURPLE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 11,
        color: root.C_WHITE,
        fontFamily: root.C_FONT_LIST.Medium,
    },
    containerCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
        width: 80,
    },
    textCheckbox: {
        fontSize: 12,
        color: root.C_BLACK,
        fontFamily: root.C_FONT_LIST.Light,
        marginLeft: 5,
    },
    toggle_icon: {
    width: 15,
    height: 15,
  },
});