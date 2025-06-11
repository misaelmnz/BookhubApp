import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { root } from "../../../ui/components";


export default function CreateScreen(){
    const navigation = useNavigation();

    return(
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: root.C_MAIN_COLOR}}>
            <View style={styles.imageViewContainer}>
                <Image source={require('../../../assets/illustration1.png')} style={styles.imageContainer}/>
            </View>
            <View style={styles.startContainer}>
                <Text style={styles.startText}>Crie publicações rápido e fácil, siga as instruções e compartilhe suas melhores leituras!</Text>
                <Iniciar onPress={() => navigation.navigate('RenderForm') }/>
            </View>
        </View>
    );
};

const Iniciar = ({ onPress }) => {
    return(
        <Pressable onPress={onPress}>
            <View style={styles.startButton}>
                <Text style={styles.startTitle}>Começar</Text>
            </View>
        </Pressable>
    );
}

const ImageSpace = ({}) => {
    return(
        <View>

        </View>
    )
}
const styles = StyleSheet.create({

    imageContainer: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: '80%',
        height: '100%'
    },

    imageViewContainer: {
        width: '100%',
        height: '50%',
        alignContent: 'center',
        backgroundColor: root.C_WHITE,
        borderBottomRightRadius: '120%'
    },

    startContainer: {
        width: '100%',
        height: '50%',
        backgroundColor: root.C_MAIN_COLOR,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 40,
    },

    startButton: {
        backgroundColor: root.C_SUB_COLOR,
        borderRadius: 20,
        padding: 20,
        maxWidth: '50%',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 5,
    },  

    startText: {
        fontFamily: root.C_FONT_LIST.Regular,
        color: root.C_WHITE,
        fontSize: 20,
        marginBottom: 40,
    },

    startTitle: {
        fontFamily: root.C_FONT_LIST.Bold,
        color: root.C_WHITE,
        fontSize: 28,
    }
})
