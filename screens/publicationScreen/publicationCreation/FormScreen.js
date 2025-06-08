import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { root } from "../../../ui/components";
import { GoBack, GoFoward, InputBlock, InputButton, InputText, TitleText } from "./CreateFormTemplate";
import OptionsList from "../../storeScreen/searchScreen/OptionsWrapper";

export default function FormScreen({onPress, goFoward, goBack}) {
    
}


export function ScreenZero({onPress, goFoward, goBack}) {

    const [itemTipo, setItemTipo] = React.useState(null);

    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <InputBlock/>
                <InputBlock/>
            </View>
            <View style={styles.stepContainer}>
                <GoBack onPress={goBack}/>   
                <GoFoward onPress={goFoward}/>
            </View>
        </View>
    )
}

export function ScreenOne({onPress, goFoward, goBack}) {
    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <View>
                    <TitleText Description={'Descreva seu item'}/>
                </View>
                <View style={styles.spaceSort}>
                    <InputText Description={'Nome da Coleção/Livro'}/>
                    <InputText Description={'Nome do Autor'}/>
                    {
                        <InputText Description={''}/>
                    }
                    <InputText Description={'Nome da Editora'}/>
                </View>
            </View>
            <View style={styles.stepContainer}>
                <GoBack onPress={goBack}/>   
                <GoFoward onPress={goFoward}/>
            </View>
        </View>
    )
}

export function ScreenTwo({onPress, goFoward, goBack}) {
    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <InputText Description={'b'}/>
            </View>
            <View style={styles.stepContainer}>
                <GoBack onPress={goBack}/>   
                <GoFoward onPress={goFoward}/>
            </View>
        </View>
    )
}

export function ScreenThree({onPress, goFoward, goBack}) {
    const [selectedGenres, setSelectedGenres] = useState([]);

    function toggleGenre(id) {
    setSelectedGenres(prev =>
        prev.includes(id)
            ? prev.filter(g => g !== id)
            : [...prev, id]
        );
    }


    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <View>
                    <TitleText Description={'Escolha um gênero'}/>
                </View>
                <View style={{alignSelf: 'center'}}>
                <OptionsList selectedGenres={selectedGenres} toggleGenre={toggleGenre} />
                </View>
            </View>
            <View style={styles.stepContainer}>
                <GoBack onPress={goBack}/>   
                <GoFoward onPress={goFoward}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: root.C_WHITE,
        flex: 1,
        padding: 40,
    },
    container: {
        backgroundColor: root.C_WHITE,
        height: '80%'
    },
    stepContainer: {
        flexDirection: 'row',
        backgroundColor: root.C_WHITE,
        height: '20%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    spaceSort: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '60%'
    }

})
