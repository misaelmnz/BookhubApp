import { 
    View, 
    TextInput, 
    StyleSheet, } from 'react-native';
import { root } from '../../ui/components';
import { Entypo } from '@expo/vector-icons';

export const Lupa = () => {
    return (
        <Entypo name='magnifying-glass' size={30} color="black"/>
    )
}

export default function SearchBar({ placeholder, Search, SearchText, style, editable, searchQuery}) {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={root.C_GRAY}
                onChangeText={SearchText}
                onSubmitEditing={Search}
                editable={editable}
                value={searchQuery}
                maxLength={50}
            /> 
            <Lupa/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        maxHeight: 60,
        backgroundColor: root.C_WHITE,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        borderColor: root.C_SUB_COLOR,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        height: '100%',
        color: root.C_BLACK,
        opacity: 0.5,
        fontSize: 18,
        fontFamily: 'Inter-ThinItalic',
        textAlign: 'flex-start',
    },
});
