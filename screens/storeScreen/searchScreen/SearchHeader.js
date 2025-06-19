import { View, StyleSheet, Text } from 'react-native';
import { root, TextCustom } from '../../../ui/components';
import SearchBar from '../../genericScreen/searchbar';

export default function SearchHeader({ Search, style, searchQuery, editable = true, SearchText}) {
    
    return (
        <View style={[styles.Container, style]}>
            <TextCustom style={{ fontSize: 24, marginBottom: 10, color: root.C_BLACK, fontFamily: root.C_FONT_LIST.Light, alignSelf: 'center'}}>Encontre seu Livro</TextCustom>
            <SearchBar
                placeholder="Buscar"
                Search={Search}
                SearchText={SearchText}
                editable={editable}
                value={searchQuery}
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    Container: {
        
    }
})