import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import HeaderDefault from "../genericScreen/Header";
import { Line, root } from '../../ui/components';
import { Entypo } from '@expo/vector-icons';
import PublicationList from './PublicationList';
import { useNavigation } from '@react-navigation/native';

export default function PublicationMain() {
    const navigate = useNavigation();

    return (
        <View style={{flex: 1, backgroundColor: root.C_WHITE}}>
            <HeaderDefault/>
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.title}>Suas Publicações</Text>
                    </View>
                    <View style={styles.containerButton}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <PubButton onPress={() => navigate.navigate('Criar Publicação')} name="plus"/>
                            <Text style={styles.content}>Criar publicação</Text>
                            </View>
                            
                            <View style={{flexDirection: 'row'}}>
                                <PubButton onPress={() => {}} name="cw" />
                                <PubButton onPress={() => {}} name="info"/>
                            </View>
                    </View>
                <Line></Line>
                </View>
                    <View style={{ marginTop: 20, height: '100%'}}>
                        <PublicationList/>
                    </View>
            </View>
        </View>
    );
}

export const PubButton = ({ onPress, name, color=root.C_WHITE, style = styles.button}) => {
    return (
        <Pressable onPress={() => {onPress()}}>
            <View style={[style, {marginHorizontal: 5}]}>
                <Entypo name={name} size={20} color={color}/>
            </View>
        </Pressable>
    )
}

 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: root.C_WHITE,
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontFamily: root.C_FONT_LIST.SemiBold,
        color: root.C_BLACK,
        marginBottom: 20,
    },
    content: {
        marginLeft: 10,
        fontFamily: root.C_FONT_LIST.Regular,
        fontSize: 16,
    },
    button: {
        backgroundColor: root.C_SUB_COLOR,
        padding: 5,
        borderRadius: 60, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerButton: {
        marginVertical: 10,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})