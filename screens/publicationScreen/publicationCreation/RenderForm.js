// WIP

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { root } from "../../../ui/components";
import FormScreen, { 
    ScreenZero, 
    ScreenOne, 
    ScreenThree, 
    ScreenFour, 
    ScreenTwo, 
    ScreenFive, 
    ScreenSix,
    ScreenFinal } from "./FormScreen";
import { createPubs, upload } from "../publicationController/PublicationController";

export default function RenderForm({navigation}) {

    const navigate = useNavigation();
    const [step, setStep] = useState(0);
    const totalStep = 7; // DEPOIS VAI SER CONTADO
    const [form, setForm] = useState({
    item_isbnCode: "",//
    item_titulo: "",  //
    item_autor: "",   //
    item_editora: "", //
    item_datadepublicacao: null, //
    item_status: "", //
    item_tipo: "",   //
    item_id: "",     //
    imagem_caminho: "", 
    pub_tipo: "",   //
    pub_titulo: "", //
    pub_valor: "",  //
    pub_pagamento: "", 
    pub_descricao: "", //
    pub_id: "",
    genero_id: [], //
    });

    const confirmar = async () => {
        const link = await upload(form.imagem_caminho);
        const formFinal = {...form, imagem_caminho: link};
        const response = await createPubs(form);
        console.log("RESPOSTA: ", form)
    }

    const goFoward = () => {
        if (step === totalStep) {
            return navigate.navigate('Publicação')
        }
        return setStep(step + 1);
    }

    const goBack = () => {
        if (step === 0) {
            reset();    
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
        ...
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
            case 3: // -- Set pub tipo (Venda, Troca, Doação)
                return (<ScreenThree goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm}></ScreenThree>)
            case 4: // -- Set pub tipo (Venda, Troca, Doação) 
                return (<ScreenFour goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm}></ScreenFour>)
            case 5:
                return (<ScreenFive goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm}></ScreenFive>)
            case 6:
                return (<ScreenSix goFoward={goFoward}
                    goBack={goBack}
                    form={form}
                    setForm={setForm}></ScreenSix>)
            case 7: 
                return (<ScreenFinal goFoward={goFoward}
                    goBack={goBack}
                    form={form}
                    setForm={setForm}
                    reset={reset}
                    confirm={confirmar}></ScreenFinal>

                )
            default: 
                    return null;
    }}
    
    return (
        <View style={{flex: 1}}>
            {renderStep()}
        </View>
    )
}