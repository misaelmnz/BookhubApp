import { useEffect, useState } from "react";
import { 
    StyleSheet, 
    View, 
    Pressable, 
    Text} from "react-native";
import { mostrarUser } from "./profileController/ProfileController";
import { root } from "../../ui/components";
import InfoBar from "./profileController/ProfileInfo";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Profile () {

    const navigation = useNavigation();

    const GoBack = () => {
        return (
            <Pressable onPress={()=>{navigation.goBack()}}>
                <Entypo 
                name="chevron-left"
                size={35}
                color={root.C_WHITE}
                />
            </Pressable>
        )
    }

    const [info, setInfo] = useState({
        user_nome: "Nome do Usuário",
        user_sobrenome: "Sobrenome do Usuário",
        user_data_nascimGnto: "00/00/0000",
        user_email: "user@gmail.com",
        user_celular: "n/a",
    })

    useEffect(() => {
        async function loadUser() {
            try {
                const response = await mostrarUser();
                setInfo(response.data[0])
            }
            catch (err) {
                console.error("Erro ao buscar usuário", err)
            }
        }
        loadUser()
    },[])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <GoBack/>
            </View>
            <View style={styles.body}>
                <View>
                <Text
                style={{
                    alignSelf: 'flex-start'
                }}
                >Informações de conta</Text>
                    <View style={styles.containerInfoBar}>
                        <InfoBar label="Nome" value={info.user_nome}/>
                        <InfoBar label="Sobrenome" value={info.user_sobrenome}/>
                        <InfoBar label="Data de Nascimento" 
                        value={info.user_data_nascimento 
                            ? new Date(info.user_data_nascimento).toLocaleDateString('pt-BR') : ''}
                            />
                        <InfoBar label="E-mail" value={info.user_email}/>
                        <InfoBar label="Telefone" value={info.user_celular}/>
                    </View> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    containerInfoBar: {
        width: '80%',
        borderRadius: 10,
        backgroundColor: root.C_WHITE,
        padding: 15,
        marginTop: 10,
    },

    header: {
        width: '100%',
        backgroundColor: root.C_MAIN_COLOR,
        flexDirection: 'row',
        minHeight: 50,
        height: '5%',
        alignContent: 'center',
        alignItems: 'center',
        paddingInline: 10
    },

    body: {
        backgroundColor: root.C_GREY,
        alignItems: 'center',
        padding: 10
    },
})