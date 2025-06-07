import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import { root } from "../../ui/Components";
import { MenuOption } from "../genericScreen/menu";
import { Entypo } from '@expo/vector-icons';

export const PubButton = ({ onPress, name, navigateTo, color=root.C_WHITE, style = styles.button}) => {
    return (
        <Pressable onPress={() => {onPress(navigateTo)}}>
            <View style={[style, {marginHorizontal: 5}]}>
                <Entypo name={name} size={20} color={color}/>
            </View>
        </Pressable>
    )
}

export default function PubMenu() {
    const [visible, 
        setVisible] = useState(false);

    return (
    <View>
        <PubButton onPress={() => {setVisible(!visible)}} name="dots-three-vertical" color={root.C_BLACK} style={styles.threeDots}/>
            
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
            }}
            >
            <TouchableOpacity onPress={()=> setVisible(false)} style={styles.modalMenu} activeOpacity={1}>
                    <View style={styles.menuContainer}>
                        <View style={styles.menuBox}>
                            <MenuOption onPress={() => {}} Texto="Editar" name="edit" />
                            <MenuOption onPress={() => {}} Texto="Excluir" name="trash" />
                        </View>
                    </View>
            </TouchableOpacity>

        </Modal>
    </View>
    )
}

const styles = StyleSheet.create({
    threeDots: {
    },
       modalMenu: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    menuContainer: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width: '90%',
        borderRadius: 10,
        backgroundColor: root.C_WHITE,
        borderWidth: 0.1,
        elevation: 1,
    },

    menuBox: {
        padding: 10,
    },  

    menuItem: {
        borderRadius: 10,
        width: '100%',
        marginVertical: 5,
        paddingVertical: 12,
        paddingHorizontal: 10,
        fontFamily: root.C_FONT_LIST.Light,
        fontSize: 14,
        alignSelf: 'flex-start',
    }

});