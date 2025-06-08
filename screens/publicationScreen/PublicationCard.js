import { CardCustom, Shadow, root   } from "../../ui/components";
import React from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PubMenu from "./menuPub";

export default function PublicationCard(
    {imagem, title='Titulo', pub_id, item_id, onPress}
) {

    return (
        <Pressable onPress={onPress}>
            <Shadow style={styles.shadow}>  
                <CardCustom style={styles.card}>
                <View style={styles.container}>
                    <View>
                        <Image source={{ uri: imagem }} style={styles.imageContainer} />
                    </View>
                    <View 
                    style={[styles.container, 
                    {flex: 1,
                    justifyContent: 'space-between', 
                    alignSelf: 'flex-start', 
                    padding: 5}]}>
                        <Text style={[styles.title, {flex: 1, maxWidth: '80%'}]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        >{title}</Text>
                        <PubMenu pub_id={pub_id} item_id={item_id} />  
                    </View>
                </View>
                </CardCustom>
            </Shadow>
        </Pressable>
    );
}




const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadow: {
        width: '100%',
        padding: 10,
    },
    card: {
        minWidth: '100%',
        height: 150,
        backgroundColor: root.C_GREY,
        borderRadius: 10,
        padding: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        minWidth: '40%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 15,
        color: root.C_BLACK,
        marginLeft: 10,
        fontFamily: root.C_FONT_LIST.Regular,
    },
    threeDots: {
        
    }
})