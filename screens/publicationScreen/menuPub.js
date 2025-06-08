import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity, Pressable, Alert } from "react-native";
import { root } from "../../ui/components";
import { MenuOption } from "../genericScreen/menu";
import { Entypo } from '@expo/vector-icons';
import { deletePub, verifyPub } from "./publicationController/PublicationController";

export const PubButton = ({ onPress, name, navigateTo, color=root.C_WHITE, style = styles.button}) => {
    return (
        <Pressable onPress={() => {onPress(navigateTo)}}>
            <View style={[style, {marginHorizontal: 5}]}>
                <Entypo name={name} size={20} color={color}/>
            </View>
        </Pressable>
    )
}

const excluirAlert = (setVisible, pub_id, item_id) => {

    const handleVerify = async () => {
        try {
            const response = await verifyPub(pub_id);
            const exist = response.success;
            console.log('response: ', exist);
                if (exist !== undefined) {
                    return true;
                } else {
                    return false;
                }
        } catch(err) {
            console.error(err);
            return false;
        }
    }

    const handleDelete = async () => {
    try {                   
        if (item_id && item_id !== null && item_id !== undefined) {
            setVisible(false);
            await deletePub(item_id);
            if (await handleVerify()) {
                console.log(item_id)
                return Alert.alert('Erro', 'Essa publicação não foi excluída.');
            }
                return Alert.alert('Sucesso', 'Publicação excluída com sucesso.');
            } else {
                return Alert.alert('Erro', 'ID inválido. Não foi possível excluir a publicação.');
            }
        } catch (err) {
            Alert.alert('Erro', 'Não foi possível excluir a publicação. Tente novamente mais tarde.');
            console.log(err);
        }
    }

    Alert.alert('Excluir', 'Tem certeza que deseja excluir essa publicação?', [
        { 
            text: 'Cancelar',
        },
        {
            text: 'Sim',
            onPress: handleDelete
        }
    ]);
};

export default function PubMenu({item_id, pub_id}) {

    const [visible, setVisible] = useState(false);

    return (
    <View>
        <PubButton onPress={() => {setVisible(!visible)}} name="dots-three-vertical" color={root.C_BLACK} style={styles.threeDots}/>
            
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
            }}
            >
            <TouchableOpacity onPress={()=> setVisible(false)} style={styles.modalMenu} activeOpacity={1}>
                    <View style={styles.menuContainer}>
                        <View style={styles.menuBox}>
                            <MenuOption onPress={() => {}} Texto="Editar" name="edit" />
                            <MenuOption onPress={() => {
                            excluirAlert(setVisible, pub_id, item_id);
                            }} Texto="Excluir" name="trash" />
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