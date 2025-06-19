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
    imagem_caminho: [], 
    pub_tipo: "",   //
    pub_titulo: "", //
    pub_valor: "",  //
    pub_pagamento: "", 
    pub_descricao: "", //
    pub_id: "",
    genero_id: [], //
    });

    const confirmar = async () => {

        const links = [];
        for (let uri of form.imagem_caminho) {
            const link = await upload(uri);
            links.push(link);
        }

        const formFinal = {...form, imagem_caminho: links};
        const response = await createPubs(formFinal);
        console.log("RESPOSTA: ", form)
        goFoward()
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

    function renderStep() {
        switch (step) {
            case 0: 
                return (<ScreenZero goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm} ></ScreenZero>)
            case 1: 
                return (<ScreenOne goFoward={goFoward} 
                    goBack={goBack} 
                    form={form} 
                    setForm={setForm}></ScreenOne>)
            case 2: 
                return (<ScreenTwo goFoward={goFoward} 
                    goBack={goBack}
                    form={form} 
                    setForm={setForm}
                    reset={reset}></ScreenTwo>)
            case 3: 
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