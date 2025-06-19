import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { root } from "../../../ui/components";
import HeaderNoMenu from '../../genericScreen/HeaderNoMenu'
import { Cancelar, Confirmar, Describe, GoBack, GoFoward, ImageSelector, InputBlock, InputButton, InputText, SetDate, TitleText } from "./CreateFormTemplate";
import OptionsList from "../../storeScreen/searchScreen/OptionsWrapper";
import * as ImagePicker from 'expo-image-picker';
import { upload } from '../publicationController/PublicationController'
/*
Utilizar handleForm junto da const isValid nos containers de etapa.
*/
function handleForm(form, formField = []) {
    const field = formField.length > 0 ? formField : Object.keys(form);

    for (let field of formField) {
        if (
            form[field] === undefined ||
            form[field] === null ||
            (typeof form[field] === "string" && form[field].trim() === "") ||
            (Array.isArray(form[field]) && form[field.length === 0])
        ) {
            return false;
        }
    }
    return true;
}

export function ScreenZero({ goFoward, goBack, form, setForm }) {

    const formField = ["item_tipo"]
    const handleGoFoward = () => {
        if (!handleForm(form, formField)) {
            return Alert.alert("Erro", "Preencher todos os campos")
        }
        goFoward()
    }

    return (
        <View style={styles.formContainer}>
            <HeaderNoMenu />
            <View style={[styles.container]}>
                <View style={styles.spaceSort}>
                    <TitleText Description={'Coleção ou Livro?'} />
                    <View style={[styles.spaceSort, { width: '100%', height: '100%', alignItems: 'center' }]}>
                        <InputBlock Description={'LIVRO'}
                            onPress={() => setForm({ ...form, item_tipo: 0 })}
                            selected={form.item_tipo === 0} />
                        <InputBlock Description={'COLEÇÃO'}
                            onPress={() => setForm({ ...form, item_tipo: 3 })}
                            selected={form.item_tipo === 3} />
                    </View>
                </View>
            </View>
            <View style={styles.stepContainer}>
                <GoBack onPress={goBack} />
                <GoFoward onPress={handleGoFoward} />
            </View>
        </View>
    )
}

export function ScreenOne({ onPress, goFoward, goBack, form, setForm }) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const formField = [
        "item_titulo",
        "item_autor",
        "item_isbnCode",
        "item_editora",
        "item_status",
        "item_datadepublicacao"]


    const handleGoFoward = () => {
        if (!handleForm(form, formField)) {
            return Alert.alert("Erro", "Preencher todos os campos")
        }
        goFoward()
    }

    return (
        <View style={styles.formContainer}>
            <HeaderNoMenu />
            <View style={styles.container}>
                <View>
                    <TitleText Description={'Descreva seu item'} />
                </View>
                <View style={styles.spaceSort}>
                    {
                        form.item_tipo === 3 ?
                            <InputText
                                Description={'Nome da Coleção'}
                                value={form.item_titulo}
                                onChange={text => setForm({ ...form, item_titulo: text })}
                            /> :
                            <InputText
                                Description={'Nome do Livro'}
                                value={form.item_titulo}
                                onChange={text => setForm({ ...form, item_titulo: text })}
                            />
                    }
                    <InputText
                        Description={'Nome do Autor'}
                        value={form.item_autor}
                        onChange={text => setForm({ ...form, item_autor: text })}

                    />
                    {
                        form.item_tipo === 0 ?
                            <InputText
                                Description={'ISBN'}
                                value={form.item_isbnCode}
                                maxLength={11}
                                onChange={text => setForm({ ...form, item_isbnCode: text })}
                            /> : null
                    }
                    <InputText
                        Description={'Nome da Editora'}
                        value={form.item_editora}
                        onChange={text => setForm({ ...form, item_editora: text })}
                    />
                    <InputText
                        Description={'Estado de Conservação'}
                        value={form.item_status}
                        onChange={text => setForm({ ...form, item_status: text })}
                    />
                    <SetDate
                        value={form.item_datadepublicacao}
                        onChange={date => setForm({ ...form, item_datadepublicacao: date })}
                        showDatePicker={showDatePicker}
                        setShowDatePicker={setShowDatePicker}
                    />
                </View>
            </View>
            <View style={styles.stepContainer}>
                <GoBack onPress={goBack} />
                <GoFoward onPress={goFoward} />
            </View>
        </View>
    )
}

