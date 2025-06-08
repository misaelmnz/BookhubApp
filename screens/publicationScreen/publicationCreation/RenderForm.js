// WIP

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { root } from "../../../ui/components";
import FormScreen, { ScreenZero, ScreenOne, ScreenThree, ScreenTwo } from "./FormScreen";

export default function RenderForm({navigation}) {
    const [selectedGenres, setSelectedGenres] = React.useState([]);
    const navigate = useNavigation();
    const [step, setStep] = useState(0);
    const totalStep = 3; // DEPOIS VAI SER CONTADO
    const [form, setForm] = useState({
    item_isbnCode: "",
    item_titulo: "",
    item_autor: "", 
    item_editora: "",
    item_datadepublicacao: "",
    item_status: "",
    item_tipo: "", 
    item_id: "",
    imagem_caminho: "",
    pub_tipo: "",
    pub_titulo: "",
    pub_valor: "",
    pub_pagamento: "",
    pub_descricao: "",
    pub_id: "",
    genero_id: "",
    });

    const goFoward = () => {
        if (step === 3) {
            return navigate.navigate('Publicação')
        }
        return setStep(step + 1);
    }

    const goBack = () => {
        if (step === 0) {
            return navigate.navigate('Publicação');
        }
        return setStep(step - 1);
    }

    /* Lógica do Render
        Que tipo de item deseja publicar?
        1. Coleção ou Livro?
        2. Escreva o nome da coleção ou livro?
        3. Escreva o nome do autor
        4. Escreva o código isbn
        5. Escreva o nome da editora
        6. Quando foi publicado?
        7. Qual o estado de conservação?

    */
    function renderStep() {
        switch (step) {
            case 0: // -- Set item_tipo (Coleção ou Livro?)
                return (<ScreenZero goFoward={goFoward} goBack={goBack}></ScreenZero>)
            case 1:    
                return (<ScreenOne goFoward={goFoward} goBack={goBack}></ScreenOne>
                )
            case 2: 
                return (<ScreenTwo goFoward={goFoward} goBack={goBack}></ScreenTwo>                    
                )
            case 3:
                return (<ScreenThree goFoward={goFoward} goBack={goBack}></ScreenThree>
                )
            case 4:
                return (<ScreenFour goFoward={goFoward} goBack={goBack}></ScreenFour>
                )
            case 5:
                return (<ScreenFive goFoward={goFoward} goBack={goBack}></ScreenFive>
                )
    }}
    
    return (
        <View style={{flex: 1}}>
            {renderStep()}
        </View>
    )
}