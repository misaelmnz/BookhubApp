import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { root } from "../../../ui/components";

export function InputBlock({Description, onPress}) {
    return (
        <Pressable onPressOut={onPress}>
            <View style={[styles.border, styles.inputBlockContainer, styles.shadow]}>
                <Text style={[styles.textStyle]}>{Description}</Text>
            </View>
        </Pressable>
    )
}

export function InputButton({Description, onPress}) {
    return (
        <Pressable onPressOut={onPress}>
            <View style={[styles.border, styles.buttonContainer, styles.shadow]}>
                <Text style={[styles.textStyleWhite]}>{Description}</Text>
            </View>
        </Pressable>
    )
}

export function InputText({Description, Validate, Value, onChange}) {
    return (
        <View style={[styles.border, styles.inputTextContainer]}>
            <TextInput
            placeholder={Description}
            placeholderTextColor={'grey'}
            value={Validate}
            onChange={onChange}
            maxLength={25}
            style={styles.textStyleGrey}
            />
        </View>
    )
}

export function TitleText({Description}) {
    return (
            <Text style={styles.TitleText}>{Description}</Text>
    )
}

export function SetDate() {
    return (
        <View style={[styles.border]}>
            
        </View>
    )
}

export function GoFoward({onPress}) {
    return (
        <Pressable onPressOut={onPress} style={({ pressed }) => ({opacity: pressed ? 0.5 : 1,})}>
            <View style={[styles.border, styles.stepButton]}>
                <Text style={[styles.textStyle, styles.textStyleWhite]}>Avançar</Text>
            </View>
    </Pressable>
    )
}

export function GoBack({onPress}) {
    return (
        <Pressable onPressOut={onPress} style={({ pressed }) => ({opacity: pressed ? 0.5 : 1,})}>
            <View style={[styles.border, styles.stepButton]}>
                <Text style={[styles.textStyle, styles.textStyleWhite]}>Voltar</Text>
            </View>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: root.C_FONT_LIST.Medium,
    },
    textStyleWhite: {
        fontFamily: root.C_FONT_LIST.Bold,
        color: root.C_WHITE
    },
    textStyleGrey: {
        fontFamily: root.C_FONT_LIST.Italic,
        color: root.C_BLACK,
        fontSize: 15,
    },  

    border: {
        borderRadius: 10,
    },

    inputBlockContainer: {
        width: 200,
        height: 100,
        backgroundColor: root.C_WHITE,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    stepButton: {
        padding: 10,
        backgroundColor: root.C_SUB_COLOR,
        minWidth: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },  

    buttonContainer: {
        padding: 10,
        backgroundColor: root.C_PURPLE,
        minWidth: 80,
        maxWidth: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    shadow: {
        elevation: 5,
    },

    inputTextContainer: {
        width: '100%',
        height: 50,
        backgroundColor: root.C_WHITE,
        borderWidth: 3,
        borderColor: root.C_GREY,
        elevation: 5,
        paddingLeft: 10,
        justifyContent: 'center'
    },

    TitleText: {
        alignSelf: 'center',
        fontFamily: root.C_FONT_LIST.Bold,
        fontSize: 30,
        color: root.C_BLACK,
        marginBottom: 10,
    }
})
