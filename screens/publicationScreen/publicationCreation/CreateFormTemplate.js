import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text, TextInput, Modal} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { root } from "../../../ui/components";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo } from '@expo/vector-icons';

export function InputBlock({ Description, onPress, selected }) {
    return (
        <Pressable
            onPressOut={onPress}
            style={({ pressed }) => [
                styles.inputBlockContainer,
                styles.border,
                selected && styles.selectedBlock,
                pressed && { opacity: 0.7 }
            ]}
        >
            <Text style={[styles.textStyleWhite, styles.textSize]}>{Description}</Text>
        </Pressable>
    );
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

export function InputText({Description, value, onChange, maxLength=25, multiline = false, keyboardType = "default"}) {
    return (
        <View style={[styles.border, styles.inputTextContainer]}>
            <TextInput
                placeholder={Description}
                placeholderTextColor={'grey'}
                value={value}
                onChangeText={onChange}
                maxLength={maxLength}
                style={styles.textStyleGrey}
                multiline={multiline}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export function TitleText({Description}) {
    return (
            <Text style={styles.TitleText}>{Description}</Text>
    )
}

export function SetDate({ value, onChange, showDatePicker, setShowDatePicker}) {
    const handleChange = (event, selectedDate) => {
        setShowDatePicker(false)
    if (event.type === 'set' && selectedDate) {
      onChange(selectedDate);
    }
};

    return (
        <Pressable onPress={() => setShowDatePicker(true)} style={[styles.inputTextContainer, styles.border]}>
            <Text style={[styles.textStyleGrey, {color: 'grey'}]}>{value ? value.toLocaleDateString('pt-BR') : 'Data de Publicação'}</Text>
            {showDatePicker && (
        <DateTimePicker
          mode="date"
          value={value || new Date()}
          display="spinner"
          onChange={handleChange}
          maximumDate={new Date()}
          locale="pt-BR"
        />
      )}
        </Pressable>
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

export function Cancelar({onPress}) {
    return (
        <Pressable onPressOut={onPress} style={({ pressed }) => ({opacity: pressed ? 0.5 : 1,})}>
            <View style={[styles.border, styles.stepButton]}>
                <Text style={[styles.textStyle, styles.textStyleWhite]}>Cancelar</Text>
            </View>
    </Pressable>
    )
}

export function Confirmar({onPress}) {
    return (
        <Pressable onPressOut={onPress} style={({ pressed }) => ({opacity: pressed ? 0.5 : 1,})}>
            <View style={[styles.border, styles.stepButton]}>
                <Text style={[styles.textStyle, styles.textStyleWhite]}>Confirmar</Text>
            </View>
    </Pressable>
    )
}

export function Describe({Title, Describe}) {
    return (
        <View style={{flexDirection: 'column', alignContent: 'center', alignItems: 'flex-start'}}>
            <Text style={[styles.textStyle, {fontSize: 12, marginRight: 10, fontFamily: root.C_FONT_LIST.Bold}]}>{Title}</Text>
            <Text style={[styles.textStyle, styles.textShowcase, {fontSize: 12, color: '#A9A9A9'}]}>{Describe}</Text>
        </View>
    )
}

export function ImageSelector({onPress, cancelFunction, selected=false, form}) {
    const [visible, setVisible] = useState(false)
    
    return (
        <View>
        {
            !selected ?
            <Pressable onPress={onPress} style={styles.containerImagePicker}>
                <View style={[styles.centralize,{width: '100%', height: '100%'}]}>
                    <Text style={[styles.textStyle, {marginLeft: 10}]}>Enviar Imagem</Text>
                    <Entypo name="upload-to-cloud" size={50} color={root.C_BLACK}/>
                </View>

            </Pressable> :

            <View style={[styles.containerImagePicker, {borderColor: 'green'}]}>
                <CancelSelection cancelFunction={cancelFunction}/>
                <Pressable style={[styles.centralize, {width: '100%', height: '100%'}]} onPress={() => setVisible(true)}>
                <View style={{backgroundColor: '#c8ffc8', borderRadius: '100%', padding: 20}}>
                    <View style={{backgroundColor: 'green', borderRadius: '100%', padding: 10}}>
                    <Entypo name="check" size={30} color={root.C_WHITE}/>
                    </View>
                </View>
                </Pressable>
                <Modal
                    visible={visible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setVisible(false)}
                >
                    <View
                    style={styles.modalContainer}
                    >
                        <Image style={styles.imageModalContainer} source={{ uri: form.imagem_caminho}}>
                        </Image>
                        <Pressable onPress={() => setVisible(false)} style={{ marginTop: 20}}>
                            <Entypo name="squared-cross" size={20} color={root.C_WHITE}/>
                        </Pressable>
                    </View>
                </Modal>
            </View>
        }
        </View>
    )
}

export function CancelSelection({cancelFunction}) {
    const onPress = cancelFunction;
    return (
        <View style={{position: 'absolute', padding: 10}}>
            <Pressable onPress={onPress} style={({pressed}) => {
                ({opacity: pressed ? 0.5 : 1,})
            }}>
                    <Entypo name="squared-cross" size={40} color='red'/>
            </Pressable>
        </View>
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

    textSize: {
        fontSize: 20
    },

    border: {
        borderRadius: 10,
    },

    borderWidth: {
        borderWidth: 1,
        borderColor: root.C_BLACK,
    },  

    inputBlockContainer: {
        width: 200,
        height: 100,
        backgroundColor: root.C_MAIN_COLOR,
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
        minHeight: 50,
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
        fontSize: 28,
        color: root.C_BLACK,
        marginBottom: 10,
    },

    selectedBlock: {
        backgroundColor: '#f28941',
        borderWidth: 2,
        borderColor: root.C_SUB_COLOR,
    },

    textShowcase: {
        borderWidth: 1,
        borderColor: '#E8E9E8',
        backgroundColor: root.C_WHITE,
        width: '100%',
        padding: 5,
        borderRadius: 10,
    },

    containerImagePicker: {
        width: '100%',
        aspectRatio: 1,
        maxHeight: 300,
        borderWidth: 4,
        borderColor: root.C_PURPLE,
        borderRadius: '10%',
        borderStyle: 'dotted',
        backgroundColor: root.C_GREY
    },

    centralize: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row-reverse'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageModalContainer: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
        borderRadius: 10
    }
})