// ETAPA DE VISUALIZAÇÃO
export function ScreenTwo({ onPress, goFoward, goBack, form, setForm, reset }) {


    return (
        <View style={styles.formContainer}>
            <HeaderNoMenu />
            <View style={styles.container}>
                <View style={[{ height: '20%', width: '100%', position: 'absolute', borderRadius: 30, justifyContent: 'center' }]}>
                    <TitleText Description={"Quase lá!"} />
                    <TitleText Description={"Confirme as informações."} />
                </View>
                <View>
                    <Image source={require("../../../assets/illustration2.png")} style={styles.imageContainer} />
                </View>
                <View style={[{ backgroundColor: root.C_GREY, height: '50%', width: '100%', position: 'absolute', borderRadius: 30, top: '48%', borderWidth: 4, borderColor: root.C_MAIN_COLOR, padding: 20 }]}>
                    <View style={{ justifyContent: 'space-between', height: '100%' }}>
                        <Describe Describe={form.item_titulo} Title={"Título do Item: "}></Describe>
                        <Describe Describe={form.item_autor} Title={"Nome do Autor:"}></Describe>
                        <Describe Describe={form.item_editora} Title={"Nome da Editora:"}></Describe>
                        <Describe Describe={form.item_status} Title={"Estado de Conservação:"}></Describe>
                        <Describe Describe=
                            {form.item_datadepublicacao ? form.item_datadepublicacao.toLocaleDateString('pt-BR') :
                                ""} Title={"Data de Publicação"}></Describe>
                    </View>
                </View>
            </View>
            <View style={styles.stepContainer}>
                <Cancelar onPress={reset} />
                <GoBack onPress={goBack} />
                <GoFoward onPress={goFoward} />
            </View>
        </View>
    )
}

export function ScreenThree({ onPress, goFoward, goBack, form, setForm }) {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const toggleGenre = id => {
        const current = Array.isArray(form.genero_id) ? form.genero_id : [];
        setForm({
            ...form,
            genero_id: current.includes(id)
                ? current.filter(g => g !== id)
                : [...current, id]
        });
    };

    return (
        <View style={styles.formContainer}>
            <HeaderNoMenu />
            <View style={styles.container}>
                <View>
                    <TitleText Description={'Escolha os gêneros'} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <OptionsList selectedGenres={form.genero_id || []} toggleGenre={toggleGenre} />
                </View>
            </View>
            <View style={styles.stepContainer}>
                <GoBack onPress={goBack} />
                <GoFoward onPress={goFoward} />
            </View>
        </View>
    )
}

export function ScreenFour({ goFoward, goBack, form, setForm }) {
    return (

        <View style={styles.formContainer}>
            <HeaderNoMenu />
            <View style={styles.container}>
                <View>
                    <TitleText Description={'Política de Negócio'} />
                </View>

                <View style={styles.spaceSort}>
                    <View style={[styles.spaceSort, { width: '100%', height: '100%', alignItems: 'center' }]}>
                        <InputBlock Description={'DOAÇÃO'}
                            onPress={() => setForm({ ...form, pub_tipo: 0 })}
                            selected={form.pub_tipo === 0} />
                        <InputBlock Description={'VENDA'}
                            onPress={() => setForm({ ...form, pub_tipo: 1 })}
                            selected={form.pub_tipo === 1} />
                        <InputBlock Description={'TROCA'}
                            onPress={() => setForm({ ...form, pub_tipo: 2 })}
                            selected={form.pub_tipo === 2} />
                    </View>
                </View>
            </View>

            <View style={styles.stepContainer}>
                <GoBack onPress={goBack} />
                <GoFoward onPress={goFoward} />
            </View>
        </View>
    )
}

