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
    item_isbnCode: "", //
    item_titulo: "", //
    item_autor: "", //
    item_editora: "", //
    item_datadepublicacao: null, //
    item_status: "", //
    item_tipo: "", //
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

    const reset = () => {
        const field = {};
        Object.keys(form).forEach(key => {
            field[key] = null;
        });
        setForm(field);
        return navigate.navigate('Publicação')
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
                return (<ScreenZero goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm} ></ScreenZero>)
            case 1: // -- Set item (Todas as informações sobre item) 
                return (<ScreenOne goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm}></ScreenOne>)
            case 2: // -- Mostrar as informações escritas até agora sobre o livro
                return (<ScreenTwo goFoward={goFoward} 
                    goBack={goBack}
                    form={form} 
                    setForm={setForm}
                    reset={reset}></ScreenTwo>)
            case 3: // -- Set pub (Principais informações de pub)
                return (<ScreenThree goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm}></ScreenThree>)
            case 4:
                return (<ScreenFour goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm}></ScreenFour>)
            case 5:
                return (<ScreenFive goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm}></ScreenFive>)
    }}
    
    return (
        <View style={{flex: 1}}>
            {renderStep()}
        </View>
    )
}