export function ScreenFive({ goFoward, goBack, form, setForm }) {
    return (
        <View style={styles.formContainer}>
            <HeaderNoMenu />
            <View style={styles.container}>
                <View>
                    <TitleText Description={'Detalhe sua Publicação'} />
                    <View style={styles.spaceSort}>

                        <InputText
                            Description={'Dê um título a sua Publicação'}
                            value={form.pub_titulo}
                            onChange={text => setForm({ ...form, pub_titulo: text })}
                        />

                        <InputText
                            Description={'Descreva sua Publicação aqui'}
                            value={form.pub_descricao}
                            onChange={text => setForm({ ...form, pub_descricao: text })}
                            multiline={true}
                            maxLength={250}
                        />
                        {
                            form.pub_tipo === 1 ?
                                <InputText
                                    Description={'Digite um Valor'}
                                    value={form.pub_valor}
                                    onChange={text => setForm({ ...form, pub_valor: text })}
                                    keyboardType="numeric"
                                /> : null
                        }
                    </View>
                </View>
            </View>
            <View style={styles.stepContainer}>
                <GoBack onPress={goBack} />
                <GoFoward onPress={goFoward} />
            </View>
        </View>
    )
}

export function ScreenSix({ goFoward, goBack, form, setForm }) {
    const [selected, setSelected] = useState(false)

    const cancelImage = () => {
        setSelected(false)
        setForm({ ...form, imagem_caminho: null })
    }

        const pickImage = async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                allowsMultipleSelection: true,
                quality: 0,
                allowsEditing: true,
            });
            
            if(!result.canceled && result.assets && result.assets.length > 0) {
                const uris = result.assets.map(assets => assets.uri);
                setForm({ ...form, imagem_caminho: [... form.imagem_caminho, ...uris]})
                
            } 
    }


    return (
        <View style={styles.formContainer}>
        <View style={styles.container}>
            <TitleText Description={"Escolha as imagens da sua publicação"}></TitleText>
            <Text>Priorize fotografar a capa do livro ou apenas a lambada da coleção.</Text>
            <View style={[{alignSelf: 'center', marginTop: '10%'}]}>
            <ImageSelector onPress={pickImage} cancelFunction={cancelImage} selected={selected} form={form}>
            </ImageSelector>
            </View>
        </View>
        <View style={styles.stepContainer}>
            <GoBack onPress={goBack}/>   
            <GoFoward onPress={goFoward}/>
        </View>
    </View>
    )
}

export function ScreenFinal ({form, setForm, goFoward, goBack, reset, confirm}) {
    return (
        <View style={styles.formContainer}>
            <View style={[styles.container, {justifyContent: 'space-between'}]}>
                <View>
                    <TitleText Description={"Tudo pronto"}/>
                    <Text>Clique em Confirmar para publicar seu item ao Público</Text>
                </View>
                <View style={{height: '30%', justifyContent: 'space-around' }}>
                    <Confirmar onPress={confirm}/>
                    <Cancelar onPress={reset}/>
                </View>
            </View> 
            <View style={styles.stepContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: root.C_BACKGROUND_COLOR,
        flex: 1,
    },
    container: {
        backgroundColor: root.C_BACKGROUND_COLOR,
        flex: 1
    },
    stepContainer: {
        marginBottom: 60,
        flexDirection: 'row',
        backgroundColor: root.C_BACKGROUND_COLOR,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: root.C_BACKGROUND_COLOR,
    },
    spaceSort: {
        gap: 20,
        padding: 20,
        marginTop: 100,
    },
    imageContainer: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: '80%',
        height: '100%'
    },
})
